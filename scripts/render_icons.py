"""
Render the Mareluna section icons as glossy ceramic objects.

Same idea as the Cozy Domo icons (one Blender scene, one camera, one light
rig, a render per subject) but in the Mareluna palette.

Run from the repository root:

    blender --background --python scripts/render_icons.py

PNG files land in icons/ (320 px, transparent, contact shadow included).
Convert them afterwards with cwebp if you also want WebP.
"""

import math
import os
import traceback

import bpy
from mathutils import Vector

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUT = os.path.join(ROOT, "icons")
SIZE = 320

# Shader colours are darker than the brand blue: Eevee lighting lifts them
# toward #00508f on the body of each object.
BLUE = (0.0, 0.145, 0.36, 1)
DEEP = (0.0, 0.09, 0.24, 1)
TINT = (222 / 255, 232 / 255, 241 / 255, 1)
WHITE = (0.93, 0.95, 0.97, 1)
GOLD = (0.74, 0.60, 0.36, 1)


def material(name, color, rough=0.32, coat=0.22, alpha=1.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Coat Weight"].default_value = coat
    bsdf.inputs["Coat Roughness"].default_value = 0.08
    bsdf.inputs["Specular IOR Level"].default_value = 0.45
    bsdf.inputs["Alpha"].default_value = alpha
    if alpha < 1:
        mat.blend_method = "BLEND"
        mat.shadow_method = "NONE"
    return mat


MATS = {}


def M(key):
    return MATS[key]


def fresh_materials():
    MATS.clear()
    MATS["blue"] = material("blue", BLUE)
    MATS["deep"] = material("deep", DEEP, rough=0.28, coat=0.35)
    MATS["tint"] = material("tint", TINT, rough=0.16, coat=0.7)
    MATS["white"] = material("white", WHITE, rough=0.12, coat=0.8)
    MATS["gold"] = material("gold", GOLD, rough=0.24, coat=0.4)
    MATS["shadow"] = material("shadow", DEEP, rough=1, coat=0, alpha=0.22)


def activate(obj):
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj


def shade(obj):
    mesh = obj.data
    if not hasattr(mesh, "polygons"):
        return obj
    for poly in mesh.polygons:
        poly.use_smooth = True
    return obj


def finish(obj, mat, bevel_width=0.025, segments=2):
    if mat:
        if obj.data.materials:
            obj.data.materials[0] = mat
        else:
            obj.data.materials.append(mat)
    if bevel_width and hasattr(obj.data, "polygons"):
        mod = obj.modifiers.new("Bevel", "BEVEL")
        mod.width = bevel_width
        mod.segments = segments
        mod.limit_method = "ANGLE"
        mod.angle_limit = math.radians(42)
        activate(obj)
        bpy.ops.object.modifier_apply(modifier=mod.name)
    shade(obj)
    return obj


def add(kind, mat="blue", bevel_width=0.028, **kw):
    ops = {
        "cube": bpy.ops.mesh.primitive_cube_add,
        "sphere": bpy.ops.mesh.primitive_uv_sphere_add,
        "cyl": bpy.ops.mesh.primitive_cylinder_add,
        "cone": bpy.ops.mesh.primitive_cone_add,
        "torus": bpy.ops.mesh.primitive_torus_add,
    }
    ops[kind](**kw)
    return finish(bpy.context.active_object, M(mat) if mat else None, bevel_width)


def reset_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for block in (
        bpy.data.meshes,
        bpy.data.lights,
        bpy.data.cameras,
        bpy.data.materials,
        bpy.data.curves,
    ):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def look_at(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def rig():
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = SIZE
    scene.render.resolution_y = SIZE
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.compression = 15
    scene.view_settings.view_transform = "Standard"
    scene.eevee.taa_render_samples = 48
    try:
        scene.eevee.use_ssr = True
        scene.eevee.use_ssr_refraction = True
    except Exception:
        pass

    world = scene.world or bpy.data.worlds.new("World")
    scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    if bg:
        bg.inputs["Color"].default_value = (1, 1, 1, 1)
        bg.inputs["Strength"].default_value = 0.12

    bpy.ops.object.camera_add(location=(2.55, -2.65, 2.05))
    cam = bpy.context.active_object
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = 3.05
    look_at(cam, (0, 0, 0.42))
    scene.camera = cam

    def light(name, loc, energy, size, color):
        data = bpy.data.lights.new(name, "AREA")
        data.energy = energy
        data.size = size
        data.color = color
        obj = bpy.data.objects.new(name, data)
        bpy.context.collection.objects.link(obj)
        obj.location = loc
        look_at(obj, (0, 0, 0.4))

    light("key", (-1.6, -2.8, 4.4), 130, 3.6, (1, 0.98, 0.95))
    light("fill", (2.8, -1.2, 2.2), 36, 4.4, (0.72, 0.84, 1))
    light("rim", (0.4, 2.6, 2.8), 42, 2.8, (0.82, 0.9, 1))


def parent_all_to_empty():
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH" and o.name != "shadow"]
    # shadow was just created and may not be named shadow if blender renamed it
    return meshes


# --- subjects --------------------------------------------------------------

def concierge():
    add("cone", radius1=0.4, radius2=0.26, depth=0.62, location=(0, 0, 0.42), vertices=32)
    add("sphere", radius=0.24, location=(0, -0.04, 0.9), segments=24, ring_count=16)
    add("cyl", mat="deep", radius=0.46, depth=0.07, location=(0, 0, 1.08), vertices=36)
    add("cyl", radius=0.22, depth=0.26, location=(0, 0, 1.24), vertices=28)
    add("sphere", mat="gold", bevel_width=0.008, radius=0.055, location=(0, -0.28, 0.48))


def colazione():
    add("cyl", radius=0.5, depth=0.06, location=(0, 0, 0.08), vertices=40)
    add("cyl", radius=0.34, depth=0.42, location=(0, 0, 0.32), vertices=40)
    add("torus", mat="blue", bevel_width=0, major_radius=0.16, minor_radius=0.055, location=(0.42, 0, 0.36), major_segments=28, minor_segments=12)
    handle = bpy.context.active_object
    handle.rotation_euler = (0, math.radians(90), 0)
    add("sphere", mat="tint", bevel_width=0.008, radius=0.07, location=(-0.06, -0.04, 0.78))
    add("sphere", mat="tint", bevel_width=0.008, radius=0.05, location=(0.08, 0.02, 0.96))


def bed():
    add("cube", location=(0, 0.05, 0.28), scale=(0.72, 0.42, 0.12))
    add("cube", mat="deep", location=(-0.62, 0.05, 0.42), scale=(0.08, 0.44, 0.28))
    add("cube", mat="tint", location=(-0.28, 0.05, 0.46), scale=(0.22, 0.28, 0.1))
    add("cube", mat="white", location=(0.18, 0.02, 0.44), scale=(0.42, 0.36, 0.06))
    for x in (-0.5, 0.5):
        for y in (-0.28, 0.36):
            add("cyl", mat="deep", bevel_width=0.01, radius=0.06, depth=0.16, location=(x, y, 0.1), vertices=16)


def palazzo():
    add("cube", location=(0, 0, 0.55), scale=(0.62, 0.42, 0.5))
    add("cone", mat="deep", radius1=0.78, radius2=0.02, depth=0.38, location=(0, 0, 1.18), vertices=4)
    roof = bpy.context.active_object
    roof.rotation_euler = (0, 0, math.radians(45))
    add("cube", mat="gold", bevel_width=0.01, location=(0, -0.42, 0.32), scale=(0.14, 0.04, 0.22))
    for x in (-0.28, 0.28):
        add("cube", mat="tint", bevel_width=0.012, location=(x, -0.42, 0.72), scale=(0.12, 0.03, 0.14))


def checkin():
    add("torus", bevel_width=0, major_radius=0.28, minor_radius=0.08, location=(-0.35, 0, 0.55), major_segments=32, minor_segments=12)
    add("cyl", radius=0.07, depth=0.85, location=(0.22, 0, 0.55), vertices=16)
    shaft = bpy.context.active_object
    shaft.rotation_euler = (0, math.radians(90), 0)
    add("cube", bevel_width=0.01, location=(0.62, 0.1, 0.55), scale=(0.08, 0.1, 0.05))
    add("cube", bevel_width=0.01, location=(0.5, 0.12, 0.55), scale=(0.06, 0.08, 0.05))
    add("torus", mat="gold", bevel_width=0, major_radius=0.12, minor_radius=0.035, location=(-0.35, 0, 0.55), major_segments=24, minor_segments=10)


def wifi():
    add("cube", location=(0, 0.15, 0.16), scale=(0.62, 0.38, 0.06))
    add("cube", mat="deep", location=(0, -0.02, 0.48), scale=(0.5, 0.05, 0.32))
    screen = bpy.context.active_object
    screen.rotation_euler = (math.radians(-18), 0, 0)
    add("cube", mat="tint", bevel_width=0.012, location=(0, -0.1, 0.5), scale=(0.4, 0.02, 0.22))
    face = bpy.context.active_object
    face.rotation_euler = (math.radians(-18), 0, 0)
    add("sphere", mat="white", bevel_width=0.008, radius=0.07, location=(0, -0.15, 0.95))


def services():
    add("cyl", radius=0.55, depth=0.1, location=(0, 0, 0.12), vertices=40)
    add("uv" if False else "sphere", radius=0.48, location=(0, 0, 0.42))
    dome = [o for o in bpy.context.scene.objects if o.type == "MESH"][-1]
    dome.scale = (1, 1, 0.72)
    add("cyl", mat="deep", radius=0.62, depth=0.08, location=(0, 0, 0.2), vertices=40)
    add("sphere", mat="gold", bevel_width=0.008, radius=0.08, location=(0, 0, 0.82))


def pin():
    add("cone", radius1=0.34, radius2=0.0, depth=1.15, location=(0, 0, 0.5), vertices=36)
    add("sphere", radius=0.38, location=(0, -0.02, 1.12), segments=28, ring_count=16)
    add("sphere", mat="tint", bevel_width=0.008, radius=0.16, location=(0, -0.26, 1.16))


def parking():
    add("cube", location=(0, 0, 0.55), scale=(0.58, 0.16, 0.58))
    bpy.ops.object.text_add(location=(0, -0.2, 0.55))
    text = bpy.context.active_object
    text.data.body = "P"
    text.data.align_x = "CENTER"
    text.data.align_y = "CENTER"
    text.data.size = 0.85
    text.data.extrude = 0.06
    text.data.bevel_depth = 0.012
    text.data.bevel_resolution = 2
    activate(text)
    bpy.ops.object.convert(target="MESH")
    text = bpy.context.active_object
    finish(text, M("tint"), bevel_width=0)
    text.rotation_euler = (math.radians(90), 0, 0)
    text.location = (0, -0.24, 0.55)
    text.scale = (0.62, 0.62, 0.62)


def transport():
    add("cube", location=(0, 0, 0.52), scale=(0.78, 0.26, 0.26))
    add("cube", mat="tint", bevel_width=0.01, location=(-0.28, -0.26, 0.6), scale=(0.18, 0.035, 0.11))
    add("cube", mat="tint", bevel_width=0.01, location=(0.24, -0.26, 0.6), scale=(0.18, 0.035, 0.11))
    for x in (-0.46, 0.46):
        add("cyl", mat="deep", bevel_width=0.012, radius=0.16, depth=0.14, location=(x, -0.08, 0.18), vertices=24)
        wheel = bpy.context.active_object
        wheel.rotation_euler = (0, math.radians(90), 0)


def restaurant():
    add("cyl", radius=0.055, depth=0.85, location=(-0.28, 0, 0.55), vertices=14)
    handle = bpy.context.active_object
    handle.rotation_euler = (0, math.radians(12), math.radians(-18))
    for i, x in enumerate((-0.12, 0.0, 0.12)):
        add("cyl", bevel_width=0.006, radius=0.035, depth=0.32, location=(-0.42 + x, -0.06, 1.02), vertices=10)
        tine = bpy.context.active_object
        tine.rotation_euler = (math.radians(14), 0, math.radians(-18))
    add("cube", location=(0.32, 0.02, 0.48), scale=(0.07, 0.05, 0.38))
    blade = bpy.context.active_object
    blade.rotation_euler = (0, math.radians(10), math.radians(16))
    add("cube", mat="deep", bevel_width=0.012, location=(0.48, 0.04, 0.92), scale=(0.07, 0.05, 0.16))


def living():
    add("cone", radius1=0.46, radius2=0.06, depth=0.48, location=(0, 0, 0.72), vertices=32)
    glass = bpy.context.active_object
    glass.rotation_euler = (math.radians(180), 0, 0)
    glass.location = (0, 0, 0.78)
    add("cyl", radius=0.045, depth=0.38, location=(0, 0, 0.36), vertices=16)
    add("cyl", radius=0.28, depth=0.06, location=(0, 0, 0.12), vertices=32)
    add("sphere", mat="gold", bevel_width=0.008, radius=0.09, location=(0.16, -0.2, 0.95))


def activities():
    add("cyl", radius=0.58, depth=0.16, location=(0, 0, 0.2), vertices=40)
    add("cyl", mat="tint", radius=0.4, depth=0.08, location=(0, 0, 0.3), vertices=40)
    add("cube", mat="gold", bevel_width=0.008, location=(0.02, -0.06, 0.4), scale=(0.05, 0.2, 0.035))
    needle = bpy.context.active_object
    needle.rotation_euler = (0, 0, math.radians(32))
    add("sphere", mat="deep", bevel_width=0.006, radius=0.055, location=(0, -0.08, 0.42))


def shopping():
    add("cube", location=(0, 0, 0.48), scale=(0.46, 0.22, 0.4))
    add("cube", mat="deep", bevel_width=0.01, location=(0, -0.02, 0.78), scale=(0.4, 0.16, 0.05))
    add("torus", bevel_width=0, major_radius=0.16, minor_radius=0.035, location=(-0.16, 0, 0.98), major_segments=24, minor_segments=10)
    add("torus", bevel_width=0, major_radius=0.16, minor_radius=0.035, location=(0.16, 0, 0.98), major_segments=24, minor_segments=10)


def rules():
    add("cube", location=(0, 0, 0.55), scale=(0.42, 0.06, 0.55))
    add("cube", mat="tint", bevel_width=0.008, location=(0.22, -0.04, 0.95), scale=(0.16, 0.03, 0.14))
    corner = bpy.context.active_object
    corner.rotation_euler = (0, math.radians(0), math.radians(0))
    for z in (0.72, 0.52, 0.32):
        add("cube", mat="deep", bevel_width=0, location=(-0.02, -0.07, z), scale=(0.24, 0.015, 0.025))


def checkout():
    add("cube", location=(0, 0, 0.62), scale=(0.38, 0.08, 0.58))
    add("sphere", mat="gold", bevel_width=0.008, radius=0.07, location=(0.16, -0.1, 0.58))
    add("cube", mat="deep", bevel_width=0.01, location=(0.55, 0, 0.58), scale=(0.16, 0.04, 0.05))


def emergency():
    add("cyl", radius=0.58, depth=0.18, location=(0, 0, 0.24), vertices=40)
    add("cube", mat="tint", location=(0, -0.08, 0.48), scale=(0.16, 0.1, 0.42))
    add("cube", mat="tint", location=(0, -0.08, 0.48), scale=(0.42, 0.1, 0.16))


def phone():
    add("cyl", radius=0.13, depth=0.95, location=(0, 0, 0.48), vertices=24)
    body = bpy.context.active_object
    body.rotation_euler = (math.radians(90), math.radians(18), math.radians(70))
    add("sphere", radius=0.24, location=(-0.42, 0.05, 0.7))
    add("sphere", radius=0.24, location=(0.42, -0.02, 0.28))


BUILDERS = [
    ("concierge", concierge),
    ("colazione", colazione),
    ("bed", bed),
    ("palazzo", palazzo),
    ("checkin", checkin),
    ("wifi", wifi),
    ("services", services),
    ("pin", pin),
    ("parking", parking),
    ("transport", transport),
    ("restaurant", restaurant),
    ("living", living),
    ("activities", activities),
    ("shopping", shopping),
    ("rules", rules),
    ("checkout", checkout),
    ("emergency", emergency),
    ("phone", phone),
]


def clear_meshes():
    for obj in list(bpy.context.scene.objects):
        if obj.type in {"MESH", "FONT", "CURVE"}:
            bpy.data.objects.remove(obj, do_unlink=True)


def render_one(name, builder):
    clear_meshes()
    fresh_materials()
    add(
        "cyl",
        mat="shadow",
        bevel_width=0,
        radius=0.86,
        depth=0.018,
        location=(0, 0.08, 0.008),
        vertices=48,
    )
    shadow = bpy.context.active_object
    shadow.scale = (1.05, 0.7, 1)
    builder()
    scene = bpy.context.scene
    path = os.path.join(OUT, name + ".png")
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print("rendered", path)


def main():
    os.makedirs(OUT, exist_ok=True)
    reset_scene()
    rig()
    only = os.environ.get("ICON")
    for name, builder in BUILDERS:
        if only and name != only:
            continue
        try:
            render_one(name, builder)
        except Exception:
            print("FAILED", name)
            traceback.print_exc()


if __name__ == "__main__":
    main()

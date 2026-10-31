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

import bmesh
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

    # Friendlier three-quarter front view, framed tight so the object fills the icon.
    bpy.ops.object.camera_add(location=(1.15, -3.65, 1.7))
    cam = bpy.context.active_object
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = 2.2
    look_at(cam, (0, 0, 0.75))
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

def arc(major, minor, z, mat="blue"):
    obj = add(
        "torus",
        mat=mat,
        bevel_width=0,
        major_radius=major,
        minor_radius=minor,
        location=(0, 0, z),
        major_segments=40,
        minor_segments=12,
    )
    obj.rotation_euler = (math.radians(90), 0, 0)
    activate(obj)
    bpy.ops.object.transform_apply(rotation=True)
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    kill = [v for v in bm.verts if (v.co.z - z) < -0.005]
    bmesh.ops.delete(bm, geom=kill, context="VERTS")
    bm.to_mesh(obj.data)
    obj.data.update()
    bm.free()
    return obj


def concierge():
    add("cyl", radius=0.42, depth=0.62, location=(0, 0, 0.4), vertices=32)
    add("sphere", radius=0.28, location=(0, -0.04, 0.88), segments=24, ring_count=16)
    add("cyl", mat="white", radius=0.55, depth=0.08, location=(0, -0.02, 1.1), vertices=40)
    add("cyl", radius=0.26, depth=0.28, location=(0, 0, 1.28), vertices=28)
    add("sphere", radius=0.18, location=(0, 0, 1.46), segments=16, ring_count=12)
    add("sphere", mat="gold", bevel_width=0.006, radius=0.07, location=(0, -0.4, 0.48))
    add("sphere", mat="gold", bevel_width=0.006, radius=0.055, location=(0, -0.4, 0.66))


def colazione():
    add("cyl", radius=0.5, depth=0.06, location=(0, 0, 0.08), vertices=40)
    add("cyl", radius=0.34, depth=0.42, location=(0, 0, 0.32), vertices=40)
    add("torus", mat="blue", bevel_width=0, major_radius=0.16, minor_radius=0.055, location=(0.42, 0, 0.36), major_segments=28, minor_segments=12)
    handle = bpy.context.active_object
    handle.rotation_euler = (0, math.radians(90), 0)
    add("torus", mat="gold", bevel_width=0, major_radius=0.24, minor_radius=0.075, location=(0.32, 0.02, 0.2), major_segments=28, minor_segments=10)
    croissant = bpy.context.active_object
    croissant.scale = (1.2, 0.4, 0.32)
    croissant.rotation_euler = (math.radians(75), math.radians(20), math.radians(50))
    add("sphere", mat="tint", bevel_width=0.006, radius=0.07, location=(-0.1, -0.08, 0.78))
    add("sphere", mat="tint", bevel_width=0.006, radius=0.05, location=(0.0, -0.04, 0.96))


def bed():
    add("cube", location=(0, 0.05, 0.28), scale=(0.72, 0.42, 0.12))
    add("cube", mat="deep", location=(-0.62, 0.05, 0.42), scale=(0.08, 0.44, 0.28))
    add("cube", mat="tint", location=(-0.28, 0.05, 0.46), scale=(0.22, 0.28, 0.1))
    add("cube", mat="white", location=(0.18, 0.02, 0.44), scale=(0.42, 0.36, 0.06))
    for x in (-0.5, 0.5):
        for y in (-0.28, 0.36):
            add("cyl", mat="deep", bevel_width=0.01, radius=0.06, depth=0.16, location=(x, y, 0.1), vertices=16)


def palazzo():
    add("cube", location=(0, 0, 0.62), scale=(0.82, 0.26, 0.58))
    add("cube", mat="deep", bevel_width=0.008, location=(0, -0.02, 1.24), scale=(0.9, 0.3, 0.07))
    add("cube", mat="white", bevel_width=0.008, location=(0, -0.28, 0.28), scale=(0.13, 0.04, 0.22))
    for z in (0.58, 0.92):
        for x in (-0.46, 0, 0.46):
            if z < 0.7 and x == 0:
                continue
            add("cube", mat="tint", bevel_width=0.008, location=(x, -0.28, z), scale=(0.12, 0.035, 0.13))


def checkin():
    add("torus", bevel_width=0, major_radius=0.36, minor_radius=0.11, location=(-0.22, 0, 0.62), major_segments=36, minor_segments=14)
    add("cyl", radius=0.1, depth=1.15, location=(0.35, 0, 0.55), vertices=20)
    shaft = bpy.context.active_object
    shaft.rotation_euler = (0, math.radians(78), math.radians(6))
    add("cube", bevel_width=0.012, location=(0.88, 0.1, 0.38), scale=(0.12, 0.16, 0.07))
    add("cube", bevel_width=0.012, location=(0.72, 0.12, 0.44), scale=(0.1, 0.14, 0.06))
    add("cube", mat="white", bevel_width=0.012, location=(-0.62, -0.06, 0.22), scale=(0.18, 0.045, 0.26))
    add("torus", mat="gold", bevel_width=0, major_radius=0.09, minor_radius=0.03, location=(-0.4, 0, 0.38), major_segments=20, minor_segments=8)


def wifi():
    add("sphere", radius=0.13, location=(0, 0, 0.16), segments=18, ring_count=12)
    arc(0.34, 0.075, 0.42)
    arc(0.56, 0.08, 0.64)
    arc(0.8, 0.085, 0.88)


def services():
    add("cyl", radius=0.55, depth=0.1, location=(0, 0, 0.12), vertices=40)
    add("uv" if False else "sphere", radius=0.48, location=(0, 0, 0.42))
    dome = [o for o in bpy.context.scene.objects if o.type == "MESH"][-1]
    dome.scale = (1, 1, 0.72)
    add("cyl", mat="deep", radius=0.62, depth=0.08, location=(0, 0, 0.2), vertices=40)
    add("sphere", mat="gold", bevel_width=0.008, radius=0.08, location=(0, 0, 0.82))


def pin():
    add("cone", radius1=0.46, radius2=0.0, depth=1.2, location=(0, 0, 0.5), vertices=40)
    add("sphere", radius=0.5, location=(0, -0.02, 1.18), segments=28, ring_count=16)
    add("sphere", mat="white", bevel_width=0.008, radius=0.22, location=(0, -0.34, 1.24))


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
    add("cube", location=(0, 0, 0.55), scale=(0.82, 0.28, 0.36))
    add("cube", mat="tint", bevel_width=0.01, location=(0, -0.3, 0.62), scale=(0.16, 0.04, 0.16))
    add("cube", mat="tint", bevel_width=0.01, location=(-0.22, -0.22, 0.7), scale=(0.18, 0.04, 0.12))
    add("cube", mat="tint", bevel_width=0.01, location=(0.28, -0.18, 0.7), scale=(0.2, 0.04, 0.12))
    for x in (-0.48, 0.48):
        add("cyl", mat="deep", bevel_width=0.01, radius=0.16, depth=0.16, location=(x, -0.1, 0.16), vertices=24)
        wheel = bpy.context.active_object
        wheel.rotation_euler = (0, math.radians(90), 0)


def restaurant():
    add("cyl", radius=0.78, depth=0.1, location=(0, 0.05, 0.12), vertices=48)
    add("cyl", mat="white", radius=0.5, depth=0.05, location=(0, -0.02, 0.18), vertices=48)
    add("cube", location=(-0.2, -0.04, 0.62), scale=(0.075, 0.055, 0.46))
    fork = bpy.context.active_object
    fork.rotation_euler = (math.radians(14), 0, math.radians(34))
    for shift in (-0.12, 0.0, 0.12):
        add("cube", bevel_width=0.003, location=(-0.52 + shift, -0.08, 1.05), scale=(0.04, 0.045, 0.18))
        tine = bpy.context.active_object
        tine.rotation_euler = (math.radians(14), 0, math.radians(34))
    add("cube", location=(0.22, -0.06, 0.58), scale=(0.06, 0.045, 0.5))
    blade = bpy.context.active_object
    blade.rotation_euler = (math.radians(14), 0, math.radians(-38))
    add("cube", mat="white", bevel_width=0.008, location=(0.55, -0.1, 1.0), scale=(0.09, 0.05, 0.16))
    handle = bpy.context.active_object
    handle.rotation_euler = (math.radians(14), 0, math.radians(-38))


def living():
    add("cone", radius1=0.46, radius2=0.06, depth=0.48, location=(0, 0, 0.72), vertices=32)
    glass = bpy.context.active_object
    glass.rotation_euler = (math.radians(180), 0, 0)
    glass.location = (0, 0, 0.78)
    add("cyl", radius=0.045, depth=0.38, location=(0, 0, 0.36), vertices=16)
    add("cyl", radius=0.28, depth=0.06, location=(0, 0, 0.12), vertices=32)
    add("sphere", mat="gold", bevel_width=0.008, radius=0.09, location=(0.16, -0.2, 0.95))


def activities():
    parts = []
    parts.append(add("cyl", radius=0.62, depth=0.2, location=(0, 0, 0), vertices=48))
    parts.append(add("cyl", mat="white", radius=0.46, depth=0.07, location=(0, 0, 0.12), vertices=48))
    needle = add("cube", mat="deep", bevel_width=0.006, location=(0.1, 0, 0.2), scale=(0.32, 0.055, 0.04))
    needle.rotation_euler = (0, 0, math.radians(42))
    parts.append(needle)
    parts.append(add("sphere", mat="gold", bevel_width=0.004, radius=0.08, location=(0, 0, 0.2)))
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    empty = bpy.context.active_object
    for obj in parts:
        world = obj.matrix_world.copy()
        obj.parent = empty
        obj.matrix_world = world
    empty.rotation_euler = (math.radians(64), 0, math.radians(-8))
    empty.location = (0, 0, 0.55)


def shopping():
    add("cube", location=(0, 0, 0.5), scale=(0.52, 0.24, 0.5))
    add("cube", mat="white", bevel_width=0.008, location=(0, -0.2, 0.88), scale=(0.38, 0.03, 0.06))
    for x in (-0.18, 0.18):
        add("torus", mat="white", bevel_width=0, major_radius=0.18, minor_radius=0.045, location=(x, -0.04, 1.12), major_segments=28, minor_segments=10)
        handle = bpy.context.active_object
        handle.rotation_euler = (0, math.radians(90), 0)


def rules():
    add("cube", mat="deep", location=(0, 0.02, 0.58), scale=(0.52, 0.08, 0.64))
    add("cube", mat="white", bevel_width=0.01, location=(0, -0.08, 0.55), scale=(0.4, 0.04, 0.5))
    add("cube", mat="gold", bevel_width=0.008, location=(0, -0.1, 1.14), scale=(0.24, 0.05, 0.08))
    for z in (0.78, 0.55, 0.32):
        add("cube", mat="blue", bevel_width=0.003, location=(-0.14, -0.14, z), scale=(0.07, 0.02, 0.028))
        a = bpy.context.active_object
        a.rotation_euler = (0, 0, math.radians(-40))
        add("cube", mat="blue", bevel_width=0.003, location=(0.0, -0.14, z + 0.03), scale=(0.12, 0.02, 0.028))
        b = bpy.context.active_object
        b.rotation_euler = (0, 0, math.radians(36))


def checkout():
    add("cube", location=(0, 0, 0.62), scale=(0.42, 0.09, 0.64))
    add("sphere", mat="gold", bevel_width=0.008, radius=0.08, location=(0.16, -0.14, 0.58))
    add("cube", mat="white", bevel_width=0.008, location=(0.7, -0.02, 0.58), scale=(0.2, 0.05, 0.07))
    add("cone", mat="white", bevel_width=0.006, radius1=0.16, radius2=0, depth=0.28, location=(1.02, -0.02, 0.58), vertices=24)
    arrow = bpy.context.active_object
    arrow.rotation_euler = (0, math.radians(90), 0)


def emergency():
    add("cube", location=(0, 0, 0.55), scale=(0.64, 0.14, 0.64))
    add("cube", mat="white", location=(0, -0.16, 0.55), scale=(0.16, 0.05, 0.44))
    add("cube", mat="white", location=(0, -0.16, 0.55), scale=(0.44, 0.05, 0.16))


def phone():
    add("cyl", radius=0.16, depth=0.9, location=(0, 0, 0.55), vertices=24)
    grip = bpy.context.active_object
    grip.rotation_euler = (0, math.radians(90), math.radians(16))
    add("sphere", radius=0.3, location=(-0.5, 0.05, 0.72))
    add("sphere", radius=0.3, location=(0.5, -0.02, 0.38))
    add("sphere", mat="white", bevel_width=0.006, radius=0.12, location=(-0.66, -0.14, 0.8))
    add("sphere", mat="white", bevel_width=0.006, radius=0.12, location=(0.66, -0.18, 0.3))


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
        if obj.type in {"MESH", "FONT", "CURVE", "EMPTY"}:
            bpy.data.objects.remove(obj, do_unlink=True)


def fit_meshes():
    objs = [o for o in bpy.context.scene.objects if o.type == "MESH"]
    if not objs:
        return
    pts = []
    for obj in objs:
        for corner in obj.bound_box:
            pts.append(obj.matrix_world @ Vector(corner))
    minv = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    maxv = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    span = max(maxv.x - minv.x, maxv.z - minv.z, 0.001)
    factor = 1.95 / span
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(minv + maxv) / 2)
    empty = bpy.context.active_object
    empty.name = "Fit"
    for obj in objs:
        world = obj.matrix_world.copy()
        obj.parent = empty
        obj.matrix_world = world
    empty.scale = (factor, factor, factor)
    bpy.context.view_layer.update()
    pts = []
    for obj in objs:
        for corner in obj.bound_box:
            pts.append(obj.matrix_world @ Vector(corner))
    minv = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    maxv = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    empty.location = empty.location + Vector((-(minv.x + maxv.x) / 2, 0, -minv.z))
    bpy.context.view_layer.update()


def render_one(name, builder):
    clear_meshes()
    fresh_materials()
    builder()
    fit_meshes()
    add(
        "cyl",
        mat="shadow",
        bevel_width=0,
        radius=0.82,
        depth=0.02,
        location=(0, 0.05, 0.01),
        vertices=48,
    )
    shadow = bpy.context.active_object
    shadow.scale = (1.12, 0.7, 1)
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

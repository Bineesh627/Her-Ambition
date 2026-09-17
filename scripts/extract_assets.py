import os
from PIL import Image

def extract_assets():
    source_path = "referrence.jpeg"
    if not os.path.exists(source_path):
        print(f"Error: {source_path} not found")
        return

    output_dir = "public/images"
    os.makedirs(output_dir, exist_ok=True)

    img = Image.open(source_path)
    w, h = img.size
    print(f"Loaded reference image with dimensions: {w}x{h}")

    # Accurate crops based on 800x1600 reference
    # 1. Hero right image (Woman with coffee, books stack, and cozy window)
    # y: ~56 to 414, x: ~418 to 796
    hero_box = (418, 56, 796, 414)
    hero_img = img.crop(hero_box)
    hero_img.save(os.path.join(output_dir, "hero-portrait.png"), quality=95)
    print("Saved hero-portrait.png")

    # 2. Program 1: The Becoming (woman looking at golden-hour skyline)
    # x: 38 to 272, y: 508 to 610
    p1_box = (38, 508, 272, 610)
    p1_img = img.crop(p1_box)
    p1_img.save(os.path.join(output_dir, "program-becoming.png"), quality=95)
    print("Saved program-becoming.png")

    # 3. Program 2: HerInfluence (confident woman in blazer)
    # x: 284 to 518, y: 508 to 610
    p2_box = (284, 508, 518, 610)
    p2_img = img.crop(p2_box)
    p2_img.save(os.path.join(output_dir, "program-influence.png"), quality=95)
    print("Saved program-influence.png")

    # 4. Program 3: The FoundHer (woman working on laptop)
    # x: 529 to 763, y: 508 to 610
    p3_box = (529, 508, 763, 610)
    p3_img = img.crop(p3_box)
    p3_img.save(os.path.join(output_dir, "program-foundher.png"), quality=95)
    print("Saved program-foundher.png")

    # 5. Membership: Group of diverse professional women in discussion
    # x: 0 to 326, y: 980 to 1152
    m_box = (0, 980, 326, 1152)
    m_img = img.crop(m_box)
    m_img.save(os.path.join(output_dir, "membership-meeting.png"), quality=95)
    print("Saved membership-meeting.png")

    # 6. Final CTA background with eucalyptus branch and warm light shadows
    # x: 0 to 800, y: 1378 to 1530
    cta_box = (0, 1378, 800, 1530)
    cta_img = img.crop(cta_box)
    cta_img.save(os.path.join(output_dir, "cta-botanical-bg.png"), quality=95)
    print("Saved cta-botanical-bg.png")

    print("All assets extracted successfully!")

if __name__ == "__main__":
    extract_assets()

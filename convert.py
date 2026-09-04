from PIL import Image
from pathlib import Path

# Folder
INPUT_DIR = Path("img")
OUTPUT_DIR = Path("webp")

# Buat folder webp jika belum ada
OUTPUT_DIR.mkdir(exist_ok=True)

# Format gambar yang didukung
SUPPORTED_FORMATS = {".jpg", ".jpeg", ".png"}

# Cari semua gambar
images = [
    file for file in INPUT_DIR.iterdir()
    if file.is_file() and file.suffix.lower() in SUPPORTED_FORMATS
]

if not images:
    print("Tidak ada gambar JPG/PNG di folder img.")
    exit()

print(f"Ditemukan {len(images)} gambar.\n")

for image_path in images:
    try:
        # Buka gambar
        image = Image.open(image_path)

        # Konversi mode agar aman untuk WebP
        if image.mode in ("RGBA", "LA"):
            converted = image
        else:
            converted = image.convert("RGB")

        # Nama output
        output_path = OUTPUT_DIR / f"{image_path.stem}.webp"

        # Simpan WebP
        converted.save(
            output_path,
            "WEBP",
            quality=80,
            method=6
        )

        print(f"✓ {image_path.name} → {output_path.name}")

    except Exception as e:
        print(f"✗ Gagal convert {image_path.name}: {e}")

print("\nSelesai!")
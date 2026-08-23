/* ==================================================
   Data Halaman About
   --------------------------------------------------
   Cara edit isi halaman About:
   - Ganti teks di "bio" untuk paragraf perkenalan.
   - Tambah/kurangi item di "services" (otomatis dibagi
     rata jadi 2 kolom).
   - Tambah/kurangi item di "experience", tiap item punya
     title & subtitle (otomatis dibagi rata jadi 2 kolom).
   Semua ini dirender otomatis oleh js/render-about.js,
   tidak perlu edit about.html.
================================================== */

const ABOUT = {
  aboutImage: "img/about.jpg",

  bio: "In the realm of IT, I am Adhitya Eka Prakoso—a fourth-semester student of Information Technology at Brawijaya University. From my early curiosity to mastering UI/UX Design and Front-End Development, my journey has been a personal exploration. Each project I undertake tells a story, blending pixels and code to craft compelling digital experiences. It's not just about making visually appealing interfaces; it's about infusing each creation with my passion. Join me in this journey where creativity knows no bounds, as we navigate the ever-changing world of digital design together.",

  services: ["UI/UX Design", "Editing Services", "Social Media Design", "Back-End Development", "Front-End Development", "Mobile App Development"],

  experience: [
    {
      title: "Digital Creative",
      subtitle: "Mosque Raden Patah University Brawijaya",
    },
    {
      title: "HACKFEST 2024",
      subtitle: "GDSC Indonesia",
    },
    {
      title: "Front-End Development Website E-Complaint Vocational",
      subtitle: "Vocational Faculty",
    },
    {
      title: "UI/UX Design",
      subtitle: "Grow Up With TI at Vocational Faculty",
    },
  ],
};

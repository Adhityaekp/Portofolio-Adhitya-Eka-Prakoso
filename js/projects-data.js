/* ==================================================
   Data Semua Project Portfolio
   --------------------------------------------------
   Cara nambah project baru:
   1. Tambah object baru di array PROJECTS di bawah ini.
   2. Taruh gambar-gambarnya di folder img/.
   3. Selesai — TIDAK perlu bikin file .html baru.
      Kartu di index.html & halaman detail project akan
      otomatis muncul lewat js/render-portfolio.js dan
      js/render-project.js.

   Field "tools":
   - Isi array nama bahasa/software yang dipakai,
     contoh: ["Figma", "PHP", "MySQL"]
   - Logo-nya otomatis muncul (ambil dari Simple Icons),
     tidak perlu upload gambar logo manual.
   - Daftar nama yang didukung ada di js/render-project.js
     (bagian TOOL_ICON_ALIASES), tapi kebanyakan nama umum
     (figma, php, mysql, javascript, react, laravel, python,
     bootstrap, tailwind, wordpress, dll) langsung dikenali.
================================================== */

const PROJECTS = [
  {
    slug: "halo-ternak", // dipakai di URL: project.html?slug=halo-ternak
    title: "Halo Ternak",
    thumb: "img/Project 8a.jpg", // gambar thumbnail di grid index
    year: 2024,
    role: "UI & UX Design",
    tools: ["Figma"],
    prototypeUrl: "https://www.figma.com/proto/W0TTUpZ8O8tUmLXl5Rrn2e/Halo-Ternak?node-id=90-91363&t=phvwwM8sexIaGzyY-1",
    description:
      "Halo Ternak is an integrated platform that simplifies livestock care by connecting farmers, veterinarians, and the general public. It provides easy access to veterinary services and resources, fostering a stronger, healthier farming community.",
    images: ["img/Project 8a.jpg", "img/Project 8b.jpg"],
  },
  {
    slug: "m3s",
    title: "M3S (Marunda Maintenance Management System)",
    thumb: "img/Project 7a.jpg",
    year: 2024,
    role: "UI & UX Design",
    tools: ["Figma"],
    prototypeUrl:
      "https://www.figma.com/proto/zwSyKfHwZE8ehymqeafL5C/Shell-Power?page-id=&node-id=24-5339&node-type=FRAME&viewport=6715%2C11514%2C1.8&t=Rca6JxbchJzfCnIo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A5339&share=1&show-proto-sidebar=1",
    description:
      "The Marunda Maintenance Management System is an advanced application by PT Shell Manufacturing for real-time monitoring of factory machines. It provides instant insights and predictive analytics to ensure optimal performance, minimize downtime, and support efficient operations.",
    images: ["img/Project 7a.jpg", "img/Project 7b.jpg"],
  },
  {
    slug: "fintrax",
    title: "FinTrax",
    thumb: "img/Project6a.jpg",
    year: 2024,
    role: "Front-End Developer",
    tools: ["Figma", "React"],
    prototypeUrl: "https://fintrax-web-app.vercel.app/",
    description:
      "FinTrax was founded on November 19, 2016, with a mission to revolutionize the way people manage their finances. Our team of experienced financial professionals recognized the need for a more intuitive and user-friendly financial management platform, and we set out to create a solution that would simplify the complexities of financial planning and tracking.",
    images: ["img/Project6a.jpg", "img/Project6b.jpg", "img/Project6c.jpg"],
  },
  {
    slug: "literasik",
    title: "Literasik",
    thumb: "img/Project5a.jpg",
    year: 2024,
    role: "Front-End Developer",
    tools: ["Figma", "React"],
    prototypeUrl: "https://github.com/Adhityaekp/LITERASIK.git",
    description:
      "An easy-to-access, interactive and fun platform to increase reading interest and literacy skills. Find books, news, the latest information, event pages, practice writing skills, connect with the community, and enjoy gamification-based educational games for children, as well as text-to-speech features. Let's make literacy part of life and increase Indonesian literacy together!",
    images: ["img/Project5a.jpg", "img/Project5b.jpg", "img/Project5c.jpg"],
  },
  {
    slug: "busexplore-id",
    title: "BUSEXPLORE.ID",
    thumb: "img/home1.jpg",
    year: 2023,
    role: "UI & UX Design & Front-End Developer",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    prototypeUrl: "https://github.com/Adhityaekp/BusExplore.id",
    description:
      "Enjoy a comfortable and safe travel experience with our bus rental service. BusExplore.id provides a fleet of modern, well-maintained buses at affordable prices and equipped with the latest facilities. We offer various types of buses with diverse capacities to suit your needs. For us, passenger service and safety are top priorities.",
    images: ["img/home1.jpg", "img/home2.jpg", "img/home3.jpg"],
  },
  {
    slug: "ecomplaint",
    title: "E-Complaint",
    thumb: "img/project2a.jpg",
    year: 2023,
    role: "UI & UX Design & Front-End Developer",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    prototypeUrl: "https://github.com/Adhityaekp/E-Complaint",
    description:
      'The "e-complaint" application (or "electronic complaint application") at the Vocational Faculty is a system designed to facilitate students, lecturers, staff, or relevant parties within the Vocational Faculty to submit complaints or grievances related to various aspects of campus life, academic processes, facilities, or services provided.',
    images: ["img/project2a.jpg", "img/project2b.jpg", "img/project2c.jpg"],
  },
  {
    slug: "foodflow",
    title: "FOODFLOW",
    thumb: "img/project3a.jpg",
    year: 2024,
    role: "App Developer",
    tools: ["Flutter", "Dart", "Firebase"],
    prototypeUrl: "https://github.com/Adhityaekp/FoodFlow",
    description:
      "Introducing FoodFlow, an innovative app aimed at raising awareness about food waste and hunger issues in Indonesia. With FoodFlow, users can easily connect with local communities and food banks to redistribute surplus food, reducing waste and helping those in need. By fostering a culture of sharing and resourcefulness, FoodFlow empowers individuals to make a meaningful impact on both the environment and society. Join us in the fight against food waste and hunger, and let's create a brighter, more sustainable future together with FoodFlow.",
    images: ["img/project3a.jpg", "img/project3b.jpg", "img/project3c.jpg"],
  },
  {
    slug: "mount-java",
    title: "MountJava",
    thumb: "img/project4b.jpg",
    year: 2023,
    role: "UI & UX Design & App Developer",
    tools: ["Figma", "Flutter", "Dart", "Firebase"],
    prototypeUrl: "https://github.com/Adhityaekp/App-Mount-Java",
    description:
      "Discover the wonders of Indonesia's nature with Mount Java – the ultimate destination for adventure enthusiasts and nature lovers alike. Here, you can explore captivating landscapes hassle-free. With Mount Java, experience the thrill of mountain climbing virtually and immerse yourself in breathtaking views at every step. Embark on your new adventure and uncover the beauty of Indonesia's nature through the eyes of Mount Java.",
    images: ["img/project4b.jpg", "img/project4a.jpg"],
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    thumb: "img/PosterDesign.jpg",
    year: "",
    role: "",
    tools: ["Figma", "Canva"],
    prototypeUrl: "",
    description:
      "In my poster design portfolio, I present works crafted using Figma and Canva, combining creativity with a focus on clear messaging. Each design I create serves a well-defined purpose, from promoting events to conveying social messages. With Figma, I delve into every detail through team collaboration, while Canva provides me with fast, intuitive tools to craft compelling designs. I hope this portfolio showcases my design abilities and sparks your interest in collaborating on future design projects.",
    images: ["img/Poster1.jpg", "img/Poster2.jpg", "img/Poster3.jpg", "img/Poster4.jpg", "img/Poster5.jpg", "img/Poster6.jpg"],
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    thumb: "img/LogoDesign.jpg",
    year: "",
    role: "",
    tools: ["Figma", "Canva"],
    prototypeUrl: "",
    description:
      "In my Logo Design portfolio, I showcase a series of meticulously crafted logos, each representing brands with creativity and strategic thinking. Leveraging the versatility of tools such as Figma and Canva, I ensure each logo is not only visually compelling but also scalable and adaptable to various platforms. Explore my portfolio to see how I can help your brand stand out with impactful logo design.",
    images: ["img/Logo1.jpg", "img/Logo2.jpg", "img/Logo3.png", "img/Logo4.jpg"],
  },
];

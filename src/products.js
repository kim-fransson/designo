export const products = [
  {
    id: "web",
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    image: "/images/home/desktop/image-web-design-large.jpg",
    href: "/products/web",
    width: 541,
    height: 640,
    variant: "tall",
    background: "/images/web-design/desktop/bg-pattern-intro-web.svg",
    projects: [
      {
        imageSrc: "/images/web-design/desktop/image-express.jpg",
        title: "EXPRESS",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        imageSrc: "/images/web-design/desktop/image-transfer.jpg",
        title: "TRANSFER",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        imageSrc: "/images/web-design/desktop/image-photon.jpg",
        title: "PHOTON",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        imageSrc: "/images/web-design/desktop/image-builder.jpg",
        title: "BUILDER",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        imageSrc: "/images/web-design/desktop/image-blogr.jpg",
        title: "BLOGR",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        imageSrc: "/images/web-design/desktop/image-camp.jpg",
        title: "CAMP",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  {
    id: "app",
    title: "App Design",
    background: "/images/app-design/desktop/bg-pattern-intro-app.svg",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    image: "/images/home/desktop/image-app-design.jpg",
    href: "/products/app",
    width: 541,
    height: 308,
    variant: "normal",
    projects: [
      {
        imageSrc: "/images/app-design/desktop/image-airfilter.jpg",
        title: "AIRFILTER",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        imageSrc: "/images/app-design/desktop/image-eyecam.jpg",
        title: "EYECAM",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        imageSrc: "/images/app-design/desktop/image-faceit.jpg",
        title: "FACEIT",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        imageSrc: "/images/app-design/desktop/image-todo.jpg",
        title: "TODO",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        imageSrc: "/images/app-design/desktop/image-loopstudios.jpg",
        title: "LOOPSTUDIOS",
        description: "A VR experience app made for Loopstudios",
      },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    background:
      "/images/graphic-design/desktop/bg-pattern-intro-graphic.svg",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    image: "/images/home/desktop/image-graphic-design.jpg",
    href: "/products/design",
    width: 541,
    height: 308,
    variant: "normal",
    projects: [
      {
        imageSrc: "/images/graphic-design/desktop/image-change.jpg",
        title: "TIM BROWN",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        imageSrc:
          "/images/graphic-design/desktop/image-boxed-water.jpg",
        title: "BOXED WATER",
        description:
          "A simple packaging concept made for Boxed Water",
      },
      {
        imageSrc: "/images/graphic-design/desktop/image-science.jpg",
        title: "SCIENCE!",
        description:
          "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
];

export const getProductById = (id) =>
  products.find((p) => p.id === id);

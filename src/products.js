export const PRODUCTS = [
  {
    id: "web",
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    image: "/images/home/desktop/image-web-design-large.jpg",
    href: "/products/web",
    variant: "tall",
    background: "/images/web-design/desktop/bg-pattern-intro-web.svg",
    projects: [
      {
        imageSrc: "/images/web-design/desktop/image-express.jpg",
        title: "EXPRESS",
        slug: "express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        imageSrc: "/images/web-design/desktop/image-transfer.jpg",
        title: "TRANSFER",
        slug: "transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        imageSrc: "/images/web-design/desktop/image-photon.jpg",
        title: "PHOTON",
        slug: "photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        imageSrc: "/images/web-design/desktop/image-builder.jpg",
        title: "BUILDER",
        slug: "builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        imageSrc: "/images/web-design/desktop/image-blogr.jpg",
        title: "BLOGR",
        slug: "blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        imageSrc: "/images/web-design/desktop/image-camp.jpg",
        title: "CAMP",
        slug: "camp",
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
    variant: "normal",
    projects: [
      {
        imageSrc: "/images/app-design/desktop/image-airfilter.jpg",
        title: "AIRFILTER",
        slug: "airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        imageSrc: "/images/app-design/desktop/image-eyecam.jpg",
        title: "EYECAM",
        slug: "eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        imageSrc: "/images/app-design/desktop/image-faceit.jpg",
        title: "FACEIT",
        slug: "faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        imageSrc: "/images/app-design/desktop/image-todo.jpg",
        title: "TODO",
        slug: "todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        imageSrc: "/images/app-design/desktop/image-loopstudios.jpg",
        title: "LOOPSTUDIOS",
        slug: "loopstudios",
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
    variant: "normal",
    projects: [
      {
        imageSrc: "/images/graphic-design/desktop/image-change.jpg",
        title: "TIM BROWN",
        slug: "tim-brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        imageSrc:
          "/images/graphic-design/desktop/image-boxed-water.jpg",
        title: "BOXED WATER",
        slug: "boxed-water",
        description:
          "A simple packaging concept made for Boxed Water",
      },
      {
        imageSrc: "/images/graphic-design/desktop/image-science.jpg",
        title: "SCIENCE!",
        slug: "science",
        description:
          "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
];

export const getProductById = (id) =>
  PRODUCTS.find((p) => p.id === id);

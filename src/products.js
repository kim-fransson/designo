export const products = [
  {
    id: "web",
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [],
    image: "/images/home/desktop/image-web-design-large.jpg",
    href: "/products/web",
    width: 541,
    height: 640,
    variant: "tall",
  },
  {
    id: "app",
    title: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [],
    image: "/images/home/desktop/image-app-design.jpg",
    href: "/products/app",
    width: 541,
    height: 308,
    variant: "normal",
  },
  {
    id: "design",
    title: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [],
    image: "/images/home/desktop/image-graphic-design.jpg",
    href: "/products/design",
    width: 541,
    height: 308,
    variant: "normal",
  },
];

export const getProductById = (id) =>
  products.find((p) => p.id === id);

import Product from "@/components/Product";
import { TITLE } from "@/constants";
import { getProductById, PRODUCTS } from "@/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return notFound();
  }

  return {
    title: `${TITLE} • Products • ${product.title}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) return notFound();

  return <Product product={product} />;
}

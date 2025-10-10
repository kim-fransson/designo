"use client";

import LearnMoreCard from "@/components/LearnMoreCard";
import ProductsGrid from "@/components/ProductsGrid";
import Spacer from "@/components/Spacer";
import VisuallyHidden from "@/components/VisuallyHidden";

export default function Home() {
  return (
    <>
      <VisuallyHidden>
        <h1>Home</h1>
      </VisuallyHidden>
      <LearnMoreCard />
      <Spacer size={160} />
      <ProductsGrid />
      <Spacer size={160} />
    </>
  );
}

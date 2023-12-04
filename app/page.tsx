import { Button } from "@/components/ui/button";
import { ViewAll } from "@/components/view-all";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ProductCard, ProductCard2 } from "../components/product-card";

export default async function Page() {
  // const products = await prisma.product.findMany();
  return (
    <main className="grid md:ml-24">
      <section className="hero bg-muted">
        <div className="container relative">
          <div className="grid md:grid-cols-[3fr,2fr] gap-10">
            <div className="flex flex-col justify-center items-start gap-6">
              <h1 className="text-4xl md:text-7xl font-medium mt-10 md:mt-0">
                The outfits
                <br />
                that you&apos;re
                <br />
                looking for
              </h1>
              <p className="text-muted-foreground">
                This experience is marked by a feeling of oneness with an
                activity, a loss of self-consciousness, and a deep enjoyment in
                the process.
              </p>
              <Button size="lg" className="w-52 md:text-base h-12 mt-4">
                Shop now
              </Button>
            </div>
            <div className="relative h-96 md:h-[70svh]">
              <Image
                src="/hero_test.jpg"
                alt="Hero image"
                fill={true}
                className="object-cover object-top rounded-bl-[120px]"
              />
            </div>
          </div>
          <ChevronDown
            strokeWidth={1}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full p-2 bg-background shadow"
          />
        </div>
      </section>
      <section className="py-10 bg-background trending overflow-hidden">
        <div className="container">
          <div className="grid relative">
            <div className="flex items-baseline justify-between md:justify-start mb-4">
              <h2 className="text-xl md:text-2xl font-medium">
                Trending right now
              </h2>
              <ViewAll />
            </div>
            <div className="pb-6 md:pb-0 flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth md:grid md:grid-cols-4">
              <ProductCard
                product={{
                  image: "/item.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard
                product={{
                  image: "/item2.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard
                product={{
                  image: "/item3.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard
                product={{
                  image: "/item4.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-background season">
        <div className="container">
          <div className="grid relative">
            <div className="flex items-baseline mb-4">
              <h2 className="text-2xl font-medium">In Season</h2>
              <ViewAll />
            </div>
            <div className="pb-6 md:pb-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-4">
              <ProductCard2
                product={{
                  image: "/item.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard2
                product={{
                  image: "/item2.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard2
                product={{
                  image: "/item3.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
              <ProductCard2
                product={{
                  image: "/item4.jpg",
                  title: "Hoodie #1",
                  price: "69",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

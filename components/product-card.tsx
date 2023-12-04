import Image from "next/image";

export const ProductCard = ({
  product,
}: {
  product: { image: string; title: string; price: string };
}) => {
  return (
    <article className="group overflow-hidden border rounded w-60 md:w-auto snap-start shrink-0">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={product.image}
          alt="Hero image"
          fill={true}
          className="object-cover object-top group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex justify-between items-center text-lg p-4">
        <h3>{product.title}</h3>
        <span>${product.price}</span>
      </div>
    </article>
  );
};

export const ProductCard2 = ({
  product,
}: {
  product: { image: string; title: string; price: string };
}) => {
  return (
    <article className="group shrink-0 w-60 md:w-auto snap-center">
      <div className="relative h-[300px] mb-4 overflow-hidden">
        <Image
          src={product.image}
          alt="Hero image"
          fill={true}
          className="object-cover object-top group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col justify-between items-center text-lg">
        <h3>{product.title}</h3>
        <span>${product.price}</span>
      </div>
    </article>
  );
};

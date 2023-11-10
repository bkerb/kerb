import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <main className="flex min-h-screen text-sm w-full items-center justify-center">
      Kerb Init
    </main>
  );
}

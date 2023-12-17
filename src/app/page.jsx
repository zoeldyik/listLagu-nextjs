import { prisma } from "../db";

export default async function Home() {
  const datas = await prisma.Datas.findMany();
  return (
    <main className="mx-4 mt-4 min-h-screen md:w-sm">
      {datas.map(({ filename }, idx) => (
        <p key={idx}>
          <span className="pr-2">{idx + 1}.</span> {filename}
        </p>
      ))}
    </main>
  );
}

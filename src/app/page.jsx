import SearchBar from "@/components/SearchBar";
import { prisma } from "../db";

export default async function Home({ searchParams }) {
  const key = searchParams.search;
  console.log(key);
  let datas;
  if (!key) {
    datas = await prisma.Datas.findMany();
  } else {
    datas = await prisma.Datas.findMany({
      where: {
        filename: {
          contains: key,
          mode: "insensitive",
        },
      },
    });
  }
  return (
    <main className="mx-4 mt-4 min-h-screen md:w-[640px] md:mx-auto">
      <SearchBar />
      {Boolean(datas.length) ? (
        datas.map(({ filename }, idx) => (
          <div
            className="min-h-[68px] flex border-b-2 border-base-300 py-3 gap-2"
            key={idx}
          >
            <div className="px-3 text-base-200 bg-neutral rounded-md flex justify-center items-center">
              <p>{idx + 1}</p>
            </div>
            <p className="text-[14px] md:text-[17px]">{filename}</p>
          </div>
        ))
      ) : (
        <p>Lagu tidak ditemukan</p>
      )}
    </main>
  );
}

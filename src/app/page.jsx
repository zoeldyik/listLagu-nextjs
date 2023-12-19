import SearchBar from "@/components/SearchBar";
import { redirect } from "next/navigation";
import { prisma } from "../db";

export default async function Home({ searchParams }) {
  const key = searchParams.search;
  console.log("searchParams= ", key);
  let datas;
  if (!key) {
    datas = await prisma.Datas.findMany({
      orderBy: [
        {
          nomor: "asc",
        },
      ],
    });
  } else {
    datas = await prisma.Datas.findMany({
      orderBy: [
        {
          nomor: "asc",
        },
      ],
      where: {
        filename: {
          contains: key,
          mode: "insensitive",
        },
      },
    });
  }
  // console.log(datas);

  async function searchAction(formData) {
    "use server";
    const input = formData.get("input");
    const searchQuery = input ? "/?search=" + formData.get("input") : "/";
    redirect(searchQuery);
  }
  return (
    <main className="mx-4 mt-4 min-h-screen md:w-[640px] md:mx-auto">
      <SearchBar searchAction={searchAction} />

      {Boolean(datas.length) ? (
        datas.map(({ filename, nomor }) => (
          <div
            className="min-h-[68px] flex border-b-2 border-base-300 py-3 gap-2"
            key={nomor}
          >
            <div className="px-3 text-base-200 bg-neutral rounded-md flex justify-center items-center">
              <p>{nomor}</p>
            </div>
            <p className="text-[14px] md:text-[17px]">{filename}</p>
          </div>
        ))
      ) : (
        <div>
          <p className="text-center">Lagu tidak ditemukan!</p>
        </div>
      )}
    </main>
  );
}

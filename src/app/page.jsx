import fs from "node:fs/promises";
import path from "node:path";
const pathFile = `${process.cwd()}/public/data.json`;
console.log(pathFile);

export default async function Home() {
  const file = await fs.readFile(pathFile);
  const datas = JSON.parse(file);
  console.log(datas);

  return (
    <main className="mx-4 mt-4 min-h-screen md:w-sm">
      {datas.map(({ fileName }, idx) => (
        <p key={idx}>
          <span className="pr-2">{idx + 1}.</span> {fileName}
        </p>
      ))}
    </main>
  );
}

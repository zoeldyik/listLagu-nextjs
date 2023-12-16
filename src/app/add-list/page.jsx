"use client";

import addListAction from "@/action/addListAction";
import Error from "next/error";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const files = document.querySelector("input").files;

    const fileNames = [];

    for (const file of files) {
      fileNames.push({ fileName: file.name.split(".")[0] });
    }
    await addListAction(fileNames);
    // console.log(msg);
    // msg === "success" ? router.replace("/") : Error();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-96">
        <div className="card-body">
          <h3 className="card-title">Masukkan data</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              multiple
              required
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
            <button className="btn btn-info w-full mt-3">Input Data</button>
          </form>
        </div>
      </div>
    </div>
  );
}

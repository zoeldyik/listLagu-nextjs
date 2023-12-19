"use client";

import { useRouter } from "next/navigation";
import addListAction from "@/action/addListAction";
import jsCookie from "js-cookie";
export default function page() {
  const router = useRouter();

  if (!jsCookie.get("admin")) return router.push("/login");

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = document.querySelector("input").files;

    const fileNames = [];
    let counter = 1;
    for (const file of files) {
      fileNames.push({
        filename: file.name.split(".").slice(0, -1).join(" "),
        nomor: counter,
      });
      counter++;
    }
    console.log(fileNames);
    addListAction(fileNames).then((msg) => {
      msg === "success" ? router.replace("/") : window.alert(msg);
    });
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
              className="file-input file-input-bordered file-input-neutral w-full max-w-xs"
            />
            <button className="btn btn-neutral w-full mt-3">Input Data</button>
          </form>
        </div>
      </div>
    </div>
  );
}

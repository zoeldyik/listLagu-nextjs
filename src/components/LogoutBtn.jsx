"use client";
import { logoutAction } from "../action/userAction";
import { useRouter } from "next/navigation";

export default async function LogoutBtn() {
  const router = useRouter();
  return (
    <button
      className="btn btn-neutral btn-sm mr-4"
      onClick={async () => {
        await logoutAction();
        router.refresh();
      }}
    >
      logout
    </button>
  );
}

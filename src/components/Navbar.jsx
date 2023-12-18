import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { cookies } from "next/headers";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          LIST
        </Link>
      </div>
      <div className="flex-none">
        {!cookies().get("admin") && (
          <Link href="/login" className="mr-4 btn btn-outline btn-sm">
            login
          </Link>
        )}

        {cookies().get("admin") && (
          <>
            <Link href="/add-list" className="mr-3 btn btn-ghost btn-sm">
              add list
            </Link>
            <LogoutBtn />
          </>
        )}
      </div>
    </div>
  );
}

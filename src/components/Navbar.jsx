import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          LIST
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/add-list" className="mr-3 btn btn-ghost btn-sm">
          add list
        </Link>
        <Link href="/login" className="mr-4 btn btn-info btn-sm">
          login
        </Link>
      </div>
    </div>
  );
}

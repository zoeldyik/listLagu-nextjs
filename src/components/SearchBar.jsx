export default function SearchBar({ searchAction, value }) {
  return (
    <form action={searchAction} className="mb-5 flex md:justify-end md:mb-8">
      <input
        name="input"
        type="search"
        placeholder="Type here"
        className="input input-sm input-ghost w-full max-w-xs mr-2"
        required
      />
      <button className="btn btn-sm btn-neutral">cari</button>
    </form>
  );
}

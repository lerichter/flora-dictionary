import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="border-b border-white/10 bg-[#6A00F4]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-bold text-white"
        >
          <span className="text-[#5BFF5A]">✱</span>
          flora dictionary
        </Link>
      </div>
    </header>
  );
}
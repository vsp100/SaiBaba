import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-yellow-50">
      <nav className="bg-orange-700 text-white px-4 py-3 flex flex-wrap gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/chapters" className="hover:underline">Chapters</Link>
        <Link href="/aartis" className="hover:underline">Aartis</Link>
        <Link href="/quotes" className="hover:underline">Quotes</Link>
        <Link href="/live" className="hover:underline">Live</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/prayer" className="hover:underline">Prayer</Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
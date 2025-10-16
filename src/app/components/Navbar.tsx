import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white shadow-md">
    <h1 className="text-xl font-semibold text-gray-800">My Website</h1>
    <div className="space-x-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;

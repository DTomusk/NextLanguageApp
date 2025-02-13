import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black text-white p-6 text-center text-2xl font-bold">
            <Link href="/">
            German App
            </Link>
        </header>
    );
}
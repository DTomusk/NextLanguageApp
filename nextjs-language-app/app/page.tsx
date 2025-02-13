import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "Create Flashcard",
      href: "/create"
    },
    {
      name: "View Flashcards",
      href: "/view"
    },
    {
      name: "Practise",
      href: "/practise"
    }
  ];
  return (
  <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
    {links.map(link => {
      return (
        <Link
          className="bg-black text-white p-5 m-3 text-md text-center font-bold w-full rounded-lg hover:bg-gray-400"
          key={link.name}
          href={link.href}>
            {link.name}
        </Link>
      );
    })}
  </div>);
}

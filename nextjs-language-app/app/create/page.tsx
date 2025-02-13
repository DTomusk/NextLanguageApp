import Link from "next/link"

export default function CreateFlashcard() {
    // we want this to be styled like a card 
    return (
        <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
            <Link 
                href="/">Back</Link>
            <h1 className="bg-black text-white w-full">Create Flashcard</h1>
        </div>
    );
}
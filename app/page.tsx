import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-slate-500">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
            </div>

            <div className="relative flex place-items-center"> </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </main>
    );
}

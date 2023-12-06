export default function responsive2() {
    return (
        <>
            <div className="w-10 h-10 bg-red-500"></div>
            <br />
            <div className="w-10 h-10 bg-blue-500"></div>
            <br />
            <div className="w-10 h-10 bg-red-500"></div>
            <br />
            <div className="w-10 h-10 bg-blue-400"></div>

            <div className="grid grid-cols-10 gap-5">
                <div className="bg-sky-50 aspect-square"></div>
                <div className="bg-sky-100 aspect-square"></div>
                <div className="bg-sky-200 aspect-square"></div>
                <div className="bg-sky-300 aspect-square"></div>
                <div className="bg-sky-400 aspect-square"></div>
                <div className="bg-sky-500 aspect-square"></div>
                <div className="bg-sky-600 aspect-square"></div>
                <div className="bg-sky-700 aspect-square"></div>
                <div className="bg-sky-800 aspect-square"></div>
                <div className="bg-sky-900 aspect-square"></div>
            </div>
            <div className="grid grid-cols-10 gap-2">
                <div className="bg-blue-50 aspect-square"></div>
                <div className="bg-blue-100 aspect-square"></div>
                <div className="bg-blue-200 aspect-square"></div>
                <div className="bg-blue-300 aspect-square"></div>
                <div className="bg-blue-400 aspect-square"></div>
                <div className="bg-blue-500 aspect-square"></div>
                <div className="bg-blue-600 aspect-square"></div>
                <div className="bg-blue-700 aspect-square"></div>
                <div className="bg-blue-800 aspect-square"></div>
                <div className="bg-blue-900 aspect-square"></div>
            </div>
            <div className="grid grid-cols-10 gap-2">
                <div className="bg-indigo-50 aspect-square"></div>
                <div className="bg-indigo-100 aspect-square"></div>
                <div className="bg-indigo-200 aspect-square"></div>
                <div className="bg-indigo-300 aspect-square"></div>
                <div className="bg-indigo-400 aspect-square"></div>
                <div className="bg-indigo-500 aspect-square"></div>
                <div className="bg-indigo-600 aspect-square"></div>
                <div className="bg-indigo-700 aspect-square"></div>
                <div className="bg-indigo-800 aspect-square"></div>
                <div className="bg-indigo-900 aspect-square"></div>
            </div>
            <div className="grid grid-cols-10 gap-2">
                <div className="bg-violet-50 aspect-square"></div>
                <div className="bg-violet-100 aspect-square"></div>
                <div className="bg-violet-200 aspect-square"></div>
                <div className="bg-violet-300 aspect-square"></div>
                <div className="bg-violet-400 aspect-square"></div>
                <div className="bg-violet-500 aspect-square"></div>
                <div className="bg-violet-600 aspect-square"></div>
                <div className="bg-violet-700 aspect-square"></div>
                <div className="bg-violet-800 aspect-square"></div>
                <div className="bg-violet-900 aspect-square"></div>
            </div>

            <div className="space-y-5">
                <div className="p-3 bg-blue-100 shadow rounded-lg">
                    <h3 className="text-xl border-b">font-sans</h3>
                    <p className="font-sans">
                        The quick brown fox jumps over the lazy dog.
                    </p>
                </div>
                <div className="p-3 bg-white shadow rounded-lg">
                    <h3 className="text-sm border-b">font-serif</h3>
                    <p className="font-serif">
                        The quick brown fox jumps over the lazy dog.
                    </p>
                </div>
                <div className="p-3 bg-white shadow rounded-lg">
                    <h3 className="text-xl border-b">font-mono</h3>
                    <p className="font-mono">
                        The quick brown fox jumps over the lazy dog.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
                <div className="shadow bg-white rounded-lg">shadow</div>
                <div className="shadow-md bg-white rounded-lg">shadow-md</div>
                <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
                <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
                <div className="shadow-inner bg-white rounded-lg">
                    shadow-2xl
                </div>
            </div>

            {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-slate-500">
                    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
                </div>

                <div className="relative flex place-items-center">안녕</div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
            </main> */}
        </>
    );
}

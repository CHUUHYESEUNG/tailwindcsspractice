export default function responsive() {
    return (
        <>
            <h1>안녕</h1>
            <h1>hello world</h1>
            <h2>hello world</h2>
            <h3>hello world</h3>
            <h4>hello world</h4>
            <h5>hello world</h5>
            <h6>hello world</h6>

            <div className="space-y-8 bg-red-200">
                <div className="w-96 h-10 bg-white shadow rounded">w-96</div>
                <div className="w-80 bg-white shadow rounded">w-80</div>
                <div className="w-72 bg-white shadow rounded">w-72</div>
                <div className="w-64 bg-white shadow rounded">w-64</div>
                <div className="w-60 bg-white shadow rounded">w-60</div>
                <div className="w-56 bg-white shadow rounded">w-56</div>
                <div className="w-52 bg-white shadow rounded">w-52</div>
                <div className="w-48 bg-white shadow rounded">w-48</div>
                <div className="w-1/4 bg-white shadow rounded">w-1/4</div>
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

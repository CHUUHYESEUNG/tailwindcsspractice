export default function responsive() {
    return (
        <>
            {/* https://tailwindcss.com/docs/margin
            https://tailwindcss.com/docs/padding
            https://tailwindcss.com/docs/font-weight
            https://tailwindcss.com/docs/text-color */}
            <div className="text-base text-red-500">hello world</div>
            <div className="text-lg p-1">hello world</div>
            <div className="text-2xl">hello world</div>
            <div className="text-5xl p-3">hello world</div>
            <div className="text-5xl pt-3 bg-blue-300">hello world</div>
            <div className="text-5xl mt-3 mb-3">hello world</div>
            <div className="text-5xl mt-3">hello world</div>
            <div className="p-5">
                <ul className="list-disc">
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ul>
            </div>
            <div className="p-5">
                <ul className="list-disc">
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo incidunt harum fugiat perferendis hic, iste quidem
                        ratione et! Quae, officiis culpa magnam veniam ducimus
                        beatae et quasi molestias quam harum?
                    </li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ul>
            </div>
            <div className="p-5">
                <ul className="list-decimal">
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo incidunt harum fugiat perferendis hic, iste quidem
                        ratione et! Quae, officiis culpa magnam veniam ducimus
                        beatae et quasi molestias quam harum?
                    </li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ul>
            </div>
            {/* border-radius */}
            <div className="w-32 h-32 bg-red-400"></div> <br />
            <div className="w-32 h-32 bg-red-400 rounded-2xl"></div>
            <br />
            <div className="w-32 h-32 bg-red-400 rounded-full"></div>
            <br />
            <div className="w-32 h-32 bg-red-400"></div>
            <br />
            <div className="w-32 h-32 bg-red-400"></div>
            <br />
            <div></div>
            <div></div>
            <div></div>
        </>
    );
}

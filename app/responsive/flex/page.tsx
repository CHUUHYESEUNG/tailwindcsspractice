export default function responsive() {
    return (
        <>
            {/* https://tailwindcss.com/docs/flex
            https://tailwindcss.com/docs/width
            https://tailwindcss.com/docs/gap */}
            <h1 className="text-xl">flex1</h1>

            <div className="flex border-4 border-red-300 m-3">
                <div className="p-2 border-4 border-blue-500">1. hello</div>
                <div className="p-2 border-4 border-blue-500">2. hello</div>
                <div className="p-2 border-4 border-blue-500">3. hello</div>
                <div className="p-2 border-4 border-blue-500">4. hello</div>
                <div className="p-2 border-4 border-blue-500">5. hello</div>
            </div>

            <h1 className="text-xl">flex2</h1>
            <div className="flex flex-col border-4 border-red-300 m-3">
                <div className="p-2 border-4 border-blue-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, distinctio debitis! Vero, exercitationem quod! Sequi
                    impedit asperiores repellat tempora architecto facilis fugit
                </div>
                <div className="p-2 border-4 border-blue-500">2. hello</div>
                <div className="p-2 border-4 border-blue-500">3. hello</div>
            </div>

            <h1 className="text-2xl">flex3</h1>
            <div className="flex flex-wrap border-4 border-red-300 m-3">
                <div className="p-2 border-4 border-blue-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, distinctio debitis! Vero, exercitationem quod! Sequi
                    impedit asperiores repellat tempora architecto facilis fugit
                    consequatur suscipit unde velit. Minus neque labore
                    doloribus.
                </div>
                <div className="p-2 border-4 border-blue-500">2. hello</div>
                <div className="p-2 border-4 border-blue-500">3. hello</div>
            </div>

            {/* 
            justify-content: center        - justify-center
            justify-content: space-between - justify-between
            align-items: flex-start        - items-start
            align-items: center            - items-center
            align-self: auto               - self-auto
            align-slef: flex-start         - self-start
            align-slef: flex-end           - self-end
            flex: 1 1 0%                   - flex-1
            flex: 1 1 auto                 - flex-auto
            flex: 0 1 auto                 - flex-initial
            flex: none                     - flex-none */}
            <h1 className="text-2xl">flex5</h1>
            <div className="flex flex-wrap border-4 border-red-300 m-3">
                <div className="flex-1 p-2 border-4 border-blue-500">
                    5. hello
                </div>
                <div className="flex-1 p-2 border-4 border-blue-500">
                    5. hello
                </div>
                <div className="flex-1 p-2 border-4 border-blue-500">
                    5. hello
                </div>
                <div className="flex-1 p-2 border-4 border-blue-500">
                    5. hello
                </div>
            </div>

            {/* gap-px	    gap: 1px;
            gap-x-px	column-gap: 1px;
            gap-1	    gap: 0.25rem; // 4px */}
            {/* gap과 space-x의 차이? */}
            <h1 className="text-2xl">flex6</h1>
            <div className="flex gap-6 flex-wrap border-4 border-red-300 m-3">
                <div className="w-40 h-16 p-2 border-4 border-blue-500">
                    6. hello
                </div>
                <div className="w-40 h-16 p-2 border-4 border-blue-500">
                    6. hello
                </div>
                <div className="w-40 h-16 p-2 border-4 border-blue-500">
                    6. hello
                </div>
            </div>

            <h1 className="text-2xl">flex7</h1>
            <div className="flex gap-6 flex-wrap border-4 border-red-300">
                <div className="w-16 h-16 p-2 m-3 border-4 border-blue-500">
                    7. hello
                </div>

                <div className="w-16 h-16 p-2 m-3 border-4 border-blue-500">
                    7. hello
                </div>
            </div>

            <h1 className="text-2xl">flex9</h1>
            <div className="flex flex-wrap border-4 border-red-300">
                <div className="w-1/4 p-2 border-4 border-blue-500">
                    4. hello
                </div>
                <div className="w-1/4 p-2 border-4 border-blue-500">
                    5. hello
                </div>
                <div className="w-1/4 p-2 border-4 border-blue-500">
                    4. hello
                </div>
            </div>

            <h1 className="text-2xl">flex12</h1>
            <div className="border-4 border-red-300">
                <div className="inline-block w-1/4 p-2 border-4 border-blue-500">
                    4. hello
                </div>
                <div className="inline-block w-1/4 p-2 border-4 border-blue-500">
                    5. hello
                </div>
                <div className="inline-block w-1/4 p-2 border-4 border-blue-500">
                    4. hello
                </div>
                <div className="inline-block w-1/4 p-2 border-4 border-blue-500">
                    5. hello
                </div>
            </div>

            {/* justify-content: space-between */}
            <h1 className="text-2xl">flex13</h1>
            <div className="flex justify-between border-4 border-red-300 m-3">
                <div className="p-2 border-4 border-blue-500">13. hello</div>
                <div className="p-2 border-4 border-blue-500">13. hello</div>
                <div className="p-2 border-4 border-blue-500">13. hello</div>
                <div className="p-2 border-4 border-blue-500">13. hello</div>
                <div className="p-2 border-4 border-blue-500">13. hello</div>
            </div>

            {/* justify-content: space-between */}
            <h1 className="text-2xl">flex13</h1>
            <div className="flex justify-center border-4 border-red-300 m-3">
                <div className="p-2 border-4 border-blue-500">14. hello</div>
                <div className="p-2 border-4 border-blue-500">14. hello</div>
                <div className="p-2 border-4 border-blue-500">14. hello</div>
                <div className="p-2 border-4 border-blue-500">14. hello</div>
                <div className="p-2 border-4 border-blue-500">14. hello</div>
            </div>

            <div className="flex justify-center items-center w-80 h-80 border-4 border-blue-500">
                <div className="text-center leading-5 w-32 h-16 p-2 border-4 border-blue-500">
                    hello
                </div>
            </div>

            {/* 접근성과 모바일 고려 */}
            <h1 className="text-2xl">16. 접근성과 모바일 고려</h1>
            <div className="flex md:flex-row flex-col border-4 border-red-300 m-3">
                <div className="p-2 flex-1 border-4 border-blue-500">
                    1 hello
                </div>
                <div className="p-2 flex-1 border-4 border-blue-500 order-first md:order-none">
                    2 hello
                </div>
                <div className="p-2 flex-1 border-4 border-blue-500">
                    3 hello
                </div>
                <div className="p-2 flex-1 border-4 border-blue-500">
                    4 hello
                </div>
            </div>
        </>
    );
}

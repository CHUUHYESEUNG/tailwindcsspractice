export default function gridresponsive() {
    return (
        <>
            <h2>Grid 1</h2>
            <div className="grid grid-cols-3 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
            </div>

            <h2>Grid 2</h2>
            <p>sm일 때 column 1, md일 때 column 2, Full일 때 column 4</p>
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
            </div>

            <h2>Grid 3</h2>
            <p>3 x 3 (cols x rows)표가 만들어진 것</p>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
                <div className="border-4 border-blue">hello</div>
            </div>

            <h2>Grid 4</h2>
            <p>가로로 1, 2, 3, ...</p>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 5</h2>
            <p>세로로 1, 2, 3, ...</p>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 6</h2>
            <p>셀 병합과 같으나 표는 데이터를 합쳐버리는데 grid는 공간만 차지하고 뒷 요소들을 밀어버림</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red">
                <div className="col-span-2 border-4 border-blue">hello 1</div>
                <div className="col-span-2 border-4 border-blue">hello 2</div>
                <div className="col-span-2 row-span-2 border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 7</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red">
                <div className="col-start-1 col-end-3 row-start-1 row-end-3 border-4 border-blue">hello 1</div>
                {/* <div className="col-start-1 row-start-1 border-4 border-blue">hello 1</div> */}
                <div className="border-4 border-blue">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 8</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="col-start-1 row-start-2 border-4 border-blue">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 9</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red">
                <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 10</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            {/* items-center, items-start, items-end, items-stretch */}
            <h2>Grid 11</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 items-center border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 12</h2>
            <p>start, end</p>
            <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 items-stretch border-red">
                <div className="h-20 border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="h-20 border-4 border-blue">hello 3</div>
                <div className="h-20 border-4 border-blue">hello 4</div>
                <div className="h-20 border-4 border-blue">hello 5</div>
                <div className="h-20 border-4 border-blue">hello 6</div>
            </div>

            {/* justify-items-start, justify-items-end, justify-items-center */}
            <h2>Grid 13</h2>
            <p>justify-items-start, justify-items-end, justify-items-center</p>
            <div className="grid grid-cols-4 justify-items-center grid-rows-4 gap-2 border-4 border-red">
                <div className="h-20 border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="h-20 border-4 border-blue">hello 3</div>
                <div className="h-20 border-4 border-blue">hello 4</div>
                <div className="h-20 border-4 border-blue">hello 5</div>
                <div className="h-20 border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 14</h2>
            <p>content-start, content-end, content-center, content-between, content-around</p>
            <div className="h-80 grid grid-cols-4 content-center gap-2 border-4 border-red">
                <div className="h-20 border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue">hello 2</div>
                <div className="h-20 border-4 border-blue">hello 3</div>
                <div className="h-20 border-4 border-blue">hello 4</div>
                <div className="h-20 border-4 border-blue">hello 5</div>
                <div className="h-20 border-4 border-blue">hello 6</div>
            </div>

            <h2>Grid 15</h2>
            <p></p>
            <div className="h-80 grid grid-cols-4 gap-2 border-4 border-red">
                <div className="border-4 border-blue">hello 1</div>
                <div className="border-4 border-blue order-first">hello 2</div>
                <div className="border-4 border-blue">hello 3</div>
                <div className="border-4 border-blue">hello 4</div>
                <div className="border-4 border-blue">hello 5</div>
                <div className="border-4 border-blue">hello 6</div>
            </div>
        </>
    );
}

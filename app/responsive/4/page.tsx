export default function responsive() {
    return (
        <>
            <h1>반응형</h1>

            <div className="sm:w-20 sm:h-20 sm:bg-blue-300 md:w-32 md:h-32 md:bg-green-300 w-16 h-16 bg-red-300">
                Hello World
            </div>

            <div className="landscape:hidden">
                <p>
                    This experience is designed to be viewed in landscape.
                    Please rotate your device to view the site.
                </p>
            </div>
        </>
    );
}

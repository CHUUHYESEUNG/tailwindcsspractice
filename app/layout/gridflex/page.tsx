import { Contents } from "@/app/components/Contents";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

export default function layout() {
    return (
        <> 
            <Header />
            {/* Contents 영역 */}
            <Contents />
            <Footer />
        </>
    );
}

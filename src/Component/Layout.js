import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopHeader } from "./TopHeader";


export function Layout({ children }) {
    return (
        <>
            <TopHeader />
            <Header />
            <main style={{ minHeight: "70vh" }}>{children}</main>
            <Footer />

        </>
    )

}
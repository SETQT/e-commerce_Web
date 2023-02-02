

import Header from "../component/Header/Header"
import Navbar from "../component/Navbar/Navbar"
import About from "../component/About"
import Footer from "../component/Footer/Footer"
import ListProduct from "../component/ListProduct/ListProduct"

function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <br /><br /><br /><br />
            <ListProduct />
            {/* <About /> */}
            <Footer />
        </>
    );
}

export default Home
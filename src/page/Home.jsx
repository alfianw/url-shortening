import React from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import Detail from "../Component/Deatail";
import Footer from "../Component/Footer";


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <Detail />
            <Footer/>
        </div>
    )
}

export default Home
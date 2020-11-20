import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FooterMendel from "./components/FooterMendel";
import Header from "./components/Header";


function App() {
    return (
        <div className='container'>
            <Header/>
            <Main/>
            <Footer/>
            <FooterMendel/>
        </div>
    );
}

export default App;

import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FooterMendel from "./components/FooterMendel";
import Header from "./components/Header";
import Form from "./components/form/form";


function App() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Main/>
            {/*<Form/>*/}
            <Footer/>
            <FooterMendel/>
        </div>
    );
}

export default App;

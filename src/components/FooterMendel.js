import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import imgFaceBook from "../images/icon-facebook.svg.png"
import imgTwitter from "../images/icon-twitter.svg.png"
import imgYoutube from "../images/icon-youtube.svg.png"
import imgHtmpAcademy from "../images/htmlacademy.svg.png"

const FooterMendel = () => {
    return (
        <div className={"mendel1Foot"}>
    <div className={"mendel1Hashteg"}>
        #visitSEDONA
    </div>
            <div className={"mendel1Wrapper-ico"}>
                <a href={"https://www.facebook.com/"} className={"mendel1Icons"}>
                    <img src={imgFaceBook} className={'mendel1Ico'}/>
                </a>
                <a href={"https://twitter.com/"} className={"mendel1Icons"}>
                    <img src={imgTwitter} className={'mendel1Ico'}/>
                </a>
                <a href={"https://www.youtube.com/"} className={"mendel1Icons"}>
                    <img src={imgYoutube} className={'mendel1Ico'}/>
                </a>
            </div>
            <div className={'mendel1Wrapper-logo'}>
                <p className={'mendel1Ico'}>Разработано</p>
                <img src={imgHtmpAcademy}/>
            </div>
        </div>
    );
};

export default FooterMendel;
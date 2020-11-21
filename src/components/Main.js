import React from 'react';
import DescriptionLayout from "./descriprion/description-layout";
import CtaLayout from "./call-to-action/cta-layout";
import Map from "./map/map";

const Main = () => {
    return (
        <div>
            <DescriptionLayout/>
            <CtaLayout/>
            <Map/>
        </div>
    );
};

export default Main;

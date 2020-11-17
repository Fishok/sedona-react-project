import React from 'react';
import CtaComponent from "./cta-component";
import data from "./cta-data"
import classes from "./cta.module.css"


const CtaLayout = () => {

    const componentData = data[0]

    return(
        <section className={classes.cta}>

            <CtaComponent
                heading={componentData.heading}
                text={componentData.text}
                button={componentData.button}
            />

        </section>
    )
}

export default CtaLayout
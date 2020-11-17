import React from 'react';
import DescriptionComponent from "./description-component";
import data from "./description-data"
import classes from "./description.module.css"


const DescriptionLayout = () => {

    const componentItems = data.map((item, index) =>
        <DescriptionComponent
            key={index}
            heading={item.heading}
            number={item.number}
            text={item.text}
        />
    )

    return(
        <section className={classes.description}>
            <ul>
                {componentItems}
            </ul>
        </section>
    )
}

export default DescriptionLayout
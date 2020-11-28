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
        <section className={classes.description + " container-fluid"}>
            <div className={classes.ul+" row"}>
                {componentItems}
            </div>
        </section>
    )
}

export default DescriptionLayout
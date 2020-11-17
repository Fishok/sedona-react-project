import React from 'react';
import img from '../../images/map-mobile.jpg'
import classes from './map.module.css';

const Map = () => {
    return(
        <section className={classes.map}>
            <img src={img} alt="map"/>
        </section>

    )
}

export default Map
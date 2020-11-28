import React from 'react';
import img from '../../images/map-mobile.jpg'
import classes from './map.module.css';

const Map = () => {
    return(
        // eslint-disable-next-line no-undef
        <section className={classes.map + ' col-12'}>
            <img src={img} alt="map"/>
        </section>

    )
}

export default Map
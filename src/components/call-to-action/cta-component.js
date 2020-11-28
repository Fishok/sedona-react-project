import React from 'react';

const CtaComponent = props => {
    return(
        <div className={"container-sm"}>
            <span>{props.heading}</span>
            <p>{props.text}</p>
            <a href={'/'}>{props.button}</a>
        </div>
    )
}

export default CtaComponent
import React from 'react'
import propTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import './index.scss'


export default function Numbering({style, classNane, data, current}) {

    const KeyOfData = Object.key(data);

    return (
        <Fade>
            <ol className={["stepper", className].join(" ")} style={style}>
                {KeyOfData.map((list, index) => {
                    let isActive = list === current ? "active" : "";
                    if ( index + 1 === KeyOfData.length) {
                        isActive ="";
                        return null;
                    }

                    return (
                        <li key={`list-${index}`} className={[isActive].join(" ")}>
                            {index + 1}
                        </li>
                    )
                })}
            </ol>
        </Fade>
    )
}

Numbering.propTypes = {
    className: propTypes.string,
    data: propTypes.object,
    current: propTypes.string,
}
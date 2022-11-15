import React from 'react'
import { useParams } from 'react-router-dom'

const OtherRoutes = (props) => {
    const {data, textColor, bgColor} = useParams();
    return (
        <div>
            {
                isNaN(data)?
                <h2 style={
                textColor?
                {color: textColor, backgroundColor: bgColor}:null}>
                La palabra es: {data}</h2>:
                <h2>El numero es: {data}</h2>
            }
        </div>
    )
}

export default OtherRoutes;
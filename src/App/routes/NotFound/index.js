import React from 'react'
import image from 'Assets/404.png'

export default function NotFound(){
    return(
        <div>
            <img src={image} style={{maxWidth:'80%'}}/>
            <h1>
                404
            </h1>
            <span>
                Oops!
            </span>
            <span>
                Du hast etwas kaputt gemacht!
            </span>
            <span>
                Hier gibt’s leider nichts zu sehen…
            </span>
        </div>
    )
}
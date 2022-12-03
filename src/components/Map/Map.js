import React from "react";

export default function Map() {



    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
                width="570"
                height="302"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    &q=Space+Needle,Seattle+WA`}>
            </iframe>
        </>
    )
}
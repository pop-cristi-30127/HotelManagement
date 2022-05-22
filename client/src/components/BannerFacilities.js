import React from 'react'

export default function BannerFacilities({children,title,subtitle})
{
    return(
        <div className="banner center">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
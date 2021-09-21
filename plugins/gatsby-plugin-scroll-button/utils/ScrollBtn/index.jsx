import React, { useState, useEffect } from 'react'

import { GatsbyImage } from "gatsby-plugin-image"


import { ScrollButton, ScrollButtonIcon } from "./styles"

export const ScrollBtn = ({
    showBelow,
    buttonScrollIcon,
    buttonScrollName,
    buttonScrollColor,
    buttonScrollColorHover,
    styles

}) => {

    const icon = buttonScrollIcon?.img?.localFile.childSvg

    const img = buttonScrollIcon?.img?.localFile.childImageSharp

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll, { passive: true })
            return () => window.removeEventListener(`scroll`, handleScroll, { passive: true })
        }
    })

    styles = {
        transition: "0.8",
        color: "#ff5e00",
        hoverColor: "blue",
        mediaWidth: "900px"
      }

    return (
        <div>
            {show &&
                <ScrollButton styles={styles} title={buttonScrollName ? buttonScrollName : "scroll top!"} buttonScrollColor={buttonScrollColor} buttonScrollColorHover={buttonScrollColorHover} onClick={handleClick} aria-label="to top">

                        {img
                            ?

                                <GatsbyImage
                                alt={buttonScrollName ? buttonScrollName : "scroll button"}
                                image={img.gatsbyImageData}
                                />

                            :

                            icon

                                ?

                                <div
                                dangerouslySetInnerHTML={{ __html: icon.content.data }}
                                />

                                :

                                <ScrollButtonIcon />
                            }
                        
                                        </ScrollButton>
                                    }
                                </div>
                            )
                        }


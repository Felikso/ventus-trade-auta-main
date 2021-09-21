import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeroHeaderBox, HeroHeaderText, HeroHeaderImg } from './styles.js'

import { getImage } from "gatsby-plugin-image"

export function HeroHeader({
    height,
    children,
    bgImage,
    bgIcon,
    bgImageAlt,
    HeroBrandName,
    HeroSubName,
    glowFirst,
    glowSecond,
    glowDeg,
    glowOpacity,
    small }) {

        const { headerContent } = useStaticQuery(
            graphql`
        query {
            headerContent: wpVentuswebstartercore(slug: {eq: "site-content"}) {
                siteTitle
                siteSubTitle
                siteHeader {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                      childSvg {
                        content {
                          data
                        }
                      }
                    }
                  }
              }
        }
        `
        );

    const { siteTitle, siteSubTitle, siteHeader } = headerContent

    const icon = bgIcon ? bgIcon : bgImage ? null : siteHeader?.localFile.childSvg

	const img = bgImage ? bgImage : bgIcon ? null : siteHeader?.localFile.childImageSharp

    const styles = {
        heroHeight: height ? height : "60",
        blogPostImageGlow : glowFirst ? glowFirst : "white",
        blogPostImageGlow2 : glowSecond ? glowSecond : "black",
        blogPostImageGlowDeg : glowDeg ? glowDeg : "black",
        blogPostImageGlowOpacity : glowOpacity ? glowOpacity : "30" ,
    }

    console.log(styles)
    console.log('styles')
    return (
        <HeroHeaderBox small={small} styles={styles}>

            {
                img ?
                <HeroHeaderImg image={getImage(img)} alt={bgImageAlt ? bgImageAlt : siteTitle} />
                :
                icon ?
                <section
                className="svg-bg"
                dangerouslySetInnerHTML={{ __html: icon.content.data }}
                />
                :
                null
            }

            <HeroHeaderText small={small}>
                <h2>{HeroBrandName ? HeroBrandName : siteTitle}</h2>
                <h4>{HeroSubName ? HeroSubName : siteSubTitle}</h4>
            </HeroHeaderText>
            {children}

        </HeroHeaderBox>
    )
}


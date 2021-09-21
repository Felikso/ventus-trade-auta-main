import React, { useContext } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { ThemeProvider as ThemeProviderStyle } from "styled-components";
import { themeStyleLight as theme } from "styles";
import { themeStyleDark as themeDark } from "styles";
import { ThemeContext } from 'providers/ThemeProvider';
import { CustomedFooter } from 'components/theme';
import { Global } from 'styles';


import { CookiesBanner } from "gatsby-plugin-cookies-banner"
import { ScrollBtn } from 'gatsby-plugin-scroll-button'

import { BottomNav } from "components/common"

import './fonts.css';

export const Layout = ({ children }) => {
  const { themeMode } = useContext(ThemeContext);

  const { ThemeData, bottomNavContent, footerLinkContent, footerSocialIcons, footerContentData, cookiesBanner, scrollButton } = useStaticQuery(
    graphql`
      query {

        ThemeData: wpVentuswebstartercore(slug: {eq: "theme-content"}) {
          primary
          primaryLight
          secondary
          secondaryLight
          third
          thirdDarkmode
          moveFillBgTop
          moveFillBgBottom
          fontColor
          background
        }


        footerSocialIcons: wpVentuswebstartercore(slug: {eq: "links-content"}) {
          phoneFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

            facebookFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

            googleMyBusinessFooter {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }

        }

        footerLinkContent: wpVentuswebstartercore(slug: {eq: "links-content"}) {
          footerInfo {
              multiBox {
                content
                title
              }
            }
          }

          footerContentData: wpVentuswebstartercore(slug: {eq: "site-content"}) {
            siteTitle
            siteSlogan
          }

          bottomNavContent: wpVentuswebstartercore(slug: {eq: "bottom-nav-content"}) {
            button1 {
              multiBox {
                content
                title
                type
              }
            }
            button2 {
              multiBox {
                content
                title
                type
              }
            }
          }

          scrollButton: wpVentuswebstartercore(slug: {eq: "scroll-button-content"}) {
            scrollBtn {
              multiBox {
                content
                type
                title
                img {
                  localFile {
                    childSvg {
                      content {
                        data
                      }
                    }
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              } 
            }
          }
          cookiesBanner: wpVentuswebstartercore(slug: {eq: "cookies-banner-content"}) {
            cookieBackground
            cookieButtonBackground
            cookieButtonColor
            cookieButtonText
            cookieColor
            cookieContent
            cookieName
            cookieBannerShow
            cookieLink {
              multiBox {
                content
                title
                type
              }
            }
          }

      }
`
);

const {
  cookieBackground,
  cookieButtonBackground,
  cookieButtonColor,
  cookieButtonText,
  cookieColor,
  cookieContent,
  cookieName,
  cookieLink,
  cookieBannerShow
}
 = cookiesBanner

  const cookieLinks = cookieLink.multiBox;

  const cookieLinkIcons = cookieLinks.map((item, i) => {
    if (item['type'] == "icon") {
      return item
    }
  })//check for icon option just to be safe
  
  const cookieLinkNames = cookieLinks.map((item, i) => {
    if (item['type'] == "content") {
      return item
    }
  })
  //check for content option just to be safe
  
  const cookieLinkHrefs = cookieLinks.map((item, i) => {
    if (item['type'] == "href") {
      return item
    }
  })
  //check for content option just to be safe

  const cookieLinkColors = cookieLinks.map((item, i) => {
    if (item['type'] == "color") {
      return item
    }
  })//check for icon option just to be safe

  const cookieLinkStyles = cookieLinks.map((item, i) => {
    if (item['type'] == "style") {
      return item
    }
  })
  //check for content option just to be safe
  
  const cookieLinkIcon = cookieLinkIcons
    .filter(item => item !== undefined)[0]

  const cookieLinkName = cookieLinkNames
    .filter(item => item !== undefined)[0]['content']
  
  const cookieLinkHref = cookieLinkHrefs
    .filter(item => item !== undefined)[0]['content']

  const cookieLinkColor = cookieLinkColors
    .filter(item => item !== undefined)[0]['content']

  const cookieLinkStyle = cookieLinkStyles
    .filter(item => item !== undefined)[0]['content']


    const buttonScrolls = scrollButton.scrollBtn.multiBox;

    const buttonScrollIcons = buttonScrolls.map((item, i) => {
      if (item['type'] == "icon") {
        return item
      }
    })//check for icon option just to be safe
    
    const buttonScrollNames = buttonScrolls.map((item, i) => {
      if (item['type'] == "content") {
        return item
      }
    })
    //check for content option just to be safe
    
    const buttonScrollOffsets = buttonScrolls.map((item, i) => {
      if (item['type'] == "scroll") {
        return item
      }
    })
    //check for content option just to be safe
   
    const buttonScrollColors = buttonScrolls.map((item, i) => {
      if (item['type'] == "color") {
        return item
      }
    })//check for icon option just to be safe
   
    const buttonScrollColorsHover = buttonScrolls.map((item, i) => {
      if (item['type'] == "color-hover") {
        return item
      }
    })
    //check for content option just to be safe
    
    const buttonScrollIcon = buttonScrollIcons
      .filter(item => item !== undefined)[0]
   
    const buttonScrollName = buttonScrollNames
      .filter(item => item !== undefined)[0]['content']
    
    const buttonScrollOffset = buttonScrollOffsets
      .filter(item => item !== undefined)[0]['content']
   
    const buttonScrollColor = buttonScrollColors
      .filter(item => item !== undefined)[0]['content']
   
    const buttonScrollColorHover = buttonScrollColorsHover
      .filter(item => item !== undefined)[0]['content']

   
const {
  primary,
  primaryLight,
  secondary,
  secondaryLight,
  third,
  moveFillBgTop,
  moveFillBgBottom,
  thirdDarkmode,
  moveFillBgTopDarkmode,
  moveFillBgBottomDarkmode,
  fontColor,
  background

} = ThemeData
    
const color = theme.colors
const colorDark = themeDark.colors

/* light mode */

color.primary = primary ? primary : color.primary
color.primaryLight = primaryLight ? primaryLight : color.primaryLight
color.secondary = secondary ? secondary : color.secondary
color.secondaryLight = secondaryLight ? secondaryLight : color.secondaryLight
color.third = third ? third : color.third 
color.moveFillBg = ( moveFillBgTop && moveFillBgBottom) ? `linear-gradient(to bottom, ${moveFillBgTop}, ${moveFillBgBottom})` : color.moveFillBg
color.fontColor = fontColor ? fontColor : color.fontColor
color.background = background ? background : color.background

/* dark mode */

colorDark.primaryLight = primary ? primary : colorDark.primary
colorDark.primary = primaryLight ? primaryLight : colorDark.primaryLight
colorDark.secondaryLight = secondary ? secondary : colorDark.secondary
colorDark.secondary = secondaryLight ? secondaryLight : colorDark.secondaryLight
colorDark.third = thirdDarkmode ? thirdDarkmode : colorDark.third 
colorDark.moveFillBg = ( moveFillBgTopDarkmode && moveFillBgBottomDarkmode) ? `linear-gradient(to bottom, ${moveFillBgTopDarkmode}, ${moveFillBgBottomDarkmode})` : colorDark.moveFillBg
colorDark.fontColor = background ? background : colorDark.fontColor
colorDark.background = fontColor ? fontColor : colorDark.background

  return (
    <>
      <ThemeProviderStyle theme={themeMode == 'light' ? theme : themeDark} >
        <Global theme={themeMode == 'light' ? theme : themeDark} />

        <CookiesBanner
        cookieBackground={cookieBackground}
        cookieButtonBackground={cookieButtonBackground}
        cookieButtonColor={cookieButtonColor}
        cookieButtonText={cookieButtonText}
        cookieColor={cookieColor}
        cookieContent={cookieContent}
        cookieName={cookieName}
        cookieLink={cookieLink}
        cookieLinkColor={cookieLinkColor}
        cookieLinkHref={cookieLinkHref}
        cookieLinkName={cookieLinkName}
        cookieLinkStyle={cookieLinkStyle}
        showBelow={cookieBannerShow ? cookieBannerShow : 250} />

        <ScrollBtn 
        showBelow={buttonScrollOffset ? buttonScrollOffset : 250}
        buttonScrollIcon={buttonScrollIcon}
        buttonScrollName={buttonScrollName}
        buttonScrollColor={buttonScrollColor}
        buttonScrollColorHover={buttonScrollColorHover}
         />

        {children}
        <BottomNav contactData={bottomNavContent} />
        <CustomedFooter footerLinkContent={footerLinkContent} footerSocialIcons={footerSocialIcons} footerContentData={footerContentData}/>
      </ThemeProviderStyle>
    </>

  );
};

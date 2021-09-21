 import React, { useState, useEffect } from "react"
 import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
 import styled, { keyframes }  from "styled-components"
 import { Link } from "gatsby"
 

 
 const CookiesBanner = ({ 
   showBelow,
   cookieBackground,
   cookieButtonBackground,
   cookieButtonColor,
   cookieButtonText,
   cookieColor,
   cookieContent,
   cookieName,
   cookieLink,
   cookieExpires,
   cookieLinkColor,
   cookieLinkHref,
   cookieLinkName,
   cookieLinkStyle,
   }) => {

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
          if (!show) setShow(true)
      } else {
          if (show) setShow(false)
      }
  }

  useEffect(() => {
      if (showBelow) {
          window.addEventListener(`scroll`, handleScroll)
          return () => window.removeEventListener(`scroll`, handleScroll)
      }
  })
 

   return (
     <>
            {show &&

             <CookieConsent
             debug={true}
             location="top"
             buttonText={cookieButtonText ? cookieButtonText : "Wszystko jasne!"}
             cookieName={cookieName ? cookieName : "VentusWEBcookies"}
             style={{
              animation: `coockieBoxAnimation .5s ease-in-out normal forwards`, 
              animationIterationCount: "1", 
              transition: "all .5s ease-in-out",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              zIndex: "10000",
              background: cookieBackground ? cookieBackground : "#2B373B",
             }}
             
             buttonStyle={{ 
              background: cookieButtonBackground ? cookieButtonBackground : "#4e503b", 
              color: cookieButtonColor ? cookieButtonColor : "black",
              fontSize: "13px", }}
             expires={cookieExpires ? cookieExpires : 150}
             onAccept={() => {
              console.log(getCookieConsentValue())
            }}
            
           >
             <span style={{ 
               fontSize: "10px",
               display: "flex",
               flexDirection: "column",
               lineHeight: "1.5",
               gap: "10px" }}>
               {cookieContent ? cookieContent : "Aktualnie odwiedzana strona korzysta z plików cookies, więcej na ich temat w polityce prywatności witryny."}
               <PoliceLink 
               style={{
                 color: cookieLinkColor ? cookieLinkColor : "brown"
               }}
               to={cookieLinkHref ? cookieLinkHref : "/polityka-prywatnosci"}>{cookieLinkName ? cookieLinkName : "Polityka Prywatności"}</PoliceLink></span>

         </CookieConsent>

            }


     </>
   )
 }
 

 
 export default CookiesBanner


 const PoliceLink = styled(Link)`
 color: ${({ theme }) => theme.colors.secondary};
 text-decoration: none;
 transition: 1s;

  &:hover{
    filter: brightness(1.75);
  }
 `

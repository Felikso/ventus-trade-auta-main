import React from "react"

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"

import { DefaultIcon, PaddingWrapper } from "components/common"

import { FooterHeader, FooterIconsBox, FooterLogoLink, FooterBrandLogo, FooterIcon, FooterWrapper, FooterSection, FooterLink, FooterInfo, FooterInfoBox, GridBox } from './styles'


export const CustomedFooter = ({ footerLinkContent, footerSocialIcons, footerContentData, footerContactItems }) => {

  const { siteTitle, siteSlogan } = footerContentData
    return (
        <FooterWrapper>
          <PaddingWrapper>
            <FooterHeader>

            </FooterHeader>
            <FooterSection>
                <GridBox>
                {Object.keys(footerContactItems).map(((keyName, i) => {
console.log(footerContactItems)
const socials = footerContactItems[keyName].multiBox;

const socialIcons = socials.map((item, i) => {
  if (item['type'] == "icon") {
    return item
  }
})//check for icon option just to be safe

const socialNames = socials.map((item, i) => {
  if (item['type'] == "content") {
    return item
  }
})
//check for content option just to be safe

const socialHrefs = socials.map((item, i) => {
  if (item['type'] == "href") {
    return item
  }
})
//check for content option just to be safe

const socialIcon = socialIcons
  .filter(item => item !== undefined)[0]

const socialName = socialNames
  .filter(item => item !== undefined)[0]['content']

const socialHref = socialHrefs
  .filter(item => item !== undefined)[0]['content']
  
  const icon = socialIcon.img?.localFile.childSvg

  const img = socialIcon.img?.localFile.childImageSharp

  const alt = socialIcon.img?.altText


return (
  <>
                           <FooterLink
                            href={socialHref}
                            key={uuid()}
                            title={socialName} > {img
      ?
 
        <GatsbyImage
          alt={socialName}
          image={img.gatsbyImageData}
        />
 

      :

      icon

        ?

        <div
 
          href={socialHref}
          dangerouslySetInnerHTML={{ __html: icon.content.data }}
        >
        </div>

        :

/*         <FooterIcon
 
          href={socialHref}
        > */
          <DefaultIcon
            className={"svg-icon"}
            label={keyName}
            aria-hidden="true"
            role="img"
            focusable="false"

          />
/*         </FooterIcon> */
    }
    {socialName}</FooterLink>
  </>
)

}))
}
                    {/* {footerContactItems.map((item, index) => (
                        <FooterLink
                            href={item.href}
                            key={index}
                            title={item.alt} >
                            {item.icon}{item.content}
                        </FooterLink>
                    ))} */}
                </GridBox>

                <GridBox>
                    <FooterLogoLink to="/">
                        <FooterBrandLogo />
                        <h3>{siteTitle}</h3>
                    </FooterLogoLink>
                    <p>{siteSlogan}</p>
                </GridBox>
            </FooterSection>

            <FooterInfoBox>
                <FooterIconsBox>

{Object.keys(footerSocialIcons).map(((keyName, i) => {

const socials = footerSocialIcons[keyName].multiBox;

const socialIcons = socials.map((item, i) => {
  if (item['type'] == "icon") {
    return item
  }
})//check for icon option just to be safe

const socialNames = socials.map((item, i) => {
  if (item['type'] == "content") {
    return item
  }
})
//check for content option just to be safe

const socialHrefs = socials.map((item, i) => {
  if (item['type'] == "href") {
    return item
  }
})
//check for content option just to be safe

const socialIcon = socialIcons
  .filter(item => item !== undefined)[0]

const socialName = socialNames
  .filter(item => item !== undefined)[0]['content']

const socialHref = socialHrefs
  .filter(item => item !== undefined)[0]['content']
  
  const icon = socialIcon.img?.localFile.childSvg

  const img = socialIcon.img?.localFile.childImageSharp

  const alt = socialIcon.img?.altText


return (
  <>
    {img
      ?
      <FooterIcon
        key={uuid()}
        href={socialHref}
      >
        <GatsbyImage
          alt={socialName}
          image={img.gatsbyImageData}
        />
      </FooterIcon>

      :

      icon

        ?

        <FooterIcon
          key={uuid()}
          href={socialHref}
          dangerouslySetInnerHTML={{ __html: icon.content.data }}
        >
        </FooterIcon>

        :

        <FooterIcon
          key={uuid()}
          href={socialHref}
        >
          <DefaultIcon
            className={"svg-icon"}
            label={keyName}
            aria-hidden="true"
            role="img"
            focusable="false"

          />
        </FooterIcon>
    }
  </>
)

}))
}

                </FooterIconsBox>
                <div>
                {footerLinkContent.footerInfo.multiBox.map((item, index) => (
                        <FooterInfo
                            to={item.content || '/'}
                            key={index} >
                            {item.title}
                        </FooterInfo>
                    ))}
                </div>
            </FooterInfoBox>


</PaddingWrapper>
        </FooterWrapper>
    )
}


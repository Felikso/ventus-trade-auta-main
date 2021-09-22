import React from 'react';

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"
import {   ReverseBox, ContactIconsBox, ToggleableBg, GridContactInfo, ContactSectionsBox, ContactSectionWrapper, ReverseWrapper } from './styles';
import { SectionTitle,  PropCard, DefaultIcon } from 'components/common'

 


/* import { contactItems } from "constans" */

import { PaddingWrapper } from 'components/common'
import { deviceType } from 'detect-it';

import { convertSlug } from "helpers"

export const Contact = ({ ContactData, ContactItems, ContactBrandInfo }) => {

    const {
        order,
        title,
        subTitle,
        textHeader,
        sectionTitle
    } = ContactData

    const id = convertSlug(sectionTitle)

    return (
        <> 

<ReverseBox css={`{ order: ${order}; }`}>
                <SectionTitle secondary css={`text-align: left;`} id={id}>
                    <h4>{title}</h4>
                </SectionTitle>
                <ContactSectionWrapper >
                    <ReverseWrapper fluid>
                        <ContactIconsBox>
                        {Object.keys(ContactItems).map(((keyName, i) => {

                                    const socials = ContactItems[keyName].multiBox;
                                    console.log(socials)
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
                                    console.log(socialIcon)
                                    const socialName = socialNames
                                    .filter(item => item !== undefined)[0]['content']

                                    const socialHref = socialHrefs
                                    .filter(item => item !== undefined)[0]['content']
                                    
                                    const icon = socialIcon.img?.localFile.childSvg

                                    const img = socialIcon.img?.localFile.childImageSharp

                                    const alt = socialIcon.img?.altText

                                    return (
                                    <>
                                     <a href={socialHref} title={socialName}><PropCard secondary content={socialName}>   {img
                                        ?
                                            <GatsbyImage
                                            alt={socialName}
                                            image={img.gatsbyImageData}
                                            />

                                        :

                                        icon

                                            ?

                                            <deviceType
                                            key={uuid()}
                                            href={socialHref}
                                            dangerouslySetInnerHTML={{ __html: icon.content.data }}
                                            />

                                            :

                                            <DefaultIcon
                                                className={"svg-icon"}
                                                label={keyName}
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                            />
                                        }</PropCard></a>
                                    </>
                                    )

                                    }))
                                    }

                        </ContactIconsBox>

                        <ContactSectionsBox>
                        <PaddingWrapper>
                            <ToggleableBg />
                            <GridContactInfo>

                            {Object.keys(ContactBrandInfo).map(((keyName, i) => {

                                    const objects = ContactBrandInfo[keyName].multiBox;


                                    const BrandInfo = objects.map(item => (
                                        <>
                                        <p>{item.title}</p>
                                        <h5>{item.content}</h5>
                                        </>
                                    ))

                                    return(
                                        <div>{BrandInfo}</div>
                                    )

                                    }))
                                    }
                                            
                            </GridContactInfo>
                            </PaddingWrapper>
                        </ContactSectionsBox>

                    </ReverseWrapper>



                </ContactSectionWrapper>
            </ReverseBox>

        </>


    );
};

import React from 'react';

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"
import { GridMainWrapper, ReverseBox, LocationContainer, MapLocation, AdressSection, AdressBox, LocationContentBox, ContactIconsBox, ToggleableBg, GridContactInfo, ContactSectionsBox, ContactSectionWrapper, ReverseWrapper } from './styles';
import { SectionTitle, DefaultWrapper, PropCard, DefaultIcon } from 'components/common'

import { ContactForm } from 'components/tools'


/* import { contactItems } from "constans" */

import { ContentBox, PaddingWrapper } from 'components/common'
import { deviceType } from 'detect-it';

import { convertSlug } from "helpers"

export const Contact = ({ ContactData, ContactItems, ContactBrandInfo }) => {

    const {
        order,
        title,
        subTitle,
        blogContent,
        blogContentSecondary,
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

                                    const objects = ContactItems[keyName].multiBox;

                                    const objectIcons = objects.map((item, i) => {
                                    if (item['type'] == "icon") {
                                        return item
                                    }
                                    })//check for icon option just to be safe

                                    const objectNames = objects.map((item, i) => {
                                    if (item['type'] == "content") {
                                        return item
                                    }
                                    })
                                    //check for content option just to be safe

                                    const objectHrefs = objects.map((item, i) => {
                                    if (item['type'] == "href") {
                                        return item
                                    }
                                    })
                                    //check for content option just to be safe

                                    const objectIcon = objectIcons
                                    .filter(item => item !== undefined)[0]

                                    const objectName = objectNames
                                    .filter(item => item !== undefined)[0]['content']

                                    const objectHref = objectHrefs
                                    .filter(item => item !== undefined)[0]['content']
                                    
                                    const icon = objectIcon.img?.localFile.childSvg

                                    const img = objectIcon.img?.localFile.childImageSharp

                                    const alt = objectIcon.img?.altText

                                    return (
                                    <>
                                     <a href={objectHref} title={objectName}><PropCard secondary content={objectName}>   {img
                                        ?
                                            <GatsbyImage
                                            alt={objectName}
                                            image={img.gatsbyImageData}
                                            />

                                        :

                                        icon

                                            ?

                                            <deviceType
                                            key={uuid()}
                                            href={objectHref}
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
                        <ContactForm />
                    </ReverseWrapper>



                </ContactSectionWrapper>
            </ReverseBox>

        </>


    );
};

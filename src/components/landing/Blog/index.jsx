import React from 'react';

import uuid from 'react-uuid'

import { Link } from "gatsby"

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, BlogPostCardsContainer, BlogPostImageBackground, BlogPostExcerpt, BlogPostCard, BlogPostHeader, BlogPostBody, BlogPostImage, BlogPostFooter } from './styles';
import { SectionTitle, Button } from 'components/common'

import { getImage } from "gatsby-plugin-image"

import { ProductCard } from 'components/product'

import { convertSlug } from "helpers"


export const Blog = ({ itemData, BlogData, defaultBlogPostImg }) => {

    const {
        order,
        title,
        subTitle,
        blogContent,
        blogContentSecondary,
        textHeader,
        sectionTitle
    } = BlogData

    const id = convertSlug(sectionTitle)


    return (
        <Wrapper id={id} css={`{ order: ${order}; }`} >

            <OffersWrapper secondary>
                <SectionTitle black>
                    <h4>{title}</h4>
                </SectionTitle>
                <OfferContentBox>
                <section dangerouslySetInnerHTML={{ __html: blogContent }} />
                </OfferContentBox>

            </OffersWrapper>
            <BlogPostCardsContainer>


{itemData.map(post => {
    const {
        blogPostAuthor,
        slug,
        blogPostExcerpt,
        blogPostImage,
        blogPostImageAlt,
        blogPostImageGlow,
        blogPostImageGlow2,
        blogPostImageGlowDeg,
        blogPostImageGlowOpacity,
        blogPostImageHeight,
        blogPostCardHeight,
        blogPostTitle,
    } = post


    const cardStyles = {
        blogPostImageGlow : blogPostImageGlow ? blogPostImageGlow : "white",
        blogPostImageGlow2 : blogPostImageGlow2 ? blogPostImageGlow2 : "black",
        blogPostImageGlowDeg : blogPostImageGlowDeg ? blogPostImageGlowDeg : "black",
        blogPostImageGlowOpacity : blogPostImageGlowOpacity ? blogPostImageGlowOpacity : "30" ,
        blogPostImageHeight : blogPostImageHeight ? blogPostImageHeight : "200",
        blogPostCardHeight: blogPostCardHeight ? blogPostCardHeight : "500",
    }

    const icon = blogPostImage?.localFile.childSvg

    const img = blogPostImage?.localFile.childImageSharp

    const defaultImg = getImage(defaultBlogPostImg);
    const defaultAlt = "Ventus WEB";

    return(
        <Link to={`/wpis/${slug}`}><BlogPostCard
        className="card"
            key={uuid()}
            cardStyles={cardStyles}
            >

               <div class="overlay-img">
                   {img
                                        ?
                                        <BlogPostImage
                                            image={img.gatsbyImageData}
                                            alt={blogPostImageAlt ? blogPostImageAlt : defaultAlt}
                                            />

                                        :

                                        icon

                                            ?

                                            <div className="post-svg"
                                            dangerouslySetInnerHTML={{ __html: icon.content.data }}
                                            />

                                            :

                                            <BlogPostImage
                                            image={defaultImg}
                                            alt={blogPostImageAlt ? blogPostImageAlt : defaultAlt}
                                            />
                                        }  
   </div>   
            <div class="content">
                <h3>{blogPostTitle}</h3>
                <p>{blogPostExcerpt}</p>
            </div>

            <Button>
                        więcej
            </Button>
            </BlogPostCard></Link>

)})}

           </BlogPostCardsContainer>
        </Wrapper>


    );
};

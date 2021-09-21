import React from "react";
import { graphql, Link } from "gatsby";
import { Layout, CustomedNav } from "components/theme";
import {
  Seo,
  PropCard,
  Button,
  SectionTitle,
  HeroHeader,
} from "components/common";
import { getImage } from "gatsby-plugin-image";

import { ProductModalGallery } from "gatsby-plugin-modal-gallery";

import {
  BlogPostWrapper
} from "components/blog";

import { ReactComponent as VentusIcon } from "assets/svgs/vt-logo.svg";

export const query = graphql`
  query ($slug: String!) {
    wpVentuswebstarterblog(slug: { eq: $slug }) {
      blogPostHeaderImageHeight
      blogPostTitle
      blogPostContent
      blogPostAuthor

      blogPostContentBg
      blogPostContentText

      blogPostImage {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 60, webpOptions: { quality: 60 })
          }
          childSvg {
            content {
              data
            }
          }
        }
      }

      blogPostImageAlt
      blogPostImageHeight
      blogPostImageGlow
      blogPostImageGlow2
      blogPostImageGlowDeg
      blogPostImageGlowOpacity


      blogPostTags {
        checkboxValueOptions  {
          value
        }
      }

    }


    SeoData: wpVentuswebstartercore(slug: { eq: "seo-content" }) {
      author
      city
      country
      dir
      email
      facebook
      instagram
      logoUrl
      legalName
      lang
      phone
      region
      siteDescription
      siteBrand
      thumbnail {
        altText
        localFile {
          ...FileFragmentSvg
          ...FileFragmentImg
        }
      }
      siteTitle
      twitter
      title
      github
      defaultTitle
      defaultDescription
      foundingDate
      zipCode
      url
    }

    NavProducts: allWpVentuswebstarterblog {
      edges {
        node {
          blogPostTitle
          databaseId
          slug
        }
      }
    }

    blogPosts: allWpVentuswebstarterblog {
      edges {
        node {
          slug
          blogPostTags {
            checkboxValueOptions  {
              value
            }
          }
        }
      }

    }

  }
`;

const ProductPage = ({ data, key }) => {
  const styles = {
    background: "red",
    borderRadius: "30px",
    transition: ".4s ease-in-out",
    mediaWidth: "700px",
    controlsColor: "white",
    controlsSize: "10px",
    controlsOpacity: ".9",
    controlsColorHover: "black",
    controlsOpacityHover: ".4",
    controlsSizeBig: "50px",
    imgWidth: "200px",
    imgHeight: "200px",
    maxModalImgHeight: "90vh",
    minModalImgHeight: "90vh",
    maxModalImgWidth: "90vw",
    minModalImgWidth: "90vw",
    modalGradientTop: "white",
    modalGradientBottom: "blue",

    overlay: {
      backgroundColor: "rgba(255,255,255,.8)",
      cursor: "pointer",
      transition: "2s",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }, //data for react modal
  };



  const NavProducts = data.NavProducts;

  let menuArray = [];

  menuArray = NavProducts.edges.map(function (item) {
    return {
      path: "wpis/" + item.node.slug,
      label: item.node.blogPostTitle,
      order: item.node.databaseId,
    };
  });

  const {
    blogPostTitle,
    blogPostContent,
    blogPostAuthor,
    blogPostTags,
    blogPostImage,
    blogPostHeaderImageHeight,
    blogPostImageGlow,
    blogPostImageGlow2,
    blogPostImageGlowDeg,
    blogPostImageGlowOpacity,
    blogPostContentBg,
    blogPostContentText
  } = data.wpVentuswebstarterblog;


  const tags = blogPostTags.checkboxValueOptions.map(item => {
    return item.value
  })

  console.log(tags.map(item => item && console.log(item)))
  console.log('tags')
  tags.forEach((uniqTag, index) => { 
    if(uniqTag) {
      console.log(uniqTag+'uni')
    }
  })
  const tagName = 'żywienie'

  const allBlogPosts = data.blogPosts.edges


  let filteredAllTags = [];
  allBlogPosts.map(option => {
    option.node.blogPostTags.checkboxValueOptions.map(item => {
      if((item.value)) {
        option.node.blogPostTags.checkboxValueOptions.map((item) => item.value && filteredAllTags.push(item.value))
      } 
    })
  })

  let filteredTags = filteredAllTags.filter((item, index) => {
    return filteredAllTags.indexOf(item) === index})

    console.log(filteredTags)
  console.log('filteredAllTags')
  let filteredPosts = [];

  
  allBlogPosts.map(option => {
    option.node.blogPostTags.checkboxValueOptions.map(item => {
      if((item.value == tagName)) filteredPosts.push(option)
    })
  })

  let pageTagsNumber = filteredPosts.length

  console.log(filteredPosts)

  console.log(pageTagsNumber)
/*   allBlogPosts.filter(option => {
    let op = option.node.blogPostTags.checkboxValueOptions .map(option => {
      if((option.value == tagName)) return option 
    })
    if (op) return option
  }) */

/*   let filteredPosts = allBlogPosts.filter(option => {
    if(! option.node.blogPostTags.checkboxValueOptions .map(option => {
      if(option.value == tagName) return}) ) return
    else {
      return option
    }
  }) */

/*   let filteredPosts = allBlogPosts.nodes
  .filter(item => item.node.frontmatter.tags !== null)
  .reduce(
    (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
    []
  )

  console.log(filteredPosts)
  console.log('filteredPosts') */

/*   blogPostTags.checkboxValueOptions .map(option => {
      if(option.checked) tagsArray.push(option.value) 
    }) */
 
/*     const tagsObject = allBlogPosts.nodes */

/*     let filteredPosts = allBlogPosts.nodes
  .filter(item => item.blogPostTags.checkboxValueOptions.filter(item => item.value == 'koty')) */
/*   .reduce(
    (acc, cur) => [...new Set([...acc, ...cur.item])],
    []
  ) */

/*   let filteredPosts = allBlogPosts.edges.filter(item => item.node.blogPostTags.checkboxValueOptions.value !== null)
  .reduce(
    (acc, cur) => [...new Set([...acc, ...cur.item.node.blogPostTags.checkboxValueOptions])],
    []
  ) */
  console.log(filteredPosts)
  console.log('filteredPosts')
  const icon = blogPostImage?.localFile.childSvg

  const img = blogPostImage?.localFile.childImageSharp

  return (
    <Layout>
      <Seo SeoData={data.SeoData} />
      <CustomedNav
        scroll={false}
        menuItems={menuArray.sort(() => Math.random() - 0.5).slice(0, 3)}
      />
          <HeroHeader
                bgImage={img}
                bgIcon={icon}
                height={blogPostHeaderImageHeight}
                glowFirst={blogPostImageGlow}
                glowSecond={blogPostImageGlow2}
                glowDeg={blogPostImageGlowDeg}
                glowOpacity={blogPostImageGlowOpacity}
            />
      <BlogPostWrapper
                      background={blogPostContentBg}      
                      color={blogPostContentText}>
        <Link to="/">
          <Button back>powrót</Button>
        </Link>

<h2>{blogPostTitle}</h2>
<span>{blogPostAuthor}</span>
 
<div dangerouslySetInnerHTML={{ __html: blogPostContent }} />
      </BlogPostWrapper>
    </Layout>
  );
};

export default ProductPage;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Layout, CustomedNav } from "components/theme";
import { Seo, HeroHeader } from "components/common";
import {  About, Blog, Contact } from "components/landing";

const Home = () => {
  const {
    BlogData,
    defaultBlogPostImg,
    SeoData,
    OfferData,
    AboutData,
    AboutFeatures,
    LocationData,
    ContactData,
    ContactBrandInfo,
    ContactItems,
    LocationAddress,
    LocationMap,
    LocationContent,
    mainArray,
    sellIcon,
    blogPosts,
    icons,
    productCardIcons,
  } = useStaticQuery(
    graphql`
      query {
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

        mainArray: allWpVentuswebstartermain(
          filter: { slug: { glob: "*section-page" } }
        ) {
          edges {
            node {
              sectionTitle
              order
            }
          }
        }



        ContactItems: wpVentuswebstartermain(slug: { eq: "contact-section-page" }) {
          phone {
            multiBox {
              content
              type
              title
              img {
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

          mail {
            multiBox {
              content
              type
              title
              img {
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

          whatsapp {
            multiBox {
              content
              type
              title
              img {
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
        }

        blogPosts: allWpVentuswebstarterblog {
          nodes {
            slug
            blogPostAuthor
            blogPostExcerpt
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
            blogPostImageGlow
            blogPostImageGlow2
            blogPostImageGlowDeg
            blogPostImageGlowOpacity
            blogPostImageHeight
            blogPostCardHeight
            blogPostTitle
            blogPostTags {
            checkboxValueOptions {
              value
            }
            }
            blogPostSubtitle
            blogPostFarewell
            blogPostContentText
            blogPostContentBg
            blogPostContent


          }
        }

        ContactData: wpVentuswebstartermain(slug: { eq: "contact-section-page" }) {
          ...CommonContent
        }

        AboutData: wpVentuswebstartermain(slug: { eq: "about-section-page" }) {
          ...CommonContent
          paragraphs {
            fieldsList {
              paragraph
            }
          }
        }

        AboutFeatures: wpVentuswebstartermain(slug: { eq: "about-section-page" }) {
          features1 {
            multiBox {
              content
              img {
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
              title
              type
            }
          }

          features2 {
            multiBox {
              content
              img {
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
              title
              type
            }
          }

          features3 {
            multiBox {
              content
              img {
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
              title
              type
            }
          }
        }

        BlogData: wpVentuswebstartermain(slug: { eq: "blog-section-page" }) {
          ...CommonContent
          textSubheader
          blogContent
          blogContentSecondary

        }

        
        defaultBlogPostImg: imageSharp(fixed: {originalName: {eq: "default-blog-post-image.png"}}) {
          gatsbyImageData
        }

      }
    `
  );

  const randomPostArray = blogPosts.nodes/* .sort(() => Math.random() - 0.5) */

  let menuArray = [];

  menuArray = mainArray.edges.map(function (item) {
    return {
      path: item.node.sectionTitle.replace(" ", "-").toLowerCase(),
      label: item.node.sectionTitle,
      order: item.node.order,
    };
  });

  return (
    <Layout>
      <Seo title="Ventus Trade Auta" location="/" SeoData={SeoData} />

      <CustomedNav scroll={true} menuItems={menuArray} />
      <HeroHeader small></HeroHeader>
      <div
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        <Blog
          itemData={randomPostArray}
          BlogData={BlogData}
          defaultBlogPostImg={defaultBlogPostImg}
        />
        <Contact
          ContactData={ContactData}
          ContactItems={ContactItems}
        />
        <About AboutData={AboutData} AboutFeatures={AboutFeatures} />
      </div>
    </Layout>
  );
};

export default Home;

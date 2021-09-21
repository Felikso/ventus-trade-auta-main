import React from 'react'
import { Link, graphql } from 'gatsby'

import { Seo, HeroHeader, SectionTitle } from 'components/common'

import { CustomedNav } from 'components/theme'

import { Layout } from 'components/theme'



class BlogTagsListIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWpVentuswebstarterblog.edges
    const { currentPage, numPages, tag } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/${tag}` : `/${tag}/${(currentPage - 1).toString()}`
    const nextPage = `/${tag}/${(currentPage + 1).toString()}`

    return (
      <Layout >
            <Seo title={siteTitle} SeoData={data.wpVentuswebstartercore} />
            <CustomedNav />
            <HeroHeader
                small
            >
            </HeroHeader>

            <SectionTitle>
                <h4>{tag}</h4>
            </SectionTitle>

        {posts.map(({ node }) => {

          return (
              <div>
                  <h1>{node.blogPostTitle}</h1>
                  {node.blogPostTags.checkboxValueOptions.map(item => {
                    if(item.value){
                        return(
                            <p>TAGS: {item.value}  </p>
                        )
                    } 
                  })}
                  <Link to={`/wpis/${node.slug}`}>czytaj</Link>
              </div>
/*             <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div> */
          )
        })}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${tag}/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: "10px",
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogTagsListIndex

export const pageTagsListQuery = graphql`
  query blogTagsListPageQuery($skip: Int!, $limit: Int!, $tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWpVentuswebstarterblog(
        sort: { fields: [date], order: DESC }
        filter: {blogPostTags: {checkboxValueOptions: {elemMatch: {value: {eq: $tag}}}}}
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            slug
            date
            blogPostTitle
            blogPostExcerpt
            blogPostTags {
                checkboxValueOptions  {
                  value
                }
              }
          }
        }
      }

      wpVentuswebstartercore(slug: {eq: "seo-content"}) {
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
   
  }
`
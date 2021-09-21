import React from 'react'
import { Link, graphql } from 'gatsby'

import { Seo } from 'components/common'

import { Layout } from 'components/theme'



class TagIndex extends React.Component {
  render() {

/*     console.log(this.props)
    console.log('data')
    const { data } = this.props

    const posts = data.allWpVentuswebstarterblog.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    console.log(data)
    console.log('data') */
    return (
      <Layout >
{/*         <Seo
          title={siteTitle}

        /> */}
<h2>Tagi</h2>
       {/*  {posts.map(({ node }) => {

          return (
              <div>
                  <h1>{node.blogPostTitle}</h1>
              </div>
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
                to={`/${i === 0 ? '' : i + 1}`}
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
        </ul> */}
      </Layout>
    )
  }
}

export default TagIndex

export const pageQuery = graphql`
  query blogTagPageQuery{
    site {
      siteMetadata {
        title
      }
    }
    allWpVentuswebstarterblog(
        sort: { fields: [date], order: DESC }
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
   
  }
`
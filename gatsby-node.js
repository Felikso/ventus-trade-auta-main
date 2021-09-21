const path = require("path");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "plugins"),
        "node_modules",
      ],
    },
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allWpVentuswebstarterblog(sort: {order: DESC, fields: [date]}, limit: 1000) {
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
  `);

  if (data.errors) {
    console.log("Error retrieving data", data.errors);
    return;
  }

  const singlePostTemplate = path.resolve("src/templates/BlogPage.js");


      // Create blog posts pages.
    const posts = data.data.allWpVentuswebstarterblog.edges

    posts.forEach((post, index)=> {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    data.data.allWpVentuswebstarterblog.edges.forEach((post) => {
    createPage({
      path: `/wpis/${post.node.slug}/`,
      component: singlePostTemplate,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
    });
    const postsListTemplate = path.resolve("src/templates/BlogList.js");
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/wpisy` : `/wpisy/${i + 1}`,
        component: postsListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });


    const allBlogPosts = posts


    let filteredAllTags = [];
    allBlogPosts.map(option => {
      option.node.blogPostTags.checkboxValueOptions.map(item => {
        if((item.value)) {
          option.node.blogPostTags.checkboxValueOptions.map((item) => item.value && filteredAllTags.push(item.value))
        } 
      })
    })
    const singlePostTagTemplate = path.resolve("src/templates/BlogTag.js");
    let filteredTags = filteredAllTags.filter((item, index) => {
      return filteredAllTags.indexOf(item) === index})

      filteredTags.forEach((uniqTag, index) => {
        const previousTag = index === filteredTags.length - 1 ? null : filteredTags[index + 1].node
        const nextTag = index === 0 ? null : filteredTags[index - 1].node

        function convertSlug(string) {
          return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
          .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
          .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
          .replace(/(^-+|-+$)/, ''); // Remove extra hyphens from beginning or end of the string
          ;
        }
        const tagSlug = convertSlug(uniqTag)
        createPage({
          path: `tag/${tagSlug}`,
          component: singlePostTagTemplate,
          context: {
            tag: uniqTag,
            previousTag,
            nextTag,
          },
        })

        let filteredPosts = [];

  
        allBlogPosts.map(option => {
          option.node.blogPostTags.checkboxValueOptions.map(item => {
            if((item.value == uniqTag)) filteredPosts.push(option)
          })
        })
  

        const postsListTemplate = path.resolve("src/templates/BlogTagsList.js");
        const postsPerPage = 2;
        const numPages = Math.ceil(filteredPosts.length / postsPerPage);
    
        Array.from({ length: numPages }).forEach((_, i) => {

          createPage({
            path: i === 0 ? `/${tagSlug}` : `/${tagSlug}/${i + 1}`,
            component: postsListTemplate,
            context: {
              tag: uniqTag,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          });
        });




      
/*       let filteredPosts = [];

  
      allBlogPosts.map(option => {
        option.node.blogPostTags.checkboxValueOptions.map(item => {
          if((item.value == uniqTag)) filteredPosts.push(option)
        })
      }) */
/* 
      let pageTagsNumber = posts.length

      const postsTagPerPage = 2;
      const numTagPages = Math.ceil(posts.length / postsTagPerPage);

      const postsTagsListTemplate = path.resolve("src/templates/BlogTagsList.js"); */
/*       const postsPerPage = 2;
      const numPages = Math.ceil(posts.length / postsPerPage); */
  

/*         createPage({
          path: index === 0 ? `/tags/${uniqTag}` : `/tags/${uniqTag}/${index + 1}`,
          component: postsTagsListTemplate,
          context: {
            limit: postsTagPerPage,
            skip: index * postsTagPerPage,
            numTagPages,
            currentPage: index + 1
          },
        }); */


});
    
/*       let pageTagsNumber = filteredPosts.length
    
      console.log(filteredPosts)
    
      console.log(pageTagsNumber)

      let pageTagsNumber = posts.length

      const postsTagPerPage = 2;
      const numTagPages = Math.ceil(posts.length / postsTagPerPage);

      const postsTagsListTemplate = path.resolve("src/templates/BlogList.js");
      const postsPerPage = 2;
      const numPages = Math.ceil(posts.length / postsPerPage);
  
      filteredTags.forEach((uniqTag, i) => {
        createPage({
          path: i === 0 ? `/tags/${uniqTag}` : `/tags/${uniqTag}/${i + 1}`,
          component: postsTagsListTemplate,
          context: {
            limit: postsTagPerPage,
            skip: i * postsTagPerPage,
            numTagPages,
            currentPage: i + 1
          },
        });
      }); */

/*       let pageTagsNumber = filteredPosts.length

      const postsTagPerPage = 2;
      const numTagPages = Math.ceil(filteredPosts.length / postsTagPerPage);

      const postsTagsListTemplate = path.resolve("src/templates/BlogList.js");
  
      filteredTags.forEach((uniqTag, i) => {

        Array.from({ length: numTagPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/tags/${uniqTag}` : `/tags/${uniqTag}/${i + 1}`,
            component: postsTagsListTemplate,
            context: {
              limit: postsTagPerPage,
              skip: i * postsTagPerPage,
              numTagPages,
              currentPage: i + 1
            },
          });
        }); */
/*         createPage({
          path: i === 0 ? `/tags/${uniqTag}` : `/tags/${uniqTag}/${i + 1}`,
          component: postsTagsListTemplate,
          context: {
            limit: postsTagPerPage,
            skip: i * postsTagPerPage,
            numTagPages,
            currentPage: i + 1
          },
        }); */
      /* }); */
/*     const tags = post.node.blogPostTags.checkboxValueOptions.map(item => {
      return item.value
    })

    tags.forEach((uniqTag, index) => {
    // Create blog post list pages
    let filteredPosts = [];
    if(uniqTag){
      posts.map(option => {
        option.node.blogPostTags.checkboxValueOptions.map(item => {
          if((item.value == tagName)) filteredPosts.push(option)
        })
      })



    let pageTagsNumber = filteredPosts.length

    const postsTagPerPage = 2;
    const numTagPages = Math.ceil(filteredPosts.length / postsTagPerPage);

    const previousPage = index === filteredPosts.length - 1 ? null : filteredPosts[index + 1].node
    const nextPage = index === 0 ? null : filteredPosts[index - 1].node
    const singlePostTagTemplate = path.resolve("src/templates/BlogTag.js");
    createPage({
      path: `tags/${uniqTag}`,
      component: singlePostTagTemplate,
      context: {
        tag: uniqTag,
        previousPage,
        nextPage,
      },
    })
  } 
    })
    
    
    
    */









})}


/*     const singlePostTagTemplate = path.resolve("src/templates/BlogTag.js");

    const tags = post.node.blogPostTags.checkboxValueOptions.map(item => {
      return item.value
    })

    tags.forEach((uniqTag, index) => {
    // Create blog post list pages
    let filteredPosts = [];
    posts.map(option => {
      option.node.blogPostTags.checkboxValueOptions.map(item => {
        if((item.value == tagName)) filteredPosts.push(option)
      })
    })
  
    let pageTagsNumber = filteredPosts.length

    const postsTagPerPage = 2;
    const numTagPages = Math.ceil(filteredPosts.length / postsTagPerPage);

    const previousPage = index === filteredPosts.length - 1 ? null : filteredPosts[index + 1].node
    const nextPage = index === 0 ? null : filteredPosts[index - 1].node

      createPage({
        path: `tags/${uniqTag}`,
        component: singlePostTagTemplate,
        context: {
          tag: uniqTag,
          previousPage,
          nextPage,
        },
      })

      Array.from({ length: numTagPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/tags/${uniqTag}` : `/tags/${uniqTag}/${i + 1}`,
          component: singlePostTagTemplate,
          context: {
            limit: postsTagPerPage,
            skip: i * postsTagPerPage,
            numTagPages,
            currentPage: i + 1
          },
        });
      });
    }) */







   /*  const singlePostTagTemplate = path.resolve("src/templates/BlogTag.js");


    const tags = blogPostTags.checkboxOptions.map(item => {
      return item.value
    })


    // Create blog posts pages.
  const posts = data.data.allWpVentuswebstarterblog.edges

  posts.forEach((post, index)=> {
  const previous = index === posts.length - 1 ? null : posts[index + 1].node
  const next = index === 0 ? null : posts[index - 1].node
  createPage({
    path: `/wpis/${post.node.slug}/`,
    component: singlePostTagTemplate,
    context: {
      slug: post.node.slug,
      previous,
      next,
    },
  });
});


  // Create blog post list pages
  const postsPerPage = 2;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/wpisy` : `/wpisy/${i + 1}`,
      component: path.resolve('./src/templates/BlogList.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      },
    });
  });



    // generate tag page
    markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag,
        },
      })
    }) */


// Create blog post list pages
/* const postsPerPage = 2;
const numPages = Math.ceil(posts.length / postsPerPage);

Array.from({ length: numPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/` : `/${i + 1}`,
    component: path.resolve("./src/templates/BlogList.js"),
  });
}); */
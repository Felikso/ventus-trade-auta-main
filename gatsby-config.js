const config = require("./src/data/config");

require("dotenv").config({
	path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
		locationAdressRoute: config.locationAdressRoute,
		siteUrl: process.env.SITE_URL,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: process.env.SITE_URL,
			},
		},
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.defaultTitle,
				short_name: "starter",
				start_url: "/",
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icon: "./static/favicon/favicon-512.png",
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ventus Trade Auta`,
				short_name: `VT Auta`,
				start_url: `/`,
				background_color: `#8c98ff`,
				theme_color: `#020028`,
				display: `minimal-ui`,
				icon: `src/images/ventus-trade-logo.png`, // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-svgr',
		{
			resolve: "gatsby-plugin-anchor-links",
			/* 			options: {
							offset: -100
						} */
		},
		'gatsby-plugin-robots-txt',
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-polyfill-io`,
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
			options: {
				 // 1 query for each data type
				query: `
				{
					mainPages: allWpVentusautaproduct {
						edges {
						  node {
							id
							mainImage {
							  sourceUrl
							}
							slug
							date
						  }
						}
					  }

					  
					
				}`,
				mapping: {
					mainPages: {
						serializer: (edges) => {
						  const payLoad = edges.map(({ node }) => {
							return {
							node: {
								id: node.id,
								slug: node.slug,
								feature_image: node.mainImage.sourceUrl,
								updated_at: node.date
								}
							}
						  })
			
						  console.log('payLoad', payLoad)
						  return payLoad
						}
					  },
					// Each data type can be mapped to a predefined sitemap
					// Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
					// The default sitemap - if none is passed - will be pages

				},
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/404.html`,
					`/offline-plugin-app-shell-fallback`,
					`/my-excluded-page`,
					/(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
				],
				createLinkInHead: true, // optional: create a link in the `<head>` of your site
				addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
				hideAttribution: false, // optional: hide "Ghost" attribution line from XSL stylesheet
				localImageHostname: null, // optional: Hostname prefix to add to local internal image urls
				resultKey: null, // optional: access for query data not at root, but instead under a container key (i.e. 'postgres')
			}
		},
		`gatsby-plugin-preact`,
		{
			resolve: `gatsby-plugin-yandex-metrika`,
/* 			resolve: require.resolve(`./plugins/gatsby-plugin-yandex-metrika-timeup`), */
			options: {
				// The ID of yandex metrika.
				trackingId: process.env.YANDEX_METRICA_TRACKING_ID,
				// Enabled a webvisor. The default value is `false`.
				webvisor: true,
				// Enables tracking a hash in URL. The default value is `false`.
				trackHash: true,
				// Defines where to place the tracking script - `false` means before body (slower loading, more hits)
				// and `true` means after the body (faster loading, less hits). The default value is `false`.
				afterBody: true,
				// Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
				// Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
				defer: true,
			},
		},
/* 		{
			resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
			options: {
				devMode: true,
			},
		}, */
/* 		{
			resolve: `gatsby-plugin-yandex-metrika`,
			options: {
				// The ID of yandex metrika.
				trackingId: process.env.YANDEX_METRICA_TRACKING_ID,
				// Enabled a webvisor. The default value is `false`.
				webvisor: true,
				// Enables tracking a hash in URL. The default value is `false`.
				trackHash: true,
				// Defines where to place the tracking script - `false` means before body (slower loading, more hits)
				// and `true` means after the body (faster loading, less hits). The default value is `false`.
				afterBody: true,
				// Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
				// Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
				defer: true,
			},
		}, */
		{
			resolve: `gatsby-source-wordpress`,
			options: {
			  url: process.env.WPGRAPHQL_URL,
			  verbose: true,
			  develop: {
				hardCacheMediaFiles: true,
			  },
			  debug: {
				graphql: {
				  writeQueriesToDisk: true,
				},
			  },
			  html: {
				fallbackImageMaxWidth: 800,
			  },
			},
		  },
		  "@paulkre/gatsby-transformer-svg",
		  {
			resolve: "gatsby-plugin-react-svg",
			options: {
			  rule: {
				include: /\.inline\.svg$/, // See below to configure properly
			  },
			},
		  },
		`gatsby-plugin-modal-gallery`,
		"gatsby-plugin-offline",
		
	],
};
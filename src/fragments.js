import { graphql } from "gatsby"

//main name = Ventuswebstarter

export const fragments = graphql`


fragment FileFragmentImg on File {
  childImageSharp {
    gatsbyImageData
  }
}

fragment FileFragmentSvg on File {
  childSvg {
    content {
      data
    }
  }
}

fragment WpMultiboxFieldFragmentContent on WpMultiboxField {
  content
  type
}

fragment WpMultiboxFieldFragment on WpMultiboxField {
    content
    title
    type
    img {
      altText
      localFile {
        ...FileFragmentSvg
        ...FileFragmentImg
      }
    }
  }


  

fragment Paragraphs on WpVentuswebstartermain {
        mainContent
        paragraphs {
          fieldsList {
            paragraph
          }
        }
}

fragment CommonContent on WpVentuswebstartermain {
  order
  textHeader
  sectionTitle
}


fragment ErrorContent on WpVentuswebstartermain {
    buttonText
    titleInfo
    infoText
}


fragment PolicyContent on WpVentuswebstartermain {
    htmlContent
}

fragment FeaturesContent on WpVentuswebstartermain {
  features1 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  features2 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  features3 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
}



fragment LocationContent on WpVentuswebstartermain {
  location_info {
    city
    street
    zipCode
  }
  location_map {
    urlAdres
    mapImage {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

fragment ContactContentHours on WpVentuswebstartermain {

  openedHours {
    multiBox {
      ...WpMultiboxFieldFragmentContent
    }
  }

}

fragment ContactContent on WpVentuswebstartermain {
  phone {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  whatsapp {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  mail {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
}


 

fragment MenuThumbnail on File {
  childImageSharp {
    gatsbyImageData(layout: CONSTRAINED, quality: 90)
  }
}

fragment VentuswebstartermenuPreviewContent on WpVentuswebstartermenu {
    productName
    id
    components
    price
    currency
    mainImage {
      altText
      localFile {
        ...FileFragmentSvg
        ...FileFragmentImg
      }
    }
    quantity
    menuCategory
    properties {
      checkboxOptions {
        checked
        value
      }
    }
  }

fragment VentuswebstartermenuPreviewContentOld on WpVentuswebstartermenu {
      title
      menu_category {
        promotion
        menuCategory
        fieldGroupName
        kindCategory
      }
      menu_details {
        quantity
        price
        components
      }
      featuredImage {
        node {
          altText
          localFile {
            ...MenuThumbnail
          }
          altText
        }
      }
}

fragment DishphotoPreviewContent on WpDishphoto {
  title
  category {
    photoCategory
  }
  featuredImage {
    node {
      altText
      localFile {
        ...MenuThumbnail
      }
      altText
    }
  }
}




  fragment HeroImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }


  fragment Thumbnail on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }


  fragment NavpageContent on WpNavpage {
    uri
    title
    content
  }

 

  
`

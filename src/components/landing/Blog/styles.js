import styled from 'styled-components';

import { DefaultWrapper, MainWrapper } from 'components/common'
import { GatsbyImage } from 'gatsby-plugin-image';


/* blog card */

 
export const BlogPostHeader = styled.section`

`

export const BlogPostBody = styled.section`

`

export const BlogPostExcerpt = styled.em`

`

export const BlogPostImageBackground = styled.div`


  &::after {
  display: block;
  position: relative;
  background-image: linear-gradient(45deg, rgba(131,58,180,0.8) 0%, rgba(252,176,69,0.5) 100%);

  margin-top: -150px;
  height: 100%;
  width: 100%;
  content: '';
}

`

export const BlogPostImage = styled(GatsbyImage)`

  width: 100%;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  position: absolute;
  object-fit: cover;

`

export const BlogPostFooter = styled.section`

`

export const OfferContentBox = styled.div`
  padding: 2rem;
  line-height: 2rem;

`

export const OffersWrapper = styled(DefaultWrapper)`
  height: 100%;
  background: ${({ theme }) => theme.colors.third};
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    height: unset;
    height: 85vh;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
}

  `


export const Wrapper = styled(MainWrapper)`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: .4fr 1fr;
      grid-gap: 0;

    }

`;

export const BlogPostCard = styled.div`


  margin: 10px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ cardStyles }) => cardStyles.blogPostCardHeight},
/*       width: calc(100% / 3 - 20px); */
  float: left;
  box-shadow: 0 0 2px 2px rgba(0,0,0,.05);
  background: yellow;
  -webkit-transition: .3s all ease;
  transition: .15s all ease;

.overlay-img .post-svg {
  height: 100%;
  width: 100%;
  display: flex;
  
  svg {
    height: 90%;
    width: 90%;
    margin: auto;
  }
}

  .content {
    padding: 15px 20px;
  }

   h3 {
    font: 2.8rem/3.4rem 'Bree Serif', serif;
    padding: 0;
    margin: 0 0 10px;
    letter-spacing: -.075rem
  }

   p {
    color: #888;
    padding: 0;
    margin: 0;
    font: 400 1.6rem/2.2rem 'Open Sans script=all', sans-serif;
  }


.overlay-img::after {
  content: ""; // ::before and ::after both require content
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(${({ cardStyles }) => cardStyles.blogPostImageGlowDeg}deg, ${({ cardStyles }) => cardStyles.blogPostImageGlow}, ${({ cardStyles }) => cardStyles.blogPostImageGlow2});
  opacity: ${({ cardStyles }) => cardStyles.blogPostImageGlowOpacity}%;


}

.overlay-img {
  position: relative;
  height: ${({ cardStyles }) => cardStyles.blogPostImageHeight}px;
}
`

export const BlogPostCardsContainer = styled(DefaultWrapper)`
    border-color: ${({ theme }) => theme.colors.secondary};
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-flow: wrap;

    &:hover .card {
      opacity: .7;
      cursor: pointer;
      filter: grayscale(1);

    }

    .card:hover {
      box-shadow: 0 0 8px 3px rgba(0,0,0,.15);
      transform: scale(1.025);
      opacity: 1;
      filter: grayscale(0);
      transition: .35s all ease;
    }
  
`

export const ProductsWrapper = styled.div`

    display: grid;
    background: ${({ theme }) => theme.colors.third};
    justify-content: center;
    grid-gap: 50px;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }



    @media (min-width: ${({ theme }) => theme.device.m}) {
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
      height: 60vh;
      overflow-y: scroll;
      
    }

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      display: flex;
    }
`


import styled, { keyframes } from 'styled-components'
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

const ShowScroll = keyframes`
from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`
export const ScrollButtonIcon = styled(IoIosArrowDropupCircle)`
`

export const ScrollButton = styled.button`
            z-index: 2;
            position: fixed;
            bottom: 50px;
            right: 0px;
            background-color: transparent;
            border: none;
            font-size: 50px;
            color: ${({ styles, buttonScrollColor}) => buttonScrollColor ? buttonScrollColor : styles.color};
            cursor: pointer;
            animation: ${ShowScroll} .5s ease-in-out normal forwards;
            animation-iteration-count: 1;
            transition: ${({ styles }) => styles.transition};

        &:hover {
            transition: 0.5s;
            color: ${({ styles, buttonScrollColorHover }) => buttonScrollColorHover ? buttonScrollColorHover : styles.hoverColor};
        }

        svg, img {
          max-width: 30px;
          max-height: 30px;
          transition: ${({ styles }) => styles.transition};
        }

        @media (min-width: ${({ styles }) => styles.mediaWidth ? styles.mediaWidth : "900px"} ){
          svg, img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        img:hover {
          filter: brightness(1.75);
        }



`
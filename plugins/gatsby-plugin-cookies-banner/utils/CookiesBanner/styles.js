import styled from "styled-components"

import { Link } from "gatsby"

export const PoliceLink = styled(Link)`
color: ${({ theme }) => theme.colors.secondary};
text-decoration: none;
transition: 1s;

 &:hover{
   filter: brightness(1.75);
 }
`

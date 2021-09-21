import styled from 'styled-components';

export const BlogPostWrapper = styled.section`
    background: ${({ theme, background }) => background ? background : theme.colors.third};
    color: ${({ theme, color }) => color ? color : theme.colors.third};
`
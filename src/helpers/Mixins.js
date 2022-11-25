import { css } from "styled-components";

export const setFlexbox = (alignItems, justifyContent, flexDirection) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
`;

export const setImageBackground = (url) => {
    return `url(${url}) no-repeat`;
};
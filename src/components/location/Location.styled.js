import styled from "styled-components";
import { setFlexbox, setImageBackground } from "../../helpers/Mixins";
import images from "../images/Images";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 100%;
    height: 100vh;
    background-color: ${colors.cream};

    @media (min-width: 320px) and (max-width: 900px) {
        height: auto;
    }
`;

export const ContainerSecondary = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    max-width: 1280px;
    width: 100%;  
    height: 100%;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;
    z-index: 1;
    /* background: ${setImageBackground(images.locationLeftDivider)}; */
    background-size: cover;
    background-position: right;

    div {
       ${setFlexbox('flex-start', 'center', 'column')}
        width: 70%;
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 30rem;
        background: none;
        /* margin-bottom: 50px; */

        div {
            margin: 0 auto;
            width: 80%;
        }
    }
`;

export const DivMap = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;

    .container-map {
        ${setFlexbox('center', 'center', 'row')}
        text-align: center;
        width: 100%;
        height: 100%;

        div {
            ${setFlexbox('center', 'center', 'row')}
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 100%;
            /* position: absolute;  */

            iframe {
                width: 90%;
                height: 70%;
                border-radius: 20px;
                box-shadow: 1rem 1rem 0 0 ${colors.darkPurple};

            }
        }
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 50vh;
        margin-bottom: 5rem;

        .container-map {
            ${setFlexbox('center', 'center', 'row')}
            text-align: center;
            width: 80%;
            height: 100%;

            div {
                overflow: hidden;
                background: none !important;
                width: 100%;
                height: 100%;
                padding: 1rem;

                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;
import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { floating, fadeInFromTop } from "../../helpers/CustomAnimations";
import { colors } from "../../helpers/variables";

export const Container = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;

    @media (min-width: 320px) and (max-width: 900px) {
        flex-direction: column;
        min-height: auto;
        height: auto;
    }
`;

export const DivLeft = styled.div`
    ${setFlexbox('center', 'center', 'column')}
    height: 100%;
    width: 50%;
    gap: 15px;
    background-size: cover;
    background-position: right;

    div {
        z-index: 1;
        width: 70%;

        p {
            width: 80%;
        }
    }

    @media (min-width: 320px) and (max-width: 900px) {
        width: 90%;
        height: 5vh;
        background: none;
        align-items: center;
        margin-top: 15rem;

        div {
            margin-left: 0;
            width: 80%;

            p {
                width: 100%;
            }
        }
    }
`;

export const DivRight = styled.div`
    ${setFlexbox('center', 'center', 'row')}
    width: 50%;
    height: 100%;
    position: relative;
    z-index: 1;

    div {
        ${setFlexbox('center', 'center', 'row')}
        width: 80%;
        height: 100%;
        transition: 0.5s;

        img {
            height: 135%;
            transition: 0.3s;
            z-index: 1;
            /* animation: ${fadeInFromTop} .5s linear forwards, ${floating} ease 4s infinite; */
        }
    }  

    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
        height: 50%;

        div {
            width: 90%;
            height: 100%;

            img {
                height: 60rem;
            }
        }
    }
`;

export const ShapeBubble = styled.img`
    position: absolute;
    z-index: 0;
    bottom: 0;
    height: 100%;
    max-height: 52rem;
    margin-right: 7rem;
    
    @media (min-width: 320px) and (max-width: 900px) {
        max-height: 40rem;
        bottom: auto;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        max-height: 30rem;
        margin-right: auto;
    }
`;

export const Title = styled.h1`
    font-family: "Beach Sound", Arial, Helvetica, sans-serif;
    width: 100%;
    text-align: justify;
    font-size: 6.4rem;
    color: ${colors.purple};
    font-weight: 800;

    @media (min-width: 320px) and (max-width: 900px) {
        text-align: center;
    }
`;
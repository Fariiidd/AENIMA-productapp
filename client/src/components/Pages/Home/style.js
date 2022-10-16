import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    max-width: 100%;

    @media screen and (max-width: 620px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: flex-end;
    flex-wrap: wrap;
    max-width: 100%;

    @media screen and (max-width: 780px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
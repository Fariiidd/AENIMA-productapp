import styled from 'styled-components';

export const Info = styled.div`
    color: #000;
    padding: 100px 0;
    background: ${({ lightBg }) => (lightBg ? "#fff" : "#EDEDED")};
`;

export const InfoRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -15px -15px -15px;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

    @media screen and (max-width: 780px) {
        flex-wrap: wrap;
    }
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 760px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#444444' : '#171717')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#171717' : '#444444')};
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#171717' : '#444444')};

`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    margin-bottom: 100px;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;
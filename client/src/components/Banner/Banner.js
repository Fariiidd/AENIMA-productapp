import React from 'react';
import { Info, InfoRow, InfoColumn, TextWrapper,TopLine, Heading, Subtitle, ImgWrapper, Img } from './styles';
import { Container } from '../../globalStyles';

const Home = ({ lightBg, imgStart, lightTopLine, lightText, lightTextDesc, topLine, headLine, description, start, img, alt, rotate}) => {
    return (
        <>
            <Info lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} rotate={rotate}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </Info>
        </>
    )
}

export default Home;
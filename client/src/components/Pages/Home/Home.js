import React from 'react';
import Banner from '../../Banner/Banner';
import Card from '../../Card/Card';

// DATA
import { bannerObj } from './Data';

import { Container } from './style';

const Home = () => {
    return (
        <>
            <Banner {...bannerObj} />
            <Container>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </>
    )
}

export default Home
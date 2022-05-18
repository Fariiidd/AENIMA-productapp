import React from 'react';
import Banner from '../../Banner/Banner';

// DATA
import { bannerObj } from './Data';

const Home = () => {
    return (
        <>
            <Banner {...bannerObj} />
        </>
    )
}

export default Home
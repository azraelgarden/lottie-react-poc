import React from 'react';
import ReactLottie from 'components/ReactLottie/ReactLottie';
import LottieWeb from 'components/LottieWeb/LottieWeb';
import { Container } from 'components/Common/CommonStyles';
import GlobalStyle from './global.styles';

function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Container>
                <ReactLottie />
                <LottieWeb />
            </Container>
        </>
    );
}

export default App;

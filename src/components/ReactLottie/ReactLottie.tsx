import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/ghost.json';

const ReactLottie = (): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div style={{ textAlign: 'center' }}>
            react-lottie
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default ReactLottie;

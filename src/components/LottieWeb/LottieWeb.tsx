import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/lottie/quick-ghost.json';

const LottieWeb = (): JSX.Element => {
    const animation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (animation.current) {
            const animationConfigs = lottie.loadAnimation({
                container: animation.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData,
            });

            /*
                Using the animation configuration in this way, will affect only the selected animation
            */
            animationConfigs.setSpeed(0.5);
        }
        return () => lottie.stop();
    }, [animation]);

    return (
        <div style={{ textAlign: 'center' }}>
            lottie-web
            <div style={{ height: 350, width: 350 }} ref={animation} />
        </div>
    );
};

export default LottieWeb;

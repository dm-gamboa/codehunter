import { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Lottie from "react-lottie";

import { ReactComponent as ClosedDoge } from "../../assets/icons/doge/awkward.svg";
import { ReactComponent as OpenDoge } from "../../assets/icons/doge/dizzy.svg";
import { ReactComponent as HappyDoge } from "../../assets/icons/doge/love.svg";
import EasterEgg from "../../assets/lottie/easter-egg.json";

import { Container } from "./styled";

const PageNotFound = () => {
    const key = ["up", "up", "down", "down", "left", "right", "left", "right"];
    const doge = useAnimation();

    const [bounce, setBounce] = useState(true);
    const [swipes, setSwipes] = useState([]);
    const [success, setSuccess] = useState(false);
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: EasterEgg
    };

    const variants = {
        bounce: {
            y: ["10%", "-10%"],
            transition: {
                y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    type: "spring",
                    ease: "easeOut"
                }
            }
        }
    };

    const handleDogeClick = () => {
        setBounce(!bounce);
    };

    const handleSwipe = (dir) => {
        const updatedSwipes = [...swipes, dir.toLowerCase()];
        setSwipes(updatedSwipes);
    };

    const getSwipes = useSwipeable({
        onSwiped: (e) => {
            !bounce && handleSwipe(e.dir);
        },
        trackMouse: true
    });

    const checkSwipes = () => {
        const keyAsString = key.join("");
        const swipesAsString = swipes.join("");
        swipesAsString.includes(keyAsString) && setSuccess(true);
    };

    useEffect(() => {
        doge.start(variants.bounce);
    }, []);

    useEffect(() => {
        if (!bounce) {
            doge.stop();
            setTimeout(() => {
                setBounce(true);
            }, 3500);
        } else {
            doge.start(variants.bounce);

            if (swipes.length > 0) {
                checkSwipes();
                setSwipes([]);
            }
        }
    }, [bounce]);

    return (
        <Container {...getSwipes}>
            {success && (<div className="easter-egg"><Lottie options={lottieOptions}/></div>)}
            <motion.div
                variants={variants}
                animate={doge}
                className="image-container"
                onClick={handleDogeClick}
            >
                {success ? (
                    <HappyDoge className="image" />
                ) : bounce ? (
                    <ClosedDoge className="image" />
                ) : (
                    <OpenDoge className="image" />
                )}
            </motion.div>

            <h1>Well, this is awkward...</h1>
            <p>
                We can&apos;t seem to find the page you&apos;re looking for. Please log in and try
                again.
            </p>
            <Link to="/account/login/">
                <Button type="primary" block>
                    Log In
                </Button>
            </Link>
        </Container>
    );
};

export default PageNotFound;

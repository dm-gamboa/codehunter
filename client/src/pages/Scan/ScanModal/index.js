import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import { ReactComponent as DisappointedDoge } from "../../../assets/icons/doge/relax.svg";
import { ReactComponent as HappyDoge } from "../../../assets/icons/doge/happy.svg";
import TsundereDoge from "../../../components/TsundereDoge";
import Confetti from "../../../assets/lottie/confetti.json";
import Counter from "../../../components/Counter";
import WindowHeight from "../../../context/themes/WindowSize";

import { StyledModal } from "./styled";

const ScanModal = ({ error, onClose, visible, points }) => {
    const window = WindowHeight();
    
    const errorMessages = ["Wait a second ...", "Holup...", "Uh oh..."];
    const successMessages = ["Wow!", "You're amazing!", "Keep it up!", "Took you a while..."];
    const lottieOptions = {
        loop: false,
        autoplay: true,
        animationData: Confetti
    };
    const confettiDuration = 1;

    let tsundereDoge;

    const getRandomMessage = (messages) => {
        const index = Math.floor(Math.random() * messages.length);
        tsundereDoge = index === 3;
        return messages[index];
    };

    return (
        <StyledModal
            centered
            onCancel={onClose}
            visible={visible}
            title={
                <>
                    <span className="title">
                        {error
                            ? getRandomMessage(errorMessages)
                            : getRandomMessage(successMessages)}
                    </span>
                    {error ? (
                        <DisappointedDoge className="doge" />
                    ) : tsundereDoge ? (
                        <motion.div
                            className="doge"
                            animate={{ scale: [0, 1.5, 1] }}
                            transition={{ duration: confettiDuration, ease: "easeInOut" }}
                        >
                            <TsundereDoge duration={2} delay={confettiDuration}/>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="doge"
                            animate={{ scale: [0, 1.5, 1], rotate: [-15, 15] }}
                            transition={{ duration: confettiDuration, ease: "easeInOut", rotate: { delay: confettiDuration, repeat: Infinity, repeatDelay: 0.25, type: "spring", repeatType: "reverse" } }}
                        >
                            <HappyDoge />
                        </motion.div>
                    )}
                </>
            }
            footer={
                error ? (
                    <Button block type="primary" onClick={onClose}>
                        Try again
                    </Button>
                ) : (
                    <Link to="/locations">
                        <Button block type="primary">
                            Hunt more
                        </Button>
                    </Link>
                )
            }
        >
            <div className="message">
                {error
                    ? error
                    : tsundereDoge
                        ? `It's not like I think you're a good hunter, b- baka... take your ${points.diff} points.`
                        : `You have successfully earned ${points.diff} points.`}
                {!error && (
                    <div className="new-points">
                        You now have
                        <span className="points">
                            <Counter from={points.old} to={points.new} delay={confettiDuration}/> points
                        </span>
                        .
                    </div>
                )}
            </div>

            {!error && (
                <div className="confetti" style={{ height: window.height, width: window.width }}>
                    <Lottie options={lottieOptions} />
                </div>
            )}
        </StyledModal>
    );
};

export default ScanModal;

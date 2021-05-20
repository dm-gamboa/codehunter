import { useState, useRef } from "react";
import { Tooltip, Modal, Button } from "antd";
import { TabBar } from "antd-mobile";
import { ShopOutlined, LaptopOutlined, FieldTimeOutlined, GiftOutlined } from "@ant-design/icons";

import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import LocationPlaceholder from "../../assets/placeholder-location.jpg";

import { StyledCard, StyledModal } from "./styled";

import Confetti from "react-confetti";



const RewardCard = ({ name, description, cost, category }) => {


 
    const [showConfetti, setShowConfetti] = useState(false);
    const confettiRef = useRef(null);
    // const confettiConfig = {}

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showConfirmation = () => {
        setIsModalVisible(true);
    };
    const handleRedeem = () => {
        setIsModalVisible(false);
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
        console.log("run confetti");

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            {/* This becomes a antd card using styled component (see styled.js) */}
            <StyledCard
                hoverable
                onClick={showConfirmation}
                cover={<img src={LocationPlaceholder} alt="placeholder name" />}
            >
                {showConfetti ? <Confetti numberOfPieces={80}/> : null}   

                <h1 className="name">
                    Some place 
                </h1>
                <span className="details">{description}</span>

                <div className="icons">
                    {category}
                    {/* <ShopOutlined /> */}
                    {/* <LaptopOutlined /> */}
                    {/* <FieldTimeOutlined /> */}
                </div>

                {/* {tabs && (
                <TabBar tintColor="#08497E" unselectedTintColor="#08497E">
                {renderTabs(tabs)}
                </TabBar>
            )} */}
            </StyledCard>
            <StyledModal
                title={<span><GiftOutlined/> Please confirm</span>}
                visible={isModalVisible}
                onOk={handleRedeem}
                onCancel={handleCancel}
                okText="Redeem Now!"
                cancelText="Maybe Later"
                // ref={confettiRef}
            >


                <p>Some company</p>
                <p>1 free bacon and egger</p>

            </StyledModal>
        </>
    );
};

export default RewardCard;

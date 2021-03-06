import { Menu } from "antd";
import { TrophyOutlined, EllipsisOutlined } from "@ant-design/icons";
import cloneDeep from "lodash/cloneDeep";

import CustomAvatar from "../../../components/CustomAvatar/";

import { options } from "./constant";
import { StyledCard } from "./styled";

const FriendsCard = ({ friend, status, handleMenu }) => {
    const { SubMenu, Item } = Menu;

    const getMenuOptions = (status) => {
        let menu = cloneDeep(options);
        let optionIndex = [];
        switch (status) {
        case "friend":
            optionIndex.push(menu.findIndex((val) => val.key === "remove"));
            break;
        case "pending":
            optionIndex.push(menu.findIndex((val) => val.key === "cancel"));
            break;
        default:
            optionIndex.push(menu.findIndex((val) => val.key === "add"));
        }

        optionIndex.forEach((index) => (menu[index]["visible"] = true));
        return menu;
    };

    const renderMenuOptions = (status) => {
        const opts = getMenuOptions(status);
        return opts.map((opt) => {
            const { visible, key, title, icon } = opt;
            if (visible) {
                return (
                    <Item key={key}>
                        {icon} {title}
                    </Item>
                );
            }
        });
    };

    return (
        <StyledCard className="friends-card">
            <span className="circles"></span>
            <CustomAvatar background="lightgray" photo={friend.avatar} />
            <div className="text">
                <h2>
                    {friend.name.first} {friend.name.last} <span className="username">{friend.username}</span>
                </h2>
                <span className="points">
                    <TrophyOutlined /> {friend.points} points
                </span>
            </div>
            <Menu onSelect={({key}) => handleMenu(key, friend._id)}>
                <SubMenu icon={<EllipsisOutlined rotate={90} />}>
                    {renderMenuOptions(status)}
                </SubMenu>
            </Menu>
        </StyledCard>
    );
};

export default FriendsCard;

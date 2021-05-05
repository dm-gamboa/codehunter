import { Route } from "react-router-dom";
import { 
    CompassOutlined,
    CompassFilled,
    SmileOutlined,
    SmileFilled,
    TeamOutlined,
    GiftOutlined,
    GiftFilled,
    UserOutlined
 } from "@ant-design/icons";

import Locations from "../../pages/Locations";
import Scan from "../../pages/Scan";
import Rewards from "../../pages/Rewards";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";

import Login from "../../pages/Login";
import Register from "../../pages/Register";

const routes = [
    {
        name: "Locations",
        path: `/locations`,
        exact: false,
        navTab: true,
        icon: <CompassOutlined />,
        selectedIcon: <CompassFilled />,
        component: <Locations />
    },
    {
        name: "Scan",
        path: `/scan`,
        exact: false,
        navTab: true,
        icon: <SmileOutlined />,
        selectedIcon: <SmileFilled />,
        component: <Scan />
    },
    {
        name: "Friends",
        path: `/friends`,
        exact: false,
        navTab: true,
        icon: <TeamOutlined />,
        selectedIcon: <TeamOutlined />,
        component: <Friends />
    },
    {
        name: "Rewards",
        path: `/rewards`,
        exact: false,
        navTab: true,
        icon: <GiftOutlined />,
        selectedIcon: <GiftFilled />,
        component: <Rewards />
    },
    {
        name: "Profile",
        path: `/profile`,
        exact: false,
        navTab: true,
        icon: <UserOutlined />,
        selectedIcon: <UserOutlined />,
        component: <Profile />
    },
    {
        name: "Login",
        path: `/login`,
        exact: false,
        component: <Login />
    },
    {
        name: "Register",
        path: `/register`,
        exact: false,
        component: <Register />
    }
];

export const navRoutes = routes.filter(route => route.navTab);

// TODO
// Add Permissions & 404
export const getRoute = () => {
    return routes.map(({ name, path, exact, component }) => {
        return (
            <Route
                key={name}
                exact={exact}
                path={path}
                render={() => component}
            />
        );
    });
};

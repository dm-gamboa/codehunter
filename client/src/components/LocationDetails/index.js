import { TabBar } from "antd-mobile";

import { details as detailsToRender } from "./constant";
import StyledDrawer from "./styled";

import LocationPlaceholder from "../../assets/placeholders/locations/others.png";

const LocationDetails = ({ visible, onClose, location, tabs }) => {
    /**
     * returns a string appended with "https://"
     * if url has no scheme
     * @param {*} url 
     */ 
    const addScheme = (url) => {
        const hasScheme = url.startsWith("http://") || url.startsWith("https://");
        return hasScheme ? url : `https://${url}`;
    };

    const renderHours = (hours) => {
        return Object.keys(hours).map((day) => {
            return (
                <span key={day} className="hour">
                    <span className="day">{day}</span>
                    <span className="time">
                        {hours[day][0] ? `${hours[day][0]} - ${hours[day][1]}` : "Closed"}
                    </span>
                </span>
            );
        });
    };

    const renderDetails = (loc) => {
        return Object.keys(detailsToRender).map((detail) => {
            return (
                <span key={`${location.name}-${detail}`} className={`detail ${detail}`}>
                    {detailsToRender[detail]}
                    {loc[detail] ? (
                        detail === "hours" ? (
                            loc.hours?.status
                        ) : detail === "website" ? (
                            <a href={addScheme(loc[detail])} target="_blank" rel="noreferrer">
                                {loc[detail]}
                            </a>
                        ) : detail === "phone" ? (
                            <a href={`tel:+${loc[detail]}`} target="_blank" rel="noreferrer">
                                {loc[detail]}
                            </a>
                        ) : (
                            loc[detail]
                        )
                    ) : (
                        `No ${detail} listed.`
                    )}
                    {detail === "hours" && loc.hours?.days && (
                        <div className="hours-list">{renderHours(loc[detail]["days"])}</div>
                    )}
                </span>
            );
        });
    };

    const renderTabs = (tabs) => {
        return tabs.map(({ key, name, icon, onPress }) => {
            return (
                <TabBar.Item
                    key={key}
                    title={name}
                    icon={icon}
                    onPress={() => onPress({ tab: key, location })}
                />
            );
        });
    };

    return (
        <StyledDrawer
            height="auto"
            placement="bottom"
            visible={visible}
            onClose={onClose}
        >
            {location && (
                <>
                    <img
                        referrerPolicy="no-referrer"
                        src={location.image ?? LocationPlaceholder}
                        alt={location.name}
                    />

                    <span className="top">
                        <h1>{location.name}</h1>
                        <span className="distance">
                            {location.distance && `${location.distance}km away`}
                        </span>
                    </span>

                    {renderDetails(location.details)}

                    {tabs && (
                        <TabBar tintColor="#08497E" unselectedTintColor="#08497E">
                            {renderTabs(tabs)}
                        </TabBar>
                    )}
                </>
            )}
        </StyledDrawer>
    );
};

export default LocationDetails;

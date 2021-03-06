import axios from "axios";

const url = process.env.REACT_APP_SERVER;

const readPlace = async (search) => {
    return await axios
        .get(`${url}readPlace`, {
            params: {
                search: search,
            },
        })
        .then((res) => {
            const { status, data } = res;
            const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

            if (status === 200) {
                let parsedHours;
                const { hours } = data;

                if (hours) {
                    if (hours[0].open && !hours[0].close) {
                        parsedHours = { status: "Open 24 hours." };
                    } else {
                        let days = {};

                        dayArr.forEach((day) => {
                            const period = hours && hours[dayArr.indexOf(day)];
                            days[day] = [period?.open?.time, period?.close?.time];
                        });

                        parsedHours = {
                            status: data.open_now ? "Open Now" : "Closed",
                            days,
                        };
                    }
                }

                return {
                    hours: parsedHours,
                    image: data.photoURL,
                    phone: data.phoneNumber,
                };
            }

            return {};
        }).catch(() => {
            return {};
        });
};

const readLocations = async (params) => {
    const response = await axios.get(`${url}readLocations`, { params });
    const { status, data } = response;

    let locations;

    if (status === 200) {
        locations = data.map(({ fields, distanceInKm }) => {
            const { local_area, type, cultural_space_name, website, address, geom } = fields;

            return {
                name: cultural_space_name,
                type,
                local_area,
                website,
                address,
                distance: distanceInKm && Math.round(distanceInKm),
                coordinates: {
                    lng: geom?.coordinates?.[0],
                    lat: geom?.coordinates?.[1],
                },
            };
        });
    }

    return locations;
};

export { readLocations, readPlace };

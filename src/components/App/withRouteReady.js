import React from "react";
import { onReadyNewRoute } from "./animation";

const withRouteReady = (Component, hasData = false) => () => {

    React.useEffect(() => {
        if (!hasData) {
            onReadyNewRoute();
        };
    }, []);

    return <Component onReadyNewRoute={onReadyNewRoute} />;
};

export default withRouteReady;
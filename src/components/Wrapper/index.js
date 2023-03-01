import React from "react";

import { makeStyles } from "@mui/styles";

const Wrapper = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "90%",
        margin: "0 auto"
    }
}));

export default React.memo(Wrapper)
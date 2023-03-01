import React from "react";

import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({post}) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.singlePost}>
            <CardContent>
                <Typography className={classes.postTitle}>
                    {post.title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles(() => ({
    singlePost: {
        width: "22%",
        marginBottom: "30px",
        "&:hover": {
            boxShadow: "8px -3px 22px -3px rgba(0,0,0,0.71)",
        }
    },
    postTitle: {
        fontSize: "17px !important",
        lineHeight: "1.2 !important",
        marginBottom: "10px !important",
    }
}));

export default React.memo(PostCard);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from '@mui/material';

import { usersStore } from "../store";

import Wrapper from "../components/Wrapper";
import PostCard from "../components/PostCard";

const Posts = () => {
    const classes = useStyles();

    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const postsList = useSelector(usersStore.selectUserPosts);

    const getUserPostsData = async () => {
        await dispatch(usersStore.getUserPosts(params.userId));
    }

    useEffect(() => {
        getUserPostsData();

        return () => dispatch(usersStore.celarUserPosts());
    }, [params.userId])
    
    return (
        <Wrapper>
            <Box className={classes.postsHeader}>
                <Button variant="text" onClick={() => navigate(-1)}>Users</Button>
                <Typography className={classes.title}>
                    Posts
                </Typography>
            </Box>
            <div className={classes.postsBlock}>
                {postsList.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const useStyles = makeStyles(() => ({
    postsBlock: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: "25px !important",
        width: "50%",
    },
    postsHeader: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px !important",
        borderBottom: "1px solid",
        justifyContent: "space-between",
    }
}));

export default React.memo(Posts);
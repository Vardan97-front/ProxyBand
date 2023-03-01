import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';

import { usersStore } from "../store";

import UserCard from "../components/UserCard";
import Wrapper from "../components/Wrapper";

const Users = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const usersList = useSelector(usersStore.selectUsers);

    const getUsersData = async () => {
        await dispatch(usersStore.getUsers());
    }

    useEffect(() => {
        if (!usersList.length) {
            getUsersData();
        }
    }, [usersList])


    return (
        <Wrapper>
            <Typography className={classes.title}>
                Users
            </Typography>
            <div className={classes.usersBlock}>
                {usersList.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const useStyles = makeStyles(() => ({
    usersBlock: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    title: {
        textAlign: "center",
        fontSize: "25px !important",
        marginBottom: "20px !important",
        borderBottom: "1px solid",
    }
}));

export default React.memo(Users);
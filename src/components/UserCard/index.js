import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

import { usersStore } from "../../store";

import AlbumModal from "../AlbumModal";

const UserCard = ({ user }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPosts = () => {
        navigate(`/posts/${user.id}`);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const getUserAlbums = async () => {
        await dispatch(usersStore.getUserAlbums(user.id));
        toggleModal();
    }

    return (
        <>
            <Card variant="outlined" className={classes.singleUser}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user.username}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user.email}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user.phone}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {user.website}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actionsBlock}>
                    <Button variant="contained" size="small" onClick={openPosts}>
                        Posts
                    </Button>
                    <Button variant="outlined" size="small" onClick={getUserAlbums}>
                        Alboms
                    </Button>
                </CardActions>
            </Card>

            {isModalOpen && (
                <AlbumModal
                    isModalOpen={isModalOpen}
                    closeModal={toggleModal}
                    modalTitle={"Albums"}
                />
            )}

        </>
    )
}

const useStyles = makeStyles(() => ({
    singleUser: {
        width: "22%",
        marginBottom: "30px",
        "&:hover": {
            boxShadow: "8px -3px 22px -3px rgba(0,0,0,0.71)",
        }
    },
    actionsBlock: {
        display: "flex",
        justifyContent: "end",
        padding: "16px !important"
    }
}));

export default React.memo(UserCard);
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";

import { usersStore } from "../../store";

import MyModal from "../MyModal";
import AlbumCard from "../AlbumCard";

const AlbumModal = ({ isModalOpen, closeModal, modalTitle }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const userAlbums = useSelector(usersStore.selectUserAlbums);

    const close = () => {
        dispatch(usersStore.celarUserAlbums());
        closeModal();
    }

    return (
        <MyModal
            closeModal={close}
            modalIsOpen={isModalOpen}
            modalTitle={modalTitle}
        >
            <div className={classes.userAlbumBlock}>
                {userAlbums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        title={album.title}
                    />
                ))}
            </div>
        </MyModal>
    )
}

const useStyles = makeStyles(() => ({
    userAlbumBlock: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        maxHeight: "450px",
        padding: "15px 0",
    },
}));

export default React.memo(AlbumModal);
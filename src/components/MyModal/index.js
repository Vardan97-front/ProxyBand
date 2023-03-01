import React from "react";
import Modal from 'react-modal';

import { makeStyles } from "@mui/styles";

import { Close } from '@mui/icons-material';

const MyModal = ({ children, closeModal, modalIsOpen, modalTitle }) => {
    const classes = useStyles();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName={classes.modalBlock}
        >
            <div className={classes.closeBlock}>
                <h3 className={classes.modalTitle}>{modalTitle}</h3>
                <div className={classes.closeButtonBlock} onClick={closeModal}>
                    <Close />
                </div>
            </div>
            {children}
        </Modal>
    )
}

const useStyles = makeStyles(() => ({
    modalBlock: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .ReactModal__Content": {
            border: "0 !important",
            width: "50%",
            inset: "auto !important",
            height: "auto",
            padding: "0 !important",
        }
    },
    closeBlock: {
        display: "flex",
        borderBottom: "1px solid #d8d7d7",
        width: "100%",
        backgroundColor: "#f8f8f8",
        alignItems: "center"
    },
    modalTitle: {
        fontSize: "20px",
        width: "95%",
        margin: 0,
        paddingLeft: "10px",
    },
    closeButtonBlock: {
        width: "5%",
        padding: "10px",
        borderLeft: "1px solid #d8d7d7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

export default React.memo(MyModal);
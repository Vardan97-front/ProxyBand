import React from "react";

import { makeStyles } from "@mui/styles";
import { FolderCopy } from '@mui/icons-material';

const AlbumCard = ({ title }) => {
    const classes = useStyles();

    return (
        <div className={classes.singleAlbum}>
            <div className={classes.folderBlock}>
                <FolderCopy />
            </div>

            <span className={classes.albumTitle}>{title}</span>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    singleAlbum: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        "&:hover": {
            backgroundColor: "#ececec",
        }
    },
    folderBlock: {
        backgroundColor: "#b1aeae",
        borderRadius: "50%",
        padding: "7px 9px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            color: "white"
        }
    },
    albumTitle: {
        marginLeft: "10px"
    }
}));

export default React.memo(AlbumCard);
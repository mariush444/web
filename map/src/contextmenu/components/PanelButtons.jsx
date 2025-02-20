import {ButtonGroup, IconButton, Paper} from "@mui/material";
import {Close, Delete, Folder} from "@mui/icons-material";
import React, {useContext, useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import L from "leaflet";
import AppContext from "../../context/AppContext";
import SaveTrackDialog from "./SaveTrackDialog";
import DeleteTrackDialog from "./DeleteTrackDialog";

const useStyles = makeStyles({
    buttongroup: {
        top: '20%',
        left: '5px',
        width: '10px',
        height: '10px',
    }
})

const PanelButtons = ({showContextMenu, setShowContextMenu}) => {

    const classes = useStyles();

    const ctx = useContext(AppContext);
    const divContainer = useRef(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    useEffect(() => {
        if (divContainer.current) {
            L.DomEvent.disableClickPropagation(divContainer.current);
            L.DomEvent.disableScrollPropagation(divContainer.current);
        }
    });

    return (ctx.selectedGpxFile &&
        <div>{showContextMenu && <div className={`${classes.buttongroup} ${'leaflet-bottom'}`} ref={divContainer}>
            <div className="leaflet-control leaflet-bar padding-container">
                <Paper>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary">
                        {ctx.currentObjectType !== 'cloud_track' && <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => {
                                ctx.selectedGpxFile.save = true;
                                ctx.setSelectedGpxFile({...ctx.selectedGpxFile});
                            }}
                        >
                            <Folder fontSize="small"/>
                        </IconButton>}
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            <Delete fontSize="small"/>
                        </IconButton>
                        <IconButton
                            variant="contained"
                            type="button"
                            onClick={() => setShowContextMenu(false)}
                        >
                            <Close fontSize="small"/>
                        </IconButton>
                    </ButtonGroup>
                </Paper>
            </div>
        </div>
        }
            {ctx.selectedGpxFile.save && <SaveTrackDialog/>}
            {openDeleteDialog && <DeleteTrackDialog dialogOpen={openDeleteDialog} setDialogOpen={setOpenDeleteDialog}
                                                    setShowContextMenu={setShowContextMenu}/>}
        </div>);
};

export default PanelButtons;
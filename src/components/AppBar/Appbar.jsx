import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardStyle from '../style/DashboardStyle';
import clsx from 'clsx';

// import { Link } from "react-router-dom";
// import Divider from '@material-ui/core/Divider';

export default () => {
    const classes = DashboardStyle();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar)}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Enhancesys Innovation
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

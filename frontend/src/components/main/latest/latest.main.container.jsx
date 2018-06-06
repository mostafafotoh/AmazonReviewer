import React from 'react';
import LatestMainComponent from './latest.component'
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        marginTop: 80,
        marginBottom:theme.spacing.size,
        marginLeft: 100,
        marginRight: 100,
        fontSize: 15,
        color: '#3F47BE'

    },
});

class LatestMainContainer extends React.Component {
    render() {
        const {classes, theme} = this.props;

        return (
            <div >
                <div className={classes.root}>
                    <h1>  Latest Search </h1>
                </div>
                <LatestMainComponent/>

            </div>
        );
    }
}

export default withStyles(styles) (LatestMainContainer);

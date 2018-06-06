import React from 'react';
import TrendMainComponent from './trend.component'
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        marginTop: 80,
        marginBottom: theme.spacing.size,
        marginLeft: 100,
        marginRight: 100,
        fontSize: 15,
        color: '#3F47BE'

    },
});

class TrendMainContainer extends React.Component {

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <h1>Trending Now</h1>
                </div>
                <TrendMainComponent/>

            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true}) (TrendMainContainer);

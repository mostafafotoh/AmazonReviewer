import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Service from '../service/service'
import Moment from 'react-moment';
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        marginTop: 50,

    },


});


class LatestMainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadPrediction();
    }

    loadPrediction = () => {
        Service.loadData((data) => {
            this.setState({

                data: data,

            })
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Product ID</CustomTableCell>
                                <CustomTableCell>Product Name</CustomTableCell>
                                <CustomTableCell>Real Feedback</CustomTableCell>
                                <CustomTableCell>Amazon Feedback</CustomTableCell>
                                <CustomTableCell>Data & Time</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map(record => {
                                return (
                                    <TableRow className={classes.row} key={record.id}>
                                        <CustomTableCell component="th" scope="row">
                                            {record.product_id}
                                        </CustomTableCell>
                                        <CustomTableCell>{record.name}</CustomTableCell>
                                        <CustomTableCell>{record.rate}</CustomTableCell>
                                        <CustomTableCell>{record.amazon_rate}</CustomTableCell>
                                        <CustomTableCell><Moment parse="YYYY-MM-DD HH:mm">
                                            {record.date}
                                        </Moment></CustomTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>


            </div>
        );
    }
}

LatestMainComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LatestMainComponent);

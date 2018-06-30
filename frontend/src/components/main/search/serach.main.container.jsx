import React from 'react';
import SearchMainComponent from './serach.component'
import HorizontalLabelPositionBelowStepper from './step.component'
class SearchMainContainer extends React.Component {

    render() {
        return (
            <div>
                <HorizontalLabelPositionBelowStepper/>
                <SearchMainComponent/>

            </div>
        );
    }
}

export default SearchMainContainer;

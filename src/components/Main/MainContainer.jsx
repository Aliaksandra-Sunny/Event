import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Main from './Main';
import { setMainData } from '../../redux/mainReducer';

const MainContainer = props => {

    const { events, setMainData } = props;

    useEffect(() => {
        setMainData();
    }, []);

    return (
        <div>
            {
                events ?
                    <Main events={events} /> :
                    <LinearProgress color="secondary" />
            }
        </div>

    );

};

const mapStateToProps = state => {
    return {
        events: state.mainPage.events,
    };
};

export default connect(mapStateToProps, {
    setMainData,
})(MainContainer);

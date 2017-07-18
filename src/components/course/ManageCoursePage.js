import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';

class ManageCoursePage extends React.Component{
    constructor (props, context){
        super (props, context);
    }
    render(){
        return (
            <h1>Manage course</h1>
        );
    }
}

ManageCoursePage.PropTypes = {

};

function mapStateToProps(state, ownProps){
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
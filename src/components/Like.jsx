import React from "react";
import PropTypes from 'prop-types';

class Like extends React.Component {
    render() {
        return (
            <>
                <i onClick={() => this.props.onChange()}
                   style={{cursor: 'pointer'}}
                   className={this.props.status === true ? "fa fa-heart-o" : "fa fa-heart"}>

                </i>
            </>
        )
    }
}

Like.propTypes = {
    status: PropTypes.bool.isRequired,
    onChange:PropTypes.func.isRequired,
}

export default Like
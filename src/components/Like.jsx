import React from "react";

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

export default Like
import React, {Component} from "react";
import Like from "./Like";
import ProductList from "./ProductList";

class TestLike extends Component {
    state = {
        isLike: false
    }

    render() {
        return (
            <>
                <Like status={this.state.isLike} onChange={()=>this.setState({isLike:!this.state.isLike})}/>
            </>
        )
    }
}

export default TestLike
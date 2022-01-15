import React, {Component} from "react";
import * as productService from '../Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Like from "./Like";

class ProductList extends Component {
    state = {
        products: productService.getProducts()
    }
    setLike = (id) => {
        const products = [...this.state.products];
        const product = products.find(p => p.id == id)
        product.like = !product.like
        this.setState({products: products})
    }

    render() {
        return (
            <>
                <div className='container'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                        <tr>
                            <td>نام محصول</td>
                            <td>قیمت</td>
                            <td>سازنده</td>
                            <td>موجودی</td>
                            <td>علاقه مندی ها</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.menuFacture}</td>
                                <td>{p.quantity}</td>
                                <td>
                                    <Like status={p.like} onChange={()=>this.setLike(p.id)}

                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ProductList;
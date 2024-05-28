import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {
            Products: []
        }
    }
    componentDidMount() {
        fetch("http://apps.codebetter.in:8082/emall/api/product/list")
            .then(response => response.json())
            .then(data => this.setState({ Products: data }))
    }
    render() {
        return (
            <div>
                <div class="row tm-row tm-mb-45">
                    <div class="col-12">
                        <h3 className='text-center'>PRODUCTS LIST</h3>
                        <hr class="tm-hr-primary tm-mb-55" />
                        {this.state.Products.length == 0 ? <button className='btn btn-primary'>
                            <span className='spinner-border text-white'></span>Loading...
                        </button> : ""}
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        S.No.
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Category
                                    </th>
                                    <th>
                                        Brand
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Products.map((ob, index) =>
                                    <tr>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {ob.prod_name}
                                        </td>
                                        <td>
                                            {ob.prod_cate}
                                        </td>
                                        <td>
                                            {ob.prod_brand}
                                        </td>
                                        <td>
                                            Rs.{ob.prod_price}
                                        </td>
                                        <td>
                                            <img src={"data:image/png;base64," + ob.prod_image} height={50} width={50}></img>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

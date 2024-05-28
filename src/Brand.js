import React, { Component } from 'react'

export default class Brand extends Component {
    constructor() {
        super()
        this.state = {
            Brands: []
        }
    }
    componentDidMount() {
        fetch("http://apps.codebetter.in:8082/emall/api/brand/list")
            .then(response => response.json())
            .then(data => this.setState({ Brands: data }))
    }
    save = (event) => {
        var ob = {
            brand_name: this.brand_box.value
        }
        fetch("http://apps.codebetter.in:8082/emall/api/brand/save", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ob)
        }).then(response => response.json())
            .then(data => {
                if (data.status) {
                    this.setState({ Brands: [...this.state.Brands, data.Brand] })
                }
            })
        event.preventDefault();
        event.target.reset();
    }
    render() {
        return (
            <div>
                <div class="row tm-row tm-mb-45">
                    <div class="col-12">
                        <h3 className='text-center'>PRODUCTS BRANDS</h3>
                        <hr class="tm-hr-primary tm-mb-55" />
                        {this.state.Brands.length == 0 ? <button className='btn btn-primary'>
                            <span className='spinner-border text-white'></span>Loading...
                        </button> : ""}
                        <form onSubmit={this.save}>
                            <div className='container bg-light p-3 mt-2'>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <input type="text" ref={ob => this.brand_box = ob} placeholder='Enter Brand Name' className='form-control' />
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <button className='btn btn-outline-primary'>ADD BRAND</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        S.No.
                                    </th>
                                    <th>
                                        Product Category
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Brands.map((ob, index) =>
                                    <tr>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {ob.brand_name}
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

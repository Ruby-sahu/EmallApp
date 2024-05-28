import React, { Component } from 'react'

export default class Category extends Component {
    constructor() {
        super()
        this.state = {
            Categories: []
        }
    }
    componentDidMount() {
        fetch("http://apps.codebetter.in:8082/emall/api/category/list")
            .then(response => response.json())
            .then(data => this.setState({ Categories: data }))
    }
    save = (event) => {
        var ob = {
            cate_name: this.cate_box.value
        }
        fetch("http://apps.codebetter.in:8082/emall/api/category/save", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ob)
        }).then(response => response.json())
            .then(data => {
                if (data.status) {
                    this.setState({ Categories: [...this.state.Categories, data.Category] })
                }
            })
        event.preventDefault();
        event.target.reset();
    }
    render() {
        return (
            <div>
                <div className="row tm-row tm-mb-45">
                    <div className="col-12">
                        <h3 className='text-center'>PRODUCTS CATEGORY</h3>
                        <hr className="tm-hr-primary tm-mb-55" />
                        {this.state.Categories.length == 0 ? <button className='btn btn-primary'>
                            <span className='spinner-border text-white'></span>Loading...
                        </button> : ""}

                        <form onSubmit={this.save}>
                            <div className='container bg-light p-3 mt-2'>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <input type="text" ref={ob => this.cate_box = ob} placeholder='Enter Category Name' className='form-control' />
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                        <button className='btn btn-outline-primary'>ADD CATEGORY</button>
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
                                {this.state.Categories.map((ob, index) =>
                                    <tr>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {ob.cate_name}
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

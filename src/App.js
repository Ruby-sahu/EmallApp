import { Component } from "react";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Category from "./Category";
import Brand from './Brand';
import Product from "./Product";
import Contact from "./Contact";


export default class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <div class="container-fluid">
                    <main class="tm-main">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/Categories" element={<Category />}></Route>
                            <Route path="/Brands" element={<Brand />}></Route>
                            <Route path="/Products" element={<Product />}></Route>
                            <Route path="/Contact" element={<Contact />}></Route>
                        </Routes>
                    </main>
                </div>
            </>
        )
    }
}
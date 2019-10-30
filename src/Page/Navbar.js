import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <ul id="slide-out" class="side-nav fixed z-depth-2">
                <li class="center no-padding">
                    <div class="indigo darken-2 white-text logo">
                        <div class="row">
                            <img alt="" src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463990208/photo_dkkrxc.png" class="circle responsive-img" />
                            <p>Tirth Patel</p>
                        </div>
                    </div>
                </li>

                <li id="dash_dashboard"><a class="waves-effect" href="#!"><b>Dashboard</b></a></li>

                <ul class="collapsible" data-collapsible="accordion">
                    <li id="dash_users">
                        <div id="dash_users_header" class="collapsible-header waves-effect"><b>Users</b></div>
                        <div id="dash_users_body" class="collapsible-body">
                            <ul>
                                <li id="users_seller">
                                    <a class="waves-effect" href="#!">Seller</a>
                                </li>

                                <li id="users_customer">
                                    <a class="waves-effect" href="#!">Customer</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="dash_products">
                        <div id="dash_products_header" class="collapsible-header waves-effect"><b>Products</b></div>
                        <div id="dash_products_body" class="collapsible-body">
                            <ul>
                                <li id="products_product">
                                    <a class="waves-effect" href="#!">Products</a>
                                    <a class="waves-effect" href="#!">Orders</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="dash_categories">
                        <div id="dash_categories_header" class="collapsible-header waves-effect"><b>Categories</b></div>
                        <div id="dash_categories_body" class="collapsible-body">
                            <ul>
                                <li id="categories_category">
                                    <a class="waves-effect" href="#!">Category</a>
                                </li>

                                <li id="categories_sub_category">
                                    <a class="waves-effect" href="#!">Sub Category</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="dash_brands">
                        <div id="dash_brands_header" class="collapsible-header waves-effect"><b>Brands</b></div>
                        <div id="dash_brands_body" class="collapsible-body">
                            <ul>
                                <li id="brands_brand">
                                    <a class="waves-effect" href="#!">Brand</a>
                                </li>

                                <li id="brands_sub_brand">
                                    <a class="waves-effect" href="#!">Sub Brand</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </ul>
        )
    }
}
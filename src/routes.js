import React from 'react';
import { Switch, Route } from "react-router-dom";

import Dashboard from './Pages/Dashboard';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Customer from './Pages/Customer';
import Report from './Pages/Report';
import Integration from './Pages/Integration';

export default class Router extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/order" component={Order} />
                <Route path="/product" component={Product} />
                <Route path="/customer" component={Customer} />
                <Route path="/report" component={Report} />
                <Route path="/integration" component={Integration} />
            </Switch>
        )
    }
}

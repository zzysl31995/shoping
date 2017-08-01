import React,{Component} from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../containers/Home/index';
export default class RouterMap extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactMap from '../routes/index'
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
//这是根组件
 class App extends Component {
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render() {
        return (
            <div>
                {this.state.done?<ReactMap/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                done:true
            })
        },500);
        console.log(this.props.userAction)

    }
}
export default connect(
    state=>{
         return {}
    },
    dispatch=>{
        return {
            userAction:bindActionCreators(Actions,dispatch)
        }
    }
)(App)
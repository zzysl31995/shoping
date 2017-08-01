import React, {Component} from 'react';

import ReactMap from '../routes/index'
//这是根组件
export default  class App extends Component {
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
        },500)

    }
}
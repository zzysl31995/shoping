import React,{Component} from 'react';
import {getList} from '../../../fetch/home/index'
import ListComponent from '../../../components/ListComponent/index'
export default  class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true,
            data:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));

    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
               this.setState({
                   hasMore,
                   data
               })
        })
    }
}

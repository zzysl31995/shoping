import React,{Component} from 'react';
import {getList} from '../../../fetch/home/index'
import ListComponent from '../../../components/ListComponent/index'
import LoadMore from "../../../components/LoadMore/index";
export default  class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true,
            data:[],
            page:0,
            isLoad:true
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));

    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoad:true
        },()=>{
            this.processData(getList(this.props.cityName,this.state.page));

        })
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
               this.setState({
                   hasMore,
                   data:this.state.data.concat(data),
                   isLoad:false
               })
        })
    }
}

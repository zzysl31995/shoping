import React, {Component} from 'react';

export default  class LoadMore extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hasMore ? <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div> : <div>已经加载完毕</div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.fn = ()=>{
            clearTimeout(this.timer);
          this.timer = setTimeout(()=>{
             if(this.props.isLoad){
                 return
             }
             let height = window.screen.height;
             let top = this.refs.more.getBoundingClientRect().top;
             if(top<height){
                 this.props.loadMore();
             }
          },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }
    loadMore(){
        if(this.props.isLoad){
            return
        }

    }
}
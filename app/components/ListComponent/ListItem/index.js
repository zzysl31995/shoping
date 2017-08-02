import React, {Component} from 'react';
import './index.less'
export default  class ListItem extends Component {
    render() {
        let {distance, id, price, subTitle, img, title, number} = this.props.data;
        return (
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <div>
                        <strong>￥{price}</strong>
                        <span>已售出{number}</span>
                    </div>
                </div>
                <span className="distance">{distance}</span>
            </div>
        )
    }
}
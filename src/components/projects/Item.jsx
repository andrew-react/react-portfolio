import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className='item' onClick={() => {this.props.onProjectShow(this.props.item)}}>
        <div className='img-block'>
            <img src={'./img/projects/' + this.props.item.img} alt="none" />
        </div>
        <div className='title-block'>
            <div>
                <span className='title'>{this.props.item.title}</span>
            </div>
        </div>
        <div className='desc-block'>
            <p>{this.props.item.description}</p>
        </div>
      </div>
    )
  }
}

export default Item
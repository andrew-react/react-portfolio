import React, { Component } from 'react';
import Item from './Item';


export class Items extends Component {
  render() {
    return (
        <div className='projects-block'>
            {this.props.projects.map(el => (
                <Item onProjectShow={this.props.onProjectShow} key={el.id} item={el} />
            ))}
        </div>
    )
  }
}

export default Items
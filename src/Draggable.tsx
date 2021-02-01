import React, { Component } from 'react';
import { constants } from 'smooth-dnd';

const { wrapperClass } = constants;

export interface DraggableProps {
  render?: () => React.ReactElement;
  className?: string;
}

class Draggable extends Component<DraggableProps> {
  render() {
    if (this.props.render) {
      return React.cloneElement(this.props.render(), {
        className: wrapperClass,
      });
    }

    return (
      <div
        {...this.props}
        className={`${this.props.className || ''} ${wrapperClass}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;

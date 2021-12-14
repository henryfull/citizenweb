// Dependencias
import React, { Component } from 'react';

// Assets

class Content extends Component {

  render() {
    const { body } = this.props;    
    return (
      <div className="container" >
        {body}

      </div>

    );
  }

}

export default Content;

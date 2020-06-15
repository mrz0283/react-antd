import React, { Component } from 'react';
import { Card } from 'antd';
import D3Tree from './D3Test'

class TableView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Card>
          <D3Tree ></D3Tree>
        </Card>
      </div>
    );
  }
}

export default TableView;

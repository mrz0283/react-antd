import React, { Component } from 'react';
import { Card } from 'antd';
import D3Tree from './D3Test'
import PageHeader from '@/components/Header/headerCrumbs'

class TableView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20 }}>
          <D3Tree ></D3Tree>
        </Card>
      </div>
    );
  }
}

export default TableView;

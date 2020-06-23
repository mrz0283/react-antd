import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeader from '@/components/Header/headerCrumbs'

class LineView extends Component {

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
        </Card>
      </div>
    );
  }
}

export default LineView;

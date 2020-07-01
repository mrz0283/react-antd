import React, { Component } from 'react';
import { Card } from 'antd';
import PageHeader from '@/components/Header/headerCrumbs'
import LineChart from '../Bar/components/LineUtil'

class LineView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const dataSe = {
      tttt: 'All',
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };

    const dataSe2 = {
      tttt: 'All',
      angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };
    const option = {
      tttt: 'All',
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }]
    };
    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20, width: '100%' }}>
          <LineChart dataSource={dataSe} style={{ height: 520, width: '50%', float: 'left' }} />
          <LineChart dataSource={dataSe2} style={{ height: 520, width: '50%', float: 'left' }} />
        </Card>
        <Card style={{ marginTop: 20, width: '100%' }}>
          <LineChart dataSource={option} style={{ height: 520, width: '100%' }} />
        </Card>
      </div>
    );
  }
}

export default LineView;

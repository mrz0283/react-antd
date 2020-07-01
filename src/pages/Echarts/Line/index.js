import React, { Component } from 'react';
import PageHeader from '@/components/Header/headerCrumbs'
import LineChart from '../Bar/components/LineUtil'
import { Card } from 'antd';

class BarView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = {
      title: '事件总量',
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      series: [
        {
          name: '事件量',
          // 曲线是否平滑
          // smooth: true,
          colourType: 'YellowOne',
          type: 'line',
        },
      ],
      data: [[1, 2, 3, 5, 4, 7, 5, 7, 5, 7, 5, 9, 4]],
    }
    const dataOne = {
      tttt:'All',
      title: {
          text: 'Step Line'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['Step Start', 'Step Middle', 'Step End']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name: 'Step Start',
              type: 'line',
              step: 'start',
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: 'Step Middle',
              type: 'line',
              step: 'middle',
              data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
              name: 'Step End',
              type: 'line',
              step: 'end',
              data: [450, 432, 401, 454, 590, 530, 510]
          }
      ]
  };
  

    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20 }}>
          <LineChart dataSource={data} style={{ height: 520, width: '100%' }} />
        </Card>
        <Card style={{ marginTop: 20, width: '100%' }}>
          <LineChart dataSource={dataOne} style={{ height: 520, width: '100%' }} />
        </Card>
        {/* <Card style={{ marginTop: 20, width: '100%' }}>
          <LineChart dataSource={dataSe} style={{ height: 520, width: '50%',float:'left' }} />
          <LineChart dataSource={dataSe2} style={{ height: 520, width: '50%',float:'left'  }} />
        </Card> */}
      </div>
    );
  }
}

export default BarView;

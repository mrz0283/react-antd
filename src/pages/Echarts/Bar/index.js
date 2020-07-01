import React, { Component } from 'react';
import PageHeader from '@/components/Header/headerCrumbs'
import LineChart from './components/LineUtil'
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
          type: 'bar',
        },
      ],
      data: [[1, 2, 3, 5, 4, 7, 5, 7, 5, 7, 5, 9, 4]],
    }
    const dataOne = {
      tttt: 'All',
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '广告',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '广告',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '广告',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '搜索引擎',
          type: 'bar',
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
            data: [
              [{ type: 'min' }, { type: 'max' }]
            ]
          }
        },
        {
          name: '百度',
          type: 'bar',
          barWidth: 5,
          stack: '搜索引擎',
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: '谷歌',
          type: 'bar',
          stack: '搜索引擎',
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: '必应',
          type: 'bar',
          stack: '搜索引擎',
          data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
          name: '其他',
          type: 'bar',
          stack: '搜索引擎',
          data: [62, 82, 91, 84, 109, 110, 120]
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

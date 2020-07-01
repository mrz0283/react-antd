import React from 'react';
import echarts from 'echarts';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.elref = React.createRef();
    this.lineChart = null;
    this.option = null;
  }

  componentDidMount() {
    this.initChart();
  }

  getColor = colourType => {
    // 如果没有定义或者类型不否则返回#0088FF
    if (
      undefined === colourType ||
      colourType === null ||
      colourType === '' ||
      colourType === 'BlueOne'
    ) {
      return '#0088FF';
    }
    if (colourType === 'YellowOne') {
      return '#FF9E00';
    }
    if (colourType === 'BlueTwo') {
      return '#3054EB';
    }
    return '#0088FF';
  };

  getMaxColour = colourType => {
    // 如果没有定义或者类型不否则返回#0088FF
    if (
      undefined === colourType ||
      colourType === null ||
      colourType === '' ||
      colourType === 'BlueOne'
    ) {
      return 'rgba(0,136,255,0.2)';
    }
    if (colourType === 'YellowOne') {
      return 'rgba(255,158,0,0.2)';
    }
    if (colourType === 'BlueTwo') {
      return 'rgba(48,84,235,0.2)';
    }
    return 'rgba(0,136,255,0.2)';
  };

  getMinColour = colourType => {
    // 如果没有定义或者类型不否则返回#0088FF
    if (
      undefined === colourType ||
      colourType === null ||
      colourType === '' ||
      colourType === 'BlueOne'
    ) {
      return 'rgba(0,136,255,0)';
    }
    if (colourType === 'YellowOne') {
      return 'rgba(255,158,0,0)';
    }
    if (colourType === 'BlueTwo') {
      return 'rgba(48,84,235,0)';
    }
    return 'rgba(0,136,255,0)';
  };

  getYSign = sign => {
    if (undefined === sign || sign === null) {
      return '';
    }
    return sign;
  };

  initOption = () => {
    // 校验参数合法性
    const dataNew = this.props.dataSource || {};
    if (dataNew.tttt !== 'All') {
      debugger
      const { xData, title, data, ySign } = dataNew;
      const seriesData = dataNew.series;
      const series = [];
      const newYsign = this.getYSign(ySign);
      const legendName = [];
      const colorArray = [];
      if (undefined !== seriesData && seriesData !== null && seriesData.length > 0) {
        for (let i = 0; i < seriesData.length; i += 1) {
          colorArray.push(this.getColor(seriesData[i].colourType));
          if (undefined !== seriesData[i].smooth && seriesData[i].smooth !== null) {
            debugger
            series.push({
              name: seriesData[i].name,
              data: data[i],
              type: 'bar',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: colorArray[i],
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: this.getMaxColour(seriesData[i].colourType), // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: this.getMinColour(seriesData[i].colourType), // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            });
          } else {
            series.push({
              name: seriesData[i].name,
              data: data[i],
              type: seriesData[i].type,
              lineStyle: {
                color: colorArray[i],
              },
              showSymbol: false,
            });
          }
          legendName.push(seriesData[i].name);
        }
      }
      console.log("ddddd", series)
      const option = {
        title: {
          text: undefined !== title && title !== null ? title : '',
          top: 16,
          left: 24,
          textStyle: {
            color: 'rgba(0,0,0,0.85)',
            fontSize: 16,
            fontWeight: 500,
          },
        },
        backgroundColor: '',
        color: colorArray,
        textStyle: {
          color: '#999999',
        },
        grid: {
          top: 60,
          right: 10,
          bottom: 30,
          left: 100,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
          formatter(value) {
            let xData = '';
            for (let i = 0; i < value.length; i += 1) {
              if (i === 0) {
                xData = value[i].axisValue;
                xData = `${xData}<br/>${value[i].marker}${value[i].seriesName}：${value[i].data}${newYsign}`;
              } else {
                xData = `${xData}<br/>${value[i].marker}${value[i].seriesName}：${value[i].data}${newYsign}`;
              }
            }
            return xData;
          },
        },
        legend: {
          data: legendName || [],
          right: 10,
          top: 15,
          icon: 'rect',
          textStyle: {
            color: '#999999',
          },
          itemHeight: 4,
          itemWidth: 12,
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(69,120,230,0.14)',
            },
          },
          axisLabel: {
            formatter(value) {
              return value.split(' ')[1];
            },
          },
          data: xData,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(69,120,230,0.14)',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(69,120,230,0.14)',
            },
          },
          axisPointer: {
            label: {
              formatter(params) {
                return `${params.value.toFixed(2)}${newYsign}`;
              },
            },
          },
          minInterval: 1,
        },
        series,
      };
      return option;
    } else {
      debugger
      return dataNew;
    }
  };

  initChart = () => {
    this.lineChart = echarts.init(this.elref.current);
    this.option = this.initOption();
    this.lineChart.setOption(this.option);
    window.onresize = this.lineChart.resize;
  };

  render() {
    if (this.lineChart) {
      this.option = this.initOption();
      this.lineChart.setOption(this.option);
    }
    return (
      <>
        <div ref={this.elref} style={{ width: this.props.style.width, height: this.props.style.height, float: this.props.style.float }} />
      </>
    );
  }
}

export default Line;

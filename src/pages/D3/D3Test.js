import React, { Component } from 'react';

class D3PieView extends Component {

  constructor(props) {
    super(props);
    this.svg = null;
    this.tooltip = null;
    this.state = {};
  }

  componentDidMount() {
    const data = [
      [
        { x: 0, y: 5 }, { x: 1, y: 9 }, { x: 2, y: 7 },
        { x: 3, y: 5 }, { x: 4, y: 3 }, { x: 6, y: 4 },
        { x: 7, y: 2 }, { x: 8, y: 3 }, { x: 9, y: 2 }
      ],
      //下面的这个只是定义了一个sin函数而已，
      d3.range(10).map(function (i) {
        return { x: i, y: Math.sin(i) + 5 };
      })
    ];
    this.draw(data);

  }

  // 数据
  draw = (dates) => {
    //颜色比例尺
    var color = d3.scaleOrdinal(d3.schemeCategory10);//scaleOrdinal序数比例尺,d3.schemeCategory10 表示10种颜色。
    // 定义边界
    const margin = { top: 400, bottom: 50, left: 200, right: 100 },
      width = 1000, height = 300;

    const xScale = d3.scaleLinear()   //scaleLinear() 线性比例尺
      .domain([0, 10])             //domain 定义域（因为数据是0到9 十个，所以定义了[0-10]）
      .range([0, width - 2 * margin.left]); //range 值域（表明占据的宽度 而且和定义域对应）

    //y轴比例尺
    const yScale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, height - 2 * margin.top]);    //因坐标原点在左上角,所以把值域颠倒，不然y轴的大小不对（注意是y轴）

    const xAxis = d3.axisBottom()     //axisBottom表明绘制下方坐标轴
      .scale(xScale);

    //y轴设置
    const yAxis = d3.axisLeft()       //axisBottom表明绘制左侧坐标轴
      .scale(yScale);

    const svgApp = d3.select("#trendSvg").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svgApp.append("g")
      .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")
      .attr("class", "x axis")
      .call(xAxis);

    svgApp.append("g")
      .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")
      .attr("class", "y axis")
      .call(yAxis);

    //上方的设置 会影响到 内部的值(如果不写该行的话，数值是反的)
    yScale.range([0, height - 2 * margin.top]);


    //画图
    //定义线条生成器
    const line = d3.line()            //定义
      .x(function (d) {
        xScale(d.x)
        return xScale(d.x)      //xScale 比例尺  d.x 是 因为数据是json格式 所以用.
      })
      .y(function (d) {
        return yScale(d.y);     //xScale 比例尺  d.y 是 因为数据是json格式 所以用.
      })
      .curve(d3.curveBasis);      //作用是 使线段变得缓和 //可以删除试下



    //绘制图形
    const lineShape = svgApp.append("g")
      .attr("class", "lineData")
      .selectAll(".lineData")
      .data(dates);                //添加数据

    lineShape.enter()               //enter update exit 中的enter(数据多余元素)
      .append("path")             //添加 path 元素
      .attr("class", "lineData")
      .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")       //修改坐标原点
      .attr("d", function (d) {
        // return "M20,20L300,100";         //数据点的位置
        return line(d);
      })
      .attr("fill", "none")        //填充颜色 设为 none
      .attr("stroke", function (d, i) {        //此处是设置 边框颜色
        return color(i);           //利用前方定义的颜色 比例尺
      })
      .attr("stroke-width", "1px");       //边框宽度（此处就是线条宽度）
  }

  render() {
    return (
      <div style={{ border: '1px solid black' }}>
          <div id="trendSvg">
          </div>
      </div>
    );
  }
}

export default D3PieView;

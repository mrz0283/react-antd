import React, { Component } from 'react';
import { Tag, Modal, Divider, Button, Input } from 'antd';
import Drag from './components/Drag'
import PageHeader from '@/components/Header/headerCrumbs'

const { confirm } = Modal;

class TableView extends Component {
  columns = [
    {
      title: <div><span>123</span><span>456</span></div>,
      dataIndex: 'name',
      width: 200,
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: <div>
        <b>类别</b>
      </div>,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      areaList: [],
      width: 0,
      height: 0,
    };
  }

  areaClick = () => {
    if (this.state.height && this.state.width) {
      let { areaList } = this.state;
      const key = areaList.length + 1
      areaList.push({ key, height: `${this.state.height}px`, width: `${this.state.width}px`, color: this.getRandomColor() })
      debugger
      this.setState({ areaList })
    }
  }

  onChangeWidth = e => {
    this.setState({
      width: e.target.value,
    })
  }

  onChangeHeight = e => {
    this.setState({
      height: e.target.value,
    })
  }

  //随机颜色，十六进制方法；
  getRandomColor = () => {
    var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    debugger
    if (rand.length == 6) {
      return `#${rand}`;
    } else {
      return this.getRandomColor();
    }
  }

  render() {
    const { areaList } = this.state;
    return (
      <div>
        <PageHeader></PageHeader>
        <div style={{ height: 1000, marginTop: 20 }}>

          <Input onChange={this.onChangeWidth} placeholder="宽度" style={{ width: 200 }}></Input>
          <Input onChange={this.onChangeHeight} placeholder="高度" style={{ width: 200 }}></Input>
          <Button onClick={this.areaClick}>新增区域</Button>
          <div id='1' style={{ position: 'absolute', height: 800, width: 800, backgroundColor: 'gray' }}>
            <Drag height={800} width={800} style={{ width: '100px', height: '100px', backgroundColor: 'green', position: 'absolute' }} onMove={(offet) => {
              console.log("拖拽元素当前位置：", offet);
            }}>
            </Drag>
            {areaList.map(item => <Drag height={800} width={800} style={{ width: `${item.width}`, height: `${item.height}`, backgroundColor: item.color, position: 'absolute' }} onMove={(offet) => {
              console.log("拖拽元素当前位置：", offet);
            }}>
            </Drag>)}
          </div>
        </div >
      </div>
    );
  }
}

export default TableView;


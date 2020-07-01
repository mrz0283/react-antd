import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Tag, Select, Card, Button, Input } from 'antd';
import PageHeader from '@/components/Header/headerCrumbs'
// import TranslateGoogle from 'google-translate-api' 
// import 'await' 

const { TextArea } = Input;

@connect(({ modelAll }) => {
  return {
    modelAll,
  };
})
class Translate extends Component {

  constructor(props) {
    super(props);
    this.lan = [
      { code: 'zh', name: '中文' },
      { code: 'en', name: '英语' },
      { code: 'yue', name: '粤语' },
      { code: 'jp', name: '日语' },
    ]
    this.state = {
      value: ''
    };
  }

  transaltClick = () => {
    const { form, dispatch } = this.props;
    const { from, to, content } = this.state
    dispatch({
      type: 'modelAll/translateView',
      payload: { from, to, content },
      callback: response => {
        debugger
        this.setState({
          value: response.trans_result[0].dst,
        })
      },
    });
  }

  from = value => {
    this.setState({
      from: value,
    })
  }

  to = value => {
    this.setState({
      to: value,
    })
  }

  content = e => {
    this.setState({
      content: e.target.value,
    })
  }

  fanyi = () => {
  }

  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20 }}>
          <Select onChange={this.from} style={{ width: 200, marginBottom: 50, marginRight: 50 }}>
            {this.lan.map(item => {
              return <Option key={item.code} value={item.code}>{item.name}</Option>
            })}
          </Select>
          <span style={{ marginRight: 50 }}>
            -&gt;
          </span>
          <Select onChange={this.to} style={{ width: 200, marginRight: 50 }}>
            {this.lan.map(item => {
              return <Option key={item.code} value={item.code}>{item.name}</Option>
            })}
          </Select>
          <Button onClick={this.transaltClick} style={{ marginTop: 20 }}>翻译</Button>
          <div>
            <TextArea style={{ width: '50%', float: 'left' }} onChange={this.content}></TextArea>
            <TextArea style={{ width: '50%', float: 'left' }} value={this.state.value}></TextArea>
          </div>
        </Card>
      </div >
    );
  }
}

export default Translate;


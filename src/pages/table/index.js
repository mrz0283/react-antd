import React, { Component } from 'react';
import { Table, Tag, Divider, Card } from 'antd';
import Styles from './index.less';
import PageHeader from '@/components/Header/headerCrumbs'

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

  render() {
    const { areaList } = this.state;
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20 }} className={Styles.header}>
          <Table columns={this.columns} dataSource={data} scroll={{ x: 1100 }} />
        </Card>
      </div >
    );
  }
}

export default TableView;


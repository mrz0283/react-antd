import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';
import router from '@/routes'

@withRouter
class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
  }

  componentDidMount() {
    const path = this.props.match.path;
    let name = [];
    this.crumbsName(router, path, name);
    this.setState({
      name,
    })
  }


  crumbsName = (routers, path, name) => {
    if (!path || path === '/') {
      return;
    }
    routers.forEach(item => {
      if (path.indexOf(item.path) !== -1) {
        name.push(item.name)
        if (item.children) {
          this.crumbsName(item.children, path, name)
        }
      }
    });
  }

  breadName = () => {
    const { name } = this.state;
    return name.map(item => {
      return <Breadcrumb.Item>{item}</Breadcrumb.Item>
    })
  }

  render() {
    return (
        <div style={{ height: 21, margin: '24 0 24 0' }}>
          <Breadcrumb>
            {this.breadName()}
          </Breadcrumb>
        </div >
    );
  }
}

export default TableView;


import React, { Component } from 'react';
import styleIndex from '../index.less';
import router from 'umi/router';
import { Menu, Icon } from 'antd';
import logo from '@/assets/logo.jpg'
import routes from '@/routes'

const { SubMenu } = Menu;

class SideBarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: window.location.hash,
    };
  }

  componentDidMount() { }

  menuList = data => {
    return data.map(item => {
      if (item.children && item.children.length > 0) {

        return <SubMenu
          key={item.path}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }>
          {this.childrenMenu(item.children)}

        </SubMenu>
      }
      return <Menu.Item key={item.path} onClick={() => this.clickMenu(item)}>
        <Icon type={item.icon}></Icon>
        <span>{item.name}</span></Menu.Item>
    })
  }

  childrenMenu = data => {
    return data.map(item => {
      if (item.children && item.children.length > 0) {
        return <SubMenu
          key={item.path}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }>
          {this.childrenMenu(item.children)}

        </SubMenu>
      }
      return <Menu.Item key={item.path} onClick={() => this.clickMenu(item)}>{item.name}</Menu.Item>
    })
  }

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  clickMenu = record => {
    debugger
    const curPath = window.location.hash;
    if (curPath === record.path) {
      return;
    }
    this.setState({ activeMenu: record.path }, () => {
      debugger
      router.push(record.path);
      // window.scrollTo(0, 0);
    });
  }

  render() {
    const { activeMenu } = this.state;
    return <div style={{ height: '100%' }}>
      <div className={styleIndex.sideHeader}>
        <img className={styleIndex.imgStyle} src={logo}></img>
      </div>
      <div style={{ height: '100%' }} >
        <Menu
          mode={this.props.menuMode}
          style={{ width: '100%', height: '100%' }}
          theme={this.props.colorTheme}
          selectedKeys={[activeMenu]}
          forceSubMenuRender
        >
          {this.menuList(routes)}
        </Menu>
      </div>
    </div>;
  }
}

export default SideBarContent;
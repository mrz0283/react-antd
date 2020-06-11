import React, { Component } from 'react';
import styleIndex from '../index.less'
import { Icon, Dropdown, Menu } from 'antd'

const { SubMenu } = Menu;

class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: false,
    };
  }

  componentDidMount() { }

  iconClick = e => {
    const { visable } = this.state;
    this.setState({
      visable: !visable
    }, () => {
      this.props.clickIcon(visable ? false : e);
    })
  }


  render() {
    const { visable } = this.state;
    const menu = (
      <Menu style={{ marginTop: 20 }}>
        <Menu.Item onClick={this.props.colorClick}>
          主题颜色改变
        </Menu.Item>
        <Menu.Item onClick={this.props.menuClick}>
          菜单类型(垂直、内嵌切换)
        </Menu.Item>
      </Menu>
    );
    return <div>
      <span onClick={this.iconClick} style={{ marginLeft: 20 }}><Icon type="menu-fold" style={{ color: 'blue', display: visable ? 'none' : 'contents' }} /><Icon type="menu-unfold" style={{ color: 'blue', display: !visable ? 'none' : 'contents' }} /></span>
      <div style={{ height: 64, clear: 'both' }} className={styleIndex.headerRight}>
        <span className={styleIndex.loginIcon}></span>
        <span style={{ float: 'left' }}>***</span>
        <Dropdown className={styleIndex.headerIcon} overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </div>;
  }
}

export default HeaderContent;
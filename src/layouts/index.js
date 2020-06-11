import React, { Component } from 'react';
// import zhCN from 'antd/es/locale/zh_CN';
import { Layout, ConfigProvider } from 'antd';
// import { menuList } from '@/utils/constants';
import HeaderContent from './components/Header';
import FooterContent from './components/Footer';
import SideBarContent from './components/SideBar';
import styles from './index.less';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
let globalTitle = '';

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    // this.clickIcon = this.clickIcon.bind(this);
    this.state = {
      collapsed: false,
      menuMode: 'vertical',
      colorTheme: 'light',
    };
  }

  clickIcon = (data) => {
    this.setState(
      {
        collapsed: data,
      },
      () => { },
    );
  }

  menuClick = () => {
    const { menuMode } = this.state;
    this.setState({
      menuMode: menuMode === 'vertical' ? 'inline' : 'vertical',
    })
  }

  colorClick = () => {
    const { colorTheme } = this.state;
    this.setState({
      colorTheme: colorTheme === 'light' ? 'dark' : 'light',
    })
  }

  render() {
    const { collapsed, menuMode, colorTheme } = this.state;
    const newStyle = collapsed ? { marginLeft: 80 } : { marginLeft: 240 };
    return (
      <ConfigProvider>
        <Layout className={styles.layout}>
          <Sider trigger={null} collapsible collapsed={collapsed} className={styles.layoutSiderBar} width={collapsed ? 80 : 240} theme="light">
            <SideBarContent menuMode={menuMode} colorTheme={colorTheme}  collapsed={collapsed}></SideBarContent>
          </Sider>
          <Layout id="layout" style={newStyle} className={styles.trans}>
            <Header className={styles.layoutHeader}>
              <HeaderContent menuClick={this.menuClick} colorClick={this.colorClick} collapsed={collapsed} clickIcon={this.clickIcon}></HeaderContent>
            </Header>
            <Content>
              <div className={styles.layoutContent}>{this.props.children}</div>
            </Content>
            <Footer className={styles.layoutFooter}>
              <FooterContent></FooterContent>
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    );
  }
}

export default BasicLayout;

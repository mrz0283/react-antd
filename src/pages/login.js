import React, { Component } from 'react';
import { Form, Row, Col, Input, Divider, Radio, Select, Upload, Modal, Button, Icon, message } from 'antd';
import './style.less'

class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      projectList: [],
      fileListView: [],
    };
  }

  render() {
    return (
      <div id="container">
        <div id="output">
          <div class="containerT">
            <h1>用户登录</h1>
            <form class="form" id="entry_form">
              <input type="text" placeholder="用户名" id="entry_name" value="admin" />
              <input type="password" placeholder="密码" id="entry_password" />
              <button type="button" id="entry_btn">登录</button>
              <div id="prompt" class="prompt"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TableView;

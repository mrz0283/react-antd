import React, { Component } from 'react';
// import PageHeaderWrapper from '@/components/breadcrumb';
import { Form, Row, Col, Input, Divider, Radio, Select, Upload, Modal, Button, Icon, message } from 'antd';
import { connect } from 'dva';
import Api from '@/utils/api';
import router from 'umi/router';
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;

@connect(({ loading, merchantsHousing }) => {
  return {
    merchantsHousing,
    loadingSearch: loading.effects['merchantsHousing/getTableListInfo'],
  };
})
@Form.create()
class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      projectList: [],
      fileListView: [],
    };
  }

  componentDidMount = () => { }

  getUploadProps = () => {
    const This = this;
    const { fileListView } = this.state;
    const uploadProps = {
      accept: '.png,.jpg',
      name: 'file',
      fileList: this.state.fileList,
      action: `${Api.fileservice}/w/fileManage/common/file?&business=DECORATION`,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZXhoaWJpdGlvbiIsImFsbCIsImZpbmFuY2lhbCIsImNvbnRyYWN0IiwiZXN0YXRlIiwiZnVuZGFtZW50YWwiLCJpb3QiLCJub3RpZmljYXRpb24iLCJicmMiLCJmaWxlIiwidWFhIiwiY29sbGVjdGl2aXphdGlvbiIsIm9wZXJhdGlvbiIsImJwbSJdLCJ1c2VyX25hbWUiOiJzYWRtaW4iLCJzY29wZSI6WyJ3ZWIiXSwibW9iaWxlIjoiMTU1MDI5MTY3NzAiLCJleHAiOjIxOTY2Njk3MDUsInVzZXJJZCI6ImU2MGE2OTFkLTNkNjctNGNiOS05N2NlLTNmYjA1OWZiMzE5MSIsImF1dGhvcml0aWVzIjpbIlJPTEVfMDAwMDAxIl0sImp0aSI6Ijk4ZjdjNmU2LWM4NjctNGY1Yi1hYmVjLWNiNzkyNWY1YTYyOSIsImFjY291bnQiOiJzYWRtaW4iLCJjbGllbnRfaWQiOiJ3ZWIifQ.Q7SpzcPkqwWfX84_efQiSpZVyBj0poYU32vSEN3PTo0',
      },
      beforeUpload(file) {
        const isLt10M = file.size / 1024 / 1024 <= 1;
        if (!isLt10M) {
          message.error("文件大小限制在1M以下！");
          file.status = 'error';
          return false;
        }
      },
      onChange(info) {
        This.setState({ fileList: info.fileList });
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功！`);
          const { data } = info.file.response
          This.setState({ fileListView: [...fileListView, { uid: data.id, name: data.fileName, status: 'done', url: data.fullPath }] });
        }
      },
      onRemove: file => {
        if(file.status === 'done'){
          This.setState({ fileListView: fileListView.filter((item)=> item.uid !== file.response.data.id) });
        }
        const index = This.state.fileList.indexOf(file);
        const newFileList = This.state.fileList.slice();
        newFileList.splice(index, 1);
        This.setState({ fileList: newFileList });
      },
    };
    return uploadProps;
  }


  submentClick = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    const { priceUnit, price, fileList } = this.state;
    form.validateFields((err, formValue) => {
      debugger
      if (err) { return; }
      debugger
    });
  };

  getUploadOneProps = () => {
    const This = this;
    const uploadProps = {
      accept: '.png,.jpg',
      name: 'file',
      fileList: this.state.imgUrlList,
      action: `${Api.fileservice}/w/fileManage/common/file?&business=DECORATION`,
      headers: {
        Authorization: sessionStorage.getItem('autnorization'),
        clientId: sessionStorage.getItem('clientId'),
      },

      onChange(info) {
        This.setState({ imgUrlList: info.fileList.slice(-1) });
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功！`);
        }
        if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败！`);
        }
      },
    };
    return uploadProps;
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { previewVisible, previewImage,fileListView, fileList, previewTitle, imgUrlList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="upload"></Icon>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = imgUrlList && imgUrlList[0] && imgUrlList[0].response && imgUrlList[0].response.data ? imgUrlList[0].response.data.fullPath : '';
    return (
      <div>
        <Form>
          <Row type="flex" gutter={{ md: 8, lg: 12, xl: 24 }}>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <FormItem label="多张照片">
                {getFieldDecorator('fileList', {
                  rules: [
                    {
                      required: true,
                      message: '该项不能为空',
                    },
                  ],
                })(
                  <div className="clearfix">
                    <Upload
                      {...this.getUploadProps()}
                      listType="picture-card"
                      fileList={fileList}
                    >
                      {fileListView.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      title={previewTitle}
                      footer={null}
                      onCancel={this.handleCancel}
                    >
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </div>,
                )}
              </FormItem>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <FormItem label="单张照片">
                {getFieldDecorator('imgUrlList', {
                  rules: [
                    {
                      required: true,
                      message: '该项不能为空',
                    },
                  ],
                })(
                  <div>

                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      {...this.getUploadOneProps()}
                    >
                      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <span >图片比例：(宽:高为5:4)</span>
                  </div>,
                )}
              </FormItem>
            </Col>
          </Row>
          {/* <div>
            <Button onClick={this.submentClick}></Button>
          </div> */}
        </Form>
      </div>
    );
  }
}

export default TableView;

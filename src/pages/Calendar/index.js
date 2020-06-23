import React, { Component } from 'react';
import { Modal, Badge, Card, Calendar } from 'antd';
import PageHeader from '@/components/Header/headerCrumbs'

const { confirm } = Modal;

class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }

  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender = (value) => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  render() {
    return (
      <div>
        <PageHeader></PageHeader>
        <Card style={{ marginTop: 20 }}>
          <Calendar onPanelChange={this.onPanelChange} dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        </Card>
      </div>
    );
  }
}

export default CalendarView;

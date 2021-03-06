import React, { useContext } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Statistic, Card, Row, Col } from 'antd';
import { StatisticDataContext } from '../../store/reducer';
import { getNowFormatDate } from '../../global/url';

export default () => {
  const { data } = useContext(StatisticDataContext); 
  const date = getNowFormatDate();
  let yesterdayCurrentConfirmed = 0;
  let yesterdaysupected = 0;

  return (
    <div style={{ background: '#ECECEC', padding: '30px', fontSize:12}}>
      <Row gutter={[18,24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="日期"
              value={date}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有确诊"
              value={data.currentConfirmedCount}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
            <h5>昨日{yesterdayCurrentConfirmed}</h5>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="现有疑似"
              value={data.suspectedCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
            />
            <h5>昨日{yesterdaysupected}</h5>
          </Card>
        </Col>
      </Row>
      <Row gutter={[18,24]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计确诊"
              value={data.confirmedCount}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计治愈"
              value={data.curedCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="累计死亡"
              value={data.deadCount}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
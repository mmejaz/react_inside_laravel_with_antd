import { Card, Col, Row } from 'antd';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/plots';


function Charts() {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];



      const config = {
        data,
        height: 400,
        xField: 'year',
        yField: 'value',
      };


  return (
    <>
        <Row gutter={16}>
    <Col span={8}>
      <Card title="Line Chart" bordered={false}>
      <Line {...config} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
    </>
  )
}

export default Charts

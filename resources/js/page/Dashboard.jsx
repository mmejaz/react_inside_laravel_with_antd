import { Card, Col, Row } from "antd";

function Dashboard() {
    return (
        <>
            <Row gutter={16}>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>{" "}
        </>
    );
}

export default Dashboard;

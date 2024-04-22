import { Card, Col, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
    updateAge,
    updateName,
    updateStatus,
    fetchUsers,
} from "../store/slices/userSlice";
function Dashboard() {
    const { name, age, status } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();
    const changeAget = () => {
        dispatch(fetchUsers());
    };
    return (
        <>
            <Row gutter={16}>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        {name}
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        {age}
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        {status}
                    </Card>
                </Col>
                <Col xl={6} xs={24} md={12}>
                    <Card title="Card title" bordered={false}>
                        <Button type="primary" onClick={() => changeAget()} />
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;

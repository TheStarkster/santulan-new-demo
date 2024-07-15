import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import { history } from '@umijs/max';

const UserDetails: React.FC = () => {

    const handleBackClick = () => {
        history.push('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <ArrowLeftOutlined onClick={handleBackClick} style={{ marginRight: '10px', cursor: 'pointer' }} />
                <h2 style={{ margin: 0 }}>Behavioral Health Expert</h2>
            </div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card title="Upcoming Sessions">
                        {/* Replace with actual content */}
                        <p>No upcoming sessions</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Session History">
                        {/* Replace with actual content */}
                        <p>No session history</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default UserDetails;

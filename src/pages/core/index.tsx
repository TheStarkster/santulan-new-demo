import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const newAppointments = [
    { id: 1, name: 'Pawan', concerns: 'Headache, Stress', language: 'English', status: 'New', email: 'pawan@example.com' },
    { id: 2, name: 'Amit', concerns: 'Back pain, Anxiety', language: 'Hindi', status: 'New', email: 'amit@example.com' },
    { id: 3, name: 'Sara', concerns: 'Insomnia, Fatigue', language: 'English', status: 'New', email: 'sara@example.com' },
    { id: 4, name: 'John', concerns: 'Anxiety, Fatigue', language: 'English', status: 'Upcoming', email: 'john@example.com' },
      { id: 5, name: 'Emily', concerns: 'Stress, High blood pressure', language: 'English', status: 'Upcoming', email: 'emily@example.com' },
    // Add more new appointments as needed
  ];

  // const upcomingSessions = [
  //   { id: 4, name: 'John', concerns: 'Anxiety, Fatigue', language: 'English', status: 'Upcoming', email: 'john@example.com' },
  //   { id: 5, name: 'Emily', concerns: 'Stress, High blood pressure', language: 'English', status: 'Upcoming', email: 'emily@example.com' },
  //   // Add more upcoming sessions as needed
  // ];

  const handleCardClick = (appointmentId) => {
    navigate(`/details?id=${appointmentId}`);
  };

  return (
    <div style={{ minHeight: '85vh', padding: '20px' }} >
      <div style={{ marginBottom: '20px'}}>
      <Title style={{ fontWeight: 500, fontSize:20 }}>New Appointments</Title>
      </div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Row gutter={[16, 16]}>
            {newAppointments.map((appointment) => (
              <Col key={appointment.id} xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} onClick={() => handleCardClick(appointment.id)}>
                  <Title level={5} style={{ marginBottom: '10px' }}>{appointment.name}</Title>
                  <Text style={{ color: 'rgb(90, 90, 90)' }}>Concerns:</Text>
                  <Text style={{ display: 'block', color: 'black' }}>{appointment.concerns}</Text>
                </Card>
              </Col>
            ))}
          </Row>
          {/* <a href="#view-all-new-appointments" style={{ color: 'rgb(255, 96, 50)', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            View All <RightOutlined />
          </a> */}
        </div>

        {/* <div>
          <Title level={2} style={{ fontWeight: 'normal' }}>Upcoming Sessions</Title>
          <Row gutter={[16, 16]}>
            {upcomingSessions.map((session) => (
              <Col key={session.id} xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} onClick={() => handleCardClick(session.id)}>
                  <Title level={4} style={{ marginBottom: '10px' }}>{session.name}</Title>
                  <Text style={{ color: 'lightgrey' }}>Concerns:</Text>
                  <Text style={{ display: 'block', color: 'black' }}>{session.concerns}</Text>
                </Card>
              </Col>
            ))}
          </Row>
          <a href="#view-all-upcoming-sessions" style={{ color: 'rgb(255, 96, 50)', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            View All <RightOutlined />
          </a>
        </div> */}
      </Space>
    </div>
  );
};

export default Home;

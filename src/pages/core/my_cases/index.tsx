import React from 'react';
import { Card, Row, Col, Typography, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Mycases = () => {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, name: 'Pawan', concerns: 'Headache, Stress', language: 'English', email: 'pawan@example.com', requestedAt: '2024-07-10', scheduledAt: null, gender: 'Male', contact: '1234567890', emergencyContact: '0987654321', companyName: 'ABC Corp', country: 'India', eapStatus: 'Active' },
    { id: 2, name: 'Amit', concerns: 'Back pain, Anxiety', language: 'Hindi', email: 'amit@example.com', requestedAt: '2024-07-11', scheduledAt: '2024-07-16', gender: 'Male', contact: '0987654321', emergencyContact: '1234567890', companyName: 'XYZ Inc', country: 'India', eapStatus: 'Inactive' },
    { id: 3, name: 'Sara', concerns: 'Insomnia, Fatigue', language: 'English', email: 'sara@example.com', requestedAt: '2024-07-12', scheduledAt: null, gender: 'Female', contact: '1122334455', emergencyContact: '5544332211', companyName: 'LMN Ltd', country: 'USA', eapStatus: 'Active' },
    // Add more appointments as needed
  ];

  const handleCardClick = (appointment: any) => {
    navigate('/appointment-details', { state: { appointment } });
  };

  const renderStatus = (appointment: any) => {
    if (appointment.scheduledAt) {
      return 'Completed';
    }
    return 'Allotted';
  };

  return (
    <div style={{ minHeight: '85vh', padding: '20px' }}>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div>
          <Row gutter={[16, 16]}>
            {appointments.map((appointment) => (
              <Col key={appointment.id} xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} onClick={() => handleCardClick(appointment)}>
                  <Title level={4} style={{ marginBottom: '10px' }}>{appointment.name}</Title>
                  <Text style={{ color: 'rgb(90, 90, 90)' }}>Concerns:</Text>
                  <Text style={{ display: 'block', color: 'black' }}>{appointment.concerns}</Text>
                  <Divider />
                  {appointment.scheduledAt ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text>Scheduled at: {appointment.scheduledAt}</Text>
                      <Text>Status: {renderStatus(appointment)}</Text>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text>Requested at: {appointment.requestedAt}</Text>
                      <Text>Status: {renderStatus(appointment)}</Text>
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Space>
    </div>
  );
};

export default Mycases;

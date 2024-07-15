import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Typography, Select, Button, Space, Divider } from 'antd';
import { CheckCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Details = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get('id');
  const navigate = useNavigate();

  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [isCounselorAssigned, setIsCounselorAssigned] = useState(false);

  const appointments = [
    {
      id: 1, name: 'Pawan', concerns: 'Headache, Stress', language: 'English', status: 'New', email: 'pawan@example.com',
      gender: 'Male', contact: '1234567890', emergencyContact: '0987654321', companyName: 'ABC Corp', country: 'India', eapStatus: 'Active', bookingDate: '2024-07-15'
    },
    // Add other appointment details similarly
  ];

  const counselors = ['Counselor A', 'Counselor B', 'Counselor C'];

  const appointment = appointments.find(app => app.id === parseInt(id));

  const handleAssignCounselor = () => {
    setIsCounselorAssigned(true);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeftOutlined style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
          <Title style={{ fontWeight: 'normal', margin: 0, fontSize: 25 }}>
            {appointment.name}
          </Title>
          <Text style={{ marginLeft: '10px', color: 'lightblack' }}>(Schedule Session)</Text>
        </div>
      </div>

      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Card bordered={false} style={{ width: '100%', marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Booking Details</Title>
            <p><strong>Booking Date:</strong> {appointment.bookingDate}</p>
            <p><strong>Language:</strong> {appointment.language}</p>
            <p><strong>Concerns:</strong> {appointment.concerns}</p>
          </Card>

          <Card bordered={false} style={{ width: '100%', marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Client Details</Title>
            <p><strong>Gender:</strong> {appointment.gender}</p>
            <p><strong>Contact:</strong> {appointment.contact}</p>
            <p><strong>Emergency Contact:</strong> {appointment.emergencyContact}</p>
            <p><strong>Company Name:</strong> {appointment.companyName}</p>
            <p><strong>Country:</strong> {appointment.country}</p>
            <Divider />
            <p><strong>EAP Status:</strong> {appointment.eapStatus}</p>
          </Card>

          {!isCounselorAssigned && (
            <>
              <Title style={{ fontSize: 15, marginBottom: '5px' }}>Select attendee:</Title>
              <Select
                style={{ width: '100%', marginBottom: '10px' }}
                placeholder="Counselor or Core Team member"
                onChange={value => setSelectedCounselor(value)}
              >
                {counselors.map(counselor => (
                  <Option key={counselor} value={counselor}>{counselor}</Option>
                ))}
              </Select>
            </>
          )}

          {isCounselorAssigned && (
            <Card bordered={false} style={{ width: '100%', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleOutlined style={{ color: 'green', marginRight: '10px' }} />
                <Text style={{ color: 'green' }}>Counselor Assigned</Text>
              </div>
            </Card>
          )}

          {!isCounselorAssigned && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Button
                type="primary"
                style={{ backgroundColor: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)' }}
                onClick={handleAssignCounselor}
              >
                Allot and Save
              </Button>
            </div>
          )}
        </Space>
      </div>
    </div>
  );
};

export default Details;

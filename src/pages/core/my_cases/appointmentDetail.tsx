import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Typography, Space, Divider, DatePicker, TimePicker, Button, Radio, Modal, Row, Col } from 'antd';
import moment from 'moment';

const { Title, Text } = Typography;

const AppointmentDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const appointment = state?.appointment;

  const [scheduledDate, setScheduledDate] = useState(appointment?.scheduledAt ? moment(appointment.scheduledAt) : null);
  const [scheduledTime, setScheduledTime] = useState(appointment?.scheduledAt ? moment(appointment.scheduledAt) : null);
  const [isReminderModalVisible, setIsReminderModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState(null);

  const handleDateChange = (date: any) => {
    setScheduledDate(date);
    if (scheduledTime) {
      const updatedTime = scheduledTime.clone().set({
        year: date.year(),
        month: date.month(),
        date: date.date(),
      });
      setScheduledDate(updatedTime);
    }
  };

  const handleTimeChange = (time: any) => {
    setScheduledTime(time);
    if (scheduledDate) {
      const updatedDate = scheduledDate.clone().set({
        hour: time.hour(),
        minute: time.minute(),
        second: time.second(),
      });
      setScheduledTime(updatedDate);
    }
  };

  const handleScheduleSave = () => {
    if (scheduledDate && scheduledTime) {
      const combinedDateTime = scheduledDate.clone().set({
        hour: scheduledTime.hour(),
        minute: scheduledTime.minute(),
        second: scheduledTime.second(),
      });
      // Save the scheduled date and time
      console.log('Scheduled at:', combinedDateTime.format('YYYY-MM-DD HH:mm:ss'));
    }
    // Update appointment status or save the scheduled date and time
  };

  const handleGoToChat = () => {
    navigate('/chat');
  };

  const showReminderModal = () => {
    setIsReminderModalVisible(true);
  };

  const handleReminderOk = () => {
    setIsReminderModalVisible(false);
  };

  const handleReminderCancel = () => {
    setIsReminderModalVisible(false);
  };

  const handleReminderChange = (e: any) => {
    setReminderTime(e.target.value);
  };

  if (!appointment) {
    return <div>No appointment selected</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Button type="link" onClick={() => navigate(-1)}>&lt; Back</Button>
      <Row gutter={[64, 16]}>
        <Col span={12}>
          <Card bordered={false} style={{ marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Booking Details</Title>
            <p><strong>Booking Date:</strong> {appointment.requestedAt}</p>
            <p><strong>Language:</strong> {appointment.language}</p>
            <p><strong>Concerns:</strong> {appointment.concerns}</p>
          </Card>

          <Card bordered={false} style={{ marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Client Details</Title>
            <p><strong>Gender:</strong> {appointment.gender}</p>
            <p><strong>Email ID:</strong> {appointment.email}</p>
            <p><strong>Contact:</strong> {appointment.contact}</p>
            <p><strong>Emergency Contact:</strong> {appointment.emergencyContact}</p>
            <p><strong>Company Name:</strong> {appointment.companyName}</p>
            <p><strong>Country:</strong> {appointment.country}</p>
            <Divider />
            <p><strong>EAP Status:</strong> {appointment.eapStatus}</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} style={{ marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Date</Title>
            <DatePicker style={{ width: '100%' }} onChange={handleDateChange} value={scheduledDate} />
          </Card>

          <Card bordered={false} style={{ marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Time</Title>
            <TimePicker style={{ width: '100%' }} onChange={handleTimeChange} value={scheduledTime} />
          </Card>

          <Card bordered={false} style={{ marginBottom: '10px' }}>
            <Title level={4} style={{ marginBottom: '10px' }}>Reminder</Title>
            <Button onClick={showReminderModal} style={{ width: '100%' }}>
              {reminderTime ? `Reminder set for ${reminderTime} minutes before` : 'Set Reminder'}
            </Button>
          </Card>

          <Row gutter={16} style={{ marginTop: '10px' }}>
            <Col span={12}>
              <Button type="primary" style={{ width: '100%', backgroundColor: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)' }} onClick={handleScheduleSave}>
                Schedule and Save
              </Button>
            </Col>
            <Col span={12}>
              <Button type="default" style={{ width: '100%', backgroundColor: 'white', color: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)' }} onClick={handleGoToChat}>
                Go to Chat
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Set timer to get notified"
        visible={isReminderModalVisible}
        onOk={handleReminderOk}
        onCancel={handleReminderCancel}
      >
        <Radio.Group onChange={handleReminderChange} value={reminderTime}>
          <Space direction="vertical">
            <Radio value={10}>10 minutes before meeting</Radio>
            <Radio value={20}>20 minutes before meeting</Radio>
            <Radio value={30}>30 minutes before meeting</Radio>
            <Radio value={40}>40 minutes before meeting</Radio>
          </Space>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default AppointmentDetails;

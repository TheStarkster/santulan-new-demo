import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'antd';
import ModalComponent from './modals';
import { CloseOutlined, CheckCircleOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { useMediaQuery } from 'react-responsive';

const MyComponent: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isThankYouModalVisible, setIsThankYouModalVisible] = useState(false);
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleFormSubmit = () => {
        setIsModalVisible(false);
        setIsThankYouModalVisible(true);
        setIsAppointmentBooked(true);
    };

    const handleThankYouOk = () => {
        setIsThankYouModalVisible(false);
        navigateToHome();
    };

    const navigateToBlogs = () => {
        history.push('/blogs');
    };

    const navigateToHome = () => {
        history.push('/services');
    };

    const viewDetails = () => {
        history.push('/deatil');
    };

    return (
        <>
        <Row gutter={[16, 16]}>
                <Col span={isDesktopOrLaptop ? 8 : isTabletOrMobile ? 12 : 24}>
                    <Card>
                        <Row gutter={[16, 16]}>
                            <Col span={isMobile ? 24 : 8} style={{
                                backgroundImage: `url(card_1.jpeg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '220px',
                                borderRadius: 10
                            }}>
                            </Col>
                            <Col span={isMobile ? 24 : 16}>
                                <div>
                                    <h3 style={{ fontWeight: 'bold' }}>Consultation Behavioral Health Expert</h3>
                                    <p style={{ fontWeight: 'lighter' }}>Experienced counselors provide counseling services for a wide range of emotional & behavioral concerns.</p>
                                    <Button
                                        style={{ backgroundColor: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)', color: 'white', width: '100%', marginTop: 40 }}
                                        onClick={isAppointmentBooked ? viewDetails : showModal}
                                    >
                                        {isAppointmentBooked ? 'View details' : 'Book appointment'}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        {isAppointmentBooked && (
                            <div style={{ marginTop: 16 }}>
                                <h3 style={{ fontWeight: 'bold' }}>
                                    <CheckCircleOutlined style={{ marginRight: 8 }} />
                                    Appointment booked!
                                </h3>
                                <p>We have received your booking. One of our dedicated counselors will reach out to you within the next 24 hours.</p>
                            </div>
                        )}
                    </Card>
                </Col>
                <Col span={isDesktopOrLaptop ? 8 : isTabletOrMobile ? 12 : 24}>
                    <Card>
                        <Row gutter={[16, 16]}>
                            <Col span={isMobile ? 24 : 8} style={{
                                backgroundImage: `url(card_2.jpeg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '220px',
                                borderRadius: 10
                            }}>
                            </Col>
                            <Col span={isMobile ? 24 : 16}>
                                <div>
                                    <h3 style={{ fontWeight: 'bold' }}>Consultation Legal Expert</h3>
                                    <p style={{ fontWeight: 'lighter' }}>For legal assistance reach out to us at:</p>
                                    <a href="tel:+123456789" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                        <PhoneOutlined style={{ marginRight: '8px' }} /> <span>+91 9818711035</span>
                                    </a> <br />
                                    <a href="https://wa.me/123456789" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                        <WhatsAppOutlined style={{ marginRight: '8px' }} /> <span>+91 9818198117</span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={isDesktopOrLaptop ? 8 : isTabletOrMobile ? 12 : 24}>
                    <Card>
                        <Row gutter={[16, 16]}>
                            <Col span={isMobile ? 24 : 8} style={{
                                backgroundImage: `url(card_3.jpeg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '220px',
                                borderRadius: 10
                            }}>
                            </Col>
                            <Col span={isMobile ? 24 : 16}>
                                <div>
                                    <h3 style={{ fontWeight: 'bold' }}>Consultation Financial Expert</h3>
                                    <p style={{ fontWeight: 'lighter' }}>For financial assistance reach out to us at:</p>
                                    <a href="tel:+123456789" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                        <PhoneOutlined style={{ marginRight: '8px' }} /> <span>+91 9818711035</span>
                                    </a>
                                    <br />
                                    <a href="https://wa.me/123456789" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                        <WhatsAppOutlined style={{ marginRight: '8px' }} /> <span>+91 9818198117</span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <ModalComponent
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                onFormSubmit={handleFormSubmit}
            />

            <Modal
                title={null}
                visible={isThankYouModalVisible}
                onOk={handleThankYouOk}
                onCancel={handleThankYouOk}
                footer={null}
                width="30%"
                centered
                closeIcon={<CloseOutlined />}
            >
                <div style={{ textAlign: 'center', position: 'relative' }}>
                    <CheckCircleOutlined style={{ fontSize: '27px', color: 'green', position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)' }} />
                </div>
                <h2 style={{ textAlign: 'center', marginTop: '30px', color: 'black' }}>Thank You for Registering!</h2>
                <p style={{ textAlign: 'center', color: 'black' }}>
                    We have received your booking. One of our dedicated counselors will reach out to you within 24 hours.
                    In case you have any questions or need any further assistance feel free to give us a call at <span style={{ fontWeight: 'bold' }}>+91 99818711035</span>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button type="primary" onClick={navigateToBlogs} style={{ width: '40%', marginBottom: '10px', backgroundColor: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)' }}>
                        Read Blogs
                    </Button>
                    <Button type="primary" onClick={navigateToHome} style={{ width: '40%', backgroundColor: 'transparent', borderColor: 'transparent', color: 'black' }}>
                        Go back to home screen
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default MyComponent;

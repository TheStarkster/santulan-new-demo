import React, { useState } from 'react';
import { Button, Modal, Typography } from 'antd';
import { BellOutlined, PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const MenuRender: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type='primary' danger onClick={showModal} style={{ padding: '15px' }}>Emergency contact</Button>
            <Button type='link' style={{ marginLeft: '30px' }}>
                <BellOutlined style={{ fontSize: 22, color: 'black' }} />
            </Button>

            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                centered
                closeIcon={<CloseOutlined />}
                onClose={handleCancel}
            >
                <div style={{ textAlign: 'center' }}>
                    <PlusCircleOutlined style={{ fontSize: '27px', color: 'red', marginBottom: '20px' }} />
                    <Title level={3} style={{ fontWeight: 'bold' }}>Emergency support</Title>
                </div>
                <p>If you are experiencing thoughts of suicide/self-harm, please reach out to <Text strong>+91 9818711035</Text> to talk to our experts.</p>
                <p>Your life matters and there are people who can provide the immediate support that you need.</p>
            </Modal>
        </>
    );
};

export default MenuRender;

import React, { useState } from 'react';
import { Modal, Form, Select, Checkbox, Button, Row, Col } from 'antd';

const { Option } = Select;

interface ModalComponentProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    onFormSubmit: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onOk, onCancel, onFormSubmit }) => {
    const [selectAll, setSelectAll] = useState(false);
    const [form] = Form.useForm();

    const handleSelectAll = (e: any) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        form.setFieldsValue({
            concerns: checked
                ? ["Low mood", "Anxiety", "Stress", "Emotional issues", "Low confidence", "Overthinking/worrying", "Lack of motivation", "Loneliness", "Procrastination", "Difficulty focusing", "Appetite disturbance", "Sleep difficulties", "Work-life balance", "Relationship issues", "Parenting issues", "Martial conflict", "Burnout", "Grief and loss", "Life transitions/changes", "Counseling before"]
                : []
        });
    };

    const onFinish = () => {
        onFormSubmit();
    };

    return (
        <Modal
            title={<h2 style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Behavioral health expert</h2>}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            footer={null}
            width="40%"
        >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
                    <p style={{ marginBottom: 0, fontWeight: 'bold' }}>Client Intake Form <span style={{ color: 'lightgrey' }}>(Select Concerns)</span></p>
                    <Checkbox onChange={handleSelectAll} checked={selectAll}>Select All</Checkbox>
                </Row>
                <Form.Item name="language" rules={[{ required: true, message: 'Please select a language' }]}>
                    <Select placeholder="Select language" style={{ width: '20vh' }}>
                        <Option value="English">English</Option>
                        <Option value="Hindi">Hindi</Option>
                        <Option value="Bengali">Bengali</Option>
                        <Option value="Malayalam">Malayalam</Option>
                        <Option value="Tamil">Tamil</Option>
                        <Option value="Gujarati">Gujarati</Option>
                        <Option value="Kannada">Kannada</Option>
                        <Option value="Marathi">Marathi</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="concerns" rules={[{ required: true, message: 'Please select at least one concern' }]}>
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row gutter={[0, 16]}>
                            <Col span={8}>
                                <Checkbox value="Low mood">Low mood</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Anxiety">Anxiety</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Stress">Stress</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Emotional issues">Emotional issues</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Low confidence">Low confidence</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Overthinking/worrying">Overthinking/worrying</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Lack of motivation">Lack of motivation</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Loneliness">Loneliness</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Procrastination">Procrastination</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Difficulty focusing">Difficulty focusing</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Appetite disturbance">Appetite disturbance</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Sleep difficulties">Sleep difficulties</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Work-life balance">Work-life balance</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Relationship issues">Relationship issues</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Parenting issues">Parenting issues</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Martial conflict">Martial conflict</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Burnout">Burnout</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Grief and loss">Grief and loss</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Life transitions/changes">Life transitions/changes</Checkbox>
                            </Col>
                            <Col span={24} style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}>
                                <Checkbox value="Counseling before">I have done counseling before.</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item>
                    <div style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ width: '20vh', backgroundColor: 'rgb(255, 96, 50)', borderColor: 'rgb(255, 96, 50)' }}>
                            Submit
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalComponent;

import React from 'react';
import { Layout, Input, Card, Row, Col, Typography } from 'antd';
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import styled from 'styled-components';

const { Search } = Input;
const { Title } = Typography;

const Blog: React.FC = () => {
  const blogData = [
    {
      title: 'Mental health professionals in India - Who they are and what they do',
      content: 'Mental health professionals in India include psychologists, psychiatrists, and counselors. They work towards diagnosing, treating, and managing mental health disorders. Psychologists often provide therapy and counseling, while psychiatrists can prescribe medication.',
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
    {
      title: 'When to seek help: Signs of mental distress that you should look out for',
      content: 'Mental distress can manifest in various ways, including changes in mood, behavior, and physical health. Recognizing these signs early can help you seek timely assistance from a mental health professional.',
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
    {
      title: 'When to seek help: Signs of mental distress that you should look out for',
      content: 'Mental distress can manifest in various ways, including changes in mood, behavior, and physical health. Recognizing these signs early can help you seek timely assistance from a mental health professional.',
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
  ];

  const handleCardClick = (index: number) => {
    history.push(`/fullBlogPost?id=${index}`);
  };

  return (
    <div>
      <Search placeholder="Search blogs on behavioral health" style={{ maxWidth: 400, margin: '18px 0', paddingLeft: 22 }} />
      <StyledContent>
        <StyledTitle level={2}>Latest</StyledTitle>
        <FirstCard style={{ cursor: 'pointer' }} onClick={() => handleCardClick(0)}>
          <Row style={{ height: '100%' }}>
            <Col span={8} style={{ height: '100%' }}>
              <img src={blogData[0].image} alt={blogData[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />
            </Col>
            <Col span={16} style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <StyledTitle level={4}>{blogData[0].title}</StyledTitle>
              <StyledParagraph>{blogData[0].content}</StyledParagraph>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <ClockCircleOutlined style={{ marginRight: 8 }} />
                <span>{blogData[0].readTime}</span>
                <span style={{ margin: '0 8px' }}>|</span>
                <CalendarOutlined style={{ marginRight: 8 }} />
                <span>{blogData[0].date}</span>
              </div>
            </Col>
          </Row>
        </FirstCard>
        <StyledTitle level={2}>More blogs for you</StyledTitle>
        <StyledRow gutter={[24, 24]}>
          {blogData.slice(1).map((blog, index) => (
            <Col span={24} md={12} key={index}>
              <StyledCard onClick={() => handleCardClick(index + 1)}>
                <Row style={{ height: '100%' }}>
                  <Col span={8} style={{ height: '100%' }}>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }} />
                  </Col>
                  <Col span={16} style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <StyledTitle level={4}>{blog.title}</StyledTitle>
                    <StyledParagraph>{blog.content}</StyledParagraph>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                      <ClockCircleOutlined style={{ marginRight: 8 }} />
                      <span>{blog.readTime}</span>
                      <span style={{ margin: '0 8px' }}>|</span>
                      <CalendarOutlined style={{ marginRight: 8 }} />
                      <span>{blog.date}</span>
                    </div>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
          ))}
        </StyledRow>
      </StyledContent>
    </div>
  );
};

const StyledContent = styled.div`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const StyledTitle = styled(Title)`
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const FirstCard = styled(Card)`
  margin-bottom: 24px;
  width: 80vh;
  height: 20vh;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const StyledRow = styled(Row)`
  gap: 24px 0;
  @media (max-width: 768px) {
    gap: 16px 0;
  }

  @media (max-width: 480px) {
    gap: 8px 0;
  }
`;

export default Blog;

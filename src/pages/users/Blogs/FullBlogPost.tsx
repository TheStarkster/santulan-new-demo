import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

const { Content } = Layout;
const { Title } = Typography;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const FullBlogPost: React.FC = () => {
  const query = useQuery();
  const id = query.get('id');
  const blogIndex = parseInt(id || '0', 10);

  const blogData = [
    {
      title: 'Mental health professionals in India - Who they are and what they do',
      content: `
      Mental health professionals in India include psychologists, psychiatrists, and counselors. They work towards diagnosing, treating, and managing mental health disorders. Psychologists often provide therapy and counseling, while psychiatrists can prescribe medication.
      
      In India, mental health awareness is growing, and the role of these professionals is becoming increasingly important. Mental health professionals offer a range of services, from individual therapy to group sessions, and they often collaborate with other healthcare providers to ensure comprehensive care.

      Mental health disorders can affect anyone, regardless of age, gender, or socioeconomic status. It is essential to understand the different types of mental health professionals and their roles in supporting mental wellness.

      The journey to becoming a mental health professional in India typically involves extensive education and training. Psychologists usually hold advanced degrees in psychology, while psychiatrists are medical doctors who specialize in mental health. Counselors may have degrees in counseling or social work, and they provide valuable support through talk therapy and other interventions.

      Mental health services are available in various settings, including hospitals, clinics, private practices, and community organizations. Access to these services can be challenging in some areas, but efforts are being made to improve availability and reduce the stigma associated with seeking help for mental health issues.

      Overall, mental health professionals in India play a critical role in promoting mental wellness and providing support to those in need.
      There are various types of therapy available to address mental health issues, each with its unique approach and techniques. Understanding the different types of therapy can help you choose the right one for your needs.

      Cognitive-behavioral therapy (CBT) is a widely used approach that focuses on identifying and changing negative thought patterns and behaviors. It is effective for treating anxiety, depression, and other mental health disorders.

      Psychodynamic therapy explores the unconscious mind and aims to uncover unresolved conflicts and emotions from the past. This type of therapy can help individuals gain insight into their behaviors and improve their emotional well-being.

      Humanistic therapy emphasizes personal growth and self-actualization. It encourages individuals to explore their feelings and develop a stronger sense of self.

      Group therapy involves working with a therapist and a group of individuals who share similar issues. It provides a supportive environment where individuals can share their experiences and learn from others.

      Family therapy focuses on improving communication and relationships within a family.
      /n
      There are various types of therapy available to address mental health issues, each with its unique approach and techniques. Understanding the different types of therapy can help you choose the right one for your needs.

      Cognitive-behavioral therapy (CBT) is a widely used approach that focuses on identifying and changing negative thought patterns and behaviors. It is effective for treating anxiety, depression, and other mental health disorders.

      Psychodynamic therapy explores the unconscious mind and aims to uncover unresolved conflicts and emotions from the past. This type of therapy can help individuals gain insight into their behaviors and improve their emotional well-being.

      `,
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
    {
      title: 'When to seek help: Signs of mental distress that you should look out for',
      content: `
      Mental distress can manifest in various ways, including changes in mood, behavior, and physical health. Recognizing these signs early can help you seek timely assistance from a mental health professional.

      Some common signs of mental distress include prolonged sadness, excessive worry or anxiety, withdrawal from social activities, changes in sleep or appetite, and difficulty concentrating. Physical symptoms, such as unexplained aches and pains, can also indicate mental health issues.

      It is important to pay attention to these signs and seek help if you or someone you know is experiencing them. Early intervention can prevent mental health issues from worsening and improve overall well-being.

      Mental health professionals can provide the necessary support and treatment to help individuals manage their symptoms and lead fulfilling lives. Therapy, medication, and lifestyle changes are some of the approaches used to address mental health issues.

      Remember, seeking help for mental health is a sign of strength, not weakness. It is essential to prioritize mental wellness and take proactive steps to maintain it.
      `,
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
    {
      title: 'Understanding different types of therapy for mental health',
      content: `
      There are various types of therapy available to address mental health issues, each with its unique approach and techniques. Understanding the different types of therapy can help you choose the right one for your needs.

      Cognitive-behavioral therapy (CBT) is a widely used approach that focuses on identifying and changing negative thought patterns and behaviors. It is effective for treating anxiety, depression, and other mental health disorders.

      Psychodynamic therapy explores the unconscious mind and aims to uncover unresolved conflicts and emotions from the past. This type of therapy can help individuals gain insight into their behaviors and improve their emotional well-being.

      Humanistic therapy emphasizes personal growth and self-actualization. It encourages individuals to explore their feelings and develop a stronger sense of self.
There are various types of therapy available to address mental health issues, each with its unique approach and techniques. Understanding the different types of therapy can help you choose the right one for your needs.

      Cognitive-behavioral therapy (CBT) is a widely used approach that focuses on identifying and changing negative thought patterns and behaviors. It is effective for treating anxiety, depression, and other mental health disorders.

      Psychodynamic therapy explores the unconscious mind and aims to uncover unresolved conflicts and emotions from the past. This type of therapy can help individuals gain insight into their behaviors and improve their emotional well-being.

      Humanistic therapy emphasizes personal growth and self-actualization. It encourages individuals to explore their feelings and develop a stronger sense of self.

      Group therapy involves working with a therapist and a group of individuals who share similar issues. It provides a supportive environment where individuals can share their experiences and learn from others.

      Family therapy focuses on improving communication and relationships within a family.
      Group therapy involves working with a therapist and a group of individuals who share similar issues. It provides a supportive environment where individuals can share their experiences and learn from others.

      Family therapy focuses on improving communication and relationships within a family. It helps family members understand and support each other better.

      Each type of therapy has its benefits, and the right choice depends on the individual's needs and preferences. Consulting with a mental health professional can help determine the most suitable approach for you.
      `,
      image: 'card_1.jpeg',
      readTime: '5 min read',
      date: 'July 15, 2024',
    },
  ];

  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= blogData.length) {
    return <div>Invalid blog ID</div>;
  }

  const blog = blogData[blogIndex];

  return (
    <div>
      <div style={{ padding: '24px' }}>
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => history.back()} style={{ marginBottom: '16px', color: 'black' }}>
          Back
        </Button>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '60%', margin: '0 auto' }}>
            <Title level={3} style={{ width: '100%' }}>{blog.title}</Title>
            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto', borderRadius: 10, maxHeight: '200px', objectFit: 'cover' }} />
          </div>
        </div>
        <div style={{ padding: '0 20%' }}>
          <p>{blog.content}</p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*='max-width: 60%'] {
            max-width: 80%;
          }
          div[style*='padding: 0 20%'] {
            padding: 0 10%;
          }
        }
        @media (max-width: 480px) {
          div[style*='max-width: 60%'] {
            max-width: 100%;
          }
          div[style*='padding: 0 20%'] {
            padding: 0 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default FullBlogPost;

import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title } = Typography;

const QuestCard = ({ question, image, children }) => {
  return (
    <Card className="bg-slate-600 md:h-[430px] w-full h-[388px] text-white overflow-y-auto">
      <Row>
        <Col xs={24}>
          <Title level={3} style={{ color: "white" }}>
            {question}
          </Title>
        </Col>
      </Row>
      <Row align="center" gutter={[20, 20]}>
        <Col xs={24} md={image ? 12 : 24} className="md:order-1 order-2">
          {children}
        </Col>
        {image ? (
          <Col xs={24} md={12} className="md:order-2 order-1 flex items-center justify-center">
            <img src={image} alt={image} className="w-full max-w-[12rem]" />
          </Col>
        ) : null}
      </Row>
    </Card>
  );
};

export default QuestCard;

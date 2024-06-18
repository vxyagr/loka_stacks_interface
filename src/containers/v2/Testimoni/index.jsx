import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Row, Col, Typography } from "antd";

import "./style.css";

const { Paragraph } = Typography;

const Testimoni = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      className="testimoni-container"
      style={{
        padding: isMobile ? "50px 36px" : "50px 78px 35px 78px",
        backgroundColor: "#111824",
      }}
    >
      <Row gutter={[24, 48]} justify="space-around" align="top">
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Paragraph>
            “It’s a brilliant idea. I can put my BTC to work and earn more.”
          </Paragraph>
          <Paragraph className="name">- Bob The Builder</Paragraph>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Paragraph>
            “I’m scaling up my Bitcoin mining farm faster than ever!”
          </Paragraph>
          <Paragraph className="name">- Alice The Miner</Paragraph>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Paragraph>
            “Loka demonstrate a working public goods on a truly decentralized
            ecosystem”
          </Paragraph>
          <Paragraph className="name">- John the Foundation Guy</Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Testimoni;

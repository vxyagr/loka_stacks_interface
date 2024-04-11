import React from "react";
import { Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

import "./style.css";

const { Title, Text } = Typography;

const WhyLoka = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  return (
    <div
      className="why-loka-container"
      style={{
        padding: isExtraLargeScreen
          ? "40px 250px 120px 250px"
          : isMobile
          ? "30px 24px"
          : "40px 40px 120px 40px",
        width: "100%",
      }}
    >
      <Row justify="center">
        <Col xs={{ span: 18 }} md={{ span: 12 }}>
          <Title level={1} className="why-loka-title">
            Why Loka?
          </Title>
        </Col>
      </Row>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>Open source</Title>
            <Text className="why-desc">
              The protocol is completely open source, allowing anyone to
              interact with a user interface client, API, or directly with the
              smart contracts on the IC network.
            </Text>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>Fully decentralized</Title>
            <Text className="why-desc">
              All the code and services are stored in IC canisters, making the
              entire protocol fully decentralized from end-to-end, eliminating
              centralized party risks associated with other Bitcoin mining
              operations.
            </Text>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>Permissionless</Title>
            <Text className="why-desc">
              Loka is permissionless, non-custodial, censorship resistant, with
              a fully customizable front-end interface.
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyLoka;

import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography, Steps } from "antd";

import PointIconList from "../../components/PointIconList";

import "./style.css";

const { Title, Paragraph } = Typography;

const roadmapItems = [
  {
    title: "Current",
    listTitle: "Mining Pool Beta",
    list: [
      "Live now",
      "Current state. 80+ miners connected",
      "Acquired miners from Ethiopia, Indonesia, Malaysia, Russia etc.",
    ],
  },
  {
    title: "Q2 2024",
    listTitle: "Decentralized Mining Pool",
    list: [
      "Bridge native Bitcoin to supply liquidity for Bitcoin miners",
      "Earn native yield from mining pool fees + reward points",
    ],
  },
  {
    title: "Q3 2024",
    listTitle: "Forward Hashrate Marketplace",
    list: [
      "Access Bitcoin at lower than market price by purchasing forward contract directly from Bitcoin miners",
      "Bring liquidity from future mining rewards into DeFi",
    ],
  },
  {
    title: "Early 2025",
    listTitle: "Bitcoin Meta Layer",
    list: [
      "The only Bitcoin layer that provides native yield",
      "Multichain interoperability with other gasless transactions and compounding yield from validators + tokenized mining economy",
    ],
  },
];

const RoadMap = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  const customDot = (dot, { index }) => {
    return (
      <div className={clsx("custom-dot", { isMobile })}>
        {!isMobile && <div className="custom-dot-line" />}
      </div>
    );
  };

  return (
    <div
      className="roadmap-container"
      style={{
        padding: isExtraLargeScreen
          ? "97px 250px"
          : isMobile
          ? "40px 24px"
          : "97px 124px",
      }}
    >
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11 }}>
          <Title level={2} className="roadmap-title">
            Roadmap
          </Title>
        </Col>
      </Row>

      <Row style={{ marginTop: "100px" }}>
        <Col span={24}>
          <Steps
            className={!isMobile ? "roadmap-steps" : "roadmap-steps-mobile"}
            labelPlacement="vertical"
            progressDot={customDot}
            current={3}
            direction={isMobile ? "vertical" : "horizontal"}
            size="large "
            items={roadmapItems.map((e) => ({
              title: e.title,
              description: (
                <PointIconList title={e.listTitle} listOfPoints={e.list} />
              ),
            }))}
          />
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;

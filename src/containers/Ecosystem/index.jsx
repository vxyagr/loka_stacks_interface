import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography } from "antd";
import Icon from "@ant-design/icons";

import Illustration1 from "../../assets/images/about-illustration1.png";
import Illustration2 from "../../assets/images/about-illustration2.png";

import { ReactComponent as CheckIconSvg } from "../../assets/icons/check-icon.svg";
import { ReactComponent as RightArrowIconSvg } from "../../assets/icons/right-arrow-icon.svg";

import "./style.css";

const { Title, Paragraph } = Typography;

const Ecosystem = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  return (
    <div
      className="ecosystem-loka-container"
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
          <Title level={2} className="ecosystem-main-title">
            There are two main components to the Loka ecosystem
          </Title>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <div className="ecosystem-text-container">
            <Title
              level={3}
              className={clsx("ecosystem-title-text", { isMobile })}
            >
              The Loka Mining Pool
            </Title>

            <Paragraph className="ecosystem-text">
              Built as a completely decentralized network on the Internet
              Computer Protocol (ICP), the Loka Mining Pool leverages ICP’s
              chain-key tech that optimizes for security and low-cost
              transactions.
            </Paragraph>

            <div className="ecosystem-info-item">
              <Icon style={{ fontSize: "26px" }} component={CheckIconSvg} />
              <Paragraph className="ecosystem-text">
                Anyone can earn a passive income (almost like staking) by
                providing bitcoin liquidity to miners
              </Paragraph>
            </div>

            <div className="ecosystem-info-item">
              <Icon style={{ fontSize: "26px" }} component={CheckIconSvg} />
              <Paragraph className="ecosystem-text">
                In exchange, miners get a daily payout based on their hashrate
                contributions
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <div
            className="ecosystem-image-container"
            style={{ justifyContent: "flex-end" }}
          >
            <img
              src={Illustration1}
              alt="loka-miningpool"
              width={isMobile ? "100%" : "80%"}
            />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "80px" }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div
            className="ecosystem-image-container"
            style={{ justifyContent: "flex-start" }}
          >
            <img
              src={Illustration2}
              alt="loka-miningpool"
              width={isMobile ? "100%" : "80%"}
            />
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="ecosystem-text-container">
            <Title
              level={3}
              className={clsx("ecosystem-title-text", { isMobile })}
            >
              The Loka Hashrate Marketplace
            </Title>

            <Paragraph className="ecosystem-text">
              The hashrate marketplace is like bitcoin itself — it’s designed as
              a peer-to-peer way for miners and retail investors can interact in
              a non-custodial, trustless manner.
            </Paragraph>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Invest in a Bitcoin mining operation by purchasing
                collateralized contracts of future hashrate for a certain period
                of time from anywhere in the world. Get BTC at lower than market
                rates in return
              </Paragraph>
            </div>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Bitcoin miners gain early return on their investment. Steady
                cashflow can help scale hash rate capacity by purchasing more
                hardware or the liquidity can be used to hedge the risk of price
                volatility.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;

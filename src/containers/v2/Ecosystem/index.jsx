import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography } from "antd";
import Icon from "@ant-design/icons";

import Illustration1 from "../../../assets/images/about-illustration1.png";
import Illustration2 from "../../../assets/images/about-illustration2.png";
import Illustration3 from "../../../assets/images/about-illustration3.png";

import { ReactComponent as RightArrowIconSvg } from "../../../assets/icons/chevron-right.svg";

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
          ? "57px 250px"
          : isMobile
          ? "40px 24px"
          : "57px 124px",
      }}
    >
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11 }}>
          <Title level={2} className="ecosystem-main-title">
            Loka Ecosystem is built upon 3 infrastructure pillars:
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
              Decentralized Mining Pool
            </Title>

            <Paragraph className="ecosystem-text">
              A non-custodial, trust-minimized Bitcoin mining pool, built
              towards a fully secured & decentralized infrastructure where
              everyone can participate.
            </Paragraph>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "26px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                No minimum daily payout with highest reward for Bitcoin miners
              </Paragraph>
            </div>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "26px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Fully permissionless without needing any KYC
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
              Bitcoin Liquidity Pool
            </Title>

            <Paragraph className="ecosystem-text">
              Instead of relying on a centralized party to ensure Bitcoin miners
              get paid daily for their hash rate contribution, Loka enables
              anyone to provide liquidity and distribute profits from the mining
              pool fees via rebase 1:1 liquid LP token.
            </Paragraph>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Compound your idle Bitcoin with native yield from Bitcoin mining
                economy
              </Paragraph>
            </div>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Bridge your native Bitcoin in, and get more out. Anytime.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <div className="ecosystem-text-container">
            <Title
              level={3}
              className={clsx("ecosystem-title-text", { isMobile })}
            >
              Forward-Hashrate Marketplace Protocol
            </Title>

            <Paragraph className="ecosystem-text">
              A permissionless and non-custodial protocol where investors can
              purchase future mining rewards at-a-discount in the form of a
              forward hashrate contract directly from Bitcoin miners worldwide.
            </Paragraph>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "26px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                All contracts are overcollateralized with Bitcoin, eliminating
                counterparty risks (you can’t be rugpulled)
              </Paragraph>
            </div>

            <div className="ecosystem-info-item">
              <Icon
                style={{ fontSize: "26px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="ecosystem-text">
                Contracts are tokenized with immediate liquidity on secondary
                market (you can sell it right away or use as collateral against
                $)
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
              src={Illustration3}
              alt="loka-miningpool"
              width={isMobile ? "100%" : "80%"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;

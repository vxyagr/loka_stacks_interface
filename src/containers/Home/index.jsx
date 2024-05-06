import React from "react";
import { Button, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

import { ArrowRightOutlined } from "@ant-design/icons";

import useGetScreenSize from "../../hooks/useGetScreenSize";

import HeroImage from "../../assets/images/hero-image.png";
import BitcoinStartup from "../../assets/images/bitcoin-startup-lab-white.png";
import Dfinity from "../../assets/images/dfinity-white.png";
import OutlierVentures from "../../assets/images/outlier-ventures-white.png";
import Kilonova from "../../assets/images/kilonova-white.png";

import "./style.css";
import clsx from "clsx";

const { Title, Paragraph } = Typography;

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });
  const screenHeight = useGetScreenSize();

  const handleHomeButton = () => {
    window.open(
      "https://go.lokamining.com/about",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="landing-home-section"
      style={{
        minHeight: screenHeight,
        padding: isExtraLargeScreen
          ? "150px 250px 0px 250px"
          : isMobile
          ? "60px 24px 0px 24px"
          : "150px 96px 0px 96px",
      }}
    >
      <Row gutter={[48, 16]}>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <div className="text-container">
            <Title className="hero-text">
              Loka — The Bitcoin Meta Layer with Native Yield Protocol
            </Title>

            <Paragraph className="sub-hero-text">
              Earn native yield from your idle Bitcoin or gain access to Bitcoin
              at below-market prices.
            </Paragraph>

            <Paragraph className="sub-hero-text">
              Loka is revolutionizing the Bitcoin mining ecosystem by directly
              connecting investors with Bitcoin miners through a decentralized
              mining pool and a permissionless forward hashrate marketplace
              protocol.
            </Paragraph>

            <Button
              onClick={handleHomeButton}
              className={clsx("about-loka-button", { isMobile })}
              size="large"
            >
              About LOKA
              <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <div className="hero-image-container">
            <img
              src={HeroImage}
              alt="about-loka"
              width={isMobile ? "100%" : "85%"}
            />
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col xs={{ span: 23 }} md={{ span: 23 }}>
          <div className="backers-container">
            <Row
              justify="center"
              align="middle"
              gutter={[16, 48]}
              style={{ width: "100%" }}
            >
              <Col span={24}>
                <p className="our-backert-text">Backed by:</p>
              </Col>
              <Col
                className="our-backert-logo"
                xs={{ span: 18 }}
                md={{ span: 6 }}
              >
                <img src={Dfinity} alt="dfinity" width={"80%"} />
              </Col>
              <Col
                className="our-backert-logo"
                xs={{ span: 18 }}
                md={{ span: 6 }}
              >
                <img src={BitcoinStartup} alt="btcsl" width={"80%"} />
              </Col>
              <Col
                className="our-backert-logo"
                xs={{ span: 18 }}
                md={{ span: 6 }}
              >
                <img src={OutlierVentures} alt="btcsl" width={"80%"} />
              </Col>
              <Col
                className="our-backert-logo"
                xs={{ span: 18 }}
                md={{ span: 6 }}
              >
                <img src={Kilonova} alt="btcsl" width={"80%"} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

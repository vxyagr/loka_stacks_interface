import React, { useState, useEffect } from "react";
import { Button, Row, Col, Typography, Input } from "antd";
import { useMediaQuery } from "react-responsive";
import Icon from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

import LokaLogo from "../../assets/images/loka_logo.png";
import { ReactComponent as TwitterIconSvg } from "../../assets/icons/twitter.svg";
import { ReactComponent as DiscordIconSvg } from "../../assets/icons/discord.svg";

import "./style.css";
import clsx from "clsx";

const { Title, Text } = Typography;

const Community = ({ subscribeRef }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });
  const [emailValue, setEmailValue] = useState(null);
  const [error, setError] = useState(null);

  const hanldeButton = (type) => {
    switch (type) {
      case "blog":
        window.open(
          "https://blog.lokamining.com/",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "about":
        window.open(
          "https://go.lokamining.com/about",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "twitter":
        window.open(
          "https://twitter.com/lokamining",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "discord":
        window.open(
          "https://discord.com/invite/yDytXMMDs9",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "whitepaper":
        window.open(
          "https://lokamining.com/#",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      default:
        break;
    }
  };

  const handleRedirect = () => {
    navigate("/privacy-policy", {
      replace: true,
      state: { from: location },
    });
  };

  return (
    <div
      className={clsx("community-container", { isMobile })}
      style={{
        padding: isExtraLargeScreen
          ? "40px 250px"
          : isMobile
          ? "40px 16px"
          : "40px",
      }}
    >
      <Row justify="center">
        <Col xs={{ span: 22 }} md={{ span: 22 }}>
          <div
            ref={subscribeRef}
            className="community-inner-container"
            style={{ padding: isMobile ? "40px 10%" : "40px 25%" }}
          >
            <Title level={2} className="community-title">
              Subscribe to our newsletter
            </Title>
            <Text className="community-desc">
              Get updates and latest news about Loka
            </Text>

            <div
              className="subscribe-form-section"
              style={{ flexDirection: isMobile ? "column" : "row" }}
            >
              <Input
                value={emailValue}
                size="large"
                placeholder="Please enter your email address"
                className="subscribe-email-input"
                style={{
                  width: 280,
                }}
                status={error ? "error" : ""}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                  if (!e.target.value) {
                    setError("");
                  }
                }}
              />
              <Button
                onClick={() => hanldeButton("discord")}
                className="subscribe-button"
                size="large"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "30px" }}>
        <Col xs={{ span: 23 }} md={{ span: 10 }}>
          <div
            className="navigation-container"
            style={{ padding: isMobile ? "30px 0px" : "50px 0px" }}
          >
            {/* <div className="logo-container">
              <img src={LokaLogo} alt="loka" width={100} />
            </div> */}
            <div
              className="social-media-container"
              style={{ flexDirection: isMobile ? "column" : "row" }}
            >
              <Button
                icon={<Icon component={TwitterIconSvg} />}
                type="text"
                className="social-media-button"
                onClick={() => hanldeButton("twitter")}
              />
              <Button
                icon={<Icon component={DiscordIconSvg} />}
                type="text"
                className="social-media-button"
                onClick={() => hanldeButton("discord")}
              />
              <Button
                type="text"
                className="social-media-button"
                onClick={() => hanldeButton("whitepaper")}
              >
                Whitepaper
              </Button>
              <Button
                type="text"
                className="social-media-button"
                onClick={() => hanldeButton("about")}
              >
                About
              </Button>
              <Button
                type="text"
                className="social-media-button"
                onClick={() => hanldeButton("blog")}
              >
                Blog
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col xs={{ span: 23 }} md={{ span: 20 }}>
          <div
            className="footer-container"
            style={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <p>© 2024 Loka Labs. All rights reserved.</p>
            <div className="footer-menu-container">
              <p>Term</p>
              <p
                className="footer-linkable-text"
                onClick={() => handleRedirect()}
              >
                Privacy
              </p>
              <p>Cookies</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Community;

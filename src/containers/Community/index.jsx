import React, { useState, useEffect } from "react";
import { Button, Row, Col, Typography, Input, message } from "antd";
import { useMediaQuery } from "react-responsive";
import Icon from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [error, setError] = useState(null);
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(null);

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

  const handleSubmitEmail = () => {
    setLoading(true);

    const url = "https://api.lokamining.com/subscribe";

    axios
      .get(url, {
        params: {
          email: emailValue,
        },
      })
      .then((data) => {
        const result = data?.data?.result;

        if (result === "success") {
          setIsSuccessSubmit(
            "Great! We will send  updates straight to your inbox!"
          );
          setTimeout(() => {
            setIsSuccessSubmit(null);
            setEmailValue(null);
          }, 5000);
        } else if (result === "exist") {
          setIsSuccessSubmit(
            "You're already on our list to receive the latest updates and insights. Stay tuned!"
          );

          setTimeout(() => {
            setIsSuccessSubmit(null);
            setEmailValue(null);
          }, 5000);
        } else {
          throw new Error("failed");
        }
      })
      .catch(function (error) {
        message.error("failed subscribe email !");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regex untuk validasi email
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (emailValue && !validateEmail(emailValue)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }, [emailValue]);

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
              <div>
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
                <p className="error-text">{error}</p>
              </div>
              <Button
                onClick={() => handleSubmitEmail()}
                className="subscribe-button"
                size="large"
                loading={loading}
                disabled={!validateEmail(emailValue)}
              >
                Subscribe
              </Button>
            </div>
            {isSuccessSubmit && (
              <div className="success-submit-box">
                <p className="success-text">{isSuccessSubmit}</p>
              </div>
            )}
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
              
              <p
                className="footer-linkable-text"
                onClick={() => handleRedirect()}
              >
                Privacy
              </p>
             
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Community;

import React, { useEffect, useState, useRef, Suspense } from "react";
import clsx from "clsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";
import { Layout, Menu, Row, Col, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import Home from "./containers/Home";
import Ecosystem from "./containers/Ecosystem";
import Testimoni from "./containers/Testimoni";
import WhyLoka from "./containers/WhyLoka";
import Community from "./containers/Community";
import RoadMap from "./containers/Roadmap";
import FeatureReference from "./containers/FeatureReference";
import PrivacyPolicy from "./containers/PrivacyPolicy";

import LokaLogo from "./assets/images/loka_logo.png";
import BetaIcon from "./assets/images/button-tag.png";

import "./app.css";

import smallIcon from "./assets/icons/favico_loka.png";

const { Header, Content } = Layout;

const themeProvider = {
  fontFamily: "Inter",
  token: {
    Button: {
      colorPrimary:
        "linear-gradient(88.85deg, #043153 -9.61%, #E09B00 116.77%)",
      fontWeight: 600,
      primaryColor: "white",
      border: "border: 1px solid #043153",
      borderColorDisabled: "border: 1px solid #043153",
    },
  },
  components: {
    Layout: {
      headerBg: "transparent",
    },
    Menu: {
      darkItemBg: "transparent",
      itemSelectedColor: "red",
    },
  },
};

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });
  const [headerOpacity, setHeaderOpacity] = useState(0);

  const subscribeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah nilai maksimum sesuai kebutuhan
      const maximumScrollValue = 200;
      const currentScroll = window.scrollY;
      const calculatedOpacity = currentScroll / maximumScrollValue;
      setHeaderOpacity(calculatedOpacity > 1 ? 1 : calculatedOpacity);
    };

    // Event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hanldeSelect = ({ key }) => {
    switch (key) {
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
      case "miners":
        window.open(
          "https://miner.lokamining.com/",
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

      default:
        break;
    }
  };

  const gotoSubscribeSection = () => {
    setTimeout(() => {
      subscribeRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <Helmet>
        <title>Loka Mining Protocol</title>
        <link rel="icon" type="png" href={smallIcon} />
        <link rel="apple-touch-icon" type="png" href={smallIcon} />
      </Helmet>
      <ConfigProvider theme={themeProvider}>
        <Layout>
          <Header
            className={clsx("landing-header", { isMobile })}
            style={{
              backgroundColor: `rgba(14, 35, 57, ${headerOpacity})`, // Menggunakan state headerOpacity untuk mengatur opacity
              transition: "background-color 0.5s ease", // Menambahkan transisi untuk efek perlahan
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col xs={{ span: 21 }} md={{ span: 3 }}>
                <div className={clsx("landing-header-logo", { isMobile })}>
                  <img
                    src={LokaLogo}
                    alt="loka"
                    width={isMobile ? "24%" : "70%"}
                    onClick={() => (window.location.href = "/")}
                  />
                </div>
              </Col>
              <Col xs={{ span: 3 }} md={{ span: 17 }}>
                <div className="menu-header">
                  <Menu
                    className={clsx("landing-menu-header", { isMobile })}
                    theme="dark"
                    mode="horizontal"
                    overflowedIndicator={<MenuOutlined />}
                    onSelect={hanldeSelect}
                  >
                    <Menu.Item key={"blog"}>Blog</Menu.Item>
                    <Menu.Item key={"about"}>About</Menu.Item>
                    <Menu.Item key={"miners"}>
                      Miners
                      <img
                        src={BetaIcon}
                        alt="loka"
                        width={45}
                        style={{ marginLeft: "10px" }}
                      />
                    </Menu.Item>
                  </Menu>
                </div>
              </Col>
              <Col xs={{ span: 0 }} md={{ span: 4 }}>
                <div className="header-button-container">
                  <div className="subscribe-button-header">
                    <Button onClick={() => gotoSubscribeSection()}>
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Header>
          <Content>
            <div
              style={{
                marginTop: "-64px",
              }}
            >
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<>...</>}>
                        <>
                          <Home />
                          {/* <Testimoni /> */}
                          <FeatureReference />
                          <Ecosystem />
                          <RoadMap />
                          {/* <WhyLoka /> */}
                          <Community subscribeRef={subscribeRef} />
                        </>
                      </Suspense>
                    }
                  />

                  <Route
                    path="/privacy-policy"
                    element={
                      <Suspense fallback={<>...</>}>
                        <PrivacyPolicy />
                      </Suspense>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </div>
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;

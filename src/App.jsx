import React, { useEffect, useState, useRef, Suspense } from "react";
import clsx from "clsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";
import { Layout, Menu, Row, Col, Button } from "antd";


import Home from "./containers/v2/Home";
import Ecosystem from "./containers/v2/Ecosystem";
import Testimoni from "./containers/v2/Testimoni";
import WhyLoka from "./containers/WhyLoka";
import Community from "./containers/v2/Community";
import RoadMap from "./containers/v2/Roadmap";
import FeatureReference from "./containers/v2/FeatureReference";
import PrivacyPolicy from "./containers/v2/PrivacyPolicy";
import HeaderV2 from "./components/HeaderV2";
import HeaderV3 from "./components/HeaderV3";

import smallIcon from "./assets/icons/favico_loka.png";

const { Content } = Layout;

const themeProvider = {
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
  const subscribeRef = useRef(null);


  const gotoSubscribeSection = () => {
    setTimeout(() => {
      subscribeRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <Helmet>
        <title>Loka -- The Bitcoin Meta Layer with Native Yield Protocol</title>
        <link rel="icon" type="png" href={smallIcon} />
        <link rel="apple-touch-icon" type="png" href={smallIcon} />
      </Helmet>
      <ConfigProvider theme={themeProvider}>
        <Layout>
         <HeaderV2 gotoSubscribeRefFunction={gotoSubscribeSection} />
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

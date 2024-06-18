import React, {useState, useEffect} from 'react'
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { Layout, Menu, Row, Col, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import LokaLogo from "../../assets/images/loka_logo.png";
import BetaIcon from "../../assets/images/button-tag.png";


import './styles.css'

const { Header } = Layout;

const HeaderV2 = ({gotoSubscribeRefFunction}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });
    const [headerOpacity, setHeaderOpacity] = useState(0);

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

  return (
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
                    <Button onClick={() => gotoSubscribeRefFunction()}>
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Header> 
  )
}

export default HeaderV2
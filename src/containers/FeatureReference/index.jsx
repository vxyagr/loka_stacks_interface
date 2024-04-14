import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography, Button } from "antd";
import Icon, { ArrowRightOutlined } from "@ant-design/icons";

import CoinDeskLogo from "../../assets/images/coindesk-logo.png";
import CoinTelegraphLogo from "../../assets/images/cointelegraph-logo.png";

import { ReactComponent as NativeYieldLogo } from "../../assets/icons/native-yield.svg";
import { ReactComponent as BitCoinLogo } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as QuoteLogo } from "../../assets/icons/quote-icon.svg";

import "./style.css";

const { Title, Paragraph } = Typography;

const FeatureReference = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  const handleRedirect = () => {
    console.log("redire");
  };

  return (
    <div
      className="features-reference-container"
      style={{
        padding: isExtraLargeScreen
          ? "97px 250px"
          : isMobile
          ? "40px 24px"
          : "97px 124px",
      }}
    >
      <Row gutter={[100, 48]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="box-section">
            <Icon
              className="feature-icon"
              style={{ fontSize: "48px" }}
              component={NativeYieldLogo}
            />

            <div className="feature-text-section">
              <p className="feature-title">
                Earn Native Yield for your Bitcoin
              </p>
              <p className="feature-subtitle">
                Provide liquidity to the Loka decentralized mining pool and earn
                yield from the pool fees via a liquid LP token that is 1:1
                redeemable at any time for native Bitcoin.
              </p>
            </div>

            <Button
              onClick={handleRedirect}
              className={clsx("feature-button", { isMobile })}
              type={isMobile ? "text" : "default"}
              size="large"
            >
              Get Access to Beta
              <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="box-section">
            <Icon
              className="feature-icon"
              style={{ fontSize: "48px" }}
              component={BitCoinLogo}
            />

            <div className="feature-text-section">
              <p className="feature-title">
                Get Bitcoin lower than market price
              </p>
              <p className="feature-subtitle">
                Purchase forward hashrate contracts from Bitcoin miners on a
                secure P2P permissionless protocol and receive payment directly
                from the mining reward.
              </p>
            </div>

            <Button
              onClick={handleRedirect}
              block={isMobile}
              className={clsx("feature-button", { isMobile })}
              size="large"
              type={isMobile ? "text" : "default"}
            >
              Get Access to Beta
              <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
      </Row>

      {/* as feature in section */}

      <Row
        gutter={[100, 48]}
        style={{ marginTop: "100px", padding: isMobile ? "0px 12px" : "0px" }}
      >
        <Col span={24}>
          <p className="featured-in-title">As featured in</p>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="featured-in-section">
            <a href="https://www.coindesk.com/consensus-magazine/2024/04/10/ordinals-defy-bitcoins-design-principles-but-offer-miners-huge-post-halving-advantages/">
              <img src={CoinDeskLogo} alt="coindesk" />
            </a>
            <a href="https://www.coindesk.com/consensus-magazine/2024/04/10/ordinals-defy-bitcoins-design-principles-but-offer-miners-huge-post-halving-advantages/">
              <div className="featured-in-textsection">
                <Icon style={{ fontSize: "28px" }} component={QuoteLogo} />
                <p className="featured-point-text">
                  "..this year, miners of any size from other parts of the world
                  have additional funding options to upgrade their operations.
                  They can utilize the upcoming Loka's permissionless
                  marketplace, which can connect miners directly to retail
                  investors looking for BTC at lower-than-market prices."
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="featured-in-section">
            <a href="https://cointelegraph.com/news/is-the-bitcoin-halving-priced-in-analysts-compare-btc-price-targets-vs-previous-halvings">
              <img src={CoinTelegraphLogo} alt="cointelegraph" />
            </a>
            <a href="https://cointelegraph.com/news/is-the-bitcoin-halving-priced-in-analysts-compare-btc-price-targets-vs-previous-halvings">
              <div className="featured-in-textsection">
                <Icon style={{ fontSize: "28px" }} component={QuoteLogo} />
                <p className="featured-point-text">
                  “..decentralized Bitcoin mining pool Loka Mining, anticipates
                  short-term volatility consistent with previous halvings due to
                  supply shock and reduced inflation rate.”
                </p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeatureReference;

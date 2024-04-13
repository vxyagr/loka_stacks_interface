import React from "react";
import { Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import Icon from "@ant-design/icons";

import { ReactComponent as CheckIconSvg } from "../../assets/icons/check-icon.svg";
import { ReactComponent as RightArrowIconSvg } from "../../assets/icons/chevron-right.svg";

import "./style.css";

const { Title, Paragraph } = Typography;

const PointIconList = ({ title, listOfPoints }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className="point-icont-list-container"
      style={{ paddingTop: isMobile ? "20px" : "90px" }}
    >
      <p className="point-title">{title}</p>
      {listOfPoints.map((point) => {
        return (
          <div className="point-item">
            <Icon style={{ fontSize: "20px" }} component={RightArrowIconSvg} />
            <p className="point-text">{point}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PointIconList;

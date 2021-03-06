import React from "react";
import { Row, Col } from "react-bootstrap";
const Icon = ({ iconName, subtitle }) => {
    return (
        <Col className="test-col" xs={6} lg={6}>
            <span
                class="iconify"
                data-icon={iconName}
                data-inline="false"
                data-width="70"
                data-height="70"
            ></span>
            <p>{subtitle}</p>
        </Col>
    );
};

export default Icon;

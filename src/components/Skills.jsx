import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import nextjs_icon from "../assets/next-js.svg";
import chartjs_icon from "../assets/chartjs-logo.svg";
import "../styles/css/Skills.css";
import Icon from "./Icon";
const Skills = () => {
    return (
        <Container className="skills-wrapper">
            <Row className="main-row" className="skills-header-row">
                <Col className="skills-header-col">
                    <h3>Competências</h3>
                    <p>Linguagens, Frameworks & Biblíotecas</p>
                </Col>
            </Row>

            <Row className="main-row" className="skills-icons-row">
                <Col
                    // lg={4}
                    // sm={12}
                    className="frontend-col"
                    className="skills-icons-cols"
                >
                    <Row className="title-row">
                        <Col>
                            <h3>FRONT END</h3>
                        </Col>
                    </Row>
                    <Row className="test-row">
                        {/* <Col className="test-col" lg={6}>
    
                                    <span
                                        class="iconify"
                                        data-icon="logos:javascript"
                                        data-inline="false"
                                        data-width="70"
                                        data-height="70"
                                    ></span>
                                    <p>JavaScript</p>

                        </Col> */}

                        <Icon iconName="logos:javascript" subtitle="JavaScript" />
                        <Icon iconName="logos:react" subtitle="React" />
                        <Icon iconName="logos:bootstrap" subtitle="Bootstrap" />
                        <Icon iconName="logos:redux" subtitle="Redux" />
                        <Icon iconName="logos:sass" subtitle="Sass" />
                        <Col className="chartjs-col">
                            <img
                                style={{
                                    width: "70px",
                                    height: "70px",
                                }}
                                src={chartjs_icon}
                            />
                            <p>Chart.js</p>
                        </Col>
                    </Row>
                    <Row className="icon-row">
                        <Col className="icon-col" lg={12}>
                            {/* <i class="fab fa-js-square"></i> */}
                            {/* <i class="fab fa-react"></i> */}
                            <span
                                class="iconify"
                                data-icon="logos:javascript"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                            {/* <p>JavasScript</p> */}
                            <span
                                class="iconify"
                                data-icon="logos:react"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            {/* <p>React</p> */}
                        </Col>
                    </Row>
                    <Row className="subtitle-row">
                        <Col id="frontend-icon-1" className="icon-subtitle">
                            <p>JavaScript</p>
                            <p>React</p>
                        </Col>
                    </Row>
                    <Row className="icon-row">
                        <Col className="icon-col">
                            {/* <i class="fab fa-bootstrap"></i> */}
                            <span
                                class="iconify"
                                data-icon="logos:bootstrap"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="logos:redux"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            >
                                {" "}
                            </span>
                        </Col>
                    </Row>
                    <Row className="subtitle-row">
                        <Col id="frontend-icon-2" className="icon-subtitle">
                            <p>Boostrap</p>
                            <p>Redux</p>
                        </Col>
                    </Row>
                    <Row className="icon-row">
                        <Col className="icon-col">
                            {/* <i class="fab fa-sass"></i> */}
                            <span
                                class="iconify"
                                data-icon="logos:sass"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            <img
                                style={{
                                    width: "90px",
                                    height: "90px",
                                }}
                                src={chartjs_icon}
                            />
                        </Col>
                    </Row>
                    <Row className="subtitle-row">
                        <Col id="frontend-icon-3" className="icon-subtitle">
                            <p>Sass</p>
                            <p>Chart.js</p>
                        </Col>
                    </Row>
                </Col>
                <Col
                    lg={4}
                    sm={12}
                    className="backend-col"
                    className="skills-icons-cols"
                >
                    <Row className="title-row">
                        <Col>
                            <h3>BACK END</h3>
                        </Col>
                    </Row>

                    <Row className="icon-row">
                        <Col className="icon-col">
                            {/* <i class="fab fa-node"></i> */}
                            <span
                                class="iconify"
                                data-icon="vscode-icons:file-type-node"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            {/* <p>Node</p> */}
                            <span
                                class="iconify"
                                data-icon="teenyicons:nextjs-outline"
                                data-inline="false"
                                style={{ color: "#ffffff" }}
                                data-width="70"
                                data-height="70"
                            ></span>
                            {/* <img src="https://img.icons8.com/color/48/000000/mongodb.png" /> */}
                        </Col>
                        <Col className="icon-subtitle">
                            <p>Node</p>
                            <p>Next.js</p>
                        </Col>
                    </Row>

                    <Row className="icon-row">
                        <Col className="icon-col">
                            <span
                                class="iconify"
                                data-icon="simple-icons:express"
                                data-inline="false"
                                style={{ color: "#ffffff" }}
                                data-width="70"
                                data-height="70"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="vscode-icons:file-type-docker2"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                        </Col>
                        <Col className="icon-subtitle">
                            <p>Express</p>
                            <p>Docker</p>
                        </Col>
                    </Row>

                    <Row className="icon-row">
                        <Col className="icon-col">
                            <span
                                class="iconify"
                                data-icon="vscode-icons:file-type-mongo"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="logos:postgresql"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                        </Col>
                        <Col className="icon-subtitle">
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </Col>
                    </Row>
                </Col>
                <Col
                    lg={4}
                    sm={12}
                    className="tools-col"
                    className="skills-icons-cols"
                >
                    <Row className="title-row">
                        <Col>
                            <h3> OUTRAS FERRAMENTAS</h3>
                        </Col>
                    </Row>
                    <Row className="icon-row">
                        <Col className="icon-col">
                            {/* <i class="fab fa-node"></i> */}
                            <span
                                class="iconify"
                                data-icon="logos:github-octocat"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="logos:firebase"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                        </Col>
                    </Row>

                    <Row className="icon-row">
                        <Col className="icon-col">
                            <span
                                class="iconify"
                                data-icon="grommet-icons:figma"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="vscode-icons:file-type-vscode2"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                        </Col>
                    </Row>
                    <Row className="icon-row">
                        <Col className="icon-col">
                            <span
                                class="iconify"
                                data-icon="logos:java"
                                data-inline="false"
                                data-width="80"
                                data-height="80"
                            ></span>
                            <span
                                class="iconify"
                                data-icon="logos:python"
                                data-inline="false"
                                data-width="70"
                                data-height="70"
                            ></span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;

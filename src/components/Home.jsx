import React, { Fragment } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import "../styles/css/Home.css";
import ProfilePic from "../assets/pic.jpeg";

import Skills from "./Skills";
import About from "./About";
const Home = () => {
    return (
        <Container className="main-container" fluid>
            <Container className="section-1" fluid>
                <Container className="greeting-wrapper">
                    <Row className="main-row greeting-row">
                        <Col className="greeting-col">
                            <h1 className="name">Fábio Barros</h1>
                            <h4 className="subtitle">developer</h4>
                        </Col>
                    </Row>
                </Container>
                <Container className="intro-wrapper">
                    <Row className="main-row intro-row">
                        <Col className="nav-column" xl={12}>
                            <Navbar />
                        </Col>

                        <Col className="left-column" lg={6} sm={12}>
                            <Image className="profile-pic" src={ProfilePic} />
                            {/* <h5 style={{ textAlign: "center" }}>Tema</h5> */}
                            <div className="theme-wrapper">
                                <div
                                    id="light-mode"
                                    className="theme-dot"
                                ></div>
                                <div id="dark-mode" className="theme-dot"></div>
                            </div>

                            {/* <p className="settings-note">
                                *O tema será salvo para sua próxima visita
                            </p> */}
                        </Col>

                        <Col className="right-column" lg={6} sm={12}>
                            <div className="preview-shadow">
                                <div className="preview">
                                    <div
                                        id="corner-tl"
                                        className="corner"
                                    ></div>
                                    <div
                                        id="corner-tr"
                                        className="corner"
                                    ></div>
                                    <h3>O que eu faço.</h3>
                                    <p className="bio">
                                        Estudante de Ciência da Computação da
                                        UFRPE. <br />
                                        Entusiasta da programação com apego
                                        especial por JavaScript{" "}
                                        <i
                                            style={{ color: "red" }}
                                            class="fas fa-heart"
                                        ></i>
                                        . <br />
                                        Powerlifter amador e Músico de quarto.
                                    </p>
                                    <div
                                        id="corner-bl"
                                        className="corner"
                                    ></div>
                                    <div
                                        id="corner-br"
                                        className="corner"
                                    ></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="section-2" fluid>
                <About/>
            </Container>

            <Container className="section-3" fluid>
                <Skills/>
            </Container>

            <Container className="section-4" fluid>
                {/* <Container> */}
                <Row className="main-row">
                    <Col>Contact</Col>
                </Row>
                {/* </Container> */}
            </Container>
        </Container>
    );
};
export default Home;

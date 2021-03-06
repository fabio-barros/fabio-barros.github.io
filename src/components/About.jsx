import React from 'react'
import { Row, Col, Container, Image } from "react-bootstrap";
import "../styles/css/About.css"
const About = () => {
    return (
        <Container className="about-wrapper">
                    <Row className="main-row about-row">
                        <Col className="about-me-col" lg={6}>
                            <div className="about-me">
                                <h3>
                                    Mais sobre mim <h6>(em terceira pessoa)</h6>
                                </h3>
                                <p>
                                    Fábio é um estudante de Ciência da
                                    Computação e desenvolvedor web em constante
                                    aperfeiçoamento. Ele desenvolve projetos
                                    principalmente em JavaScript.
                                </p>
                                <p>
                                    Quando Fábio não está programando e/ou
                                    ouvindo música, provavelmente está fazendo o
                                    que algumas pessoas pouco ajuizadas chamam
                                    de "música"; ou levantanto pesos que as
                                    vezes o fazem vomitar. E por que ele faz
                                    isso? Provavelmente por razões que ele não
                                    conseguiria articular claramente.
                                </p>
                            </div>
                        </Col>

                        <Col className="playlist" lg={6}>
                            <iframe
                                src="https://open.spotify.com/embed/playlist/6HhLuT81SJgLqPvBHjn3Jx"
                                width="300"
                                height="380"
                                frameborder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                            ></iframe>
                        </Col>
                    </Row>
                </Container>
    )
}

export default About

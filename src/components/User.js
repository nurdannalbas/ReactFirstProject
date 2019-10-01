import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
class User extends Component {
    render() {
        const mystyle = {
            marginTop: "5%",
            padding: "10px",
            fontFamily: "Open Sans",
            textAlign: "left"
        };
        const h2 = {
            textAlign: "center",
            color: "red"

        }
        return (
            <div>
                <Container style={mystyle}>
                    <form >
                        <Row>
                            <Col xs="12"><h2 style={h2}>Form Örnek</h2></Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col xs="2">   <p>Ad</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs="2">   <p>Soyad</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>


                        </Row>
                        <Row>
                            <Col xs="2">   <p>E-Posta</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">   <p>Telefon Numarası</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">   <p>Adres</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">   <p>Posta Kodu</p></Col> <Col xs="2">
                                <input type="text"></input>
                            </Col>
                        </Row>
                    </form>
                    <Row> <Col xs="2"></Col>
                        <Col xs="2">
                            <Button color="primary" size="sm" style={{ width: "100%", marginTop: 20, margin: "auto", justifyContent: "center", justifyItems: "center" }}>Gönder</Button>

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default User;
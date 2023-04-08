import React from "react";
import "../App.css";
import Navbarcomp from "../companents/Navbarcomp";
import Social from "../companents/Social";
import SliderDuyurular from "../companents/SliderDuyurular";
import Footer from "../companents/Footer";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";

function Duyurular() {
  return (
    <div>
      <Social />
      <Navbarcomp />
      <SliderDuyurular />
      <Container className="sle ">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Ticari Paket
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Finansman Paketi
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={7} className="text-center">
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <h5 class="mt-0">Top-aligned media</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <h5 class="mt-0">TESTTTTTTTTTT</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Duyurular;

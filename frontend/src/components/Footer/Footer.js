import React from "react";
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#212529', padding: '20px' }}>
          <Container>
            <Row>
              <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white'}}>
                <p>&copy; 2023 LeetCode BootCamp Web Application. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
    );
};

export default Footer;
import React from "react";
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer style={{ position: 'absolute', bottom: 0, height: '80px', backgroundColor: '#212529', padding: '20px', width: '100%' }}>
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
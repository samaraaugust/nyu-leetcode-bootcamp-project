import React from "react";
import { exampleJSON } from "../Constants/Constants";
import { 
    Container,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardTitle
 } from "reactstrap";
function Details() {
    const restaurant = exampleJSON[0];
    const valueOrNA = (value) => {
        return value ? value : 'N/A';
    };
    return (
        <div>
            <Container>
                <h1 style={{ textAlign: 'center'}}>{restaurant?.dba}</h1>
                <hr />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Card style={{ minWidth: '100px', width: '500px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
                        <CardTitle tag={'h5'} style={{ textAlign: 'center'}}>
                            Restaurant Information
                        </CardTitle>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem>
                                    <p><strong>Address:</strong> {valueOrNA(restaurant?.building)} {valueOrNA(restaurant?.street)}, {valueOrNA(restaurant?.boro)} NY {valueOrNA(restaurant?.zipcode)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong></strong></p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Phone Number:</strong> {valueOrNA(restaurant?.phone)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Cuisine:</strong> {valueOrNA(restaurant?.cuisine_description)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Longitude:</strong> {valueOrNA(restaurant?.longitude)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Latitude:</strong> {valueOrNA(restaurant?.latitude)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong></strong></p>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card style={{ minWidth: '100px', width: '500px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
                        <CardTitle tag={'h5'} style={{ textAlign: 'center'}}>
                            Inspection Results
                        </CardTitle>
                        <CardBody>
                            <ListGroup>
                            <ListGroupItem>
                                    <p><strong>Status:</strong> {valueOrNA(restaurant?.critical_flag)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Grade:</strong> {valueOrNA(restaurant.grade)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Score:</strong> {valueOrNA(restaurant.score)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Voliation Code:</strong> {valueOrNA(restaurant.violation_code)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Voliation Description:</strong> {valueOrNA(restaurant.violation_description)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Inspection Type:</strong> {valueOrNA(restaurant.inspection_type)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Date of Inspection:</strong> {valueOrNA(restaurant.inspection_date)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Action Taken Due to Inspection:</strong> {valueOrNA(restaurant.action)}</p>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </div>
            </Container>
            
        </div>
    );
};

export default Details;
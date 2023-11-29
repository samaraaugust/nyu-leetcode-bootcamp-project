import React, { useState, useEffect} from "react";
import { 
    Container,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardTitle,
    Button
 } from "reactstrap";
 import { useParams, Link } from "react-router-dom";
 import axios from 'axios';
function Details() {
    const { param } = useParams();

    const [restaurant, setRestaurant] = useState(null);
    const valueOrNA = (value) => {
        return value ? value : 'N/A';
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:8000/restaurants?camis=${param}`);
            if (response.status === 200) {
                if (response.data.Restaurants.length > 0) {
                    setRestaurant({...response.data.Restaurants[0]});
                }
                
            }
        })();
    }, []);
    return (
        <div style={{ height: '100vh', marginTop: '20px'}}>
            <Link to={'/search'}><Button style={{ marginLeft: '20px'}}>
                Back
            </Button></Link>
            <Container>
                <h1 style={{ textAlign: 'center'}}>{restaurant?.DBA}</h1>
                <hr />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '20px'}}>
                    <Card style={{ minWidth: '100px', width: '500px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
                        <CardTitle tag={'h5'} style={{ textAlign: 'center'}}>
                            Restaurant Information
                        </CardTitle>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem>
                                    <p><strong>Address:</strong> {valueOrNA(restaurant?.Building)} {valueOrNA(restaurant?.Street)}, {valueOrNA(restaurant?.Boro)} NY {valueOrNA(restaurant?.ZipCode)}</p>
                                </ListGroupItem>
                                {/* <ListGroupItem>
                                    <p><strong></strong></p>
                                </ListGroupItem> */}
                                <ListGroupItem>
                                    <p><strong>Phone Number:</strong> {valueOrNA(restaurant?.Phone)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Cuisine:</strong> {valueOrNA(restaurant?.CuisineDescription)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Longitude:</strong> {valueOrNA(restaurant?.Longitude)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Latitude:</strong> {valueOrNA(restaurant?.Latitude)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Date Record was Created:</strong> {valueOrNA(restaurant?.RecordDate)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Community Board:</strong> {valueOrNA(restaurant?.CommunityBoard)}</p>
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
                                    <p><strong>Status:</strong> {valueOrNA(restaurant?.CriticalFlag)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Grade:</strong> {valueOrNA(restaurant?.Grade)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Date Grade Was Assigned:</strong> {valueOrNA(restaurant?.GradeDate)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Score:</strong> {valueOrNA(restaurant?.Score)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Voliation Code:</strong> {valueOrNA(restaurant?.ViolationCode)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Voliation Description:</strong> {valueOrNA(restaurant?.ViolationDescription)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Inspection Type:</strong> {valueOrNA(restaurant?.InspectionType)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Date of Inspection:</strong> {valueOrNA(restaurant?.InspectionDate)}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p><strong>Action Taken Due to Inspection:</strong> {valueOrNA(restaurant?.Action)}</p>
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
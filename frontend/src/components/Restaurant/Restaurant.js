import {
    Card,
    CardBody,
    Row,
    Col,
    Label,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Restaurant ({ option }) {

    const valueOrNA = (value) => {
        return value ? value : 'N/A';
    };

    return (
        <Card style={{ margin: '10px 0px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
            <CardBody>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Col xs='3'>
                        <Label tag='h5'>
                            Restaurant Name
                        </Label>
                        <p>
                            {valueOrNA(option?.DBA)}
                        </p>
                    </Col>
                    <Col xs='3'>
                        <Label tag='h5'>
                            Address
                        </Label>
                        <p>
                            {valueOrNA(option?.Building)} {valueOrNA(option?.Street)}, {valueOrNA(option?.Boro)} NY {valueOrNA(option?.ZipCode)}
                        </p>
                    </Col>
                    <Col xs='2'>
                        <Label tag='h5'>
                            Cuisine
                        </Label>
                        <p>
                            {valueOrNA(option?.CuisineDescription)}
                        </p>
                    </Col>
                    <Col xs='1'>
                        <Label tag='h5'>
                            Grade
                        </Label>
                        <p>
                            {valueOrNA(option?.Grade)}
                        </p>
                    </Col>
                    <Col xs='1'>
                        <Label tag='h5'>
                            Score
                        </Label>
                        <p>
                            {valueOrNA(option?.Score)}
                        </p>
                    </Col>
                    <Col xs='2'>
                        <Link to={`/restaurant/${option?.Camis}`}><Button>
                            Read More
                        </Button></Link>
                    </Col>
                </Row>
                
            </CardBody>
        </Card>
    );
};

export default Restaurant;
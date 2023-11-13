import { 
    Container,
    Row,
    Col,
    Input,
    Label,
    FormGroup,
    Card,
    CardBody
 } from "reactstrap";
import Select from 'react-select';
import { criticalTypeFlagList, gradeTypeList, boroTypeList } from "../Constants/Constants";
function Filter () {
    return (
        <Container>
            <Card body>
                <CardBody>
                    <Row>
                        <Label>
                            Filter By Inspection Values
                        </Label>
                        <Col>
                            <Label for='grade'>Grade Type</Label>
                            <Select
                                id='grade'
                                options={gradeTypeList}
                                getOptionLabel={(option) => option['type']}
                                getOptionValue={(option) => option['type']}
                                isClearable={true}
                                menuPosition={'fixed'}
                                isMulti={true}
                            />
                        </Col>
                        <Col>
                            <Label for='critical_flag'>Critical Flag</Label>
                            <Select
                                id='critical_flag'
                                options={criticalTypeFlagList}
                                getOptionLabel={(option) => option['type']}
                                getOptionValue={(option) => option['type']}
                                isClearable={true}
                                menuPosition={'fixed'}
                                isMulti={true}
                            />
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="scoreRange">
                                Score Range
                                </Label>
                                <Input
                                    id="scoreRange"
                                    name="range"
                                    type="range"
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Label>Filter By Address</Label>
                        <Col>
                            <Label>Building Number</Label>
                            <Input
                                type='number'
                            />
                        </Col>
                        <Col>
                            <Label>Street Name</Label>
                            <Input
                                type='text'
                            />
                        </Col>
                        <Col>
                            <Label>Zip Code</Label>
                            <Input
                                type='text'
                            />
                        </Col>
                        <Col>
                            <Label for='boro'>Borough</Label>
                            <Select
                                id='boro'
                                options={boroTypeList}
                                getOptionLabel={(option) => option['type']}
                                getOptionValue={(option) => option['type']}
                                isClearable={true}
                                menuPosition={'fixed'}
                                isMulti={true}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Label>Filter By Business Details</Label>
                    </Row>           
                </CardBody>
            </Card>
        </Container>
    );
};

export default Filter;
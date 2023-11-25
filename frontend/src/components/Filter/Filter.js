import { 
    Container,
    Row,
    Col,
    Input,
    Label,
    FormGroup,
    Card,
    CardBody,
    Button,
    Collapse
 } from "reactstrap";
import Select from 'react-select';
import { criticalTypeFlagList, gradeTypeList, boroTypeList, cuisineTypeList } from "../Constants/Constants";
import { useState } from "react";
import {ChevronDown, ChevronUp} from 'feather-icons';
function Filter () {
    const initialState = {
        grade_id: '',//
        grade: [],
        critical_flag_id: '',//
        critical_flag: [],
        score_range: null,
        building_numbr: '',
        street_name: '',
        zip_code: null,
        borough_id: '',//
        borough: [],
    };
    const [filterInfo, setFilterInfo] = useState(initialState);
    const initialOpen = {
        inspection: true,
    };
    const [collapseOpen, setCollapseOpen] = useState(initialOpen);

    const handleSelectChange = (e, type) => {
        console.log("e: ", e);
        setFilterInfo({...filterInfo, [type]: e});
    };

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFilterInfo({...filterInfo, [id]: value});
    };

    return (
        <div>
            <Button onClick={() => console.log("current: ", filterInfo)}>Click</Button>
            <Container>
                
                <Card>
                    <CardBody>
                    <h5 style={{ fontWeight: 'normal' }}>
                    Filter By Restaurant Type
                </h5>
                <hr />
                        <Row>
                            <Col>
                        
                                <Input
                                    id="restaurantName"
                                    name="restaurantName"
                                    placeholder="Search By Name"
                                    type="text"
                              
                                />
                        
                            </Col>
                            <Col>
                                <Select
                                    id='cusine'
                                    options={cuisineTypeList}
                                    getOptionLabel={(option) => option['type']}
                                    getOptionValue={(option) => option['type']}
                                    isClearable={true}
                                    menuPosition={'fixed'}
                                    isMulti={true}
                                    placeholder={'Select a Cusine'}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

            <Container>
                <h5 style={{ fontWeight: 'normal' }}>
                    Filter By Inspection Status
                </h5>
                <hr />
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Select
                                    id='grade'
                                    options={gradeTypeList}
                                    getOptionLabel={(option) => option['type']}
                                    getOptionValue={(option) => option['type']}
                                    isClearable={true}
                                    menuPosition={'fixed'}
                                    isMulti={true}
                                    value={filterInfo.grade}
                                    onChange={(e) => handleSelectChange(e, 'grade')}
                                    placeholder={'Select a Inspection Grade'}
                                />
                            </Col>
                            <Col>
                                <Select
                                    id='critical_flag'
                                    options={criticalTypeFlagList}
                                    getOptionLabel={(option) => option['type']}
                                    getOptionValue={(option) => option['type']}
                                    isClearable={true}
                                    menuPosition={'fixed'}
                                    isMulti={true}
                                    value={filterInfo.critical_flag}
                                    onChange={(e) => handleSelectChange(e, 'critical_flag')}
                                    placeholder={'Select a Critical Flag'}
                                />
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="scoreRange">
                                    Score Range
                                    </Label>
                                    <Input
                                        id="score_range"
                                        name="range"
                                        type="range"
                                        value={filterInfo.score_range}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

            <Container>
                <h5 style={{ fontWeight: 'normal' }}>
                    Filter By Location
                </h5>
                <hr />
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <Input
                                    type='number'
                                    value={filterInfo.building_numbr}
                                    placeholder="Enter a Building Number"
                                />
                            </Col>
                            <Col>
                                <Input
                                    type='text'
                                    value={filterInfo.street_name}
                                    placeholder="Enter a Street Name"
                                />
                            </Col>
                            <Col>
                                <Input
                                    type='text'
                                    value={filterInfo.zip_code}
                                    placeholder="Enter a Zip Code"
                                />
                            </Col>
                            <Col>
                                <Select
                                    id='boro'
                                    options={boroTypeList}
                                    getOptionLabel={(option) => option['type']}
                                    getOptionValue={(option) => option['type']}
                                    isClearable={true}
                                    menuPosition={'fixed'}
                                    isMulti={true}
                                    placeholder={'Select a Borough'}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

            {/* <Button 
                style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: "space-between",
                    }} color={'light'} name=''>
                            Service Address {isOpen.service ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </Button>
                    <Collapse isOpen={isOpen.service} style={{ width: '100%' }}></Collapse> */}
        </div>
    );
};

export default Filter;
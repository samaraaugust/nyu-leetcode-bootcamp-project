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
        grade: [],//
        critical_flag: [],//
        score_range: '',//
        building_number: '',//
        street_name: '',//
        zip_code: '',//
        borough: [],//
        restaurant_name: '',//
        cuisine: []//
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

            <Container>
                <Card>
                    <CardBody>
                    <h5 style={{ fontWeight: 'normal', fontSize: 17, marginBottom: '10px'}}>
                        Filter By Restaurant Type
                    </h5>
                    <hr />
                        <Row>
                            <Col>
                        
                                <Input
                                    id="restaurant_name"
                                    name="restaurant_name"
                                    placeholder="Search By Name"
                                    type="text"
                                    value={filterInfo.restaurant_name}
                                    onChange={handleChange}
                                />
                        
                            </Col>
                            <Col>
                                <Select
                                    id='cuisine'
                                    options={cuisineTypeList}
                                    getOptionLabel={(option) => option['type']}
                                    getOptionValue={(option) => option['type']}
                                    isClearable={true}
                                    menuPosition={'fixed'}
                                    isMulti={true}
                                    placeholder={'Select a Cuisine'}
                                    value={filterInfo.cuisine}
                                    onChange={(e) => handleSelectChange(e, 'cuisine')}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

            <Container>
                
                <Card>
                    <CardBody>
                    <h5 style={{ fontWeight: 'normal', fontSize: 17 }}>
                    Filter By Inspection Status
                </h5>
                <hr />
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
                                    <Input
                                        id="score_range"
                                        name="range"
                                        type="number"
                                        value={filterInfo.score_range}
                                        onChange={handleChange}
                                        placeholder="Enter a Score"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

            <Container>
                
                <Card>
                    <CardBody>
                    <h5 style={{ fontWeight: 'normal', fontSize: 17 }}>
                    Filter By Location
                </h5>
                <hr />
                        <Row>
                            <Col>
                                <Input
                                    type='number'
                                    id='building_number'
                                    value={filterInfo.building_number}
                                    placeholder="Enter a Building Number"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Input
                                    type='text'
                                    id={'street_name'}
                                    value={filterInfo.street_name}
                                    placeholder="Enter a Street Name"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Input
                                    type='text'
                                    id={'zip_code'}
                                    value={filterInfo.zip_code}
                                    placeholder="Enter a Zip Code"
                                    onChange={handleChange}
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
                                    onChange={(e) => handleSelectChange(e, 'borough')}
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
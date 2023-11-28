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
    Collapse,
    CardTitle,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
 } from "reactstrap";
import Select from 'react-select';
import { criticalTypeFlagList, gradeTypeList, boroTypeList, cuisineTypeList } from "../Constants/Constants";
import { useState } from "react";
import { useFilter, initialState } from "../FilterContext/FilterContext";
import {ChevronDown, ChevronUp} from 'feather-icons';
function Filter () {
    const [filterInfo, setFilterInfo] = useState(initialState);
    const [modal, setModal] = useState(false);

    const { updateFilter } = useFilter();

    const handleSelectChange = (e, type) => {
        console.log("e: ", e);
        setFilterInfo({...filterInfo, [type]: e});
    };

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFilterInfo({...filterInfo, [id]: value});
    };

    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        updateFilter(filterInfo);
        if (modal) {
            toggle();
        }
    };

    return (
        <div style={{ margin: '20px 0px' }}>
            <Button onClick={() => console.log(filterInfo)}>Click</Button>
            <Container>
                <Card>
                    <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <CardTitle style={{ textAlign: 'center'}} tag={'h4'}>
                            Search By Restaurant Name
                        </CardTitle>
                        <hr style={{ width: '100%'}}/>
                        <Row >
                            <Col>
                                <Input
                                    id="dba"
                                    name="restaurant_name"
                                    placeholder="Enter a Value"
                                    type="text"
                                    value={filterInfo.dba}
                                    onChange={handleChange}
                                    style={{ minWidth: '200px', width: '700px'}}
                                />
                            </Col>
                            <Col>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Col>
                        </Row>
                        <Button style={{ margin: '10px 0px'}} onClick={toggle}>Advanced Filter Options</Button>
                    </CardBody>
                </Card>
            </Container>
            <div>
                <Modal isOpen={modal} toggle={toggle} size={'lg'}>
                    <ModalHeader toggle={toggle}>Advanced Filter</ModalHeader>
                    <ModalBody >
                        <div >
                            <h5 style={{ fontWeight: 'normal', fontSize: 17, textAlign: 'center', marginBottom: '20px'}}>
                                Filter By Restaurant Type
                            </h5>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <Label>
                                                Restaurant
                                            </Label>
                                            <Input
                                                id="dba"
                                                name="restaurant_name"
                                                placeholder="Search By Name"
                                                type="text"
                                                value={filterInfo.dba}
                                                onChange={handleChange}
                                            />
            
                                        </Col>
                                        <Col>
                                            <Label>
                                                Cuisine
                                            </Label>
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
                        </div>
                        <div style={{ height: '20px'}} />
                        <div>
                            <h5 style={{ fontWeight: 'normal', fontSize: 17, textAlign: 'center', marginBottom: '20px' }}>
                                Filter By Inspection Status
                            </h5>
    
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                        <Label>
                                            Inspection Grade
                                        </Label>
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
                                                placeholder={'Select a Grade'}
                                            />
                                        </Col>
                                        <Col>
                                            <Label>
                                                Critical Flag
                                            </Label>
                                            <Select
                                                id='criticalFlag'
                                                options={criticalTypeFlagList}
                                                getOptionLabel={(option) => option['type']}
                                                getOptionValue={(option) => option['type']}
                                                isClearable={true}
                                                menuPosition={'fixed'}
                                                isMulti={true}
                                                value={filterInfo.criticalFlag}
                                                onChange={(e) => handleSelectChange(e, 'criticalFlag')}
                                                placeholder={'Select a Critical Flag'}
                                            />
                                        </Col>
                                        <Col>
                                            <Label>
                                                Score
                                            </Label>
                                            <Input
                                                id="score"
                                                name="range"
                                                type="number"
                                                value={filterInfo.score}
                                                onChange={handleChange}
                                                placeholder="Enter a Score"
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div style={{ height: '20px'}} />
                        <div>
                            <h5 style={{ fontWeight: 'normal', fontSize: 17, textAlign: 'center', marginBottom: '20px' }}>
                                Filter By Location
                            </h5>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <Label>
                                                Building Number
                                            </Label>
                                            <Input
                                                type='number'
                                                id='building'
                                                value={filterInfo.building}
                                                placeholder="Enter a Value"
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Label>
                                                Street Name
                                            </Label>
                                            <Input
                                                type='text'
                                                id={'street'}
                                                value={filterInfo.street}
                                                placeholder="Enter a Value"
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        </Row>
                                        <Row style={{ marginTop: '20px'}}>
                                        <Col>
                                            <Label>
                                                Zip Code
                                            </Label>
                                            <Input
                                                type='text'
                                                id={'zipcode'}
                                                value={filterInfo.zipcode}
                                                placeholder="Enter a Value"
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Label>
                                                Borough
                                            </Label>
                                            <Select
                                                id='boro'
                                                options={boroTypeList}
                                                getOptionLabel={(option) => option['type']}
                                                getOptionValue={(option) => option['type']}
                                                isClearable={true}
                                                menuPosition={'fixed'}
                                                isMulti={true}
                                                placeholder={'Select a Value'}
                                                onChange={(e) => handleSelectChange(e, 'boro')}
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button color="primary" onClick={handleSubmit}>
                            Search
                        </Button>
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
            
            {/* <Container>
                <Card>
                    <CardBody>
                    <h5 style={{ fontWeight: 'normal', fontSize: 17}}>
                        Filter By Restaurant Type
                    </h5>
                    <hr />
                        <Row>
                            <Col>
                                <Label>
                                    Restaurant
                                </Label>
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
            </Container> */}

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
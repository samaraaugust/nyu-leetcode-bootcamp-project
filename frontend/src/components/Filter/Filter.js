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
    ModalFooter,
    Badge
 } from "reactstrap";
import Select from 'react-select';
import { criticalTypeFlagList, gradeTypeList, boroTypeList, cuisineTypeList } from "../Constants/Constants";
import { useState } from "react";
import { useFilter, initialState } from "../FilterContext/FilterContext";
function Filter () {
    const [filterInfo, setFilterInfo] = useState(initialState);
    const [modal, setModal] = useState(false);

    const { currentFilter, updateFilter } = useFilter();

    const handleSelectChange = (e, type) => {
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

    const reset = () => {
        setFilterInfo(initialState);
        updateFilter(initialState);
    };

    return (
        <div style={{ margin: '20px 0px' }}>
            {/* <Button onClick={() => console.log(filterInfo)}>Click</Button> */}
            <Container>
                <Card className="shadow-lg p-3 mb-5 bg-#e8eff9 rounded">
                    <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Button outline onClick={reset}>Reset Filter</Button>
                            <Button outline onClick={toggle}>Advanced Filter Options</Button>
                        </div>
                        <CardTitle style={{ textAlign: 'center'}} tag={'h4'}>
                            Search By Restaurant Name
                        </CardTitle>
                        <hr style={{ width: '100%'}}/>
                        <Row >
                            {/* --bs-focus-ring-color rgba(13, 110, 253, 0.25)*/}
                            {/* 0 1rem 3rem #e8eff9 */}
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
                                <Button outline onClick={handleSubmit}>Search</Button>
                            </Col>
                        </Row>
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
                            <Card className="shadow p-3 mb-3 bg-white rounded">
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
                        <div style={{ height: '10px'}} />
                        <div>
                            <h5 style={{ fontWeight: 'normal', fontSize: 17, textAlign: 'center', marginBottom: '20px' }}>
                                Filter By Inspection Status
                            </h5>
    
                            <Card className="shadow p-3 mb-3 bg-white rounded">
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
                        <div style={{ height: '10px'}} />
                        <div>
                            <h5 style={{ fontWeight: 'normal', fontSize: 17, textAlign: 'center', marginBottom: '20px' }}>
                                Filter By Location
                            </h5>
                            <Card className="shadow p-3 mb-3 bg-white rounded">
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
                                                value={filterInfo.boro}
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
            
        </div>
    );
};

export default Filter;
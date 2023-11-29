import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    CardBody,
    UncontrolledAccordion,
    Card
  } from 'reactstrap';

function Policy() {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return (
        <div>
            <center>
                <h1 style={{marginTop: '30px', marginBottom: '40px'}} >
                Know Before You Dine: Demystifying Restaurant Grades  
                </h1>
            </center>
            <Card className='shadow p-3 mb-5 bg-white rounded'>
                <CardBody>
                The score points assigned during a food inspection represent the numerical assessment of the establishment's compliance with health and safety regulations. Each violation observed by the inspector is assigned a specific number of points based on the severity of the violation. 
                The cumulative score reflects the overall performance of the establishment during the inspection.
                The letter grades A, B, C, N, P, and Z are commonly used in the food industry, particularly 
                    in the context of food safety and inspection. These grades may have specific meanings depending on 
                    the regulatory body or system in place.
                </CardBody>
            </Card>
            
            <h3 style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>A Breakdown of Grades</h3> 
        <Accordion open={open} toggle={toggle} className='shadow p-3 mb-5 bg-white rounded'>
        <AccordionItem>
          <AccordionHeader targetId="1"><strong>Grade A</strong></AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
                <li>Point Distribution: 0 – 13 points</li>
                <li>In Full Compliance:</li>
                <ul>
                    <li>The establishment has met all food safety standards.</li>
                    <li>Demonstrates a high level of cleanliness and adherence to food safety protocols.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"> <strong>Grade B</strong></AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
                <li>Point Distribution: 14 – 27 points</li>
                <li>Correctable Violations: </li>
                <ul>
                    <li>Indicates that there are violations that need attention but are not severe enough for immediate closure.</li>
                    <li>Points to areas requiring corrective action to ensure compliance with health and safety standards.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><strong>Grade C</strong></AccordionHeader>
          <AccordionBody accordionId="3">
            <ul>
                <li>Point Distribution: 28+ points</li>
                <li>Has Significant Violations: </li>
                <ul>
                    <li>Suggests more substantial violations that may pose a risk to public health.</li>
                    <li>Could result in temporary closure until identified issues are resolved.</li>
                    <li>Urgent corrective measures are necessary.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"><strong>Grade N</strong></AccordionHeader>
          <AccordionBody accordionId="4">
            <ul>
                <li>New Establishment or Not Graded:</li>
                <ul>
                    <li>Used for new establishments that haven't received a grade yet.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5"><strong>Grade P</strong></AccordionHeader>
          <AccordionBody accordionId="5">
            <ul>
                <li>Temporary Grade: </li>
                <ul>
                    <li>Indicates a provisional or temporary grade assigned to an establishment.</li>
                    <li>Often used when a follow-up inspection is needed to confirm necessary improvements.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6"><strong>Grade Z</strong></AccordionHeader>
          <AccordionBody accordionId="6">
            <ul>
                <li>Failed to Meet Standards:</li>
                <ul>
                    <li>Typically suggests that the establishment failed to meet minimum health and safety standards.</li>
                    <li>Could result in closure or serious corrective action.</li>
                </ul>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>       
      <h3 style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>A Breakdown of Critical Flags</h3> 
      <UncontrolledAccordion
        defaultOpen={[
        ]}
        stayOpen className='shadow p-3 mb-5 bg-white rounded'>
        <AccordionItem>
        <AccordionHeader targetId="1">
        <strong> Critical</strong>
        </AccordionHeader>
        <AccordionBody accordionId="1">
        <ul>
            <li>This flag is given for violations that are considered to be a serious risk to public health. These violations are typically related to food storage, cooking, and sanitation.</li>
            <li>Examples of critical violations include:
            <ul>
                <li>Presence of rodent feces</li>
                <li>Improper food storage temperatures</li>
                <li>Inadequate handwashing facilities</li>
                <li>Cross-contamination of food</li>
            </ul>
            </li>
        </ul>
        </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionHeader targetId="2">
            <strong> Not Critical</strong>
        </AccordionHeader>
        <AccordionBody accordionId="2">
        <ul>
            <li>This flag is given for violations that are not considered to be a serious risk to public health. These violations are typically related to recordkeeping, pest control, and general cleanliness.</li>
            <li>Examples of non-critical violations include: 
            <ul>
                <li>Failure to keep accurate food records</li>
                <li>Presence of minor pests, such as fruit flies</li>
                <li>Dirty floors or walls</li>
            </ul>
            </li>
            </ul>
        </AccordionBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionHeader targetId="3">
            <strong> Not Applicable</strong>
        </AccordionHeader>
        <AccordionBody accordionId="3">
        <ul>
            <li>This flag is given to restaurants that did not have any violations during their inspection.</li>
        </ul>
        </AccordionBody>
        </AccordionItem>
        </UncontrolledAccordion>
        </div>
    );
};

export default Policy;




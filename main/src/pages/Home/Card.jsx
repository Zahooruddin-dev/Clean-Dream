import { useState } from "react"
import { Col, Button, Accordion } from "react-bootstrap"
import { useAccordionButton } from "react-bootstrap/AccordionButton"

function CustomToggle({ children, eventKey }) {
  return (
    <Button
      type="button"
      onClick={useAccordionButton(eventKey)}
    >
      {children}
    </Button>
  );
}

const Card = ({ item }) => {
  return (
    <Col className="service-cards" lg >
      <h3>{item.heading}</h3>
      <img src={item.img} />

      <Accordion defaultActiveKey="0">
    
      <CustomToggle eventKey="1">Learn More</CustomToggle>
        <Accordion.Collapse eventKey="1">
          <p className="h4">{item.content}</p>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  )
}

export default Card

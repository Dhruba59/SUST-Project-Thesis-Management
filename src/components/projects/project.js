import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import css from './project.module.css';

const project = (props) => {


  return (
  <div className={css.Accordion}>
    <Accordion className={css.Accordion}>
      <Accordion.Toggle className={css.Toggle} as={Button} variant="secondary" eventKey="0">
        {props.title} || tags: <p>{props.topics}</p>
      </Accordion.Toggle>
   
    <Accordion.Collapse eventKey="0">
      <Card bg='light' style={{margin: '2%', padding:'1%', display: 'flex'}}>
        <Card.Title > {props.title} </Card.Title>
        <Card.Text><h6>Tags</h6>:{props.topics}</Card.Text>
        <Card.Text><h6>Date</h6>:{props.date}</Card.Text>
        <Card.Text><h6>Supervisor</h6>:{props.supervisor}</Card.Text>
        <Card.Text><h6>Team members</h6>:{props.members.join(', ')}</Card.Text>
        <Card.Text><h6>Abstract</h6>:{props.abstract}</Card.Text>
        
      </Card>
    </Accordion.Collapse>
    </Accordion>
    </div>
  );
}

export default project;

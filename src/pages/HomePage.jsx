import React, { useState } from 'react';
import { Container,Row,Col,Button,Form } from 'react-bootstrap';
import Column from '../componets/Column';
import '../App.css';
import { DataStrings, InitialTickets,Statuses } from '../utils/data';
import { addNewTicket, chnageStatus,sortTicketsByStatus } from '../utils/operations';
import Heading from '../componets/Heading';

function HomePage() {
    const [tickets, setTickets] = useState(InitialTickets);
    const [newTicketTitle, setNewTicketTitle] = useState('');
    const [ShowErrorMessage,setShowErrorMessage] = useState(false);
  
  
    const handleStatusChange = (id, newStatus) => {
      const updatedTickets = chnageStatus(id, newStatus,tickets);
      setTickets(updatedTickets);          //Function called when staus of a ticket chnages
    };
  
    const handleChange = (e) => {
      setNewTicketTitle(e.target.value);
      setShowErrorMessage(false);          //Function called whenever there is a change in input
    }
  
    const addTicket = (e) => {
      const newTicket = addNewTicket(tickets,newTicketTitle,e);
      if(newTicket !== false){
        setTickets([...tickets,newTicket]);                //Function called to add a new ticket
        setNewTicketTitle('');
      }
      else{
        setShowErrorMessage(true);
      }
    }
  
    return (
      <div className="app">
     <Container>
        <Heading title={DataStrings?.title} />
        <Row>
          <Col>
          <Form className='align-items-center' onSubmit={addTicket}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Task</Form.Label>
              <Form.Control value={newTicketTitle} type="text" placeholder="Add Task" onChange={(e) => handleChange(e)} />
              {ShowErrorMessage && <Form.Text className="text-danger">{DataStrings?.errorMsg}</Form.Text>}
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
          </Col>
        </Row>
        <Row>
          {Statuses?.map((status) =>(
            <Column key={status?.id} title={status?.title} tickets={sortTicketsByStatus(status?.title,tickets)} onStatusChange={handleStatusChange} />
          ))}
        </Row>
      </Container>
      </div>
    );
}

export default HomePage
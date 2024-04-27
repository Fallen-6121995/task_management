import { Col } from 'react-bootstrap';
import TicketCard from './TicketCard';
import { DataStrings } from '../utils/data';
function Column({ title, tickets, onStatusChange }) {
  const renderTicketCard = () => {
    if(tickets.length == 0){
      return <p>{DataStrings?.noTicketMsg} "{title}"</p>
    }
    return tickets.map(ticket => (
      <TicketCard key={ticket.id} ticket={ticket} onStatusChange={onStatusChange} />
    ))
  }
    return (
      <Col>
        <h2>{title}</h2>
       {renderTicketCard()}
      </Col>
    );
  }
  export default Column;
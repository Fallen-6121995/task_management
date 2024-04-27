import React from 'react'

function TicketCard({ ticket, onStatusChange }) {
    const handleStatusChange = (e) => {
      const newStatus = e.target.value;
      onStatusChange(ticket.id, newStatus);
    };
    return(
        <div className="ticket-card">
      <div className="title">{ticket.title}</div>
      <select value={ticket.status} onChange={handleStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
    )
}

export default TicketCard
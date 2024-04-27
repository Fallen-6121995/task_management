export function chnageStatus(id, newStatus, tickets) {
    const updatedTickets = tickets.map(ticket =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
    );
    return updatedTickets
}

export const sortTicketsByStatus = (status, tickets) => {
    return tickets.filter(ticket => ticket.status === status);
}

export const addNewTicket = (tickets, newTicketTitle = "", e) => {
    e.preventDefault();
    if (newTicketTitle.trim() == "") {
        return false;
    }
    else {
        const newTicket = {
            id: tickets.length + 1,
            title: newTicketTitle,
            status: 'To Do'
        }
        return newTicket
    }
}
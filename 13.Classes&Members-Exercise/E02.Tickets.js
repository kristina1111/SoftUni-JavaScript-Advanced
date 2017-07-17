function ticketSorter(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, sortCriteria){
            if(typeof(this[sortCriteria])!= 'number'){
                return this[sortCriteria].localeCompare(other[sortCriteria]);
            }
            return this[sortCriteria] - other[sortCriteria];
        }
    }

    let arrTickets = [];
    arr.forEach(e=>{
        let tokens = e.split('|');
        let ticket = new Ticket(tokens[0], Number(tokens[1]), tokens[2]);
        arrTickets.push(ticket);
    });
    arrTickets.sort(function (a, b) {
        return a.compareTo(b, sortCriteria);
    });

    return arrTickets;
}

ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');


import React from 'react';
import {Link} from 'react-router-dom';

const Events = ({events}) => (
  <div className="events-wrapper">
    {
      events.map(event => {
        return (
          <div className="text-truncate event" key={event.id}>
            <Link className="event-summary" to={`/view/${event.id}`} onClick={event => event.stopPropagation()}>
              <span className="bullet">&bull;</span> {event.startTime} <span className="event-name">{event.name}</span>
            </Link>
          </div>
        );
      })
    }
  </div>
);

export default Events;

import React from 'react';
import {connect} from 'react-redux';
import history from '../history';
import {Events} from '../components';

const Dates = ({dates, events}) => {
  const addClass = id => [1, 7, 8, 14, 15, 21, 22, 28, 29, 35].indexOf(id) > -1;

  return (
    <tr>
      {
        dates.map(date => {
          const filteredEvents = events.filter(event => {
            const filteredDates = event.dates.map(associatedDate => {
              return associatedDate.id;
            });

            return filteredDates.indexOf(date.id) > -1;
          });

          return (
            <td className={addClass(date.id) ? 'grey-background' : ''} key={date.id} onClick={() => history.push(`/create/${date.id}`)}>
              <div className="date-number">{date.number}</div>

              <div className="events-container">
                <Events events={filteredEvents} />
              </div>
            </td>
          );
        })
      }
    </tr>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, null)(Dates);

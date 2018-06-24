import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteEvent} from '../store';

const View = props => {
  const {events, deleteEvent} = props;
  const {eventId} = props.match.params;

  const event = events.find(event => event.id === +eventId);

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h3 className="text-center">View the event</h3>

            <div className="card text-center">
              <div className="card-header">{event ? event.name : null}</div>
              <div className="card-body">
                <h5 className="card-title">{event ? `${event.startTime} - ${event.endTime}` : null}</h5>
                <p className="card-text">{event ? event.description : null}</p>
                <Link className="btn btn-primary" to={`/update/${eventId}`}>Update</Link> &nbsp;
                <a href="#" className="btn btn-primary" onClick={() => deleteEvent(eventId)}>Delete</a>
              </div>
              <div className="card-footer text-muted">10 seconds ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  deleteEvent(eventId) {
    dispatch(deleteEvent(eventId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

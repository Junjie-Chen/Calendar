import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import history from '../history';
import {addEvent, updateEvent} from '../store';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      startTime: '',
      endTime: '',
      description: ''
    };

    this.changeState = this.changeState.bind(this);
    this.modifiedState = this.modifiedState.bind(this);
  }

  componentDidMount() {
    const {eventId} = this.props.match.params;
    const {events} = this.props;

    const event = events.find(event => event.id === +eventId);

    if (history.location.pathname === `/update/${eventId}` && this.state !== event) {
      this.modifiedState(event);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {eventId} = this.props.match.params;
    const {events} = nextProps;

    const event = events.find(event => event.id === +eventId);

    if (history.location.pathname === `/update/${eventId}` && this.state !== event) {
      this.modifiedState(event);
    }
  }

  changeState(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  modifiedState(event) {
    this.setState({
      name: event ? event.name : '',
      startTime: event ? moment(event.startTime, 'h:mm a', true).format('HH:mm') : '',
      endTime: event ? moment(event.endTime, 'h:mm a', true).format('HH:mm') : '',
      description: event ? event.description : ''
    });
  }

  render() {
    const {addEvent, updateEvent} = this.props;
    const {dateId, eventId} = this.props.match.params;

    return (
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 col-md-6">
              <h3 className="text-center">{history.location.pathname === `/create/${dateId}` ? 'Create an' : 'Update the'} event</h3>

              <form onSubmit={event => {
                event.preventDefault();

                history.location.pathname === `/create/${dateId}` ? addEvent(this.state, dateId) : updateEvent(this.state, eventId);
              }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Name the event" value={this.state.name} onChange={this.changeState} />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="startTime">Start Time</label>
                    <input type="time" name="startTime" className="form-control" id="startTime" placeholder="Add start time, e.g. 10:30 am" value={this.state.startTime} onChange={this.changeState} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="endTime">End Time</label>
                    <input type="time" name="endTime" className="form-control" id="endTime" placeholder="Add end time, e.g. 11:00 am" value={this.state.endTime} onChange={this.changeState} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" className="form-control" id="description" placeholder="Describe the event" value={this.state.description} onChange={this.changeState}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  addEvent(newEvent, dateId) {
    dispatch(addEvent(newEvent, dateId));
  },
  updateEvent(modifiedEvent, eventId) {
    dispatch(updateEvent(modifiedEvent, eventId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

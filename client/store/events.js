import axios from 'axios';
import history from '../history';

const events = [];

const GET_EVENT = 'GET_EVENT';
const GET_EVENTS = 'GET_EVENTS';
const MODIFY_EVENT = 'MODIFY_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';

const getEvent = newEvent => ({
  type: GET_EVENT,
  newEvent
});

const getEvents = events => ({
  type: GET_EVENTS,
  events
});

const modifyEvent = modifiedEvents => ({
  type: MODIFY_EVENT,
  modifiedEvents
});

const removeEvent = deletedEvents => ({
  type: REMOVE_EVENT,
  deletedEvents
});

export const addEvent = (newEvent, dateId) => dispatch =>
  axios
  .post('/api/events', {newEvent, dateId})
  .then(res => {
    dispatch(getEvent(res.data || {}));

    history.push('/');
  })
  .catch(err => console.error(err));

export const loadEvents = () => dispatch =>
  axios
  .get('/api/events')
  .then(res => dispatch(getEvents(res.data || events)))
  .catch(err => console.error(err));

export const updateEvent = (modifiedEvent, id) => (dispatch, getState) =>
  axios
  .put(`/api/events/${id}`, modifiedEvent)
  .then(res => {
    const modifiedEvents = getState().events.map(event => event.id === res.data.id ? res.data : event);

    dispatch(modifyEvent(modifiedEvents));

    history.push('/');
  })
  .catch(err => console.error(err));

export const deleteEvent = id => (dispatch, getState) =>
  axios
  .delete(`/api/events/${id}`)
  .then(() => {
    const deletedEvents = getState().events.filter(event => event.id !== +id);

    dispatch(removeEvent(deletedEvents));

    history.push('/');
  })
  .catch(err => console.error(err));

export default (state = events, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_EVENT:
      return [...state, action.newEvent];
    case REMOVE_EVENT:
      return action.deletedEvents;
    case MODIFY_EVENT:
      return action.modifiedEvents;
    default:
      return state;
  }
};

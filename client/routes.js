import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Calendar, Form, View} from './components';
import {loadEvents} from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <Switch>
        <Route path="/create/:dateId" component={Form} />
        <Route path="/view/:eventId" component={View} />
        <Route path="/update/:eventId" component={Form} />
        <Route component={Calendar} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadEvents() {
    dispatch(loadEvents());
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Routes));

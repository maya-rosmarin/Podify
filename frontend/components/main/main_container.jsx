import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()); }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

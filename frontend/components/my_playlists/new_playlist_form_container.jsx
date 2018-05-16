import React from 'react';
import { connect } from 'react-redux';
import NewPlaylistForm from './new_playlist_form';

mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal());
  }
}

export default connect(null, mapDispatchToProps)(NewPlaylistForm);

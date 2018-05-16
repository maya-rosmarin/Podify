import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewPlaylistForm from '../my_playlists/new_playlist_form';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <NewPlaylistForm />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

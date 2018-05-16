import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import audioReducer from './audio_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    audio: audioReducer,
    modal: modalReducer
 });

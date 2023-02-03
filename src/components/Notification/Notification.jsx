import PropTypes from 'prop-types';
import { ParagNotification } from './Notification.styled'

function Notification({ message }) {
    return <ParagNotification>{message}</ParagNotification>;
  }
  
  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };

export default Notification;
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

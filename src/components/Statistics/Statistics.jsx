import PropTypes from 'prop-types';
import { StatisticList, StatisticListItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticList>
      <StatisticListItem>Good: {good}</StatisticListItem>
      <StatisticListItem>Neutral: {neutral}</StatisticListItem>
      <StatisticListItem>Bad: {bad}</StatisticListItem>
      <StatisticListItem>Total: {total}</StatisticListItem>
      <StatisticListItem>Positive feedback: {positivePercentage}%</StatisticListItem>
    </StatisticList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

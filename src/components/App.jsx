import { useState } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const positiveFeedback = () => {
    if (good === 0) {
      return 0;
    } else {
      return Math.round((good * 100) / totalFeedback());
    }
  };

  const options = ['good', 'neutral', 'bad'];

      return (
      <Container>
        <Section title="Please leave fedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={addFeedback}
          />
        </Section>

        <Section title="Statistics">
        {totalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positivePercentage={positiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
}

export default App;
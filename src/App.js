import React from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnClickHandler = e => {
    const target = e.target.name;
    this.setState(prevState => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedback = (good / this.countTotalFeedback()) * 100;

    return positiveFeedback;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.btnClickHandler}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            // positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;

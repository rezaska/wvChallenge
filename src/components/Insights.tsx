import { Component } from 'react';
import InsightsDetail from './InsightsDetail';
import { hideAccountNumber } from './utils';
import { dateFormat } from './utils';

interface Props {
  page: string,
}

interface States {
  time: number,
  timeUnit: string
}

class Insights extends Component<Props, States> {

  constructor(props: Props) {
    super(props);

    this.state = {
      time: 1,
      timeUnit: 'second'
    }
  }

  componentDidMount() {
    this.setState({
      time: 5,
      timeUnit: 'minutes'
    })
  }

  render() {

    if (this.props.page === 'invoice') {
      return (
        <div className="insights-container">
          <InsightsDetail name='overdue' title='Overdue' currency={500} updateMessage={`Last updated ${this.state.time} ${this.state.timeUnit} ago`} />
          <InsightsDetail name='due' title='Due within next 30 days' currency={100} />
          <InsightsDetail name='average' title='Average time to get paid' highlightMessage='138' message=' days' />
          <InsightsDetail name='upcoming' title='Upcoming payout' message='None' />
        </div>
      )
    }

    else if (this.props.page === 'payout') {
      return (
        <div className="insights-container">
          <InsightsDetail name='payout' title='Payout amount' currency={5868.50} updateMessage='Credit - you receive' />
          <InsightsDetail name='destination' title='Destination' message='Wells Fargo' updateMessage={hideAccountNumber('12341234')} />
          <InsightsDetail name='delivery' title='Delivery' message={dateFormat('03-18-2021')} />
          <InsightsDetail name='status' title='Status' message='Completed' />
        </div>
      )
    };

    return null
  }
}

export default Insights;
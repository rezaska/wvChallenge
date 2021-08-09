import { Component } from 'react';
const CurrencyFormat = require('react-currency-format');

interface Props {
  name: string,
  title: string,
  highlightMessage?: string,
  message?: string,
  updateMessage?: string,
  currency?: number,
}

class InsightsDetail extends Component<Props>{

  render() {
    return (
      <div className={this.props.name.concat('-section')}>
        <p className={this.props.name.concat('-title')}>{this.props.title}</p>
        <p className={this.props.name.concat('-text')}>
          {
            this.props.highlightMessage ?
              <span>{this.props.highlightMessage}</span> :
              null
          }
          {
            this.props.message ?
              this.props.message :
              null
          }
          {
            this.props.currency ?
              <><CurrencyFormat value={this.props.currency} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /> USD</> :
              null
          }
        </p>
        {
          this.props.updateMessage ?
            <p className={this.props.name.concat('-update')}>
              {
                this.props.updateMessage
              }
            </p> :
            null
        }
      </div>
    )
  }
}

export default InsightsDetail;
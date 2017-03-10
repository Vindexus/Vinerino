import React from 'react'

import Money from './Money'

export default class ProgressBar extends React.Component {
  render () {
    const donation = this.props.donation

    if(!donation) {
      return null
    }
    return (
      <div class="latest-donation">
        <span class="donor">{donation.displayName}</span>
        <Money amount={donation.amount} />
      </div>
    )
  }
}
import React from 'react'

export default class Money extends React.Component {
  render () {
    const totalCents = this.props.amount
    let display = 0

    if(!totalCents) {
      return <span class="money money-zero">$0</span>
    }

    const dollars = Math.floor(totalCents / 100)
    const cents = totalCents - (dollars * 100)

    if(dollars >= 1000) {
      let ks = parseFloat((dollars / 1000).toFixed(2))
      display = ks + 'k'
    }
    else if(dollars >= 10) {
      display = parseFloat((dollars+cents).toFixed(2))
    }
    else {
      display = dollars.toString() + '.' + (cents < 10 ? '0' + cents.toString() : cents).toString()
    }

    return <span class="money">${display}</span>
  }
}
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {watch} from '@app/store'

class GuideItem extends React.Component {

  componentDidMount() {
    console.log('mounted 1')
  }

  handleGuideItemClick() {
    alert('clicked')
    console.log('working')
    this.props.watch(data)
    this.props.history.push(`/watch/live/${this.props.channel.id}`)
  }

  render() {
    return (
      <a className="guide-item" onClick={this.handleGuideItemClick}>
        <div className="guide-item-logo">
          <img src={this.props.channel.logo} alt={this.props.channel.title} />
        </div>
      </a>
    )
  }

}

/*
const mapDispatchToProps = dispatch => ({
  watch: (data) => dispatch(watch(data))
})
*/

export default /*connect(null, mapDispatchToProps)(*/ withRouter(GuideItem)

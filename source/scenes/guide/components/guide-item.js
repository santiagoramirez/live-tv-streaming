import React from 'react'
import {connect} from 'react-redux-dom'
import {WithRouter} from 'react-router'
import {watch} from '@app/store/watch'

class GuideItem extends React.Component {

  handleGuideItemClick() {
    this.props.watch(data)
    this.props.history.push(`/watch/live/${this.props.channel.id}`)
  }

  render() {
    return (
      <div className="guide-item" onClick={() => handleGuideItemClick()}>
        <div className="guide-item-logo">
          <img src={this.props.channel.logo} alt={this.props.channel.title} />
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  watch: (data) => dispatch(watch(data))
})

export default connect(null, mapDispatchToProps)(WithRouter(GuideItem))

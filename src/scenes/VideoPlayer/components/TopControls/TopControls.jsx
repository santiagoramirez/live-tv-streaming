import './TopControls.scss'

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {showGuide, hideGuide} from '@app/store/video-player/actions'

class TopControls extends React.Component {

  toggleGuide() {
    if (!this.props.showGuideBool) {
      this.props.showGuide()
    } else {
      this.props.hideGuide()
    }
  }

  render() {
    return (
      <div className="top-controls">
        <Link className="control-return" to="/watch">Return</Link>
        <a className="control-guide" onClick={() => this.toggleGuide()}>View Guide</a>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  showGuideBool: state.videoPlayer.showGuide
})

const mapDispatchToProps = dispatch => ({
  showGuide: () => dispatch(showGuide()),
  hideGuide: () => dispatch(hideGuide())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopControls)

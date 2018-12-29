import React, { PropTypes } from 'react'

class App1 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { requestQrcode } = this.props
    requestQrcode()
  }

  componentWillReceiveProps(nextProps) {
    const { redirectTo } = this.props
    if (nextProps.isLogined) {
      this.context.router.push(redirectTo)
    }
  }

  render() {
    const { qrcodeUrl, isQrcodeReady, isLogined } = this.props
    return (!isLogined &&
      <div style={{
        maxWidth: '204px',
        fontFamily: `"LiHei Pro Medium", "Microsoft YaHei"`
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          {isQrcodeReady &&
            <div style={{
              border: '1px solid #ddd'
            }}>
              <img src={qrcodeUrl} style={{width: '200px', margin: 'auto', padding: '0'}}></img>
            </div>
          }
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '8px'
        }}>
          {!isQrcodeReady &&
            <span>æ­£åœ¨ç”ŸæˆäºŒç»´ç ï¼Œè¯·ç¨å€™ ...</span>
          }
          {isQrcodeReady &&
            <span style={{fontWeight: 'bold'}}>å¾®ä¿¡â€œæ‰«ä¸€æ‰«â€</span>
          }
        </div>
      </div>
    )
  }
}

App1.propTypes = {
  qrcodeUrl: PropTypes.string,
  isQrcodeReady: PropTypes.bool.isRequired,
  isLogined: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  requestQrcode: PropTypes.func.isRequired
}

App1.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App1
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {showContent: this.props.showContent}
    this.toggleContent = this.toggleContent.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.showContent !== prevProps.showContent) {
      this.state({showContent: this.props.showContent})
    }
  }

  mergeNotificationStyle(iconColor, bubbleStyle, orientation) {
    const iconColorStyle = iconColor ? {...s.eventType, ...{color: iconColor, borderColor: iconColor}} : s.eventType
    const leftOrRight = (orientation === 'right') ? {...s['eventType--right']} : {...s['eventType--left']}
    return {...iconColorStyle, ...leftOrRight, ...bubbleStyle}
  }

  mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message
    return contentStyle ? {...messageStyle, ...contentStyle} : messageStyle
  }

  timeStyle() {
    return this.showAsCard() ? s.time : {...s.time, color: '#303e49'}
  }

  showAsCard() {
    const {container} = this.props
    return container === 'card'
  }

  containerStyle() {
    const {style} = this.props
    const containerStyle = {...s.eventContainer, ...style}
    return this.showAsCard() ? {...s.card, ...containerStyle} : containerStyle
  }

  toggleStyle() {
    const {container, cardHeaderStyle, collapsible} = this.props
    const messageStyle = container === 'card' ? {...s.cardTitle, ...cardHeaderStyle} : {}
    return collapsible ? {...s.toggleEnabled, ...messageStyle} : messageStyle
  }

  toggleContent() {
    this.setState({showContent: !this.state.showContent})
  }

  renderChildren() {
    const {collapsible, contentStyle} = this.props
    return ((collapsible && this.state.showContent) || !collapsible) ?
    <div style={this.mergeContentStyle(contentStyle)}>
      {this.props.children}
      <div style={s.messageAfter} />
    </div> : <span style={{fontWeight: 500, fontSize: 16, cursor: 'pointer'}} onClick={this.toggleContent}>…</span>
  }

  render() {
    const {
      createdAt,
      title,
      subtitle,
      iconStyle,
      bubbleStyle,
      buttons,
      icon,
      iconColor,
      titleStyle,
      subtitleStyle,
      orientation,
      collapsible,
      ...otherProps
    } = this.props
    const leftOrRightEventStyling = (orientation === 'right') ? {...s['event--right']} : {...s['event--left']}
    const leftOrRightButtonStyling = (orientation === 'left') ? {...s['actionButtons--right']} : {...s['actionButtons--left']}
    return (
      <div style={{...s.event, ...leftOrRightEventStyling}}>
        <div style={this.mergeNotificationStyle(iconColor, bubbleStyle, orientation)}>
          <span style={{...s.materialIcons, ...iconStyle}}>
            {icon}
          </span>
        </div>
        <div {...otherProps} style={this.containerStyle()}>
          <div style={s.eventContainerBefore} />
          <div style={this.toggleStyle()} onClick={collapsible && this.toggleContent}>
            {createdAt}
            
            
          </div>
          {this.props.children && this.renderChildren()}
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}



export default TimelineEvent

import React, {Component} from 'react'
import s from './styles'

class Timeline extends Component {
  render () {
    const {children} = this.props;
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child))
    
    return (
     /*  const { orientation = 'left', children, lineColor, lineStyle, style, ...otherProps } = this.props
      const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { orientation }))
      let leftOrRight = (orientation === 'right') ? {...s['containerBefore--right']} : {...s['containerBefore--left']}
      let lineAppearance = {...leftOrRight, ...lineStyle}
      lineAppearance = lineColor ? {...lineAppearance, background: lineColor} : lineAppearance
      return (
        <div>
          <section style={{...s.container, ...style}} {...otherProps}>
            <div style={{...s.containerBefore, ...lineAppearance}} />
            {childrenWithProps}
            <div style={s.containerAfter} />
          </section >
        </div> */


      <div>
        <section style={{...s.container}}>
          <div />
          {childrenWithProps}
          <div style={{...s.containerBefore}} />
        </section>
      </div>
    )
  }
}



export default Timeline

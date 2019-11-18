import React, { PureComponent } from 'react'
import { Consumer } from './formContext'


export default class FormButton extends PureComponent {
    render() {
        return (
           <Consumer>
              {
                  ctx => (
                      <button onClick={ctx.submit}>
                          {this.props.children || '提交'}
                      </button>
                  )
              }
           </Consumer>
        )
    }
}

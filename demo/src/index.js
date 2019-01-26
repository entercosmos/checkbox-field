import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import CheckboxField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends Component {

    state = {
        checked: false
    }

    render() {
        return <div>
            <h1>CheckboxField Demo</h1>
            <p>
                Used for making a choice between yes and no.
            </p>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <CheckboxField
                id={'fld1'}
                contextId={'recordDetail'}
                roleId={'editor'}
                checked={this.state.checked}
                onChange={({id, checked}) => {
                    this.setState({checked})
                }}
            />
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <CheckboxField
                id={'fld1'}
                contextId={'recordDetail'}
                roleId={'readOnly'}
                checked={this.state.checked}
                onChange={({id, checked}) => {
                    this.setState({checked})
                }}
            />
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <CheckboxField
                id={'fld1'}
                contextId={'recordGalleryCard'}
                roleId={'readOnly'}
                checked={this.state.checked}
                onChange={({id, checked}) => {
                    this.setState({checked})
                }}
            />
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <CheckboxField
                id={'fld1'}
                contextId={'recordListItem'}
                roleId={'readOnly'}
                checked={this.state.checked}
                onChange={({id, checked}) => {
                    this.setState({checked})
                }}
            />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))

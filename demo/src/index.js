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

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${JSON.stringify(args, null, 2)}
    `)
}

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>CheckboxField Demo</h1>
            <p>
                Used for making a choice between yes and no.
            </p>
            <h2>
                Context based
            </h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>
                Used for displaying the checkbox in a record detail.
            </p>
            <h4>
                Editor role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    checked={true}
                    onChange={({id, checked}) => log('onChange')({id, checked})}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    checked={false}
                    onChange={({id, checked}) => log('onChange')({id, checked})}
                />
            </Viewport>
            <h4>
                Read only role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={true}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={false}
                />
            </Viewport>

            <h3>
                RecordListItem context
            </h3>
            <p>
                Used for displaying the checkbox in a list item within a list view.
            </p>
            <h4>
                Read only role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={true}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={false}
                />
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>
                Used for displaying the checkbox in a gallery card within a gallery view.
            </p>
            <h4>
                Read only role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={true}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={false}
                />
            </Viewport>
            <h3>
                RecordGridRow context
            </h3>
            <p>
                Used for displaying the checkbox as a cell in a grid row.
            </p>
            <h4>
                Editor role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGridRow'}
                    roleId={'editor'}
                    checked={true}
                    onChange={({id, checked}) => log('onChange')({id, checked})}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGridRow'}
                    roleId={'editor'}
                    checked={false}
                    onChange={({id, checked}) => log('onChange')({id, checked})}
                />
            </Viewport>
            <h4>
                Read only role
            </h4>
            <h5>
                Checked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGridRow'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={true}
                />
            </Viewport>
            <h5>
                Unchecked
            </h5>
            <Viewport>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGridRow'}
                    roleId={'readOnly'}
                    readOnly={true}
                    checked={false}
                />
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))

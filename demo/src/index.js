import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import CheckboxField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                With editor role
            </Paragraph>
            <Box>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    checked={this.state.checked}
                    onChange={({id, checked}) => {
                        this.setState({checked})
                    }}
                />
            </Box>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    checked={this.state.checked}
                    onChange={({id, checked}) => {
                        this.setState({checked})
                    }}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    checked={this.state.checked}
                    onChange={({id, checked}) => {
                        this.setState({checked})
                    }}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <CheckboxField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    checked={this.state.checked}
                    onChange={({id, checked}) => {
                        this.setState({checked})
                    }}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))

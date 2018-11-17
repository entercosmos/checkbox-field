import React from 'react'
import Switch from './../../Switch'

export default class CheckboxField extends React.Component {

    render() {

        return (
            <Switch
                {...this.props}
                disabled={true}
            />
        )
    }
}
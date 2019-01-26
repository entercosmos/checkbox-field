import React from 'react'
import Switch from '@cmds/switch'
import PropTypes from 'prop-types'

export default class CheckboxField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        checked: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        checked: false
    }

    render() {

        const {contextId, roleId, id, checked} = this.props

        const disabled = roleId === 'readOnly'
        const width = ['recordGalleryCard', 'recordListItem'].includes(contextId) ? 24 : undefined

        return (
            <Switch
                id={id}
                width={width}
                disabled={disabled}
                value={checked}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = ({value}) => {
        if (this.props.onChange) {
            this.props.onChange({
                id: this.props.id,
                checked: value
            })
        }
    }
}
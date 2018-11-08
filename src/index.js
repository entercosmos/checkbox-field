import React from 'react'
import {css} from 'emotion'

class Switch extends React.Component {

    render() {

        const width = this.props.width || 46
        const height = width * 0.56
        const padding = 2
        const size = height - (padding * 2)

        const active = this.props.value

        return (
            <div
                className={css`
                    background-color: ${active ? '#3acc85' : '#000'};
                    display: flex;
                    flex: none;
                    border-radius: 99999px;
                    justify-content: ${active ? 'flex-end' : 'flex-start'};
                    transition: 300ms ease justify-content;
                    ${this.props.disabled ? '' : 'cursor: pointer;'}
                    opacity: ${this.props.disabled ? '0.7' : '1'};
                `}
                style={{
                    height,
                    width,
                    padding
                }}
                onClick={(e) => {

                    if (this.props.onChange) {

                        this.props.onChange({
                            id: this.props.id,
                            e,
                            value: !active
                        })
                    }
                }}
            >
                <div
                    className={css`
                        background-color: #fff;
                        border-radius: 50%;
                        flex: none;
                    `}
                    style={{
                        width: size
                    }}
                />
            </div>
        )
    }
}

export default class CheckboxField extends React.Component {

    render() {

        const {contextId, roleId} = this.props

        return (
            <Switch
                {...this.props}
                width={contextId !== 'recordDetail' ? 24 : null}
                disabled={roleId === 'readOnly'}
            />
        )
    }
}
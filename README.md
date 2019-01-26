# ![CheckboxField](https://user-images.githubusercontent.com/44801418/48109933-0f944f00-e27c-11e8-975c-deaa9baab76a.png) CheckboxField

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/checkbox-field.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for making a choice between yes and no.

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| checked | Boolean | ✓ | Whether the checkbox is checked or not |
| onChange | Function |  | Callback invoked whenever the checkbox get's toggled. : `({id: string, checked: boolean}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/checkbox-field.svg
[npm]: https://www.npmjs.com/package/@cmds/checkbox-field

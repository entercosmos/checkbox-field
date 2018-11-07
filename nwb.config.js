module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CheckboxField',
      externals: {
        react: 'React'
      }
    }
  }
}

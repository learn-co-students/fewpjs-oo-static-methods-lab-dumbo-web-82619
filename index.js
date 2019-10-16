class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = this.capitalize(string).split(' ')

    return stringArray.map(stringEl => {
      if (exceptions.includes(stringEl)) {
        return stringEl
      } else {
        return this.capitalize(stringEl)
      }
    }).join(' ')
  }

}
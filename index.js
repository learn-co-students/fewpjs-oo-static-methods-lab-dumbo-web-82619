class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let words = string.split(' ')
    let capWords = []
    capWords.push(words[0].charAt(0).toUpperCase() + words[0].slice(1))
    for (let i = 1; i < words.length; i++){
      if (words[i] !== 'the' && words[i] !== 'a' && words[i] !== 'an' && words[i] !== 'but' && words[i] !== 'of' && words[i] !== 'and' && words[i] !== 'for' && words[i] !== 'at' && words[i] !== 'by' && words[i] !== 'from'){
        capWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      }
      else {
        capWords.push(words[i])
      }
    }
    return capWords.join(' ')
  }
}
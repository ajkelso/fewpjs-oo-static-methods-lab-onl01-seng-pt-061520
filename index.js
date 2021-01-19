class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let strArray = this.capitalize(string).split(" ")
    let badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from" ]
    let titleArr = strArray.map(word => {
      if (!badWords.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return titleArr.join(" ")
  }
}
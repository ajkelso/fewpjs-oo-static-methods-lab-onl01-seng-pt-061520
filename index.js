class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.capitalize()
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let strArray = string.capitalize.split(" ")
    let badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from" ]
    let titleArr = strArray.map(word => {
      if (!badWords.includes(word)) {
        return word.capitalize()
      } else {
        return word
      }
    })
    return titleArr.join(" ")
  }
}
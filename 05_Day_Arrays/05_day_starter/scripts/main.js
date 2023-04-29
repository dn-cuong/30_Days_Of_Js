function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj["checkProp"]
    } else {
      return "Not Found"
    }
    // Only change code below this line
    // Only change code above this line
  }


console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
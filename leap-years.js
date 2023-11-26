function isLeapYear(year) {
  
    // checks if year has a remainder if divided by 400
    // and if it does and doesn't when divided by 100 returns false
    if (year % 400 !== 0 && year % 100 === 0) {
      return false
      // checks if the year divided by 4 has a remainer and
      // if it does returns false
    } else if (year % 4 !== 0) {
      return false
    }
    else {
      return true
    }
  }
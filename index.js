const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let winObj = array.find( function(e) { return e.result === "W"} )
  if (winObj === undefined) {
    return winObj
  } else {
    return winObj.year
  }
}
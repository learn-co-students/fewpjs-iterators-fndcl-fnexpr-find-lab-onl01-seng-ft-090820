const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(function(w) {return w.result === "W"})
  if (win) {
    return win.year
  } else {
    return win
  }
}

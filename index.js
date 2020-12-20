const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let win = record.find(function(x) {return x.result === 'W'})
  if (win) {
    return win.year
  }
  else {
    return undefined 
  } 
}
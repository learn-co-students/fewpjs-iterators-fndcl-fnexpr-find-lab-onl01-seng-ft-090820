const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let victory = record.find( function(x) { return x.result === "W" } )
  if (!!victory == true) {
    return victory.year
  }
}
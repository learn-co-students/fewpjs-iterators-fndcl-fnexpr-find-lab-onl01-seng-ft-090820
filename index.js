const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(game => game.result === "W")
  return !!result ? result.year : undefined
}


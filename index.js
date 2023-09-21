function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return `This one is on me!`
  }
  else if (someValue <= 2000) {
    return `That will be twenty bucks.`
  }
  else if (someValue > 2000 && someValue <= 2500) {
    return `I will gladly take your thirty bucks.`
  }
  else {
    return `No can do.`
  }
}

function ternaryCheckCity(destinationCity) {
  return (destinationCity === `NYC`) ? `Ok, sounds good.` : `No go.`
}

function switchOnCharmFromTip(theTip) {
  switch (theTip) {
    case `generous`:
      return `Thank you so much.`
    case `not as generous`:
      return `Thank you.`
    default:
      return `Bye.`
  }
}
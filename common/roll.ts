export function roll({dice, sides, modifier}) {
    let sum = 0;
    for (let i = 0; i < dice; i++) {
        sum += getRandomInt(1, sides + 1)
    }
    return sum + modifier
}
  
export function rollAdvantage({dice, sides, modifier}) {
    const first = roll({dice, sides, modifier})
    const second = roll({dice, sides, modifier})
    return Math.max(first, second);
}

export function rollDisadvantage({dice, sides, modifier}) {
    const first = roll({dice, sides, modifier})
    const second = roll({dice, sides, modifier})
    return Math.min(first, second);
}

export function skillToDice(skill: number) {
    return {dice: 1, sides: 20, modifier: skill}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

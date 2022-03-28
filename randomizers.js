
export const generateItem = (arr) => {
 return arr[Math.floor(Math.random() * arr.length)]
}

export const generateNumber = (len) => {
 return Math.floor(Math.random() * len)
}

export const generateBoolean = () => Math.random() < 0.5

export const generateStr = (len) => {

 const symbols = [
  'a', 'b', 'd', 'e', 'h', 'k', 'm',
  'n', 'p', 's', 'w', 'x', 'z', 'A',
  'B', 'D', 'E', 'F', 'G', 'H', 'K',
  'M', 'N', 'P', 'Q', 'R', 'S', 'T',
  'W', 'X', 'Z', '1', '2', '3', '4',
  '5', '6', '7', '8', '9', ''
 ]
 let res = ''
 if(len === 1) {
  return `"${generateBoolean()}"`
 }
 for(let i = 0; i < len; i++ ) {
  res+=symbols[generateNumber(symbols.length - 1)]
 }
 return `"${res}"`
}

export const generateArr = (len) => {
 const res = []
 for( let i = 0; i < len; i++) {
  res.push( generateBoolean() ? generateNumber(100) : generateStr(2) )
 }
 return `[${res.toString()}]`
}


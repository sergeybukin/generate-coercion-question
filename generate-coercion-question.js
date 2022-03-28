import { generateBoolean, generateItem, generateStr, generateNumber, generateArr} from './randomizers.js'

export const createExp = () => {
  const types = [
    '{}', generateArr(generateNumber(5)),
    `new Date(${generateNumber(100000000)})`, null,
    generateStr(5), generateNumber(100),
    generateBoolean(), `"${generateNumber(10)}"`
  ]
  const binaryOperators = ['+', '-', '/', '==', '>', '<']
  const unaryOperators = ['+', '!', '!!', '', '', '', '']

  const bOperator = generateItem(binaryOperators)
  const left = generateItem(types)
  const right = generateItem(types)

  return generateItem(unaryOperators) + left + ' ' + bOperator + ' ' + generateItem(unaryOperators) + right

}

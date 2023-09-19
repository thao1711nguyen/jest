// const sum = require('./sum')
import { sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './sum.js'
test('adds 1 + 2 equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
test('capitalize: without space', () => {
    expect(capitalize('thao')).toBe('Thao')
})
test('capitalize: with space', () => {
    expect(capitalize('hello thao')).toBe('Hello thao')
})
test('reverseString: no space', () => {
    expect(reverseString('hi')).toBe('ih')
})

test('reverseString: with space', () => {
    expect(reverseString('hi Mia!')).toBe('!aiM ih')
})
test('calculator: add, with positive numbers', () => {
    expect(calculator.add(1,2)).toBe(3)
})
test('calculator: add, with negative numbers', () => {
    expect(calculator.add(1,-2)).toBe(-1)
})
test('calculator: subtract, with positive numbers', () => {
    expect(calculator.subtract(3,2)).toBe(1)
})
test('calculator: subtract, with negative numbers', () => {
    expect(calculator.subtract(3, -2)).toBe(5)
})
test('calculator:subtract, with float numbers', () => {
    expect(calculator.subtract(0.5, 1)).toBeCloseTo(-0.5)
})
test('calculator: divide, with integers', () => {
    expect(calculator.divide(6,3)).toBe(2)
})
test('calculator: divide, with float', () => {
    expect(calculator.divide(1, 0.5)).toBe(2)
})
test('calculator: multiply, with integers', () => {
    expect(calculator.multiply(2,1)).toBe(2)
})
test('calculator: multiply, with float', () => {
    expect(calculator.multiply(1,0.5)).toBeCloseTo(0.5)
})
test('caesarCipher: normal, lowercase', () => {
    expect(caesarCipher('hi', 2)).toBe('jk')
})
test('caesarCipher: normal, uppercase', () => {
    expect(caesarCipher('Hi', 2)).toBe('Jk')
})
test('caesarCipher: with space, uppercase, special character', () => {
    expect(caesarCipher('Hi, thao!', 2)).toBe('Jk, vjcq!')
})
test('caesarCipher: edge case, with space, uppercase, special character', () => {
    expect(caesarCipher('Hello, Sir!', 20)).toBe('Byffi, Mcl!')
})
test('analyzeArray: integer average, min, max, length', () => {
    expect(analyzeArray([1,2,3])).toEqual({average: 2, min: 1, max: 3, length: 3})
})
test('analyzeArray: float average, float min, max, length', () => {
    expect(analyzeArray([0.5, 3])).toEqual({average: 1.75, min: 0.5, max: 3, length: 2})
})
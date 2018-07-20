import {expect} from 'chai'
import breakingBadNames from './index.js';

describe('breakingBad-names', () => {
  it('should have a list of all available names', () => {
    expect(breakingBadNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    // expect(breakingBadNames.random()).to.satisfy(isIncludedIn(breakingBadNames.all))
    const result = breakingBadNames.random();
    expect(breakingBadNames.all).to.include(result);
    expect(result).to.be.a('string');
  })
})

function isArrayOfStrings(array) {
  return Array.isArray(array) && array.every(i => typeof i === 'string')
}

// function isIncludedIn(array) {
//   return item => array.includes(item)
// }

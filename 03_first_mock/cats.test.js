const { doThis } = require('./cats')

describe('doThis', () => {
  it('invokes the passed callback function once for every element in the given array', () => {
    const fakeCallback = jest.fn()
    const testArray = ['this', 'that', 'the other']
    doThis(testArray, fakeCallback)

    expect(fakeCallback).toHaveBeenCalledTimes(3)
  })
})

const morning = (name) => {
  if (typeof name === 'number') {
    throw new Error('Cannot say hello to a number')
  }
  return `hello ${name}`
}


describe('morning', () => {
  it('exists', () => {
    expect(morning).toBeDefined()
  })

  it('return the expected value', () => {
    expect(morning('Yoda')).toEqual('hello Yoda')
  })

  it('throws an error when a number is used as an argument', () => {
    expect(() => morning(7)).toThrow('Cannot say hello to a number')
  })
})

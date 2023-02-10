describe('owners endpoints', () => {
  let api;
  beforeEach(async () => {
    await resetTestDB()
  })

  beforeAll(async () => {
    api = app.listen(5000, () => console.log('Test server running on port 5000'))
  });

  afterAll(async () => {
    console.log('Gracefully stopping test server')
    await api.close()
  })

  it('should retrieve a owner based on id', async () => {
    const res = await request(api).get('/owners/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body.name).toEqual('Owner1')
  });

})

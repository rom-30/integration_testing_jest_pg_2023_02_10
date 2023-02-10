const fetch = require('jest-fetch-mock');

const getGitHubuserInfo = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('error I guess')
  }
}

describe('getGitHubuserInfo', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('tests that fetch was used/called/invoked', () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    getGitHubuserInfo('rom-30');
    expect(fetch).toHaveBeenCalled()
  })

  it('should fetch user info from GitHub', () => {
    fetch.mockResponseOnce(JSON.stringify({ "login": "rom-30", "public_repos": 20 }));

    getGitHubuserInfo('rom-30');
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/rom-30');
  })

  it('tests that fetch was used', () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    getGitHubuserInfo('rom-30');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
})

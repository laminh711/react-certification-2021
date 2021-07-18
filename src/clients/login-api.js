const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve({
          json: () => Promise.resolve(mockedUser),
          ok: true,
          status: 200,
        });
      }
      return resolve({
        json: () => Promise.resolve({ message: 'Invalid username or password' }),
        ok: false,
        status: 401,
      });
    }, 250);
  });
}

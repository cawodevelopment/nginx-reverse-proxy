import HttpError from '../src/errors/http.error.js';
import { loginUser } from '../src/services/auth.services.js';
import jwt from 'jsonwebtoken';

describe('auth.services.loginUser', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test('throws 400 when email or password missing', async () => {
    await expect(loginUser({})).rejects.toMatchObject({ statusCode: 400 });
  });

  test('throws 500 when demo credentials not configured', async () => {
    process.env.DEMO_EMAIL = '';
    process.env.DEMO_PASSWORD = '';
    await expect(loginUser({ email: 'a', password: 'b' })).rejects.toMatchObject({ statusCode: 500 });
  });

  test('throws 401 on invalid credentials', async () => {
    process.env.DEMO_EMAIL = 'me@example.com';
    process.env.DEMO_PASSWORD = 'secret';
    await expect(loginUser({ email: 'other@example.com', password: 'wrong' })).rejects.toMatchObject({ statusCode: 401 });
  });

  test('returns accessToken on valid credentials', async () => {
    process.env.DEMO_EMAIL = 'me@example.com';
    process.env.DEMO_PASSWORD = 'secret';
    process.env.JWT_SECRET = 'testsecret';
    process.env.JWT_EXPIRES_IN = '60';

    const result = await loginUser({ email: 'Me@Example.com ', password: 'secret' });
    expect(result).toHaveProperty('accessToken');

    const decoded = jwt.verify(result.accessToken, process.env.JWT_SECRET);
    expect(decoded.email).toBe(process.env.DEMO_EMAIL.toLowerCase());
  });
});

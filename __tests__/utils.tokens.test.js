import { generateAccessToken } from '../src/utils/tokens.js';
import jwt from 'jsonwebtoken';

describe('utils.tokens.generateAccessToken', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test('generates a JWT containing the payload', () => {
    process.env.JWT_SECRET = 'anothersecret';
    process.env.JWT_EXPIRES_IN = '30';

    const token = generateAccessToken({ email: 'user@test.com' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.email).toBe('user@test.com');
  });
});

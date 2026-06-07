import HttpError from '../errors/http.error.js';
import { generateAccessToken } from '../utils/tokens.js';

export const loginUser = async ({ email, password }) => {
	if (!email || !password) {
		throw new HttpError(400, 'Email and password are required');
	}

	const normalizedEmail = email.toLowerCase().trim();
	const configuredEmail = process.env.DEMO_EMAIL?.toLowerCase().trim();
	const configuredPassword = process.env.DEMO_PASSWORD;

	if (!configuredEmail || !configuredPassword) {
		throw new HttpError(500, 'Demo credentials are not configured');
	}

	if (normalizedEmail !== configuredEmail || password !== configuredPassword) {
		throw new HttpError(401, 'Invalid email or password');
	}

	const accessToken = generateAccessToken({
		email: configuredEmail,
	});

	return {
		accessToken,
	};
};
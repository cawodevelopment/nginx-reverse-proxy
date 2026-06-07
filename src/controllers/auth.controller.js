import * as authServices from '../services/auth.services.js';

export const login = async (req, res, next) => {
	const user = await authServices.loginUser(req.body);

	res.cookie('authorization', user.accessToken, {
		httpOnly: true,
		sameSite: 'lax',
		secure: process.env.NODE_ENV === 'production',
		maxAge: Number(process.env.JWT_EXPIRES_IN) * 60 * 1000,
	});

	return res.status(200).json({
		success: true,
		message: 'Login successful',
	});
};
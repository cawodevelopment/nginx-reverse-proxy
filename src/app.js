import express from 'express';
import cookieParser from 'cookie-parser';
import * as authController from './controllers/auth.controller.js';
import errorHandlingMiddleware from './middlewares/errorHandling.middleware.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post('/api/login', authController.login);

app.get('/api/data', (req, res) => {
	return res.status(200).json({
		success: true,
		message: 'This is protected data.',
    });

});

app.get('/api/validate', (req, res) => {
	const token = req.cookies.authorization;

	if (!token) {
		return res.sendStatus(401);
	}

	return res.sendStatus(200);
});

app.use(errorHandlingMiddleware);

export default app;
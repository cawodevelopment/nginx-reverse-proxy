import HttpError from '../errors/http.error.js';

const errorHandlingMiddleware = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}

	if (err instanceof HttpError) {
		return res.status(err.statusCode).json({
			success: false,
			message: err.message,
		});
	}

	console.error(err);

	return res.status(500).json({
		success: false,
		message: 'Internal server error',
	});
};

export default errorHandlingMiddleware;

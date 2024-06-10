import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: 'Something went wrong',
      data: { message: 'Contact not found' },
    });
    return;
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};

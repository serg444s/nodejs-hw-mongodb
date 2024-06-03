export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 404,
    data: { message: 'Route not found' },
  });
};

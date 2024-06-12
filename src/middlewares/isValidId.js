import mongoose from 'mongoose';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    return res.json({
      status: 404,
      message: `Invalid contact ID: ${contactId}`,
    });
  }
  next();
};

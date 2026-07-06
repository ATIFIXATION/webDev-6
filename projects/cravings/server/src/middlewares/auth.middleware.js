export const AuthProtect = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


export const sampleMiddleWare = async (req, res, next) => {
  console.log("i m sample middleware1");
  next();
};

export const samplMiddleWare2 = async (req, res, next) => {
  console.log("i m sample middleware2");
  next();
};

const asyncHandler = (reqHandler) => {
  (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const _asyncHandler = (func) => async (req,res,next) => {
//     try {
//         await func(res,req,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             message:error.message
//         });
//     }
// }

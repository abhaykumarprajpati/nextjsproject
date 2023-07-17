export const errorHandler=(res,statusCode=500,message='Internal Server Error')=>{
    return res.status(statusCode).json({
        success:false,
        message
    })
}



export const asyncError = (passedFunc) => (req, res) =>
  Promise.resolve(passedFunc(req, res)).catch((err) =>
    errorHandler(res, 500, err.message)
  );
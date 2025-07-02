import appError from "../utils/appError";

const handleError = (err, req, res, next) => {
    //error explicitly thrown from services and caught in controller
    if (err instanceof appError) {
        console.error('Operational error: ', err)
        return res.status(err.statusCode).json({
          success: false,
          message: err.message,
        });
    }

    //server issue
    console.error(err); 
    res.status(500).json({
      message: "Something went wrong on the server.",
      error: err.message,
    });
};

export default handleError;
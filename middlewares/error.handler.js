const errorHanlder = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).send({ message: false, body: err });
  }

  return res.status(500).send({ message: false, body: 'somethimng went wrong $err' });
};

export default errorHanlder;

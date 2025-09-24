import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      status: false,
      message: "User not Authorised please login again",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_STR);

    if (!decodedToken.id) {
      return res.json({ status: false, message: "Not Authorised Login Again" });
    }

    if (!req.body) {
      req.body = {};
    }

    req.body.userId = decodedToken.id;

    next();
  } catch (error) {
    return res.json({ status: false, message: error.message });
  }
};

export default userAuth;

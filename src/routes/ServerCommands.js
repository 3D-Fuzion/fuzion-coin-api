import jwt from "jsonwebtoken";
const SECRET = "9817236498172346981237";

export const Authentication = async function (req, res) {
  const token = req.headers["x-acess-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();
    req.userId = decoded.userEmail;
    return res.status(200).end();
  });
};

export const VerifyApiStatus = async function (req, res) {
  return res.status(200).end();
};

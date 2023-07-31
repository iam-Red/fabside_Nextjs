import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let token = req.body.token;
    let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    let dbuser = await User.findOne({ email: user.email });
    var bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET);

    let decryptpass = bytes.toString(CryptoJS.enc.Utf8);
    if (
      decryptpass == req.body.password &&
      req.body.npassword == req.body.cpassword
    ) {
      let dbuseru = await User.findOneAndUpdate(
        { email: dbuser.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.cpassword,
            process.env.AES_SECRET
          ).toString(),
        }
      );

      // const { name, email, address, pincode } = dbuser;
      res.status(200).json({ success: true });
      return;
    }
    res.status(200).json({ success: false });
  } else {
    res.status(400).json({ error: "error" });
  }
};

export default connectDb(handler);

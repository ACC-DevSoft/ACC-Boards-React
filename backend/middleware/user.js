const User = require("../models/user");

const user = async (req, res, next) => { const user = await User.findById(req.user._id);
    

    if (!user)
      return res.status(401).send({message:"Access denied"});
    next();
};

module.exports = user;

import User from "../model/user_model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exist" })
        }
        const hashpassword = await bcryptjs.hash(password, 10) //install bcryptjs
        const createdUser = new User(
            {
                fullname: fullname,
                email: email,
                password: hashpassword,
            }
        )
        await createdUser.save();
        res.status(201).json({
            message: "user created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        })
        

    } catch (err) {
        console.log("error", err)
        res.status(500).json({ message: "some error occors" })
    }
}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: 'invalid user or password' })
        } else {
            res.status(200).json({
                message: 'Login successfully',
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'Internal server error'})

    }

}
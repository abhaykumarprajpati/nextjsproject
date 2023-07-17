import { asyncError, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'



const handler = asyncError(async (req, res) => {

    if (req.method !== "POST")
        return errorHandler(res, 400, "only post method is allowed")
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return errorHandler(res, 400, 'Please enter all fields')

    await connectDB();

    // const user = User.findOne({ email })
    let user = await User.findOne({ email })
    console.log('user checking purpose @@@@@@@@@@@@@', user);
    if (user)
        return errorHandler(res, 400, 'User registered with this email')


    let hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({
        name, email, password: hashedPassword
    })
    console.log('test_user', user)

    const token = generateToken(user._id)
    cookieSetter(res, token, true)

    res.status(201).json({
        success: true,
        message: " Registered Successfully",
        user
    })

})

export default handler
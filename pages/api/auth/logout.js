import { asyncError, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'



const handler = asyncError(async (req, res) => {

    if (req.method !== "GET")
        return errorHandler(res, 400, "only get method is allowed")

    cookieSetter(res, null, false)

    res.status(200).json({
        success: true,
        message: `Logout successfully`
    })

})

export default handler
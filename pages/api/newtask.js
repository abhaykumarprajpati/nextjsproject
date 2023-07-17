import { Task } from "@/models/task"
import { checkAuth, connectDB } from "../../utils/features"
import { asyncError, errorHandler } from "@/middlewares/error"


const handler = asyncError(async (req, res) => {

    if (req.method !== "POST")
        return errorHandler(res, 400, "only post method is allowed")
    //    return res.status(400).json({
    //     success:false,
    //     message:"only post method is allowed"
    //  })

    await connectDB()
    const { title, description } = req.body

    if (!title || !description) return errorHandler(res, 400, 'Please enter all fields')

    const user = await checkAuth(req)

    if (!user) return errorHandler(res, 401, "Login first")

    await Task.create({
        title,
        description,
        user: user._id
    })
    res.json({
        success: true,
        message: 'Task created'
    })
})
export default handler
import { Task } from "@/models/Task"
import { connectDB } from "@/utils/features"

const handler = async (req, res) => {
    if (req.method !== 'POST') return res.status(400).json({
        success: false,
        message: 'method not allowed'
    })

    await connectDB()

    const { title, description } = req.body
    if (!title || !description) return res.json({
        error: 'Not enough information'
    })
    await Task.create({
        title: title,
        description: description,
        user: "41224d776a326fb40f000001"
    })
    res.json({
        success: true
    })
}

export default handler
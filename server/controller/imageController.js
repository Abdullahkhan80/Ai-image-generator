import UserModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";
export const generateImage = async (req, res) => {

    try {
        const { prompt } = req.body;
        const userId = req.user.id;
        const user = await UserModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: "missing user or prompt" });
        }

        if (user.creditBalance <= 0) {
            return res.json({ success: false, message: "Insufficient credits", creditBalance: user.creditBalance });
        } const formData = new FormData();
        formData.append('prompt', prompt);

        const response = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;
        await UserModel.findByIdAndUpdate(userId._id, { creditBalance: user.creditBalance - 1 });
        res.json({
            success: true, message: "Image generated successfully",
            creditBalance: user.creditBalance - 1, resultImage
        });


    } catch (error) {
        console.log(error.message);
        res.json({ sucess: false, message: error.message });
    }

}

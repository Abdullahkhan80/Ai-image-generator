import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.send({ success: false, message: "Please fill all the fields" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        };
        const newUser = new UserModel(userData);
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.json({
            success: true,
            token,
            user: { name: savedUser.name },
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.json({ success: false, message: error.message });
    }
}
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
            res.json({
                success: true,
                token,
                user: { name: user.name, },
            });
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.error("Error logging in user:", error);
        res.json({ success: false, message: error.message });
    }
}

const userCredits = async (req, res) => {
    try {
        const userId = req.user.id; // <-- get from req.user
        const user = await UserModel.findById(userId);
        res.json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (error) {
        console.error("Error fetching user credits:", error);
        res.json({ success: false, message: error.message });
    }
}
export { registerUser, loginUser, userCredits };
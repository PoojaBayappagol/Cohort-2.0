export const registerUser = (req, res) => {
    const { username, email, password } = req.body;

    res.status(201).json({
        message: "User registration data is valid",
        user: {
            username,
            email,
            password
        }
    });
};
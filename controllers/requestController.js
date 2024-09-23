const Request = require("../models/requestModel");

const requestController = {
    isAnswered: async (req, res) => {
        const { idUser } = req.params; // Get idUser from URL params

        try {
            const result = await Request.isAnswered({ idUser });
            
            // Check if the result is empty or not
            if (result.length > 0) {
                res.status(200).json({ message: "User has already answered the form", answered: true });
            } else {
                res.status(200).json({ message: "User has not answered the form", answered: false });
            }
        } catch (error) {
            console.error("Error checking form status:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    markAsCompleted: async (req, res) => {
        try {
            const result = await Request.markAsCompleted(req);

            res.status(200).json({ message: result.message });
        } catch (error) {
            console.error("Error marking exercise as completed:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

module.exports = requestController;

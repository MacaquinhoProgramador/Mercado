const UserService = require('../services/UserService.js');

class UserController {
    static async register(req, res) {
        try {
            const { nome, email, senha, role } = req.body;
            const user = await UserService.createUser(nome, email, senha, role);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            const token = await UserService.login(email, senha);
            res.json({ token });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = UserController;

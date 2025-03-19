const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../infrastructure/UserRepository.js');

class UserService {
    static async createUser(nome, email, senha, role) {
        const hash = await bcrypt.hash(senha, 10);
        return UserModel.create({ nome, email, senha: hash, role });
    }

    static async login(email, senha) {
        const user = await UserModel.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(senha, user.senha)) {
            throw new Error('Credenciais inválidas');
        }
        return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}

module.exports = UserService;

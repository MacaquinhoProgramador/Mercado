class User {
    constructor(id, nome, email, senha, role) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.role = role; // 'admin' ou 'usuario'
    }
}
module.exports = User;

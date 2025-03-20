import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {create_user, findbyEmail, findbyId} from "../models/userModel.js"

export const register = async (req, res) => {
    
    try {

        const {username, email, password } = req.body;

        const existingUser = await findbyEmail(email);

        if (existingUser) {
            return res.status(400).json({ message: "E-mail já cadastrado." });
        }

        const newUser = await create_user(username, email, password);

        res.status(201).json({ message: "Usuário registrado com sucesso!", user: newUser });

    } catch (err) {
        res.status(500).json({ message: "Erro ao registrar usuário.", error: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await findbyEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta." });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login bem-sucedido!", token });

    } catch (err) {
        res.status(500).json({ message: "Erro ao fazer login.", error: err.message });
    }
};

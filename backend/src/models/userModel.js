import pool from "../config/db.js";
import bcrypt from "bcrypt"

export const create_user = async (username, email, password) => {

    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
        INSERT INTO users (username, email, password) 
        VALUES ($1, $2, $3) RETURNING id, username, email;
    `;
    const values = [username, email, hashedPassword];
    const result = await pool.query(query, values);
    return result.rows[0];

}

export const findbyEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    return rows[0];
};

export const findbyId = async(id_user) => {
    const query = "SELECT id_user, username, email FROM users WHERE id = $1;";
    const result = await pool.query(query, [id]);
    return result.rows[0];
}
import { Router } from 'express';
import { prisma } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password, name, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role
            }
        });

        res.json({ message: "User registered successfully", user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
             res.status(401).json({ error: "Invalid credentials" });
             return;
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
});

export default router;

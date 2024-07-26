'use server';

import { getUserByEmail } from './../data/user';
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bycrpt from "bcrypt";
import { get } from "http";
import { z } from "zod";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Validation failed' };
    }

    const { email, name, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    const hashedPassword = await bycrpt.hash(password, 10);

    if (existingUser) {
        return { error: "Email already exists" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });

    // Send Verification Token Email

    return { success: "User created" };
}
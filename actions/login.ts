'use server';
import { LoginSchema, RegisterSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Validation failed' };
    }
    return { success: "Email Send" };
};

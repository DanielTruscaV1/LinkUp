import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Too short."}),
    username: z.string().min(2, { message: "Too short."}).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: "Too short."}),
  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Too short."}),
  })
import * as z from "zod";
import {
  nameRegex,
  phoneNumberRegex,
  regexNumbersOnly,
  usernameRegex,
} from "./regex";

export const ProfileSchema = z.object({
  email: z
    .string({ required_error: "Email Harus diisi" })
    .email()
    .refine(() => true, { message: "Email Harus diisi" }),
  phone: z
    .string({ required_error: "No HP Harus diisi" })
    .regex(regexNumbersOnly.regex, regexNumbersOnly.msg)
    .min(10, phoneNumberRegex.msg.min)
    .max(13, phoneNumberRegex.msg.max),
  codeVerify: z.string().max(6).optional(),
  name: z
    .string({ required_error: "Nama Harus diisi" })
    .min(5, nameRegex.msg.min)
    .max(50, nameRegex.msg.max)
    .regex(nameRegex.regex, "Nama harus berupa huruf"),
  username: z
    .string({ required_error: "Username Harus diisi" })
    .min(5, nameRegex.msg.min)
    .max(50, nameRegex.msg.max)
    .regex(usernameRegex.regex, usernameRegex.msg),
});

export const SelectScheme = z.object({
  options: z.string(),
});

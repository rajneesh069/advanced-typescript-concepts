import z from "zod";
import express, { Request, Response } from "express";

const PORT = process.env.PORT || 8080;

const app = express();

const user = z.object({
  name: z.string().min(1, { message: "Name cannot be empty." }),
  email: z.string().email().min(1, { message: "Email is invalid" }),
  password: z
    .string()
    .min(1, { message: "Password cannot be empty" })
    .max(300, { message: "Can't be longer than 300 characters" }),
  age: z
    .number()
    .min(1, { message: "Age invalid" })
    .max(101, { message: "Invalid Age" }),
  phoneNumber: z
    .string()
    .regex(/^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/),
});

export type User = z.infer<typeof user>; //type inference using zod, can be used in frontend and backend in a monorepo

app.put("/", async (req: Request, res: Response) => {
  const { success } = user.safeParse(req.body);
  if (!success) {
    //make some db calls or do something
    return res.status(411).json({ message: "Invalid User details" });
  }
  return res.status(200).json({ message: "Operation Successful" });
});

app.listen(PORT, () => {
  console.log(`The server is running at: http://localhost:${PORT}`);
});

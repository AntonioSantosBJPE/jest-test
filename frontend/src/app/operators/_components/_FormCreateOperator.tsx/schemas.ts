import { z } from "zod";

export const requestOperatorSchema = z.object({
  name: z
    .string()
    .min(3, "O nome precisa ter ao menos 3 caracteres")
    .max(120, "O nome pode ter no máximo 120 caracteres"),
});

export type TrequestOperator = z.infer<typeof requestOperatorSchema>;

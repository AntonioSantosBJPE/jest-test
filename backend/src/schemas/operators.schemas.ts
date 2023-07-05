import { z } from "zod";

export const operatorSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(120),
});

export const operatorCreateRequestSchema = operatorSchema.omit({
  id: true,
});

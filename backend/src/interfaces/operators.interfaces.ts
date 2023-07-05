import { z } from "zod";
import * as operatorsSchemas from "../schemas/operators.schemas";

export type TrequestCreateOperator = z.infer<
  typeof operatorsSchemas.operatorCreateRequestSchema
>;

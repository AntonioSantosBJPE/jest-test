import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Operator } from "./";
@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: "120" })
  name: string;

  @Column({ type: "varchar", length: "120" })
  email: string;

  @Column({ type: "varchar", length: "120" })
  bithDate: string;

  @Column({ type: "varchar", length: "120" })
  value: string;

  @ManyToOne(() => Operator, (operator) => operator.clients, {
    nullable: true,
    onDelete: "SET NULL",
  })
  operator?: Operator | null | undefined;
}

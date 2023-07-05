import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./";
@Entity("operators")
export class Operator {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: "120" })
  name: string;

  @OneToMany(() => Client, (client) => client.operator)
  clients: Client[];
}

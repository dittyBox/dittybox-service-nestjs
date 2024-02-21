import { Column, Entity, Int32, PrimaryColumn } from "typeorm";

@Entity()
export class ditty_user{
  //
  @PrimaryColumn('uuid')
  id: string;
  //
  @Column()
  name: string;
  //
  @Column()
  displayname: string;
  //
  @Column((type)=>Int32)
  age: number;
}
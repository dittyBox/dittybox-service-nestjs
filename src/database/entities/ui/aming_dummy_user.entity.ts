import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class aming_dummy_user{
  @PrimaryColumn()
  division_cd: string;

  @Column()
  ssn: string;
  
  @Column()
  first_name: string;
  
  @Column()
  last_name: string;
  
  @Column()
  gender: string;
  
  @Column()
  age: number;
  
  @Column()
  birth_day: Date;
}
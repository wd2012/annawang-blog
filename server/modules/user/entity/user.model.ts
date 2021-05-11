import {
  Entity,
  Column, 
  PrimaryColumn,
  Generated,
} from "typeorm";

@Entity('user')
export class UserModel {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
  })

  @Generated('increment')
  userId: number | undefined;

  @Column({
    type: 'varchar',
    name: 'user_name',
    nullable: true,
  })
  userName: string | undefined;

  @Column({
    type: 'varchar',
    name: 'user_password',
    nullable: true,
  })
  userPassword: string | undefined;
}

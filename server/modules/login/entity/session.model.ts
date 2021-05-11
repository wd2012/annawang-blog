import {
  Entity,
  Column, 
  PrimaryColumn,
  Generated,
} from "typeorm";

@Entity('session')
export class SessionModel {
  @PrimaryColumn({
    type: 'int',
    name: 'session_id',
  })

  @Generated('increment')
  sessionId: number | undefined;

  @Column({
    type: 'varchar',
    name: 'user_id',
    nullable: true,
  })
  userId: string | undefined;

  @Column({
    type: 'int',
    name: 'session_expire',
    nullable: true,
  })
  sessionExpire: number | undefined;
}
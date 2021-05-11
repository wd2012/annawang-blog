import {
  Entity,
  Column, 
  PrimaryColumn,
  Generated,
} from "typeorm";

@Entity('article')
export class ArticleModel {
  @PrimaryColumn({
    type: 'int',
    name: 'article_id',
  })

  @Generated('increment')
  articleId: number | undefined;

  @Column({
    type: 'varchar',
    name: 'article_title',
    nullable: true,
  })
  articleTitle: string | undefined;

  @Column({
    type: 'varchar',
    name: 'article_content',
    nullable: true,
  })
  articleContent: string | undefined;

  @Column({
    type: 'varchar',
    name: 'article_tag',
    nullable: true,
  })
  articleTag: string | undefined;

  @Column({
    type: 'varchar',
    name: 'article_type',
    nullable: true,
  })
  articleType: string | undefined;

  @Column({
    type: 'varchar',
    name: 'article_summary',
    nullable: true,
  })
  articleSummary: string | undefined;

  @Column({
    type: 'varchar',
    name: 'article_user_id',
    nullable: true,
  })
  articleUserId: string | undefined;

  @Column({
    type: 'timestamp',
    name: 'article_create_time',
    nullable: true,
  })
  articleCreateTime: Date | undefined;

  @Column({
    type: 'timestamp',
    name: 'article_update_time',
    nullable: true,
  })
  articleUpdateTime: Date | undefined;
}
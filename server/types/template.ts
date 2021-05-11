export interface UserData {
  userName: string;
  userId: number;
  userPassword: string;
}

export interface SessionData {
  sessionId: number;
  userId: number;
  sessionExpire?: number;
}

export interface UserCount {
  userName: string;
  userPassword: string;
}

export interface ArticleData {
  articleId: number;
  articleTitle: string;
  articleContent: string;
  articleType: string;
  articleTag: string;
  articleSummary: string;
  articleUserId: string;
  articleCreateTime: Date;
  articleUpdateTime: Date;
}
import { ArticleDao } from './entity/article.dao';
import { ArticleData } from '..//../types';


export async function createArticle(params: ArticleData) {
  const data = ArticleDao.createArticle(params);
  return data;
}

export async function updateArticle(params: ArticleData) {
  const data = ArticleDao.updateArticle(params);
  return data;
}


export async function getArticleByType() {

}
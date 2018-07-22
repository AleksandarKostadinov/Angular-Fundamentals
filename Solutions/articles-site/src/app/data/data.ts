import { Article } from './../models/article.model'
import { data } from './seed'

export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = []

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      articles.push(element)
    }

    return articles
  }
}
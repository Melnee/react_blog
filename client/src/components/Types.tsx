import moment from 'moment';

export type blogPostProps = {
  id: number,
  date: moment.Moment,
  title: string,
  body: string,
  category: string,
  author: string,
}

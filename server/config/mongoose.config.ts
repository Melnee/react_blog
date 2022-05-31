import mongoose from '../imports';

mongoose.connect('mongodb://localhost/blogPostDb', {

}).then(() => console.log('Established a connection to the database'))
  /** @todo Fix below line's type error. Research specific error types to be expected */
  // .catch(err: AxiosError => console.log('Something went wrong when connecting to the database', err));
import {Link, useParams} from 'react-router-dom';
import { blogPostProps } from './Types';

// lexical
import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';
import LexicalComposer from '@lexical/react/LexicalComposer';
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin';
import LexicalContentEditable from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';

const BlogPost = ({id, date, title, body, category, author}: blogPostProps) => {
  const params = useParams()

  let location
  let label

  if(params.id){
    location = "/"
    label = "Back to Home"
  }
  else{
    location = `/${id}`
    label = `Show ${title}`
  }

  return (
    <>
      <div>{title}</div>
      <div>{id}</div>
      <div>{date.toString()}</div>
      <div>{body}</div>
      <div>{category}</div>
      <div>{author}</div>
      <Link to={location}>{label}</Link>
      {/* edit link */}
      <br/>
      <Link to={`/${id}/update`}>Update</Link>
    </>
  )
}

export default BlogPost
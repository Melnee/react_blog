import {useState} from 'react'
import { blogPostCategories } from "../api/TempDB"
import { Link } from "react-router-dom";

import {
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiDatePicker,
  EuiSelect,
} from '@elastic/eui';
import moment from 'moment';

type propTypes = {
  update?: boolean,
  id?: number,
  propTitle?: string,
  propDate?: moment.Moment,
  propBody?: string,
  propCategory?: string,
  propAuthor?: string
}

const BlogPostForm = ({update=false, id, propTitle, propDate, propBody, propCategory, propAuthor}: propTypes) => {
  const [title, setTitle] = useState(propTitle || "")
  const [date, setDate] = useState<moment.Moment>(propDate || moment())
  const [body, setBody] = useState(propBody || "")
  const [category, setCategory] = useState(propCategory || "")
  const [author, setAuthor] = useState(propAuthor || "")

  const handleSubmit = () => {
    // insert API logic here
    console.log("Blog post updated!")
  }

  const handleDateChange = (date: moment.Moment) =>{
    setDate(date);
  }

  const handleBodyChange = (body: String) =>{ // change to rtf
    const stringBody = JSON.stringify(body)
    setBody(stringBody);
    console.log(stringBody)
  }

  const bottomPadding = {
    marginBottom: "28px"
  }

  return (
    <>
      <EuiForm>
      <EuiFormRow
        label="Title"
        style={bottomPadding}
      >
        <EuiFieldText
          onChange={(e => setTitle(e.target.value))}
          value={title}
        />
      </EuiFormRow>
      <EuiFormRow
        label="Date"
        style={bottomPadding}
      >
      <EuiDatePicker
        selected={date}
        onChange={handleDateChange}
        inline
        fullWidth
        shadow={false}
      />
      </EuiFormRow>
      <EuiFormRow
        label="Body"
        style={bottomPadding}
      >
        <EuiFieldText
          onChange={(e => handleBodyChange(e.target.value))}
          value={body}
        />
      </EuiFormRow>
      <EuiFormRow
        label="Category"
        style={bottomPadding}
      >
      <EuiSelect
        options={blogPostCategories}
        value={category}
        onChange={(e => setCategory(e.target.value))}
      />
      </EuiFormRow>
      <EuiFormRow
        label="Author"
        style={bottomPadding}
      >
      <EuiFieldText
        onChange={(e => setAuthor(e.target.value))}
        value={author}
      />
      </EuiFormRow>
      </EuiForm>
      <Link to={'/'}>Back</Link>
    </>
  )
}

export default BlogPostForm
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class BlogForm extends React.Component {
  // convert these to a functional component
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
      redirect: null,
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { title, body, author } = this.state;

     axios.post('http://localhost:8000/api/articles', {
      title,
      body,
      author,
    })

      .then((res) => {
        console.log(res.data)
        onSubmit(res.data)
        this.setState({redirect: "/blog"})
      });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body, author } = this.state;
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
  
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('body', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={body}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('author', ev)}
          value={author}
          className="form-control my-3"
          placeholder="Article Author"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({
    type: 'SUBMIT_ARTICLE', data
  })
});

export default connect(null, mapDispatchToProps)(BlogForm);
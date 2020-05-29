import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from "../../../Header";
import Footer from "../../../Footer";

class BlogForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { title, body, author } = this.state;

    return axios.post('/api/articles', {
      title,
      body,
      author,
    })

      .then((res) => onSubmit(res.data));
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body, author } = this.state;

    return (
      <>
      <Header />
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
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit Yoself</button>
      </div>
      <Footer />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({
    type: 'SUBMIT_ARTICLE', data
  })
});

export default connect(null, mapDispatchToProps)(BlogForm);
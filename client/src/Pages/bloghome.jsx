import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';

import { BlogForm } from '../components/BlogComponents/BlogArticle/';

class BlogHome extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;

    axios('http://localhost:8000/api/articles')
      .then((res) => onLoad(res.data));
  }
  render() {
    const { articles } = this.props;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">LightBlog</h1>
          </div>
          <BlogForm />
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {articles.map((article) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                    {article.title}
                  </div>
                  <div className="card-body">
                    {article.body}
                    <p className="mt-5 text-muted"><b>{article.author}</b> {moment(new Date(article.createdAt)).fromNow()}</p>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <button className="btn btn-primary mx-3">
                        Edit
                      </button>
                      <button className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'BLOG_HOME_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogHome);
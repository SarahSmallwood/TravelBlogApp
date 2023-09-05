import Axios from 'axios';
import React, { Component } from 'react'
export class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Post: {
                id: '',
                title: '',
                content: '',
                date: ''
            },
            error: {
                message: '',
                code: ''
            },
            isloading: false,

            haserror: false,
            errors: {
                title: '',
                content: '',
                imagePath: '',
            }
        }
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    componentDidMount() {

        let path = this.props.match.path
        let id = this.props.match.params.id
        if (path === "/edit/:id") {
            this.setState(pre => ({
                isloading: true
            }))
            Axios.get("/posts/" + id).then(data => {
                let post = data.data
                this.setState({
                    isloading: false,
                    Post: { ...this.state.Post, id: post._id, title: post.title, content: post.content }
                });
            })
                .catch(e => {
                    this.setState({
                        isloading: false,
                        error: {
                            ...this.state.error, message: e.response.data.message,
                            code: e.response.status
                        }
                    });
                })
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target?.name;
        let val = event.target?.value;
        let errors = this.state.errors;
        this.setState({ ...errors, Post: { ...this.state.Post, [nam]: val } }, () => {

        });
    }

    mySubmitHandler(e) {
        this.setState(pre => ({
            isloading: true
        }))
        let path = this.props.match.path
        let id = this.props.match.params.id
        let date = new Date()
        e.preventDefault()
        let formData;
        if (typeof (this.state.Post.imagePath) === "object") {
            formData = new FormData();
            formData.append('id', this.state.Post.id);
            formData.append('title', this.state.Post.title);
            formData.append('content', this.state.Post.content);
            formData.append('postDate', date.toString());
        }
        else {
            formData = {
                "id": this.state.Post.id,
                'title': this.state.Post.title,
                'content': this.state.Post.content,
                'postDate': date.toString()
            }
        }

        if (path === "/edit/:id") {
            Axios.put("/posts/" + id, formData).then(data => {
                this.setState(pre => ({
                    isloading: false
                }))
                this.props.history.push('/')
            })
                .catch(e => {
                    this.setState({
                        isloading: false,
                        error: {
                            ...this.state.error, message: e.response.data.message,
                            code: e.response.status
                        }
                    });
                })
        }
        else {
            Axios.post("/posts", formData).then(data => {
                this.setState(pre => ({
                    isloading: false
                }))
                this.props.history.push('/')
            })
                .catch(e => {
                    this.setState({
                        isloading: false,
                        error: {
                            ...this.state.error, message: e.response.data.message,
                            code: e.response.status
                        }
                    });
                })
        }
        this.setState({
            Post: { ...this.state.Post, title: '', content: '', imagePath: '' }
        });
    }
    render() {
        let isLoading
        let iserror

        if (this.state.isloading) {
            isLoading = (
                <>
                    <div className="container loading">
                        <div className="mar-20">
                           
                        </div>
                    </div>
                </>
            )
        }
        if (this.state.error.code) {
            iserror = (
                <>
                    <div className="container error container-short">
                        <div className="mar-20">
                            <h5>Error Code - {this.state.error.code}</h5>
                            <h4>Error Message - {this.state.error.message}</h4>
                        </div>
                    </div>
                </>
            )
        }

        return (<>

            {isLoading}
            {iserror}
            <div className="container container-short">
                <form onSubmit={this.mySubmitHandler} className="pt-4">
                    <div className="form-group">
                        <label htmlFor="title">Title </label>
                        <input
                            type='title'
                            name='title'
                            value={this.state.Post.title}
                            className={"form-control " + (this.state.errors.title ? 'is-invalid' : '')}
                            placeholder="Enter the title"
                            required
                            onChange={this.myChangeHandler}
                        />

                        {this.state.errors.title.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.title}</span></div>}

                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Description </label>
                        <textarea
                            type='text'
                            name='content'
                            rows="4"
                            value={this.state.Post.content}
                            className={"form-control " + (this.state.errors.content ? 'is-invalid' : '')}
                            placeholder="Enter the  description"
                            required="required"
                            onChange={this.myChangeHandler}
                        />

                        {this.state.errors.content.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.content}</span></div>}
                    </div>
                    <div className="form-group">
                        <button style={{ marginRight: '15px' }}
                            type='submit'
                            className="btn btn-primary"
                            disabled={this.state.Post.title && this.state.Post.content && this.state.Post.imagePath
                                ? '' : 'disabled'}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
        )
    }
}

export default CreatePost
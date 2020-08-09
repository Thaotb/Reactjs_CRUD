import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import axios from "axios";

const EditBlogs = ({ blogs, onUpdateBlogs, cateblogs }) => {
    let history = useHistory();
    const { id } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        cate_blogs: "",

    });
    const { title, content, cate_blogs } = blog;
    const onHandleChange = e => {
        setBlog({
            ...blogs,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        loadBlogs();

    }, [])
    const onHandleSubmit = data => {
        onUpdateBlogs(id, data);
        history.push("/admin/blogs");

    }

    const loadBlogs = async () => {
        const result = await axios.get(`http://localhost:8000/blogs/${id}`)
        setBlog(result.data);
    }
    return (
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 " >
                <div className="card o-hidden border-0 shadow-lg my-5 justify-content-center">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4 ">Sửa bài viết</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onHandleSubmit)}>

                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text"
                                                name="title"
                                                value={title}
                                                onChange={e => onHandleChange(e)}
                                                className="form-control "
                                                id="inputCategoryName"
                                                ref={register({ required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/ })}
                                            />
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên danh mục không được để trống </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "minLength" && <span>Tên danh mục phải ít nhất 4 kí tự </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "pattern" && <span>Tên danh mục không được để trống </span>}</small>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Danh mục bài viết</label>
                                                <select className="form-control" name="cate_blogs"
                                                    ref={register({ required: true })}>
                                                    {cateblogs.map(({ id, name }, key) => (
                                                        id == blog.cate_blogs ?
                                                            <option key={key} selected value={id}>{name}</option>
                                                            : <option key={key} value={id}>{name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Content</label>
                                            <textarea type="text"
                                                name="content"
                                                value={content}
                                                onChange={e => onHandleChange(e)}
                                                className="form-control "
                                                id="inputCategoryName"
                                                ref={register({ required: true })}
                                                placeholder="Mô tả danh mục">
                                            </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên sản phẩm không được để trống </span>}</small>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-user ">Submit</button>


                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


EditBlogs.propTypes = {

}

export default EditBlogs

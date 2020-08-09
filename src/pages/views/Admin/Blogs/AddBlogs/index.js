import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const AddBlogs = ({ blogs, onAddBlogs, cateblogs }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = data => {
        onAddBlogs(data);
        history.push("/admin/blogs");
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
                                        <h1 className="h4 text-gray-900 mb-4 ">Thêm bài viết</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onHandleSubmit)}>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text"
                                                name="title"
                                                className="form-control "
                                                id="inputBlogsTitle"
                                                ref={register({ required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/ })}
                                            />
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên sản phẩm không được để trống </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "minLength" && <span>Tên sản phẩm phải ít nhất 4 kí tự </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "pattern" && <span>Tên sản phẩm không được để trống </span>}</small>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-5">
                                                <label>Danh mục bài viết</label>
                                                <select className="form-control" name="cate_blogs"
                                                    ref={register({ required: true })} >
                                                    <option>Chọn danh mục bài viết</option>
                                                    {cateblogs.map(({ id, name }) => (
                                                        <option value={id}>{name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Content</label>
                                            <textarea type="text"
                                                rows="4" cols="50"
                                                name="content"
                                                className="form-control "
                                                id="inputBlogsContent"
                                                ref={register({
                                                    required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/
                                                })}>
                                            </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Chi tiết sản phẩm không được để trống </span>}</small>
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

AddBlogs.propTypes = {

}

export default AddBlogs

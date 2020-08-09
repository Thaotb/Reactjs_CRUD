import React, { useState, useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Blogs = ({ blogs, onRemoveBlogs, cateblogs }) => {
    const deleteBlogs = (id) => {
        onRemoveBlogs(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Table</h1>

                <Link to="/admin/add-blogs" class="btn btn-primary btn-icon-split d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                    </span>
                    <span class="text">Thêm bài viết</span>
                </Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách bài viết </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Category</th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(({ id, title, cate_blogs, content }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td style={{ width: "300px" }}>{title}</td>
                                        <td style={{ width: "500px" }} >{content}</td>
                                        <td>{cateblogs.map(({ id, name }) => { return id == cate_blogs ? name : "" })}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/admin/edit-blogs/${id}`}><i class="far fa-edit"></i></Link>
                                            <button className="btn btn-danger" onClick={() => deleteBlogs(id)}  ><i class="fas fa-trash"></i></button>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}


Blogs.propTypes = {

}

export default Blogs

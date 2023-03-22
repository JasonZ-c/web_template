import React, { useState, useEffect } from "react";
import APIService from "./APIService.js"

function Form(props) {
    const [title,setTitle] = useState(props.article.title)
    const [body,setBody] = useState(props.article.body)

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    },[props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title,body})
        .then(resp => props.updatedData(resp))
        .catch(err => console.log(err))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title,body})
        .then(resp => props.insertedArticle(resp))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label htmlForm="title" className="form-label">Title</label>
                    <input type="text" className="form-control"
                    value={title}
                    placeholder="please enter title" 
                    onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlForm="body" className="form-label">description</label>
                    <textarea
                    rows="5"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="form-control"
                    placeholder="plz enter description"
                    />

                    {
                        props.article.id ? <button 
                        onClick={updateArticle}
                        className="btn btn-success mt-3">Update</button>
                        :
                        <button 
                        onClick={insertArticle}
                        className="btn btn-success mt-3">insert</button>
                    }

                    
                
                </div>
            ) :null}


        </div>
    )
}

export default Form
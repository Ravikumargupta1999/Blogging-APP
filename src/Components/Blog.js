import { useState } from "react";

export default function Blog() {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <h1>Blogging APP</h1>
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the Title of the Blog here.." 
                            value={title} 
                            onChange={(e) =>{setTitle(e.target.value)}}
                        />
                    </Row >
                    <Row label="Content">
                        <textarea className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={content}
                            onChange={(e) =>{setContent(e.target.value)}}
                        />
                    </Row >

                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            <h2> Blogs </h2>
            <h3>{title}</h3>
            <p>{content}</p>
        </>
    )
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}

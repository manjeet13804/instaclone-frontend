import "./upload.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Field({ ...rest }) {
    return <div className="form-field">
        <input {...rest} />
    </div>
}
const FormCreate = (data) => {
    const formData = new FormData()
    for (let key in data) {
        formData.append(key, data[key])
    }
    return formData
}
const CreatePost = (data) => {
return fetch("http://localhost:3004/user",{
    method:"POST",
    body:FormCreate(data)
})
}
const Upload = () => {
    const [data, setData] = useState({
        PostImage: "",
        author: "",
        location: "",
        description: ""
    })
   const navigate= useNavigate()
    return <section className="create-post-section">
        <form action="#" method="POST" onSubmit={e => {
            e.preventDefault()
            console.log(data)
            CreatePost(data)
            navigate("/post-view")
        }}>
            <div className="row single-col">
                <Field type="file" onChange={(e) => {
                    setData(data => ({
                        ...data, PostImage: e.target.files[0]
                    }))
                }
                } />
            </div>
            <div className="row two-col">
                <Field className="row" type="text" placeholder="author"
                    value={data.author} onChange={(e) => {
                        setData(data => ({
                            ...data, author: e.target.value
                        }))
                    }}
                />
                <Field type="text" placeholder="location"
                    value={data.location} onChange={(e) => {
                        setData(data => ({
                            ...data, location: e.target.value
                        }))
                    }} />
            </div>
            <div className="row single-col">
                <Field type="text" placeholder="description"
                    value={data.description} onChange={(e) => {
                        setData(data => ({
                            ...data, description: e.target.value
                        }))
                    }} />
            </div>
            <div className="form-footer">
                <button>Post</button>
            </div>
        </form>

    </section>
}
export default Upload


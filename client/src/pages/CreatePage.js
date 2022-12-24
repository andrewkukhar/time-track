import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook.js"

export const CreatePage = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [project, setProject] = useState('')
    const [hours, setHours] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const createTime = async () => {
        if (createTime) {
            try {
                const data = await request('/api/times/create',
                    'POST',
                    { project: project, hours: hours, description: description }, {
                    Authorization: `Bearer ${auth.token}`
                })
                history(`/detail/${data.time._id}`)
            } catch (e) { }
        }
    }
    return (
        <div className="row">
            <div
                className="col s8 offset-s2"
                style={{ paddingTop: '2rem' }}
            >
                <div className="input-field">
                    <input
                        placeholder="Project Name"
                        id="project"
                        type="text"
                        className=""
                        value={project}
                        style={{ marginTop: 10 }}
                        onChange={e => setProject(e.target.value)}
                    />
                    <label htmlFor="project">Enter Project Name</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Hours"
                        id="hours"
                        type="number"
                        className=""
                        value={hours}
                        style={{ marginTop: 10 }}
                        onChange={e => setHours(e.target.value)}
                    />
                    <label htmlFor="hours">Enter Hours</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Enter Description"
                        id="description"
                        type="text"
                        className=""
                        value={description}
                        style={{ marginTop: 10 }}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label htmlFor="description">Enter Description</label>
                </div>
                <button
                    onClick={createTime}
                    className="waves-effect waves-light btn blue-grey lighten-4 black-text"
                >Create Time</button>
            </div>
        </div>
    )
}
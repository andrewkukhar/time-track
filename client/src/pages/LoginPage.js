import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook.js"
import { useMessage } from "../hooks/message.hook.js"

export const LoginPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        if (event.target.name === "email") {
            setForm({ ...form, [event.target.name]: event.target.value.toLowerCase() })
        } else {
            setForm({ ...form, [event.target.name]: event.target.value })
        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className="container">
            <div className="col s3 m3 l3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Login Page</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter Email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="yellow-input validate"
                                    value={form.email}
                                    style={{ marginTop: 30 }}
                                    onChange={changeHandler}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    style={{ marginTop: 30 }}
                                    onChange={changeHandler}
                                    required
                                />
                                <label
                                    htmlFor="password"
                                >Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="waves-effect waves-light btn blue-grey lighten-5 black-text"
                            style={{ marginRight: 10 }}
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
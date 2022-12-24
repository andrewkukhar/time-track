import { useEffect } from "react"
import { useState } from "react"
import { useHttp } from "../hooks/http.hook.js"
import { useMessage } from "../hooks/message.hook.js"

export const SignupPage = () => {
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
    const registerHandler = async () => {
        try {
            const data = await request('/api/signup', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    return (
        <div className="container">
            <div className="col s6 m4 l2 xl1">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <div className="card-title mb">Signup Page</div>
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
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
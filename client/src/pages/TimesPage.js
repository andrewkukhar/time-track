import { useContext } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { TimesList } from "../components/TimesList.js"
import { Loader } from "../components/Loader"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook"

export const TimesPage = () => {
    const [times, setTimes] = useState([])
    const { loading, request } = useHttp()
    const { token } = useContext(AuthContext)

    const fetchTimes = useCallback(async () => {
        try {
            const fetched = await request('/api/times', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setTimes(fetched)
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchTimes()
    }, [fetchTimes]);

    if (loading) {
        return <Loader />
    }
    return (
        <div>
            {!loading && <TimesList times={times} />}
        </div>
    )
}
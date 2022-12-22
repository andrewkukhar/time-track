import { useCallback } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { TimeCard } from "../components/TimeCard.js"
import { Loader } from "../components/Loader.js"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook.js"

export const DetailPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [time, setTime] = useState(null)
    const timeId = useParams().id

    const getTime= useCallback(async () => {
        try {
            const fetched = await request(`/api/times/${timeId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setTime(fetched)
        } catch (e) { }
    }, [token, timeId, request])

    useEffect(() => {
        getTime()
    }, [getTime])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && time && <TimeCard time={time} />}
        </>
    )
}
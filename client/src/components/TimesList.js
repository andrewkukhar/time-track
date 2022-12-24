import { Link } from "react-router-dom"

export const TimesList = ({ times }) => {

    if (!times.length) {
        return <p className="center">Times have not yet</p>
    }
    return (
        <div className="row">
            <ul className="times-list">
                {times.map((time, index) => {
                    return (
                        <li key={time._id}>
                            {time.project}
                            <Link className="times-link waves-effect waves-light-blue btn-small" to={`/detail/${time._id}`}>Open</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
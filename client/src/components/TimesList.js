import { Link } from "react-router-dom"

export const TimesList = ({ times, deleteTime }) => {

    if (!times.length) {
        return <p className="center">Times have not yet</p>
    }
    return (
        <div className="row">
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>N#</th>
                        <th>Project Name</th>
                        <th>Hours</th>
                        <th>Description</th>
                        <th>Data created</th>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, index) => {
                        return (
                            <tr key={time._id}>
                                <td>{index + 1}</td>
                                <td>{time.project}</td>
                                <td>{time.hours}</td>
                                <td>{time.description}</td>
                                <td>{time.date}</td>
                                <td>
                                    <Link to={`/detail/${time._id}`}>Open</Link>
                                    <button onClick={() => { deleteTime(time._id) }} className="btn btn-small">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
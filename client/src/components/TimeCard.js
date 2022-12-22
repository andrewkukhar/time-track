export const TimeCard = ({ time }) => {
    return (
        <div>
            <h2>Time</h2>
            <p rel="noopener noreferrer">Project Name:&nbsp;
                {time.project}
            </p>
            <p rel="noopener noreferrer">Hours:&nbsp;
                {time.hours}
            </p>
            <p rel="noopener noreferrer">Description: <strong>{time.description}</strong></p>
            <p>Date created: <strong>{new Date(time.date).toLocaleDateString()}</strong></p>
        </div>
    )
}
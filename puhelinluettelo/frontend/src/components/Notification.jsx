const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const isError = message.toLowerCase().includes("error") || message.toLowerCase().includes("failed")

    return <div className={isError ? "error" : "success"}>{message}</div>

}

export default Notification
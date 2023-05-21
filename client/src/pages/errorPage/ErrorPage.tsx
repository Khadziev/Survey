

const ErrorPage = () => {


    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return (
        <div>
            <p>Произошла ошибка</p>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    )
}

export default ErrorPage
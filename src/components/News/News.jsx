

const News = (props) =>{
    return(
        <div>
            <h1>News</h1>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>Количество лайков: {props.likes}</p>
            <p>комментарий: <span>{props.comments}</span></p>
        </div>
    )
}

export default News
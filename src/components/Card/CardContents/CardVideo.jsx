const CardVideo = ({ link }) => {
    return (
        <iframe
            className="mx-auto place-content-center"
            width="400"
            height="225"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
    )
}

export default CardVideo;

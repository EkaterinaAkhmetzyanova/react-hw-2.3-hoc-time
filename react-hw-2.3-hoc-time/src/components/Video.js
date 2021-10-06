/* eslint-disable jsx-a11y/iframe-has-title */
import DateTime from './DateTime';

export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}
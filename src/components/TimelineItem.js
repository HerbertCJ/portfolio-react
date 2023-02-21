const TimelineItem = ({ title, date, tag, color, url, text }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: color }}>
                {tag}
            </span>
            <time>{date}</time>
            <p>{title}</p>
            {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem
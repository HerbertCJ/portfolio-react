import { timelineData } from '../data'
import TimelineItem from './TimelineItem'

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, id) => (
        <TimelineItem  key={id} {...data} />
      ))}
    </div>
  );

export default Timeline
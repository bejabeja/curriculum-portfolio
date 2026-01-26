import LinkIcon from '../assets/icons/LinkIcon';
import Section from '../components/Section';
import cv from '../resume.json';
import './Experience.css';

const Experience = () => {
  const formatDate = (date) => date ? new Date(date).getFullYear() : "Present";

  return (
    <Section title="Work Experience">
      <div className="experience-list">
        {cv.work.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-company">
                  <a href={job.url} target="_blank" rel="noreferrer" className="experience-link">
                    {job.name}
                    <LinkIcon />
                  </a>
                </h3>
                <p className="experience-position">{job.position}</p>
              </div>
              <span className="experience-date">
                {formatDate(job.startDate)} - {formatDate(job.endDate)}
              </span>
            </div>

            <ul className="experience-summary">
              {job.summary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="experience-highlights">
              {job.highlights.map((skill, i) => (
                <span key={i} className="skill-badge skill-badge-blue">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};


export default Experience
import Section from '../components/Section';
import cv from '../resume.json';
import './Education.css';

const Education = () => {
  const formatDate = (date) => new Date(date).getFullYear();

  return (
    <Section title="Education">
      <div className="education-list">
        {cv.education.map((edu) => (
          <div key={edu.institution} className="education-item">
            <div className="education-content">
              <h3 className="education-institution">{edu.institution}</h3>
              <p className="education-details">{edu.studyType}<span aria-hidden="true"> • </span>{edu.area}</p>
            </div>
            <span className="education-date">
              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education
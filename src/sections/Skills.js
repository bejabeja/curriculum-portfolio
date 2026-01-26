import Section from '../components/Section';
import cv from '../resume.json';
import './Skills.css';

const Skills = () => (
  <Section title="Skills">
    <div className="skills-list">
      {cv.skills.map((skill, index) => (
        <span key={index} className="skill-badge">{skill}</span>
      ))}
    </div>
  </Section>
);
export default Skills
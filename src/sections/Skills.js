import Section from '../components/Section';
import cv from '../resume.json';
import './Skills.css';

const Skills = () => (
  <Section title="Skills">
    <ul className="skills-list" aria-label="Technical skills">
      {cv.skills.map((skill, index) => (
        <li key={skill} className="skill-badge">{skill}</li>
      ))}
    </ul>
  </Section>
);
export default Skills
import Section from "../components/Section";
import cv from '../resume.json';
import "./Languages.css";

const Languages = () => (
    <Section title="Languages">
        <div className="languages-list">
            {cv.languages.map((lang, index) => (
                <div key={index} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-separator" aria-hidden="true">•</span>
                    <span className="language-fluency">{lang.fluency}</span>
                </div>
            ))}
        </div>
    </Section>
);

export default Languages
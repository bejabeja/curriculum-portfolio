import Section from '../components/Section'
import cv from '../resume.json'

const About = () => {
  const { summary } = cv.basics

  return (
    <Section title="About">
      <p className="about-text">
        {summary}
      </p>
    </Section>
  )
}

export default About
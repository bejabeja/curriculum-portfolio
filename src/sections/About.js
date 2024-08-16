import React from 'react'
import Section from '../components/Section'
import cv from '../resume.json'

const About = () => {
  const { summary } = cv.basics

  return (
    <Section title='About' >
      <p className='paragraph-style' >
        {summary}
      </p>
    </Section>
  )
}

export default About
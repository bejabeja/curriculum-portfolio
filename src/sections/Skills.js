import React from 'react'
import Section from '../components/Section'
import cv from '../resume.json'
import './Skills.css'

const Skills = () => {
  const skills = cv.skills
  return (
    <Section title='Skills'> 
      <ul className='skills-ul'>
        {skills?.map(({name})=> (
          <li className='skills-li'>
            {name}
          </li>
          ))
        }
      </ul>
    </Section>
  )
}

export default Skills
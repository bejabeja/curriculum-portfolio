import React from 'react'
import Section from '../components/Section'
import cv from '../resume.json'
import './Experience.css'

const Experience = () => {
  const work = cv.work
  return (
    <Section title="Experiencia laboral">
      <ul className='experience-ul'>
        {
          work.map(
            ({ name, startDate, endDate, position, summary, url }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear =
                endDate != null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`
    
              return (
                <li className='experience--li'>
                  <article>
                    <header className='experience--header'>
                      <div>
                        <h3 className='experience--h3'>
                          <a href={url} title={`Ver ${name}`} target="_blank">
                            {name}
                          </a>
                        </h3>
                        <h4 className='experience--h4'>{position}</h4>
                      </div>
    
                      <time className='experience--time'>{years}</time>
                    </header>
    
                    <footer>
                      <p>{summary}</p>
                    </footer>
                  </article>
                </li>
              )
            }
          )
        }
    </ul>
  </Section>
  )
}

export default Experience
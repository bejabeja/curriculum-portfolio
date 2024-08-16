import React from 'react'
import Section from '../components/Section'
import cv from '../resume.json'
import './Experience.css'

const Experience = () => {
  const work = cv.work
  return (
    <Section title="Work Experience">
      <ul className='experience-ul'>
        {
          work?.map(
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
                          <a href={url} title={`Ver ${name}`} target="_blank" rel="noreferrer">
                            {name}
                          </a>
                        </h3>
                        <h4 className='experience--h4'>{position}</h4>
                      </div>

                      <time className='experience--time'>{years}</time>
                    </header>

                    <footer className='experience--summary-list'>

                      {
                        summary.map((item, index) => (
                          <li key={index}>
                            <footer>
                              <p className='paragraph-style'>{item}</p>
                            </footer>
                          </li>
                        ))
                      }
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
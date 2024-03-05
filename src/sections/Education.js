import React from 'react'
import Section from '../components/Section'
import cv from '../resume.json'
import './Education.css'


const Education = () => {

  const education = cv.education
  return (
    <Section title='Education'>
        <ul className='edu--ul'>
          {
            education.map(({ institution, studyType, startDate, endDate, area }) => {
              const startYear = new Date(startDate).getFullYear()
              const endYear =
                endDate != null ? new Date(endDate).getFullYear() : "Actual"
              const years = `${startYear} - ${endYear}`

              return (
                <li className='edu--li'>
                  <article>
                    <header className='edu--header'>
                      <div>
                        <h3 className='edu--h3'>{institution}</h3>
                      </div>
                      <time className='edu--time'>{years}</time>
                    </header>

                    <footer>
                      <p>{studyType} ~ {area}</p>
                    </footer>
                  </article>
                </li>
              )
            })
          }
        </ul>  
    </Section>
  )
}

export default Education
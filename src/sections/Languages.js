import Section from "../components/Section"
import cv from '../resume.json'

const Languages = () => {
    return <Section title='Languages'>
        <ul className='skills-ul'>
            {
                cv.languages.map(({ language, fluency }) => (
                    <li className='skills-li'>
                        {language} - {fluency}
                    </li>
                ))
            }
        </ul>
    </Section>
}

export default Languages
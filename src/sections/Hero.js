import cv from '../resume.json'
import './Hero.css'
import Section from '../components/Section'
import LinkedIn from '../assets/icons/LinkedInIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import WorldMap from '../assets/icons/WorldMapIcon'

const Hero = () => {
  const { name, label, image, location, profiles, phone, email } = cv.basics
  const { city, region} = location

  const SOCIAL_ICONS = {
    LinkedIn
  }

  const linkedInInfo = profiles.find(({network}) => network === 'LinkedIn')
  const linkedInUrl = linkedInInfo?.url

  return (
    <Section>
      <div className='container'>
        <div className='info'>
          <h1 className='title-hero--main'>{name}</h1>
          <h2 className='title-hero--secondary'>{label}</h2>
          <span className='hero--span'>
            <WorldMap></WorldMap>
            {city}, {region}
          </span>          
          <footer className='hero--footer print'>
            {email} ~ {phone} ~ {linkedInUrl}
          </footer>
          <footer className='hero--footer no-print'>
            {phone && (
                <a
                  href={`tel:${phone}`}
                  title={`Call to ${name} with number ${phone}`}
                  target='_blank'
                  rel="noreferrer"
                >
                  <PhoneIcon></PhoneIcon>
                </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Send an email to ${name} to ${email}`}
                target='_blank'
                rel="noreferrer"
              >                
                <MailIcon/>
              </a>
            )}
            {
              profiles.map(({id, network, url, username}) => {
                const Icon = SOCIAL_ICONS[network]
                return (
                  <a
                    key={id}
                    href={url}
                    title={`Visit profile of ${username} in ${email}`}
                    target='_blank'
                    rel="noreferrer"
                  >                
                    <Icon/>
                  </a>
                )
              })
            }
          </footer>
        </div>
        <figure>
          <img src={image} alt={name} className='hero-img'></img>
        </figure>
      </div>
    </Section>
  )
}

export default Hero
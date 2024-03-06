import React from 'react'
import cv from '../resume.json'
import './Hero.css'
import Section from '../components/Section'
import LinkedIn from '../assets/icons/LinkedInIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import WorldMap from '../assets/icons/WorldMapIcon'

const Hero = () => {
  const basics = cv.basics
  const profiles = cv.basics.profiles
  const location = cv.basics.location

  console.log(profiles ?? 'Hello')
  const SOCIAL_ICONS = {
    LinkedIn
  }

  const linkedInInfo = profiles?.find(({network}) => network === 'LinkedIn')
  const linkedInUrl = linkedInInfo?.url

  return (
    <Section>
      <div className='container'>
        <div className='info'>
          <h1 className='title-hero--main'>{basics.name}</h1>
          <h2 className='title-hero--secondary'>{basics.label}</h2>
          <span className='hero--span'>
            <WorldMap></WorldMap>
            {location.city}, {location.region}
          </span>          
          <footer className='hero--footer print'>
            {basics.email} ~ {basics.phone} ~ {linkedInUrl}
          </footer>
          <footer className='hero--footer no-print'>
            {basics.phone && (
                <a
                  href={`tel:${basics.phone}`}
                  title={`Call to ${basics.name} with number ${basics.phone}`}
                  target='_blank'
                  rel="noreferrer"
                >
                  <PhoneIcon></PhoneIcon>
                </a>
            )}
            {basics.email && (
              <a
                href={`mailto:${basics.email}`}
                title={`Send an email to ${basics.name} to ${basics.email}`}
                target='_blank'
                rel="noreferrer"
              >                
                <MailIcon/>
              </a>
            )}
            {
              profiles?.map(({id, network, url, username}) => {
                const Icon = SOCIAL_ICONS[network]
                return (
                  <a
                    key={id}
                    href={url}
                    title={`Visit profile of ${username} in ${url}`}
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
          <img src={basics.image} alt={basics.name} className='hero-img'></img>
        </figure>
      </div>
    </Section>
  )
}

export default Hero
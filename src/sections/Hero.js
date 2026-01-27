import DownloadIcon from '../assets/icons/DownloadIcon'
import { default as LinkedInIcon } from '../assets/icons/LinkedInIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import MapIcon from '../assets/icons/WorldMapIcon'
import Section from '../components/Section'
import cv from '../resume.json'
import './Hero.css'

const Hero = () => {
  const basics = cv.basics
  // const profiles = cv.basics.profiles
  // const location = cv.basics.location
  const { name, label, image, email, phone, location, profiles } = basics;
  const linkedIn = profiles.find(p => p.network === "LinkedIn");

  return (
    <Section>
      <div className="hero-container">
        <div className="hero-info">
          <h1 className="hero-name">{name}</h1>
          <p className="hero-label">{label}</p>

          <div className="hero-location">
            <MapIcon />
            <span>{location.city}, {location.region}</span>
          </div>

          <div className="hero-contact-print">
            {email} • {phone} • {linkedIn?.url}
          </div>

          <div className="hero-contact-screen">
            <a href={`tel:${phone}`} className="contact-btn" title={`Call ${name}`}>
              <PhoneIcon />
            </a>
            <a href={`mailto:${email}`} className="contact-btn" title={`Email ${name}`}>
              <MailIcon />
            </a>
            <a href={linkedIn?.url} target="_blank" rel="noreferrer" className="contact-btn" title="LinkedIn Profile">
              <LinkedInIcon />
            </a>
            <a href="/MAbella_Resume.pdf" download className="contact-btn contact-btn-primary" title="Download CV">
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={image} alt={name} className="hero-image" />
        </div>
      </div>
    </Section>
  );
};

export default Hero

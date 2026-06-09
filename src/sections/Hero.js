import DownloadIcon from '../assets/icons/DownloadIcon'
import LinkIcon from '../assets/icons/LinkIcon'
import LinkedInIcon from '../assets/icons/LinkedInIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import MapIcon from '../assets/icons/WorldMapIcon'
import Section from '../components/Section'
import cv from '../resume.json'
import './Hero.css'

const Hero = () => {
  const { name, label, image, email, phone, url, location, profiles } = cv.basics;
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
            {email} • {phone} • {linkedIn?.url} • {url}
          </div>

          <div className="hero-contact-screen" role="navigation" aria-label="Contact links">
            <a href={`tel:${phone}`} className="contact-btn" title={`Call ${name}`} aria-label={`Call ${name}`}>
              <PhoneIcon aria-hidden="true" />
            </a>
            <a href={`mailto:${email}`} className="contact-btn" title={`Email ${name}`} aria-label={`Email ${name}`}>
              <MailIcon aria-hidden="true" />
            </a>
            <a href={linkedIn?.url} target="_blank" rel="noreferrer" className="contact-btn" title="LinkedIn Profile" aria-label="LinkedIn Profile">
              <LinkedInIcon aria-hidden="true" />
            </a>
            <a href={`https://${url}`} target="_blank" rel="noreferrer" className="contact-btn" title="Portfolio Website" aria-label="Portfolio Website">
              <LinkIcon aria-hidden="true" />
            </a>
            <a href="/MAbella_Resume.pdf" download className="contact-btn contact-btn-primary" title="Download CV" aria-label="Download CV">
              <DownloadIcon aria-hidden="true" />
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

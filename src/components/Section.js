import './Section.css';

const Section = ({ title, children }) => (
  <section className="section">
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </section>
);

export default Section
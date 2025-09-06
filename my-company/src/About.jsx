function About() {
  const aboutStyle = {
    padding: '40px 20px',
    backgroundColor: '#fff',
    minHeight: '400px'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const textStyle = {
    color: '#34495e',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto'
  };

  return (
    <div style={aboutStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <p style={textStyle}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, 
        and consultancy. Our team consists of experienced professionals 
        who are passionate about delivering exceptional results.
      </p>
      <p style={textStyle}>
        We believe in building long-term relationships with our clients 
        by understanding their unique needs and providing customized 
        solutions that drive growth and success.
      </p>
    </div>
  );
}

export default About;
function Home() {
  const homeStyle = {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '3rem',
    marginBottom: '20px'
  };

  const textStyle = {
    color: '#7f8c8d',
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: '1.6'
  };

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>Welcome to Our Company</h1>
      <p style={textStyle}>
        We are dedicated to delivering excellence in all our services. 
        With years of experience and a team of experts, we provide 
        innovative solutions tailored to your needs.
      </p>
    </div>
  );
}

export default Home;
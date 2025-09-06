function Services() {
  const servicesStyle = {
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    minHeight: '400px'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const itemStyle = {
    backgroundColor: 'white',
    margin: '15px 0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontSize: '1.1rem',
    color: '#34495e',
    fontWeight: '500'
  };

  return (
    <div style={servicesStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={itemStyle}>🚀 Technology Consulting</li>
        <li style={itemStyle}>📊 Market Analysis</li>
        <li style={itemStyle}>💻 Product Development</li>
        <li style={itemStyle}>🎯 Digital Marketing</li>
        <li style={itemStyle}>🔧 IT Support & Maintenance</li>
      </ul>
    </div>
  );
}

export default Services;
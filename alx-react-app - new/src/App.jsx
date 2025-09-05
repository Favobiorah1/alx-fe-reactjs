// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <WelcomeMessage />

      {/* Main Content */}
      <MainContent />

      {/* User Profiles */}
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'darkred' }}>User Profiles</h1>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys cooking and traveling"
      />
      <UserProfile
        name="Charlie"
        age="28"
        bio="Passionate about music and coding"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

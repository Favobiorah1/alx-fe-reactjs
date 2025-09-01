import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
  function App() {
  return (
    <div>
      <h1>User Profiles</h1>
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
    </div>
  );
}

export default App;

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

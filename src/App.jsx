import React from 'react';
    import './App.css';
    import LandingPage from './components/LandingPage';
    import SignUp from './components/SignUp';
    import SignIn from './components/SignIn';
    import SubscriptionPlans from './components/SubscriptionPlans';
    import CreditPurchase from './components/CreditPurchase';
    import CVGenerator from './components/CVGenerator';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>CV Generator</h1>
            <nav>
              <a href="#credits">Credits</a>
              <a href="#account-settings">Account Settings</a>
              <a href="#tools">Tools</a>
              <a href="#sign-up">Sign Up</a>
              <a href="#sign-in">Sign In</a>
              <a href="#subscription-plans">Subscription Plans</a>
              <a href="#credit-purchase">Purchase Credits</a>
              <a href="#cv-generator">Generate CV</a>
            </nav>
          </header>
          <main>
            <LandingPage />
            <SignUp />
            <SignIn />
            <SubscriptionPlans />
            <CreditPurchase />
            <CVGenerator />
          </main>
        </div>
      );
    }

    export default App;

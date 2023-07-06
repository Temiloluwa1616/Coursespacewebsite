import React, { useState } from 'react';


const ToggleLanguage = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setShowLanguageOptions(false);
    // Perform any language change logic here
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Your Website</div>
      <div className="navbar-menu">
        <div className="navbar-item">
          <div className="language-toggle" onClick={toggleLanguageOptions}>
            {selectedLanguage}
            <i className={`arrow-icon ${showLanguageOptions ? 'up' : 'down'}`} />
          </div>
          {showLanguageOptions && (
            <div className="language-options">
              <div className="language-option" onClick={() => changeLanguage('English')}>
                English
              </div>
              <div className="language-option" onClick={() => changeLanguage('Spanish')}>
                Spanish
              </div>
              {/* Add more language options as needed */}
            </div>
          )}
        </div>
        {/* Add more navbar items as needed */}
      </div>
    </nav>
  );
};

export default ToggleLanguage;

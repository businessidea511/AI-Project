import React, { useState } from 'react';
    import './ATSOptimization.css';

    function ATSOptimization() {
      const [cvText, setCVText] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle ATS optimization logic here
        console.log('ATS Optimization:', cvText);
      };

      return (
        <div className="ATSOptimization">
          <h2>ATS Optimization</h2>
          <form onSubmit={handleSubmit}>
            <label>
              CV Text:
              <textarea value={cvText} onChange={(e) => setCVText(e.target.value)} required />
            </label>
            <button type="submit">Optimize</button>
          </form>
        </div>
      );
    }

    export default ATSOptimization;

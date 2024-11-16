import React, { useState } from 'react';
    import './CVGenerator.css';

    function CVGenerator() {
      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [phone, setPhone] = useState('');
      const [jobTitle, setJobTitle] = useState('');
      const [outputLanguage, setOutputLanguage] = useState('en');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle CV generation logic here
        console.log('Generate CV:', name, address, phone, jobTitle, outputLanguage);
      };

      return (
        <div className="CVGenerator">
          <h2>Generate CV</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Address:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <label>
              Phone Number:
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label>
              Job Title:
              <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            </label>
            <label>
              Output Language:
              <select value={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
                <option value="ru">Russian</option>
                <option value="ar">Arabic</option>
              </select>
            </label>
            <button type="submit">Generate CV</button>
          </form>
        </div>
      );
    }

    export default CVGenerator;

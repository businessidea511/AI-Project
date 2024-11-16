import React, { useState } from 'react';
    import './CVUpload.css';

    function CVUpload() {
      const [file, setFile] = useState(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle CV upload logic here
        console.log('Upload CV:', file);
      };

      return (
        <div className="CVUpload">
          <h2>Upload & Optimize Existing CV</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Upload CV:
              <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
            </label>
            <button type="submit">Upload</button>
          </form>
        </div>
      );
    }

    export default CVUpload;

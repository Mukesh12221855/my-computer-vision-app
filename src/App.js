import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    // This is a placeholder - in a real app, you'd send to your backend
    setProcessedImage(image);
    alert("Image would be processed here (in a real app)");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision App</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <div>
            <h3>Original Image</h3>
            <img src={image} alt="Original" style={{ maxWidth: '300px' }} />
            <button onClick={processImage}>Process Image</button>
          </div>
        )}
        {processedImage && (
          <div>
            <h3>Processed Image</h3>
            <img src={processedImage} alt="Processed" style={{ maxWidth: '300px' }} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
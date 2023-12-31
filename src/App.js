/* import { useState, useEffect, useRef } from 'react';
import "./App.css";
import { uploadFile } from './services/api.js';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1> file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App; */

import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import App1 from "./app1";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
           <Route path='/app1' element={<App1 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
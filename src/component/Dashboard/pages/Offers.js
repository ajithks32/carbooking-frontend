import React, { useState } from "react";
import axios from "axios";
import "./offers.css";

const OfferUploadForm = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 6) {
      setMessage("You can upload a maximum of 6 images.");
      return;
    }
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (files.length === 0) {
      setMessage("Please select at least one image file.");
      return;
    }
  
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file); // ✅ Matches backend field name
    });
  
    try {
      const response = await axios.post("http://localhost:5000/offers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setMessage("Offer images uploaded successfully!");
      console.log("Upload response:", response.data);
      setFiles([]);
    } catch (error) {
      setMessage("Error uploading offer images.");
      console.error("Upload error:", error);
    }
  };
  
  return (
    <div className="offer-upload-form">
      <h2 className="text-primary">Upload Offer Images</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="images">Choose up to 6 images:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            required
          />
        </div>
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      {message && <p className="message">{message}</p>}

      {files.length > 0 && (
        <div className="selected-files">
          <h3 className="text-primary mt-3">Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li className="text-dark" key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OfferUploadForm;

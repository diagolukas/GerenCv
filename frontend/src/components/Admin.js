import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ComponentsStyle/AdminStyle.css'

function Admin() {
  const [resumes, setResumes] = useState([]);
  const [filteredResumes, setFilteredResumes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/resumes')
      .then(response => {
        setResumes(response.data);
        setFilteredResumes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the resumes!', error);
      });
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = resumes.filter(resume =>
      resume.interest.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredResumes(filtered);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/resumes/${id}`)
      .then(() => {
        const updatedResumes = resumes.filter(resume => resume.id !== id);
        setResumes(updatedResumes);
        setFilteredResumes(updatedResumes);
      })
      .catch(error => {
        console.error('There was an error deleting the resume!', error);
      });
  };

  const handleSelectResume = (resume) => {
    setSelectedResume(resume);
  };

  return (
    <div className="admin-container container mt-5">
      <h1>Admin</h1>
      <div className="search-section my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar área de Interesse"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='content'>
        <div className="resume-list">
          {filteredResumes.map((resume, index) => (
            <><div key={index}
              className="resume-item my-3 p-3 border rounded"
              onClick={() => handleSelectResume(resume)}>
              <div className="resume-section mb-2">
                <strong>Nome:</strong> {resume.name}
              </div>
              <div className="resume-section mb-2">
                <strong>Email:</strong> {resume.email}
              </div>
              <div className="resume-section mb-2">
                <strong>Telefone:</strong> {resume.phone}
              </div>
              <div className="resume-section mb-2">
                <strong>Area de interesse:</strong> {resume.interest}
              </div>
            </div><button className="delete-button" onClick={() => handleDelete(resume.id)}>Delete</button></>
          ))}
        </div>
        {selectedResume && (
          <div className="selected-resume mt-3 p-3 border rounded">
            <h3>Detalhes do Currículo</h3>
            <div className="resume-section mb-2">
              <strong>Nome:</strong> {selectedResume.name}
            </div>
            <div className="resume-section mb-2">
              <strong>Email:</strong> {selectedResume.email}
            </div>
            <div className="resume-section mb-2">
              <strong>Telefone:</strong> {selectedResume.phone}
            </div>
            <div className="resume-section mb-2">
              <strong>Area de interesse:</strong> {selectedResume.interest}
            </div>
            <div className="resume-section mb-2">
              <strong>Descrição:</strong> {selectedResume.descricao}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;

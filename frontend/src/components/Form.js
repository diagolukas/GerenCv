import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Design'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/resumes', formData)
      .then(response => {
        alert('Resume submitted successfully!');
      })
      .catch(error => {
        alert('There was an error submitting your resume.');
      });
  };

  return (
    <>
    <Navbar/>
      <div className="container mt-5">
        <h2>Fale um pouco sobre você</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="interest" className="form-label">Interesse</label>
            <select className="form-control" id="interest" name="interest" onChange={handleChange} required>
              <option value="Design">Design</option>
              <option value="Programação">Programação</option>
              <option value="Administração">Administração</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='descricao' className='form-label'>
              Descrição
              <textarea className='form-control mt-2' name="descricao" id='descricao' onChange={handleChange} rows={5} cols={150} style={{resize:"none"}} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
      </form >
    </div >
  </>
  );
}

export default Form;

import React from "react";
import { Link } from 'react-router-dom';
import './ComponentsStyle/ButtonCv.css'

function FormButton() {
  return (
    <>
      <div className="mt-5 mb-5 text-center">
        <Link className="btn btn-primary btn-lg mt-4" to="/form" role="button">Envie seu currículo aqui!</Link>
      </div>
    </>
  )
}

export default FormButton;
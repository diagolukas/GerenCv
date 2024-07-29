import React from 'react';
import './ComponentsStyle/InfoSite.css'

function InfoSection() {
  return (
    <><div className='info-sobre'>
      <h1 className="display-4 mb-5 text">Gerenciador de Currículos</h1>
      <h2 className='text-site'>Nosso Site</h2>
      <p className='info-site info-p'>Nosso site de gerenciamento de currículos foi desenvolvido com o objetivo de facilitar a vida dos jovens que estão à procura de trabalho em áreas específicas. Compreendemos que o processo de enviar currículos para diversas empresas pode ser cansativo e demorado. Pensando nisso, criamos um sistema que automatiza o envio de currículos para todas as vagas disponíveis em empresas parceiras, simplificando significativamente a busca por emprego. Nosso sistema é projetado para ser intuitivo e eficiente, permitindo que os jovens candidatos se concentrem mais na preparação para suas entrevistas e no desenvolvimento de suas habilidades, enquanto nós cuidamos da distribuição de seus currículos.</p>
    </div></>
  );
}

export default InfoSection;

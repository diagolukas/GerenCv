import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './imgs/img4.jpg';
import img2 from './imgs/img3.jpg';
import img3 from './imgs/img2.jpg';
import img4 from './imgs/img5.jpeg';
import './ComponentsStyle/CardStyle.css';

function Companies() {
  const companies = [
    { id: 1, name: 'Google', img: img1, description: 'A Google é uma empresa de tecnologia globalmente reconhecida, especializada em serviços e produtos relacionados à internet, incluindo publicidade online, sistemas operacionais, dispositivos móveis e software de produtividade.' },
    { id: 2, name: 'Facebook', img: img2, description: 'O Facebook é uma das maiores plataformas de redes sociais do mundo, conectando pessoas e permitindo que compartilhem experiências, fotos, vídeos e mensagens com amigos e familiares em tempo real.' },
    { id: 3, name: 'Microsoft', img: img3, description: 'A Microsoft é uma das líderes mundiais em software, serviços e soluções tecnológicas, conhecida por seu sistema operacional Windows, a suíte de produtividade Office, e por sua plataforma de nuvem Azure.' },
    { id: 4, name: 'Amazon', img: img4, description: 'A Amazon é uma gigante global do comércio eletrônico e tecnologia, oferecendo uma vasta gama de produtos e serviços, incluindo o serviço de nuvem Amazon Web Services (AWS), dispositivos como o Kindle, e a plataforma de streaming Amazon Prime.' },
  ];

  return (
    <>
      <div className='background'>
        <div className="cont mt-5">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {companies.map(company => (
              <div key={company.id} className="col">
                <div className="card h-100">
                  <img src={company.img} className="card-img-top" alt={company.name} />
                  <div className="card-body">
                    <h5 className="card-title">{company.name}</h5>
                    <p className="card-text">{company.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='info-sobre mt-5'>
        <h2 className='text-site'>Sobre a Empresa</h2>
        <p className='info-site info-p'>Nossa empresa foi fundada com o propósito de revolucionar o processo de busca de emprego para jovens profissionais. Compreendemos as dificuldades enfrentadas pelos candidatos ao entrarem no mercado de trabalho, especialmente a tarefa árdua de enviar múltiplos currículos para diferentes empresas.</p>
      </div>
    </>
  );
}

export default Companies;

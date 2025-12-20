import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sobre.css';
import { handleAnimationAndAction } from '../utils/animation-handler';
import teamImage from '../../assets/sobre-page/sobre.webp';
import fluxogramaImage from '../../assets/sobre-page/fluxograma.webp';

// Capitania
import angel from '../../assets/sobre-page/membros/angel.webp';
import george from '../../assets/sobre-page/membros/george.webp';
import carol from '../../assets/sobre-page/membros/carol.webp';
import eliton from '../../assets/sobre-page/membros/eliton.webp';
import arthur from '../../assets/sobre-page/membros/arthur.webp';
import benny from '../../assets/sobre-page/membros/benny.webp';
import gilvan from '../../assets/sobre-page/membros/gilvan.webp';
import pedro from '../../assets/sobre-page/membros/pedro.webp';
// Membros
import amanda from '../../assets/sobre-page/membros/amanda.webp';
import bruna from '../../assets/sobre-page/membros/bruna.webp';
import danielle from '../../assets/sobre-page/membros/danielle.webp';
import fernanda from '../../assets/sobre-page/membros/fernanda.webp';
import gabriel from '../../assets/sobre-page/membros/gabriel.webp';
import isabella from '../../assets/sobre-page/membros/isabella.webp';
import jp from '../../assets/sobre-page/membros/jp.webp';
import leo from '../../assets/sobre-page/membros/leo.webp';
import leonardo from '../../assets/sobre-page/membros/leonardo.webp';
import luana from '../../assets/sobre-page/membros/luana.webp';
import lucas from '../../assets/sobre-page/membros/lucas.webp';
import soares from '../../assets/sobre-page/membros/soares.webp';
import thiago from '../../assets/sobre-page/membros/thiago.webp';
import victor from '../../assets/sobre-page/membros/victor.webp';

const teamMembers = [
  // Capitania
  { name: 'George Azevedo', role: 'Orientador/Coordenador', photo: george },
  { name: 'Angel Ayala', role: 'Coorientador', photo: angel },
  { name: 'Carolyne Almeida', role: 'Capitã', photo: carol },
  { name: 'Eliton Sena', role: 'Líder Operacional\nLíder de Sensores & Navegação', photo: eliton },
  { name: 'Ana Beatriz', role: 'Líder de Visão Computacional', photo: benny },
  { name: 'Pedro Gabriel', role: 'Líder de Controle & Simulação', photo: pedro },
  { name: 'Arthur Souza', role: 'Líder de Estruturas & Desempenho', photo: arthur },
  { name: 'Gilvan Neto', role: 'Líder de Sistemas Embarcados', photo: gilvan },

  // Membros
  { name: 'Amanda Gabriellen', role: 'Membro de Controle & Simulação', photo: amanda },
  { name: 'Arthur Gabriel', role: 'Membro de Visão Computacional', photo: gabriel },
  { name: 'Arthur Soares', role: 'Membro de Estruturas & Desempenho', photo: soares },
  { name: 'Bruna Letícia', role: 'Membro de Estruturas & Desempenho', photo: bruna },
  { name: 'Danielle Stephany', role: 'Membro de Visão Computacional', photo: danielle },
  { name: 'Fernanda Paoleschi', role: 'Membro de Visão Computacional', photo: fernanda },
  { name: 'Isabella Vitória ', role: 'Membro de Visão Computacional', photo: isabella },
  { name: 'João Pedro', role: 'Membro de Estruturas & Desempenho', photo: jp },
  { name: 'Leo Bizzocchi ', role: 'Membro de Visão Computacional', photo: leo },
  { name: 'Leonardo Henrique', role: 'Membro de Controle & Simulação', photo: leonardo },
  { name: 'Luana Almeida', role: 'Membro de Sistemas Embarcados', photo: luana },
  { name: 'Lucas Chaves', role: 'Membro de Sistemas Embarcados', photo: lucas },
  { name: 'Thiago Cavalcanti', role: 'Membro de Visão Computacional', photo: thiago },
  { name: 'Victor Pinheiro', role: 'Membro de Sistemas Embarcados', photo: victor },
];

const Sobre = () => {
  const navigate = useNavigate();

  const handleProjectsClick = (e) => {
    handleAnimationAndAction(e, () => navigate('/projetos'));
  };

  return (
    <section className="sobre-section">
      <div className="sobre-container">
        <div className="sobre-intro-grid">
          <div className="sobre-text-content">
            <h1 className="sobre-title">NOSSA HISTÓRIA</h1>
            <p className="sobre-description">
              A Delta V - Drones é um projeto de extensão universitária pela Universidade de Pernambuco. Formada por estudantes de
              graduação em Engenharia, o principal desafio é o desenvolvimento de soluções de ponta para drones autônomos, visando a
              inovação e o aprendizado prático no campo da robótica e inteligência artificial.
            </p>
            <p className="sobre-description">
              Acreditamos no poder da colaboração para transformar teoria em realidade e inspirar a próxima geração de engenheiros e cientistas. A equipe conta com pessoas apaixonadas por tecnologia e multidisciplinaridade.
            </p>
          </div>
          <div className="sobre-image-wrapper">
            <img src={teamImage} alt="Equipe DeltaV" className="sobre-image" />
          </div>
        </div>
        <div id="estrutura" className="team-structure-section">
          <h2 className="structure-title">ESTRUTURA DA EQUIPE</h2>
            <div className="flowchart-container">
              <img src={fluxogramaImage} alt="Fluxograma da equipe DeltaV" className="flowchart-image" />
            </div>
        </div>
        <div className="team-members-section">
            <h2 className="members-title">CONHEÇA NOSSOS MEMBROS</h2>
            <div className="members-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member-card">
                        {member.photo ? (
                          <img src={member.photo} alt={`Foto de ${member.name}`} className="member-photo" />
                        ) : (
                          <div className="member-photo-placeholder"></div>
                        )}
                        <h3 className="member-name">{member.name}</h3>
                        <div className="member-role">
                          {member.role.split('\n').map((line, i, arr) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Sobre;
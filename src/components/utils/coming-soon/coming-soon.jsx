// src/components/utils/coming-soon/coming-soon.jsx
import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // NOVO: Importa os ícones
import './coming-soon.css';

const secondsToDhms = (totalSeconds) => {
  if (totalSeconds <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }
  const dias = Math.floor(totalSeconds / 86400);
  const horas = Math.floor((totalSeconds % 86400) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = Math.floor(totalSeconds % 60);
  
  return { dias, horas, minutos, segundos };
};

// A senha para o acesso antecipado
const ACCESS_PASSWORD = "DVacessoDEV";

const ComingSoon = ({ initialSeconds, targetLaunchDate, onLaunch, onBypass }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [clickCount, setClickCount] = useState(0);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // NOVO: Estado para mostrar/esconder a senha

  const handleClicks = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowPasswordInput(true);
      setClickCount(0);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      onBypass();
    } else {
      alert("Senha incorreta!");
      setPassword("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  useEffect(() => {
    if (secondsLeft === null) return;

    if (secondsLeft <= 0) {
      window.location.reload();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, onLaunch]);

  let launchDateString = "Carregando...";
  if (targetLaunchDate) {
    const launchDate = new Date(targetLaunchDate);
    const options = {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
        timeZone: 'America/Sao_Paulo'
    };
    launchDateString = new Intl.DateTimeFormat('pt-BR', options).format(launchDate);
  }

  const timeLeft = secondsToDhms(secondsLeft);
  const timerComponents = Object.keys(timeLeft).map(interval => (
    <div key={interval} className="countdown-item">
      <span className="countdown-number">{String(timeLeft[interval]).padStart(2, '0')}</span>
      <span className="countdown-label">{interval.toUpperCase()}</span>
    </div>
  ));
  
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">
          <span
            onClick={handleClicks}
            // A propriedade de estilo do cursor foi removida.
          >
            ...
          </span>
        </h1>
        <div className="countdown-timer">
          {initialSeconds === null 
            ? <span>API Error</span>
            : (secondsLeft > 0 ? timerComponents : <span>atualizando...</span>)
          }
        </div>
        {showPasswordInput && (
          <form onSubmit={handlePasswordSubmit} style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'} // NOVO: Tipo de input dinâmico
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginRight: '10px',
                }}
              />
              {/* NOVO: Botão para mostrar/esconder a senha */}
              <span 
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', color: '#ffffffff' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
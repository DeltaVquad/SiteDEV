// /api/getServerTime.js

export default function handler(request, response) {
  // Adiciona o cabeçalho CORS para permitir requisições de qualquer origem
  // Durante o desenvolvimento, você pode usar "*" para permitir todas as origens.
  // Em produção, é mais seguro especificar o domínio do seu site (ex: "https://deltavquad.vercel.app").
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Lógica para responder a requisições de pré-voo do CORS
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  const serverTime = Date.now();
  const options = {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formattedTime = new Date(serverTime).toLocaleString('pt-BR', options);

  response.status(200).json({ timestamp: serverTime, formatted: formattedTime });
}
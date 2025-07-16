function configurarAssinatura(idCanvas, idBotaoLimpar) {
  const canvas = document.getElementById(idCanvas);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let desenhando = false;

  canvas.addEventListener('mousedown', () => { desenhando = true; });
  canvas.addEventListener('mouseup', () => { desenhando = false; ctx.beginPath(); });
  canvas.addEventListener('mousemove', desenhar);

  function desenhar(event) {
    if (!desenhando) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  }

  const botaoLimpar = document.getElementById(idBotaoLimpar);
  if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
}

window.addEventListener('load', () => {
  configurarAssinatura('assinatura-gestor', 'limpar-gestor');
  configurarAssinatura('assinatura-termo5', 'limpar-termo5');
  configurarAssinatura('assinatura-feedback', 'limpar-feedback');
  configurarAssinatura('assinatura-gestor9', 'limpar-gestor9');
  configurarAssinatura('assinatura-colaborador9', 'limpar-colaborador9');
  configurarAssinatura('assinatura-termo7', 'limpar-termo7');
  configurarAssinatura('assinatura-colaborador8', 'limpar-colaborador8');
  configurarAssinatura('assinatura1', 'limpar-assinatura1');
  configurarAssinatura('assinatura2', 'limpar-assinatura2');
});

function mostrarTela(id) {
  const telas = document.querySelectorAll('.tela, .subconteudo');
  telas.forEach(tela => {
    tela.classList.remove('active');
    tela.style.display = 'none';
  });

  const telaAtiva = document.getElementById(id);
  if (telaAtiva) {
    telaAtiva.classList.add('active');
    telaAtiva.style.display = 'block';
  }

  const links = document.querySelectorAll('.sidebar a');
  links.forEach(link => {
    link.classList.remove('active');
  });

  const botaoAtivo = document.querySelector(`.sidebar a[onclick*="${id}"]`);
  if (botaoAtivo) {
    botaoAtivo.classList.add('active');
  }
}

function mostrarSubAba(id) {
  const aba = document.getElementById(id);
  const botao = document.querySelector(`.abas-perfil .subaba[onclick*="${id}"]`);

  const jaAtiva = aba.classList.contains('ativo');

  document.querySelectorAll('.subconteudo').forEach(el => el.classList.remove('ativo'));
  document.querySelectorAll('.abas-perfil .subaba').forEach(el => el.classList.remove('ativa'));

  if (!jaAtiva) {
    aba.classList.add('ativo');
    botao.classList.add('ativa');
  }
}

function mostrarSubAbaPerfil(id) {
  const alvo = document.getElementById(id);
  if (!alvo) return;

  if (alvo.style.display === 'block') {
    alvo.style.display = 'none';
    return;
  }

  const caixa = alvo.closest('.caixa-perfil');
  caixa.querySelectorAll('.subconteudo-perfil')
       .forEach(el => el.style.display = 'none');

  alvo.style.display = 'block';
}

function iniciarAssinatura(canvasId, limparId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let desenhando = false;

  canvas.addEventListener('mousedown', () => {
    desenhando = true;
    ctx.beginPath();
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!desenhando) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  });

  canvas.addEventListener('mouseup', () => {
    desenhando = false;
  });

  canvas.addEventListener('mouseleave', () => {
    desenhando = false;
  });

  const botaoLimpar = document.getElementById(limparId);
  if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
}

iniciarAssinatura('assinatura-feedback', 'limpar-feedback');
iniciarAssinatura('assinatura-gestor9', 'limpar-gestor9');
iniciarAssinatura('assinatura-colaborador9', 'limpar-colaborador9');
iniciarAssinatura('assinatura-fun2', 'limpar-fun2');
iniciarAssinatura('assinatura-fun2.1', 'limpar-fun2.1');
iniciarAssinatura('assinatura-fun2.2', 'limpar-fun2.2');
iniciarAssinatura('assinatura-funmes1', 'limpar-funmes1');
iniciarAssinatura('assinatura-assinaturasup1', 'limpar-assinaturasup1');
iniciarAssinatura('assinatura-funmes2', 'limpar-funmes2');
iniciarAssinatura('assinatura-assinaturasup2', 'limpar-assinaturasup2');
iniciarAssinatura('assinatura-funmes3', 'limpar-funmes3');
iniciarAssinatura('assinatura-assinaturasup3', 'limpar-assinaturasup3');
iniciarAssinatura('assinatura-funmes4', 'limpar-funmes4');
iniciarAssinatura('assinatura-assinaturasup4', 'limpar-assinaturasup4');
iniciarAssinatura('assinatura-funmes5', 'limpar-funmes5');
iniciarAssinatura('assinatura-assinaturasup5', 'limpar-assinaturasup5');
iniciarAssinatura('assinatura-funmes6', 'limpar-funmes6');
iniciarAssinatura('assinatura-assinaturasup6', 'limpar-assinaturasup6');

iniciarAssinatura('assinatura1', 'limpar-assinatura1');
iniciarAssinatura('assinatura2', 'limpar-assinatura2');
iniciarAssinatura('assinatura3', 'limpar-assinatura3');
iniciarAssinatura('assinatura4', 'limpar-assinatura4');
iniciarAssinatura('assinatura5', 'limpar-assinatura5');
iniciarAssinatura('assinatura6', 'limpar-assinatura6');
iniciarAssinatura('assinatura7', 'limpar-assinatura7');
iniciarAssinatura('assinatura8', 'limpar-assinatura8');
iniciarAssinatura('assinatura9', 'limpar-assinatura9');
iniciarAssinatura('assinatura10', 'limpar-assinatura10');
iniciarAssinatura('assinatura11', 'limpar-assinatura11');
iniciarAssinatura('assinatura12', 'limpar-assinatura12');
iniciarAssinatura('assinatura13', 'limpar-assinatura13');
iniciarAssinatura('assinatura14', 'limpar-assinatura14');
iniciarAssinatura('assinatura15', 'limpar-assinatura15');
iniciarAssinatura('assinatura16', 'limpar-assinatura16');
iniciarAssinatura('assinatura17', 'limpar-assinatura17');
iniciarAssinatura('assinatura18', 'limpar-assinatura18');
iniciarAssinatura('assinatura19', 'limpar-assinatura19');
iniciarAssinatura('assinatura20', 'limpar-assinatura20');
iniciarAssinatura('assinatura21', 'limpar-assinatura21');
iniciarAssinatura('assinatura22', 'limpar-assinatura22');
iniciarAssinatura('assinatura23', 'limpar-assinatura23');
iniciarAssinatura('assinatura24', 'limpar-assinatura24');
iniciarAssinatura('assinatura25', 'limpar-assinatura25');
iniciarAssinatura('assinatura26', 'limpar-assinatura26');
iniciarAssinatura('assinatura27', 'limpar-assinatura27');
iniciarAssinatura('assinatura28', 'limpar-assinatura28');
iniciarAssinatura('assinatura29', 'limpar-assinatura29');
iniciarAssinatura('assinatura30', 'limpar-assinatura30');
iniciarAssinatura('assinatura31', 'limpar-assinatura31');
iniciarAssinatura('assinatura32', 'limpar-assinatura32');
iniciarAssinatura('assinatura33', 'limpar-assinatura33');
iniciarAssinatura('assinatura34', 'limpar-assinatura34');
iniciarAssinatura('assinatura35', 'limpar-assinatura35');
iniciarAssinatura('assinatura36', 'limpar-assinatura36');
iniciarAssinatura('assinatura37', 'limpar-assinatura37');
iniciarAssinatura('assinatura38', 'limpar-assinatura38');
iniciarAssinatura('assinatura39', 'limpar-assinatura39');
iniciarAssinatura('assinatura40', 'limpar-assinatura40');
iniciarAssinatura('assinatura41', 'limpar-assinatura41');
iniciarAssinatura('assinatura42', 'limpar-assinatura42');
iniciarAssinatura('assinatura43', 'limpar-assinatura43');
iniciarAssinatura('assinatura44', 'limpar-assinatura44');
iniciarAssinatura('assinatura45', 'limpar-assinatura45');
iniciarAssinatura('assinatura46', 'limpar-assinatura46');
iniciarAssinatura('assinatura47', 'limpar-assinatura47');
iniciarAssinatura('assinatura48', 'limpar-assinatura48');
iniciarAssinatura('assinatura49', 'limpar-assinatura49');
iniciarAssinatura('assinatura50', 'limpar-assinatura50');
iniciarAssinatura('assinatura51', 'limpar-assinatura51');
iniciarAssinatura('assinatura52', 'limpar-assinatura52');
iniciarAssinatura('assinatura53', 'limpar-assinatura53');
iniciarAssinatura('assinatura54', 'limpar-assinatura54');
iniciarAssinatura('assinatura55', 'limpar-assinatura55');
iniciarAssinatura('assinatura56', 'limpar-assinatura56');
iniciarAssinatura('assinatura57', 'limpar-assinatura57');
iniciarAssinatura('assinatura58', 'limpar-assinatura58');
iniciarAssinatura('assinatura59', 'limpar-assinatura59');
iniciarAssinatura('assinatura60', 'limpar-assinatura60');
iniciarAssinatura('assinatura61', 'limpar-assinatura61');
iniciarAssinatura('assinatura62', 'limpar-assinatura62');
iniciarAssinatura('assinatura63', 'limpar-assinatura63');
iniciarAssinatura('assinatura64', 'limpar-assinatura64');
iniciarAssinatura('assinatura65', 'limpar-assinatura65');
iniciarAssinatura('assinatura66', 'limpar-assinatura66');
iniciarAssinatura('assinatura67', 'limpar-assinatura67');
iniciarAssinatura('assinatura68', 'limpar-assinatura68');
iniciarAssinatura('assinatura69', 'limpar-assinatura69');





document.querySelectorAll(".assinatura-canvas").forEach((canvas, index) => {
  const ctx = canvas.getContext("2d");
  let desenhando = false;

  canvas.addEventListener("mousedown", () => {
    desenhando = true;
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!desenhando) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  });

  canvas.addEventListener("mouseup", () => {
    desenhando = false;
  });

  canvas.addEventListener("mouseleave", () => {
    desenhando = false;
  });

  const btn = canvas.nextElementSibling;
  if (btn && btn.classList.contains("limpar-assinatura")) {
    btn.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
});

function toggleFormulario(formId) {
  const conteudo = document.getElementById(formId);
  const todosConteudos = document.querySelectorAll('.conteudo-formulario');
  
  todosConteudos.forEach(item => {
    if (item.id !== formId) {
      item.style.display = 'none';
    }
  });
  
  if (conteudo) {
    conteudo.style.display = conteudo.style.display === 'none' ? 'block' : 'none';
  }
}

function abrirModal(conteudoHTML) {
  const modal = document.getElementById('modalTreino');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = conteudoHTML;
  inicializarEstrelas();
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Impede rolagem do body

  // Fecha modal ao clicar fora
  modal.onclick = function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  };

  // adiciona evento de troca de semana e criação do gráfico
  setTimeout(() => {
    modalBody.querySelectorAll('.estrela-input').forEach(input => {
  input.addEventListener('input', () => {
    verificarNotasEExibirGraficoFinal();
  });
});

    modalBody.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-semana')) return;

      const destino = e.target.dataset.target;

      modalBody.querySelectorAll('.btn-semana').forEach(btn =>
        btn.classList.toggle('ativa', btn === e.target)
      );

      modalBody.querySelectorAll('.semana-conteudo').forEach(sec =>
        sec.style.display = (sec.id === destino) ? 'block' : 'none'
      );

      if (destino === 'sem1') {
        const canvas = document.getElementById('graficosem1');
        if (!canvas || canvas.dataset.graficoCriado) return;

        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [{
              label: 'Desempenho',
              data: [12, 19, 3, 5, 2],
              backgroundColor: 'rgba(54,162,235,0.5)',
              borderColor:   'rgba(54,162,235,1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: { beginAtZero: true }
            }
          }
        });

        canvas.dataset.graficoCriado = true;
      }
    });

    // força o clique do botão da 1ª semana
    const btnSemana1 = modalBody.querySelector('.btn-semana[data-target="sem1"]');
    if (btnSemana1) btnSemana1.click();
  }, 50);


function inicializarEstrelas() {
  const todos = document.querySelectorAll(".estrelas");

  todos.forEach(container => {
    container.innerHTML = "";

    // Criando 5 estrelas
    for (let i = 1; i <= 5; i++) {
      const estrela = document.createElement("span");
      estrela.innerHTML = "★";
      estrela.dataset.valor = i; // Valor inteiro de 1 a 5
      container.appendChild(estrela);
    }

    container.querySelectorAll("span").forEach(estrela => {
      estrela.addEventListener("click", () => {
        const nota = parseInt(estrela.dataset.valor);
        container.dataset.valor = nota;

        container.querySelectorAll("span").forEach(s => {
          const valor = parseInt(s.dataset.valor);
          s.classList.toggle("selecionada", valor <= nota);
        });

        verificarEstrelasEExibirGrafico();
      });
    });
  });
}
}

function fecharModal() {
  const modal = document.getElementById('modalTreino');
  if (!modal) return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restaura rolagem do body
}

function abrirModalSuporte() {
  document.getElementById('modalSuporte').style.display = 'block';
}

function fecharModalSuporte() {
  document.getElementById('modalSuporte').style.display = 'none';
}

function submeterSuporte() {
  const funcionario = document.getElementById('funcionario').value;
  const matricula = document.getElementById('matricula').value;
  const email = document.getElementById('email').value;
  const reclamacao = document.getElementById('reclamacao').value;

  if (!funcionario || !matricula || !email || !reclamacao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const templateParams = {
    funcionario,
    matricula,
    email,
    reclamacao
  };

  emailjs.send('yucamipa_ferramenta', 'template_zs1he5n', templateParams)
    .then(function(response) {
      alert('Email enviado com sucesso!');
      // Limpa os campos e fecha o modal
      document.getElementById('funcionario').value = '';
      document.getElementById('matricula').value = '';
      document.getElementById('email').value = '';
      document.getElementById('reclamacao').value = '';
      fecharModalSuporte();
    }, function(error) {
      alert('Erro ao enviar o email: ' + JSON.stringify(error));
    });
}

function togglePerfilDropdown() {
  const dropdown = document.getElementById('perfilDropdown');
  dropdown.classList.toggle('show');

  // Fecha o dropdown quando clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.botao') && !event.target.matches('.perfil')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

function sair() {
  // Aqui você pode adicionar a lógica de logout
  alert('Logout realizado com sucesso!');
  window.location.href = 'index.html';
}

function baixarPDF(formId, nomeArquivo) {
  const form = document.getElementById(formId);
  if (!form) {
    alert('Formulário não encontrado!');
    return;
  }

  const opt = {
    margin: 1,
    filename: nomeArquivo,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(form).save();
}

function verificarEstrelasEExibirGrafico() {
  const modal = document.getElementById("modalTreino");
  const blocos = modal.querySelectorAll(".estrelas");

  let desempenho = [], desenvolvimento = [];

  for (let bloco of blocos) {
    const tipo = bloco.dataset.tipo;
    const nota = parseFloat(bloco.dataset.valor || 0);
    if (!nota) return; // ainda tem estrela não preenchida

    if (tipo === "desempenho") desempenho.push(nota);
    if (tipo === "desenvolvimento") desenvolvimento.push(nota);
  }

  const calcularMedia = arr => {
    // Verifica se todas as notas são 5.0
    const todasMaximas = arr.length > 0 && arr.every(nota => nota === 5);
    if (todasMaximas) return 5.0;
    
    // Caso contrário, calcula a média normal
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };

  const mediaDesempenho = calcularMedia(desempenho);
  const mediaDesenvolvimento = calcularMedia(desenvolvimento);

  desenharGraficoFinalSemana1(
    parseFloat(mediaDesempenho.toFixed(2)),
    parseFloat(mediaDesenvolvimento.toFixed(2))
  );
}




let graficoFinalInstancia1 = null;

function desenharGraficoFinalSemana1(mediaDesempenho, mediaDesenvolvimento) {
  const canvas = document.getElementById('graficoFinalSemana1');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (graficoFinalInstancia) {
    graficoFinalInstancia.data.datasets[0].data = [mediaDesempenho, mediaDesenvolvimento];
    graficoFinalInstancia.update();
    return;
  }

  graficoFinalInstancia = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Desempenho', 'Desenvolvimento'],
      datasets: [{
        label: 'Média Final',
        data: [mediaDesempenho, mediaDesenvolvimento],
        backgroundColor: ['#3498db', '#e67e22']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 5
        }
      }
    }
  });
}


// Funções para salvar formulários
function salvarChecklistIntegracao(funcionarioId) {
    const checklist = document.querySelector(`#conteudo-${funcionarioId}-treinamentos details:nth-child(1)`);
    const dados = {
        funcionarioId: funcionarioId,
        tipo: 'checklist_integracao',
        itens: []
    };

    checklist.querySelectorAll('tbody').forEach((item, index) => {
        dados.itens.push({
            atividade: index + 1,
            realizado: item.querySelector('.realizado').value,
            data: item.querySelector('.data').value,
            observacoes: item.querySelector('.observacoes').value
        });
    });

    // Aqui você implementará a chamada para seu backend
    console.log('Salvando checklist:', dados);
    alert('Checklist salvo com sucesso!');
}

function salvarAcompanhamentoDiario(funcionarioId) {
    const acompanhamento = document.querySelector(`#conteudo-${funcionarioId}-treinamentos details:nth-child(2)`);
    const dados = {
        funcionarioId: funcionarioId,
        tipo: 'acompanhamento_diario',
        semana: acompanhamento.querySelector('#dia-semana').value,
        colaborador: acompanhamento.querySelector('#colaborador-name').value,
        responsavel: acompanhamento.querySelector('#responsavel-acomp').value,
        avaliacoes: []
    };

    acompanhamento.querySelectorAll('tbody tr').forEach(tr => {
        dados.avaliacoes.push({
            data: tr.querySelector('input[type="date"]').value,
            aspecto: tr.querySelector('td:nth-child(2)').textContent,
            comentarios: tr.querySelector('textarea').value
        });
    });

    console.log('Salvando acompanhamento:', dados);
    alert('Acompanhamento diário salvo com sucesso!');
}

function salvarFeedback(funcionarioId) {
    const feedback = document.querySelector(`#conteudo-${funcionarioId}-treinamentos details:nth-child(3)`);
    const dados = {
        funcionarioId: funcionarioId,
        tipo: 'feedback',
        nome: feedback.querySelector('#nome-feedback').value,
        cargo: feedback.querySelector('#cargo-feedback').value,
        data: feedback.querySelector('#data-feedback').value,
        clareza: feedback.querySelector('input[name^="excelente"]:checked')?.value,
        suporteAdequado: feedback.querySelector('input[name^="sim-feedback"]:checked')?.value,
        sugestoes: feedback.querySelector('textarea[name="sugestao-feedback"]').value,
        assinatura: feedback.querySelector('#assinatura-feedback').toDataURL()
    };

    console.log('Salvando feedback:', dados);
    alert('Feedback salvo com sucesso!');
}

function salvarPDI(funcionarioId) {
    const pdi = document.querySelector(`#conteudo-${funcionarioId}-treinamentos details:nth-child(4)`);
    const dados = {
        funcionarioId: funcionarioId,
        tipo: 'pdi',
        colaborador: pdi.querySelector('#colaborador-9').value,
        dataInicio: pdi.querySelector('#data-inicio9').value,
        cargo: pdi.querySelector('#cargo-9').value,
        responsavel: pdi.querySelector('#responsavel-aval').value,
        competencia: pdi.querySelector('#competencia-a-des').value,
        acaoPlanejada: pdi.querySelector('#acao-planejada').value,
        prazo: pdi.querySelector('#data-prazo').value,
        responsavelAcao: pdi.querySelector('#responsavel-9').value,
        dataRevisao: pdi.querySelector('#data-revisao9').value,
        assinaturaGestor: pdi.querySelector('#assinatura-gestor9').toDataURL(),
        assinaturaColaborador: pdi.querySelector('#assinatura-colaborador9').toDataURL()
    };

    console.log('Salvando PDI:', dados);
    alert('PDI salvo com sucesso!');
}

function salvarTermos(funcionarioId) {
    const termos = document.querySelector(`#conteudo-${funcionarioId}-termos`);
    const dados = {
        funcionarioId: funcionarioId,
        tipo: 'termos',
        termoBPF: {
            treinamentos: Array.from(termos.querySelectorAll('ul input[type="checkbox"]')).map(cb => ({
                nome: cb.parentElement.textContent.trim(),
                realizado: cb.checked
            })),
            data: termos.querySelector('input[type="date"]').value,
            instrutor: termos.querySelector('input[type="text"]').value,
            assinatura: termos.querySelector('.assinatura-canvas').toDataURL()
        }
    };

    console.log('Salvando termos:', dados);
    alert('Termos salvos com sucesso!');
}

function salvarFormularioSeguranca() {
    const form = document.querySelector('details:contains("Segurança e EPIs")');
    const dados = {
        tipo: 'seguranca_epis',
        funcionario: form.querySelector('#nomefuncionario').value,
        matricula: form.querySelector('#matricula').value,
        setor: form.querySelector('#setorfun').value,
        data: form.querySelector('#datafun1mes').value,
        tutor: form.querySelector('#tutorsupervisor').value,
        itens: Array.from(form.querySelectorAll('tbody')).map(item => ({
            item: item.querySelector('h4')?.textContent || item.querySelector('td')?.textContent,
            resultado: item.querySelector('input[type="radio"]:checked')?.value,
            observacoes: item.querySelector('#observacoes')?.value
        })),
        assinaturas: {
            funcionario: form.querySelector('.assinatura-funmes1')?.toDataURL(),
            supervisor: form.querySelector('.assinatura-sup1')?.toDataURL()
        }
    };

    console.log('Salvando formulário de segurança:', dados);
    alert('Formulário de segurança salvo com sucesso!');
}

function salvarFormularioBPF() {
    const form = document.querySelector('details:contains("Boas práticas de Fabricação(BPF)")');
    const dados = {
        tipo: 'bpf',
        funcionario: form.querySelector('#nomefuncionario').value,
        matricula: form.querySelector('#matricula').value,
        setor: form.querySelector('#setorfun').value,
        data: form.querySelector('#datafun1mes').value,
        tutor: form.querySelector('#tutorsupervisor').value,
        itens: Array.from(form.querySelectorAll('tbody')).map(item => ({
            item: item.querySelector('td')?.textContent,
            resultado: item.querySelector('input[type="radio"]:checked')?.value,
            observacoes: item.querySelector('#observacoes')?.value
        })),
        assinaturas: {
            funcionario: form.querySelector('.assinatura-funmes2')?.toDataURL(),
            supervisor: form.querySelector('.assinatura-sup2')?.toDataURL()
        }
    };

    console.log('Salvando formulário BPF:', dados);
    alert('Formulário BPF salvo com sucesso!');
}

function salvarFormularioOperacao() {
    const form = document.querySelector('details:contains("Operação Técnica de Máquinas")');
    const dados = {
        tipo: 'operacao_tecnica',
        funcionario: form.querySelector('#nomefuncionario').value,
        matricula: form.querySelector('#matricula').value,
        setor: form.querySelector('#setorfun').value,
        data: form.querySelector('#datafun1mes').value,
        tutor: form.querySelector('#tutorsupervisor').value,
        itens: Array.from(form.querySelectorAll('tr')).slice(1).map(item => ({
            atividade: item.querySelector('td')?.textContent,
            resultado: item.querySelector('input[type="radio"]:checked')?.value,
            observacoes: item.querySelector('#observacoes')?.value
        })),
        assinaturas: {
            funcionario: form.querySelector('.assinatura-funmes3')?.toDataURL(),
            supervisor: form.querySelector('.assinatura-sup3')?.toDataURL()
        }
    };

    console.log('Salvando formulário de operação:', dados);
    alert('Formulário de operação salvo com sucesso!');
}

function salvarFormularioLimpeza() {
    const form = document.querySelector('details:contains("Limpeza e Manutenção Autônoma")');
    const dados = {
        tipo: 'limpeza_manutencao',
        funcionario: form.querySelector('#nomefuncionario').value,
        matricula: form.querySelector('#matricula').value,
        setor: form.querySelector('#setorfun').value,
        data: form.querySelector('#datafun1mes').value,
        tutor: form.querySelector('#tutorsupervisor').value,
        itens: Array.from(form.querySelectorAll('tr')).slice(1).map(item => ({
            criterio: item.querySelector('td')?.textContent,
            resultado: item.querySelector('input[type="radio"]:checked')?.value,
            observacoes: item.querySelector('#observacoes')?.value
        })),
        assinaturas: {
            funcionario: form.querySelector('.assinatura-funmes4')?.toDataURL(),
            supervisor: form.querySelector('.assinatura-sup4')?.toDataURL()
        }
    };

    console.log('Salvando formulário de limpeza:', dados);
    alert('Formulário de limpeza salvo com sucesso!');
}

function salvarFormularioOperacaoCompleta() {
    const form = document.querySelector('details:contains("Operação Completa com Acompanhamento")');
    const dados = {
        tipo: 'operacao_completa',
        funcionario: form.querySelector('#nomefuncionario').value,
        matricula: form.querySelector('#matricula').value,
        setor: form.querySelector('#setorfun').value,
        data: form.querySelector('#datafun1mes').value,
        tutor: form.querySelector('#tutorsupervisor').value,
        itens: Array.from(form.querySelectorAll('tr')).slice(1).map(item => ({
            tarefa: item.querySelector('td')?.textContent,
            resultado: item.querySelector('input[type="radio"]:checked')?.value,
            observacoes: item.querySelector('#observacoes')?.value
        })),
        assinaturas: {
            funcionario: form.querySelector('.assinatura-funmes7')?.toDataURL(),
            supervisor: form.querySelector('.assinatura-sup7')?.toDataURL()
        }
    };

    console.log('Salvando formulário de operação completa:', dados);
    alert('Formulário de operação completa salvo com sucesso!');
}



function fecharModal() {
  const modal = document.getElementById('modalTreino');
  if (!modal) return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restaura rolagem do body
}

function abrirModalSuporte() {
  document.getElementById('modalSuporte').style.display = 'block';
}

function fecharModalSuporte() {
  document.getElementById('modalSuporte').style.display = 'none';
}

function submeterSuporte() {
  const funcionario = document.getElementById('funcionario').value;
  const matricula = document.getElementById('matricula').value;
  const email = document.getElementById('email').value;
  const reclamacao = document.getElementById('reclamacao').value;

  if (!funcionario || !matricula || !email || !reclamacao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  alert('Sua reclamação foi enviada com sucesso!');
  
  // Limpa os campos e fecha o modal
  document.getElementById('funcionario').value = '';
  document.getElementById('matricula').value = '';
  document.getElementById('email').value = '';
  document.getElementById('reclamacao').value = '';
  fecharModalSuporte();
}

function togglePerfilDropdown() {
  const dropdown = document.getElementById('perfilDropdown');
  dropdown.classList.toggle('show');

  // Fecha o dropdown quando clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.botao') && !event.target.matches('.perfil')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

function sair() {
  // Aqui você pode adicionar a lógica de logout
  alert('Logout realizado com sucesso!');
  window.location.href = 'index.html';
}

function verificarEstrelasEExibirGrafico() {
  const modal = document.getElementById("modalTreino");
  const blocos = modal.querySelectorAll(".estrelas");

  let desempenho = [], desenvolvimento = [];

  for (let bloco of blocos) {
    const tipo = bloco.dataset.tipo;
    const nota = parseFloat(bloco.dataset.valor || 0);
    if (!nota) return; // ainda tem estrela não preenchida

    if (tipo === "desempenho") desempenho.push(nota);
    if (tipo === "desenvolvimento") desenvolvimento.push(nota);
  }

  const calcularMedia = arr => {
    // Verifica se todas as notas são 5.0
    const todasMaximas = arr.length > 0 && arr.every(nota => nota === 5);
    if (todasMaximas) return 5.0;
    
    // Caso contrário, calcula a média normal
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };

  const mediaDesempenho = calcularMedia(desempenho);
  const mediaDesenvolvimento = calcularMedia(desenvolvimento);

  desenharGraficoFinalSemana1(
    parseFloat(mediaDesempenho.toFixed(2)),
    parseFloat(mediaDesenvolvimento.toFixed(2))
  );
}




let graficoFinalInstancia = null;

function desenharGraficoFinalSemana1(mediaDesempenho, mediaDesenvolvimento) {
  const canvas = document.getElementById('graficoFinalSemana1');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (graficoFinalInstancia) {
    graficoFinalInstancia.data.datasets[0].data = [mediaDesempenho, mediaDesenvolvimento];
    graficoFinalInstancia.update();
    return;
  }

  graficoFinalInstancia = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Desempenho', 'Desenvolvimento'],
      datasets: [{
        label: 'Média Final',
        data: [mediaDesempenho, mediaDesenvolvimento],
        backgroundColor: ['#3498db', '#e67e22']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 5
        }
      }
    }
  });
}



let funcionarioAtual = "Funcionário 1"; // Variável global para armazenar o funcionário atualmente selecionado

function trocarFuncionario() {
  const selecao = document.getElementById("selecaoFuncionario").value;

  // Esconde os dois conteúdos
  document.getElementById("conteudo-func1").style.display = "none";
  document.getElementById("conteudo-func2").style.display = "none";

  // Mostra apenas o conteúdo do funcionário selecionado
  if (selecao === "func1") {
    document.getElementById("conteudo-func1").style.display = "block";
  } else if (selecao === "func2") {
    document.getElementById("conteudo-func2").style.display = "block";
  }
}


function abrirUpload(titulo) {
  alert(`Você selecionou enviar: ${titulo} para ${funcionarioAtual}`);
  // Pode abrir modal com input file ou salvar no localStorage
}

function abrirFormulario(formId) {
  document.querySelectorAll('.formulario-preenchivel').forEach(f => f.style.display = 'none');
  const form = document.getElementById(formId);
  if (form) form.style.display = 'block';
}

function abrirUpload(titulo, idVisualizacao) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*,application/pdf";

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      const area = document.getElementById(idVisualizacao);
      if (!area) return;

      if (file.type.startsWith("image/")) {
        area.innerHTML = `<p><strong>${titulo}</strong></p><img src="${e.target.result}" alt="${titulo}" style="max-width: 100%; margin-top: 10px; border: 1px solid #ccc;">`;
      } else if (file.type === "application/pdf") {
        area.innerHTML = `<p><strong>${titulo}</strong></p><embed src="${e.target.result}" type="application/pdf" width="100%" height="400px" style="margin-top: 10px;">`;
      } else {
        area.innerHTML = `<p>📎 ${file.name} (formato não suportado para visualização)</p>`;
      }
    };

    reader.readAsDataURL(file);
  };

  input.click();
}






function abrirModalAdicionarFuncionario() {
  document.getElementById("cadastro-nomefuncionario").value = '';
  document.getElementById("cadastro-matricula").value = '';
  document.getElementById("cadastro-cargo").value = '';
  document.getElementById("modalFuncionario").style.display = "block";
}

function fecharModalFuncionario() {
  document.getElementById("modalFuncionario").style.display = "none";
}

function cadastrarFuncionario() {
  const nome = document.getElementById("cadastro-nomefuncionario").value;
  const matricula = document.getElementById("cadastro-matricula").value;
  const cargo = document.getElementById("cadastro-cargo").value;

  if (!nome || !matricula || !cargo) {
    alert("Preencha todos os campos!");
    return;
  }

  const templateParams = {
    nome,
    matricula,
    cargo
  };

  emailjs.send("yucamipa_ferramenta", "template_zs1he5n", templateParams)
    .then(() => {
      alert(`Funcionário ${nome} cadastrado com sucesso!`);
      fecharModalFuncionario();
    })
    .catch((error) => {
      console.error("Erro ao enviar email:", error);
      alert("Erro ao enviar o e-mail. Verifique o console.");
    });
}

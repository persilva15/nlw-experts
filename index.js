const perguntas = [
    {
      pergunta: "Qual foi o clube brasileiro que venceu a Copa Libertadores da América em 1992?",
      respostas: [
        "Grêmio",
        "São Paulo",
        "Vasco da Gama",
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador brasileiro foi artilheiro da Copa do Mundo FIFA de 1994?",
      respostas: [
        "Bebeto",
        "Romário",
        "Ronaldo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual clube venceu o Campeonato Brasileiro de 1998 de forma invicta?",
      respostas: [
        "Palmeiras",
        "Corinthians",
        "Santos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador brasileiro foi eleito o melhor do mundo pela FIFA em 1994?",
      respostas: [
        "Romário",
        "Ronaldo",
        "Bebeto",
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano o Brasil conquistou a Copa do Mundo FIFA pela quarta vez?",
      respostas: [
        "1994",
        "1998",
        "1990",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o primeiro clube brasileiro a conquistar a Copa do Brasil?",
      respostas: [
        "Grêmio",
        "Cruzeiro",
        "Flamengo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador brasileiro ficou conhecido como 'Rei do Drible' nos anos 90?",
      respostas: [
        "Romário",
        "Rivaldo",
        "Ronaldinho Gaúcho",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi o único clube brasileiro a vencer a Supercopa Libertadores em 1993?",
      respostas: [
        "Cruzeiro",
        "São Paulo",
        "Grêmio",
      ],
      correta: 1
    },
    {
      pergunta: "Em que ano o São Paulo conquistou seu primeiro título da Copa Libertadores?",
      respostas: [
        "1992",
        "1993",
        "1994",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o único clube brasileiro a vencer a Copa Conmebol em 1994?",
      respostas: [
        "Grêmio",
        "São Paulo",
        "Internacional",
      ],
      correta: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true ou false
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  
  
const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log.console()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento por sua classe.",
        "Seleciona um elemento por seu ID.",
        "Seleciona um elemento por sua tag.",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comentaria uma linha de código em JavaScript?",
      respostas: [
        "// Isso é um comentário",
        "'Isso é um comentário",
        "<!--Isso é um comentário-->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "func",
        "method",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array.",
        "Adiciona um elemento ao final do array.",
        "Ordena os elementos do array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Operador de negação lógica",
        "Operador de adição",
        "Operador lógico 'E'",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Retorna o caractere em uma posição específica em uma string.",
        "Substitui um caractere em uma string.",
        "Remove um caractere de uma string.",
      ],
      correta: 0
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
  
  
  
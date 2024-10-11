class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque = "";

      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque desconhecido";
      }

      return `O ${this.tipo} atacou usando ${ataque}`;
    }

    obterGif() {
      switch (this.tipo) {
        case "mago":
          return "https://browiki.org/images/4/42/Bolas_de_Fogo.gif"; // GIF do mago
        case "guerreiro":
          return "https://giffun.ru/wp-content/uploads/2023/09/1561656509_ImpracticalDistortedFeline-max-1mb.gif"; // GIF do guerreiro
        case "monge":
          return "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/7f8368872023b723cb29d5c088e3034de14ec42f-727x516.gif"; // GIF do monge
        case "ninja":
          return "https://media.tenor.com/bHjy6ZZZZaEAAAAM/sasuke-shurikens.gif"; // GIF do ninja
        default:
          return ""; // Nenhum GIF para tipo desconhecido
      }
    }
  }

  document.getElementById("botao").addEventListener("click", criarHeroi);

  function criarHeroi() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipo = document.getElementById("tipo").value;

    if (!nome || !idade || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const heroi = new Heroi(nome, idade, tipo);
    const resultado = heroi.atacar();
    const gifUrl = heroi.obterGif();

    document.getElementById("resultado").textContent = resultado;

    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = ""; 
    const img = document.createElement("img");
    img.src = gifUrl;
    gifContainer.appendChild(img);
  }
# Tec.Robotica
DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mitos e Verdades sobre o Daltonismo</title>
  
  <style>
    /* Importação da fonte Inter */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

    /* Variáveis de cores no tema Rosa */
    :root {
      --rosa-principal: #ec4899;
      --rosa-escuro: #be185d;
      --rosa-suave: #fce7f3;
      --fundo-dark: #180914;
      --cartao-fundo: #2a1224;
      --texto-claro: #fdf2f8;
      --texto-rosa: #f472b6;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--fundo-dark);
      color: var(--texto-claro);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Cabeçalho */
    .cabecalho {
      background: linear-gradient(135deg, #831843 0%, #500724 100%);
      padding: 1.5rem 2rem;
      border-b: 2px solid var(--rosa-principal);
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 20px rgba(236, 72, 153, 0.2);
    }

    .cabecalho h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #fff;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    .cabecalho-link {
      color: var(--rosa-suave);
      text-decoration: none;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border: 1px solid var(--rosa-principal);
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .cabecalho-link:hover {
      background-color: var(--rosa-principal);
      color: #fff;
    }

    /* Conteúdo Principal */
    main {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1.5rem;
      width: 100%;
      flex: 1;
    }

    main h2 {
      text-align: center;
      font-size: 1.8rem;
      color: var(--texto-rosa);
      margin-bottom: 2rem;
      font-weight: 700;
    }

    /* Grid de Cartões */
    section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    /* Efeito Flip 3D dos Cartões */
    .cartao {
      perspective: 1000px;
      height: 380px;
      cursor: pointer;
    }

    .cartao-interno {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
      border-radius: 20px;
      box-shadow: 0 8px 25px rgba(236, 72, 153, 0.15);
    }

    .cartao.virado .cartao-interno {
      transform: rotateY(180deg);
    }

    .cartao-frente, .cartao-verso {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 20px;
      border: 2px solid #831843;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-color: var(--cartao-fundo);
    }

    .cartao-verso {
      transform: rotateY(180deg);
      border-color: var(--rosa-principal);
      background: linear-gradient(160deg, #4c0519 0%, #2a1224 100%);
    }

    /* Imagens dos Cartões com fallback de imagem em tom rosa */
    .cartao-imagem {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 12px;
      border: 1px solid #831843;
      margin-bottom: 0.8rem;
      background-color: #500724;
    }

    .cartao p {
      font-size: 1rem;
      line-height: 1.4;
      font-weight: 600;
      color: var(--texto-claro);
    }

    .tag-resultado {
      display: inline-block;
      padding: 0.3rem 0.8rem;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .tag-mito {
      background-color: #9f1239;
      color: #fecdd3;
      border: 1px solid #f43f5e;
    }

    .tag-verdade {
      background-color: #831843;
      color: #fbcfe8;
      border: 1px solid #ec4899;
    }

    .dica-clique {
      font-size: 0.75rem;
      color: var(--texto-rosa);
      margin-top: 0.5rem;
      opacity: 0.8;
    }

    /* Rodapé em tom Rosa */
    footer {
      background-color: #3b0764;
      background: linear-gradient(135deg, #500724 0%, #180914 100%);
      border-t: 1px solid #831843;
      padding: 2rem 1.5rem;
      text-align: center;
      margin-top: 3rem;
    }

    footer h1 {
      font-size: 1.2rem;
      color: var(--rosa-principal);
      text-transform: capitalize;
      margin-bottom: 0.5rem;
    }

    footer p {
      font-size: 0.85rem;
      color: #fbcfe8;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <header class="cabecalho">
    <h1>Mitos e Verdades sobre o Daltonismo</h1> 
    <nav> 
      <a href="#" class="cabecalho-link">Início</a> 
    </nav> 
  </header> 

  <main> 
    <h2>Entenda a percepção visual de cores em tons de rosa.</h2> 

    <section> 

      <!-- CARTÃO 1 -->
      <article class="cartao" onclick="virarCartao(this)">
        <div class="cartao-interno"> 
          <div class="cartao-frente"> 
            <!-- ANEXE SUA IMAGEM AQUI (substitua o src por img/sua-imagem.jpg) -->
            <img src="img/1.jpg" alt="Visão em preto e branco" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/500724/f472b6?text=Imagem+1+(Frente)'" /> 
            <p>Daltônicos enxergam o mundo apenas em preto e branco.</p> 
            <span class="dica-clique">👆 Clique para virar</span>
          </div> 
          <div class="cartao-verso"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/1.0.jpeg" alt="Mito" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/831843/ffffff?text=MITO!'" /> 
            <div>
              <span class="tag-resultado tag-mito">❌ MITO!</span>
              <p>A maioria dos daltônicos enxerga cores, mas tem dificuldade de diferenciar certos tons (como verde e vermelho). A visão totalmente em preto e branco (acromatopsia) é raríssima.</p> 
            </div>
          </div> 
        </div> 
      </article> 

      <!-- CARTÃO 2 -->
      <article class="cartao" onclick="virarCartao(this)">
        <div class="cartao-interno"> 
          <div class="cartao-frente"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/2.jpg" alt="Genética masculina e feminina" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/500724/f472b6?text=Imagem+2+(Frente)'" /> 
            <p>O daltonismo afeta muito mais os homens do que as mulheres.</p> 
            <span class="dica-clique">👆 Clique para virar</span>
          </div> 
          <div class="cartao-verso"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/3.jpg" alt="Verdade" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/831843/ffffff?text=VERDADE!'" /> 
            <div>
              <span class="tag-resultado tag-verdade">✅ VERDADE!</span>
              <p>Como a mutação fica no cromossomo X, homens (XY) precisam de apenas um gene alterado (~8% da população), enquanto mulheres (XX) precisam de dois (~0,5%).</p> 
            </div>
          </div> 
        </div> 
      </article> 

      <!-- CARTÃO 3 -->
      <article class="cartao" onclick="virarCartao(this)">
        <div class="cartao-interno"> 
          <div class="cartao-frente"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/4.jpg" alt="Óculos para daltonismo" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/500724/f472b6?text=Imagem+3+(Frente)'" /> 
            <p>Óculos especiais conseguem CURAR o daltonismo completamente.</p> 
            <span class="dica-clique">👆 Clique para virar</span>
          </div> 
          <div class="cartao-verso"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/lulu.jpeg" alt="Mito" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/831843/ffffff?text=MITO!'" /> 
            <div>
              <span class="tag-resultado tag-mito">❌ MITO!</span>
              <p>Não há cura genética. Óculos especiais possuem filtros que aumentam o contraste entre tonalidades, mas não fazem os olhos verem cores inexistentes na retina.</p> 
            </div>
          </div> 
        </div> 
      </article> 

      <!-- CARTÃO 4 -->
      <article class="cartao" onclick="virarCartao(this)">
        <div class="cartao-interno"> 
          <div class="cartao-frente"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/iiiii.jpeg" alt="Semáforo e motorista" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/500724/f472b6?text=Imagem+4+(Frente)'" /> 
            <p>Pessoas com daltonismo são proibidas de tirar carteira de motorista.</p> 
            <span class="dica-clique">👆 Clique para virar</span>
          </div> 
          <div class="cartao-verso"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/sasa.jpeg" alt="Mito" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/831843/ffffff?text=MITO!'" /> 
            <div>
              <span class="tag-resultado tag-mito">❌ MITO!</span>
              <p>No Brasil e na maioria dos países, daltônicos podem dirigir normalmente, pois memorizam a posição padronizada das luzes dos semáforos.</p> 
            </div>
          </div> 
        </div> 
      </article> 

      <!-- CARTÃO 5 -->
      <article class="cartao" onclick="virarCartao(this)">
        <div class="cartao-interno"> 
          <div class="cartao-frente"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/okok.jpeg" alt="Tipos de daltonismo" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/500724/f472b6?text=Imagem+5+(Frente)'" /> 
            <p>Existem diferentes tipos de daltonismo além da insensibilidade ao verde.</p> 
            <span class="dica-clique">👆 Clique para virar</span>
          </div> 
          <div class="cartao-verso"> 
            <!-- ANEXE SUA IMAGEM AQUI -->
            <img src="img/aba.jpeg" alt="Verdade" class="cartao-imagem" onerror="this.src='https://placehold.co/400x250/831843/ffffff?text=VERDADE!'" /> 
            <div>
              <span class="tag-resultado tag-verdade">✅ VERDADE!</span>
              <p>Os tipos principais incluem Protanopia (vermelho), Deuteranopia (verde) e Tritanopia (dificuldade com tons de azul e amarelo).</p> 
            </div>
          </div> 
        </div> 
      </article> 

    </section> 
  </main> 

  <footer> 
    <h1>lara cardoso alvino</h1>
    <p>Projeto criado para estudos de HTML, CSS e efeitos 3D com cartões flip. Desenvolvido com foco em responsividade e boas práticas de front-end.</p> 
  </footer> 

  <script>
    function virarCartao(cartao) {
      cartao.classList.toggle('virado');
    }
  </script>
</body>
</html>

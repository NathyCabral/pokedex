# Pokedex - Projeto de Consumo de API

## Introdução

O projeto da Pokedex é um exemplo prático de como consumir uma API em JavaScript para obter informações sobre Pokémon e exibi-las em uma interface de usuário amigável. O termo "Pokedex" é uma combinação das palavras "Pokémon" e "índice", que descreve uma ferramenta usada pelos treinadores Pokémon para obter informações sobre diferentes espécies de Pokémon.

Neste projeto, utilizamos a [PokeAPI](https://pokeapi.co/), uma API pública que fornece dados detalhados sobre Pokémon. Ao consumir os dados dessa API, podemos exibir informações como nome, HP, estatísticas e tipo de Pokémon em um card interativo.

## Funcionalidades

O projeto da Pokedex oferece as seguintes funcionalidades:

1. **Pesquisa de Pokémon:** Os usuários podem inserir o nome ou número de um Pokémon no campo de pesquisa e clicar no botão "Pesquisar" ou pressionar "Enter" para obter informações sobre esse Pokémon específico.

2. **Exibição de Pokémon Aleatório:** Ao carregar a página inicial, um Pokémon aleatório é exibido, proporcionando aos usuários uma experiência inicial.

3. **Exibição de Informações:** Após a pesquisa, o projeto exibe as informações do Pokémon, incluindo seu nome, HP, estatísticas de ataque, defesa e velocidade, e tipos.

4. **Estilo Personalizado:** Os cards de Pokémon são estilizados de acordo com o tipo do Pokémon, tornando a experiência mais visualmente atraente e informativa.

## Consumo de API em JavaScript

Para consumir a API de Pokémon, utilizamos a função `fetch`. Aqui está um resumo de como o processo funciona:

1. **Construção da URL da API:** A URL da API é construída com base no termo de pesquisa inserido pelo usuário. Por exemplo, se o usuário pesquisar "pikachu", a URL será `https://pokeapi.co/api/v2/pokemon/pikachu`.

2. **Chamada à API:** Utilizamos a função `fetch` para fazer uma chamada à URL da API. A API responde com dados JSON.

3. **Tratamento da Resposta:** Verificamos se a resposta da API foi bem-sucedida (código de status 200). Se for, convertemos os dados JSON em um objeto JavaScript.

4. **Exibição dos Dados:** Usamos os dados obtidos para exibir as informações do Pokémon na interface do usuário.

## Funções Principais

O código JavaScript deste projeto é organizado em funções principais:

1. **`fetchPokemonData(pokemonName)`:** Esta função é responsável por buscar informações sobre um Pokémon específico na API. Ela constrói a URL da API, faz a chamada, trata a resposta e exibe as informações do Pokémon.

2. **`generateCard(data)`:** Recebe os dados do Pokémon da API e gera o HTML necessário para exibir os detalhes do Pokémon no card. Ele extrai informações como nome, HP, estatísticas e tipo do Pokémon.

3. **`setCardStyle(themeColor)`:** Define o estilo do card com base no tipo do Pokémon. Isso altera a cor de fundo do card para corresponder ao tipo do Pokémon.

4. **`appendTypes(types)`:** Recebe os tipos de Pokémon e anexa elementos HTML para exibir esses tipos no card.

## Assincronia no Consumo de API

A chamada à API é uma operação assíncrona, o que significa que não esperamos que a resposta da API seja retornada imediatamente. Em vez disso, usamos as Promises do JavaScript para lidar com operações assíncronas. O código espera até que a resposta da API seja recebida antes de prosseguir.

```javascript
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erro na requisição");
        }
        return response.json();
    })
    .then((data) => {
        // Quando os dados da API forem obtidos com sucesso, exiba o Pokémon na Pokédex
        generateCard(data);
        searchInput.value = ""; // Limpa o campo de pesquisa após a pesquisa ser realizada
    })
    .catch((error) => {
        console.error("Ocorreu um erro:", error);
    });
```


## Documentação Oficial

Aqui estão alguns links úteis para a documentação oficial relacionada a este projeto:

- [Documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Documentação da API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [Documentação da PokeAPI](https://pokeapi.co/docs/v2)



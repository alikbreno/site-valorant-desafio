# Projeto do workshop - Site Valorant (em desenvolvimento)

## Descrição

Este projeto é uma aplicação React que exibe informações sobre personagens e mapas do valorant.

## Funcionalidades

- **Exibição de Cartões**: Cada cartão mostra informações detalhadas sobre um personagem, incluindo uma imagem, nome, classe, descrição, ícones das habilidades, entre outras informações.
- **Busca**: Permite pesquisar personagens com base em seu nome ou classe.
- **Carrossel**

## Tecnologias Utilizadas

- **React**
- **Axios**
- **React Icons**
- **React Router**
- **Swiper**

## Componentes

### `Header`

O componente `Header` permite pesquisar por personagens e exibe uma lista de resultados filtrados com base na busca. E, ao clica-lo, leva para uma página individual do agente.

### `Cards`

O componente `Cards` exibe um cartão com detalhes sobre um personagem.

## Páginas

### `Agentes`

A página `agentes` exibe um carrossel de cards com todos os personagens.

### `CadaAgente`

A página `cadaAgente` mostra os agentes um por um de acordo com o uuid deles.

### `Inicial`

A página `inicial` exibi um carrossel com todos os mapas que são competitivos ou já foram.

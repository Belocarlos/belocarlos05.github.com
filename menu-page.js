// pages/menu.js
import { useState } from 'react';
import Layout from '../components/Layout';

const produtos = {
  entradas: [
    {
      id: 1,
      nome: "Bruschetta",
      descricao: "Pão italiano com tomates, alho e manjericão",
      preco: 25.90,
      imagem: "/api/placeholder/300/200",
      categorias: ["vegetariano"],
      avaliacoes: []
    },
    // Adicione mais entradas aqui
  ],
  principais: [
    {
      id: 2,
      nome: "Filé à Parmegiana",
      descricao: "Filé empanado com molho de tomate e queijo gratinado",
      preco: 89.90,
      imagem: "/api/placeholder/300/200",
      categorias: ["prato_do_dia"],
      avaliacoes: []
    },
    // Adicione mais pratos principais aqui
  ],
  sobremesas: [
    {
      id: 3,
      nome: "Tiramisù",
      descricao: "Clássica sobremesa italiana com café e mascarpone",
      preco: 28.90,
      imagem: "/api/placeholder/300/200",
      categorias: ["sem_gluten"],
      avaliacoes: []
    },
    // Adicione mais sobremesas aqui
  ],
  bebidas: [
    {
      id: 4,
      nome: "Vinho Tinto",
      descricao: "Taça de vinho tinto da casa",
      preco: 32.90,
      imagem: "/api/placeholder/300/200",
      categorias: ["vegetariano"],
      avaliacoes: []
    },
    // Adicione mais bebidas aqui
  ]
};

export default function Menu() {
  const [filtroAtivo, setFiltroAtivo] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

  const avaliarPrato = (categoriaId, pratoId, avaliacao) => {
    produtos[categoriaId] = produtos[categoriaId].map(prato => {
      if (prato.id === pratoId) {
        return {
          ...prato,
          avaliacoes: [...prato.avaliacoes, avaliacao]
        };
      }
      return prato;
    });
  };

  const getMediaAvaliacoes = (avaliacoes) => {
    if (avaliacoes.length === 0) return 0;
    return avaliacoes.reduce((acc, curr) => acc + curr, 0) / avaliacoes.length;
  };

  const filtrarPratos = (pratos) => {
    if (!filtroAtivo) return pratos;
    return pratos.filter(prato => prato.categorias.includes(filtroAtivo));
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Nosso Menu
        </h1>

        {/* Filtros */}
        <div className="mb-8 flex space-x-4">
          <button
            onClick={() => setFiltroAtivo(null)}
            className={`px-4 py-2 rounded-lg ${
              !filtroAtivo
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltroAtivo('vegetariano')}
            className={`px-4 py-2 rounded-lg ${
              filtroAtivo === 'vegetariano'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Vegetariano
          </button>
          <button
            onClick={() => setFiltroAtivo('prato_do_dia')}
            className={`px-4 py-2 rounded-lg ${
              filtroAtivo === 'prato_do_dia'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Prato do Dia
          </button>
          <button
            onClick={() => setFiltroAtivo('sem_gluten')}
            className={`px-4 py-2 rounded-lg ${
              filtroAtivo === 'sem_gluten'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Sem Glúten
          </button>
        </div>

        {/* Menu */}
        {Object.entries(produtos).map(([categoria, pratos]) => (
          <section key={categoria} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
              {categoria.replace('_', ' ')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtrarPratos(pratos).map((prato) => (
                <div
                  key={prato.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={prato.imagem}
                    alt={prato.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {prato.nome}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {prato.descricao}
                    </p>
                    <p className="text-2
// pages/index.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const [promocao, setPromocao] = useState('');

  useEffect(() => {
    atualizarPromocao();
    const interval = setInterval(atualizarPromocao, 60000); // Atualiza a cada minuto
    return () => clearInterval(interval);
  }, []);

  const atualizarPromocao = () => {
    const dia = new Date().getDay();
    const promocoes = {
      0: "Domingo: 15% de desconto em sobremesas",
      1: "Segunda: 10% de desconto no prato do dia",
      2: "Terça: 2 por 1 em entradas",
      3: "Quarta: Rodízio com 20% de desconto",
      4: "Quinta: Bebidas pela metade do preço",
      5: "Sexta: Festival de massas",
      6: "Sábado: Menu degustação especial"
    };
    setPromocao(promocoes[dia]);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindo ao Restaurante
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Uma experiência gastronômica única com sabores inesquecíveis
          </p>
          <img
            src="/api/placeholder/1200/600"
            alt="Ambiente do restaurante"
            className="rounded-lg shadow-xl mb-8 w-full"
          />
          <Link
            href="/menu"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Menu
          </Link>
        </div>

        {/* Promoção do Dia */}
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center text-yellow-800 dark:text-yellow-100">
            {promocao}
          </h2>
        </div>

        {/* Sobre Nós */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Nós
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Com mais de 20 anos de tradição, nosso restaurante é reconhecido pela
            excelência em gastronomia e atendimento. Nossa equipe de chefs
            preparada pratos exclusivos com ingredientes selecionados.
          </p>
        </section>

        {/* Missão */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Missão
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Proporcionar momentos únicos através da gastronomia, unindo tradição
            e inovação em cada prato servido.
          </p>
        </section>

        {/* Depoimentos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Depoimentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nome: "Maria Silva",
                texto: "Melhor restaurante da cidade! Comida incrível e atendimento impecável.",
                nota: 5
              },
              {
                nome: "João Santos",
                texto: "Ambiente acolhedor e pratos muito bem elaborados.",
                nota: 5
              },
              {
                nome: "Ana Oliveira",
                texto: "As sobremesas são divinas! Sempre volto para provar novidades.",
                nota: 5
              }
            ].map((depoimento, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{depoimento.texto}"
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {depoimento.nome}
                </p>
                <div className="text-yellow-400">
                  {"★".repeat(depoimento.nota)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

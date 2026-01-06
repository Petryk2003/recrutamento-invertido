import { useState } from 'react';
import { Link } from 'react-router-dom';
import { candidatosMock } from '../data/mockData';
import { Search, Filter, MapPin, Briefcase, DollarSign, X } from 'lucide-react';

export default function BuscarCandidatos() {
  const [filtros, setFiltros] = useState({
    cargo: '',
    cidade: '',
    estado: '',
    experienciaMin: '',
    habilidades: '',
    remoto: false,
    pretensaoMax: ''
  });

  const [mostrarFiltros, setMostrarFiltros] = useState(true);
  const [resultados, setResultados] = useState(candidatosMock);

  const handleFiltrar = () => {
    let candidatosFiltrados = [...candidatosMock];

    // Filtro por cargo
    if (filtros.cargo) {
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        c.cargo.toLowerCase().includes(filtros.cargo.toLowerCase())
      );
    }

    // Filtro por cidade
    if (filtros.cidade) {
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        c.cidade.toLowerCase().includes(filtros.cidade.toLowerCase())
      );
    }

    // Filtro por estado
    if (filtros.estado) {
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        c.estado === filtros.estado
      );
    }

    // Filtro por experiência mínima
    if (filtros.experienciaMin) {
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        c.experienciaAnos >= parseInt(filtros.experienciaMin)
      );
    }

    // Filtro por trabalho remoto
    if (filtros.remoto) {
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        c.disponivelParaTrabalhoRemoto
      );
    }

    // Filtro por habilidades
    if (filtros.habilidades) {
      const habilidadesBuscadas = filtros.habilidades.toLowerCase().split(',').map(h => h.trim());
      candidatosFiltrados = candidatosFiltrados.filter(c =>
        habilidadesBuscadas.some(habilidade =>
          c.habilidades.some(h => h.nome.toLowerCase().includes(habilidade))
        )
      );
    }

    setResultados(candidatosFiltrados);
  };

  const limparFiltros = () => {
    setFiltros({
      cargo: '',
      cidade: '',
      estado: '',
      experienciaMin: '',
      habilidades: '',
      remoto: false,
      pretensaoMax: ''
    });
    setResultados(candidatosMock);
  };

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buscar Candidatos</h1>
          <p className="text-gray-600 mt-2">
            Use os filtros para encontrar os talentos ideais para sua empresa
          </p>
        </div>

        <div className="flex gap-6">
          {/* Painel de Filtros Lateral */}
          {mostrarFiltros && (
            <div className="w-80 flex-shrink-0">
              <div className="card sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filtros
                  </h2>
                  <button
                    onClick={() => setMostrarFiltros(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Cargo/Área */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo ou Área
                    </label>
                    <input
                      type="text"
                      value={filtros.cargo}
                      onChange={(e) => setFiltros({ ...filtros, cargo: e.target.value })}
                      placeholder="Ex: Desenvolvedor"
                      className="input-field"
                    />
                  </div>

                  {/* Localização */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={filtros.cidade}
                      onChange={(e) => setFiltros({ ...filtros, cidade: e.target.value })}
                      placeholder="Nome da cidade"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <select
                      value={filtros.estado}
                      onChange={(e) => setFiltros({ ...filtros, estado: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Todos os estados</option>
                      {estados.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experiência */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experiência Mínima (anos)
                    </label>
                    <select
                      value={filtros.experienciaMin}
                      onChange={(e) => setFiltros({ ...filtros, experienciaMin: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Qualquer</option>
                      <option value="1">1+ anos</option>
                      <option value="2">2+ anos</option>
                      <option value="3">3+ anos</option>
                      <option value="5">5+ anos</option>
                      <option value="7">7+ anos</option>
                      <option value="10">10+ anos</option>
                    </select>
                  </div>

                  {/* Habilidades */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Habilidades
                    </label>
                    <input
                      type="text"
                      value={filtros.habilidades}
                      onChange={(e) => setFiltros({ ...filtros, habilidades: e.target.value })}
                      placeholder="Ex: React, Python (separar por vírgula)"
                      className="input-field"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Separe múltiplas habilidades por vírgula
                    </p>
                  </div>

                  {/* Pretensão Salarial */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pretensão Salarial (até)
                    </label>
                    <input
                      type="text"
                      value={filtros.pretensaoMax}
                      onChange={(e) => setFiltros({ ...filtros, pretensaoMax: e.target.value })}
                      placeholder="Ex: R$ 10.000"
                      className="input-field"
                    />
                  </div>

                  {/* Trabalho Remoto */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remoto"
                      checked={filtros.remoto}
                      onChange={(e) => setFiltros({ ...filtros, remoto: e.target.checked })}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remoto" className="ml-2 text-sm text-gray-700">
                      Disponível para trabalho remoto
                    </label>
                  </div>

                  {/* Botões de Ação */}
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={handleFiltrar}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Buscar
                    </button>
                    <button
                      onClick={limparFiltros}
                      className="btn-secondary w-full"
                    >
                      Limpar Filtros
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lista de Resultados */}
          <div className="flex-1">
            {/* Botão para mostrar filtros em mobile */}
            {!mostrarFiltros && (
              <button
                onClick={() => setMostrarFiltros(true)}
                className="mb-4 btn-secondary lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                Mostrar Filtros
              </button>
            )}

            {/* Cabeçalho dos Resultados */}
            <div className="card mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">
                  <span className="font-bold text-xl text-gray-900">{resultados.length}</span> candidatos encontrados
                </p>
                <select className="input-field w-48">
                  <option>Mais relevantes</option>
                  <option>Mais experiência</option>
                  <option>Menos experiência</option>
                  <option>Ordem alfabética</option>
                </select>
              </div>
            </div>

            {/* Cards de Candidatos */}
            <div className="space-y-4">
              {resultados.length === 0 ? (
                <div className="card text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Nenhum candidato encontrado
                  </h3>
                  <p className="text-gray-600">
                    Tente ajustar os filtros para ver mais resultados
                  </p>
                  <button onClick={limparFiltros} className="btn-secondary mt-4">
                    Limpar Filtros
                  </button>
                </div>
              ) : (
                resultados.map(candidato => (
                  <div key={candidato.id} className="card hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      {/* Foto do Candidato */}
                      <img
                        src={candidato.foto}
                        alt={candidato.nome}
                        className="w-20 h-20 rounded-full flex-shrink-0"
                      />

                      {/* Informações Principais */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {candidato.nome}
                            </h3>
                            <p className="text-gray-600">{candidato.cargo}</p>
                          </div>
                          <Link
                            to={`/empresa/candidato/${candidato.id}`}
                            className="btn-primary flex-shrink-0"
                          >
                            Ver Perfil Completo
                          </Link>
                        </div>

                        {/* Detalhes */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {candidato.cidade}, {candidato.estado}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {candidato.experienciaAnos} anos de experiência
                          </div>
                          {candidato.pretensaoSalarial && (
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {candidato.pretensaoSalarial}
                            </div>
                          )}
                          {candidato.disponivelParaTrabalhoRemoto && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Remoto
                            </span>
                          )}
                        </div>

                        {/* Resumo */}
                        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                          {candidato.resumo}
                        </p>

                        {/* Habilidades */}
                        <div className="flex flex-wrap gap-2">
                          {candidato.habilidades.slice(0, 6).map((hab, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"
                            >
                              {hab.nome}
                            </span>
                          ))}
                          {candidato.habilidades.length > 6 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{candidato.habilidades.length - 6} mais
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Paginação (mockada) */}
            {resultados.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Anterior
                  </button>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Próximo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

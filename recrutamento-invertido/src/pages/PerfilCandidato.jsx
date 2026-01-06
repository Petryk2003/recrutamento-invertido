import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Briefcase, GraduationCap, Award, Globe, Plus, Trash2, Save, DollarSign } from 'lucide-react';

export default function PerfilCandidato() {
  const { usuario, atualizarPerfil } = useAuth();
  const [activeTab, setActiveTab] = useState('basico');
  const [sucesso, setSucesso] = useState(false);

  // Estados para cada seção
  const [dadosBasicos, setDadosBasicos] = useState({
    nome: usuario?.nome || '',
    email: usuario?.email || '',
    telefone: usuario?.telefone || '',
    cidade: usuario?.cidade || '',
    estado: usuario?.estado || '',
    cargo: usuario?.cargo || '',
    resumo: usuario?.resumo || '',
    pretensaoSalarial: usuario?.pretensaoSalarial || '',
    disponivelParaTrabalhoRemoto: usuario?.disponivelParaTrabalhoRemoto || false,
    disponivelParaMudanca: usuario?.disponivelParaMudanca || false,
  });

  const [experiencias, setExperiencias] = useState(usuario?.experiencia || []);
  const [formacoes, setFormacoes] = useState(usuario?.formacao || []);
  const [habilidades, setHabilidades] = useState(usuario?.habilidades || []);
  const [idiomas, setIdiomas] = useState(usuario?.idiomas || []);

  const handleSalvarBasico = () => {
    atualizarPerfil(dadosBasicos);
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  };

  const handleSalvarExperiencias = () => {
    atualizarPerfil({ experiencia: experiencias });
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  };

  const handleSalvarFormacoes = () => {
    atualizarPerfil({ formacao: formacoes });
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  };

  const handleSalvarHabilidades = () => {
    atualizarPerfil({ habilidades, idiomas });
    setSucesso(true);
    setTimeout(() => setSucesso(false), 3000);
  };

  // Funções para adicionar itens
  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, {
      empresa: '',
      cargo: '',
      dataInicio: '',
      dataFim: '',
      atual: false,
      descricao: ''
    }]);
  };

  const adicionarFormacao = () => {
    setFormacoes([...formacoes, {
      instituicao: '',
      curso: '',
      nivel: '',
      status: '',
      anoConclusao: ''
    }]);
  };

  const adicionarHabilidade = () => {
    setHabilidades([...habilidades, { nome: '', nivel: 'Básico' }]);
  };

  const adicionarIdioma = () => {
    setIdiomas([...idiomas, { idioma: '', nivel: 'Básico' }]);
  };

  const tabs = [
    { id: 'basico', nome: 'Dados Básicos', icon: User },
    { id: 'experiencia', nome: 'Experiência', icon: Briefcase },
    { id: 'formacao', nome: 'Formação', icon: GraduationCap },
    { id: 'habilidades', nome: 'Habilidades', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
          <p className="text-gray-600 mt-2">
            Mantenha suas informações atualizadas para receber as melhores oportunidades
          </p>
        </div>

        {sucesso && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            ✓ Informações salvas com sucesso!
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navegação por Tabs */}
          <div className="lg:col-span-1">
            <div className="card space-y-1">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.nome}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conteúdo das Tabs */}
          <div className="lg:col-span-3">
            {/* Tab: Dados Básicos */}
            {activeTab === 'basico' && (
              <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Dados Básicos</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={dadosBasicos.nome}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, nome: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={dadosBasicos.email}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, email: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={dadosBasicos.telefone}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, telefone: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo/Área
                      </label>
                      <input
                        type="text"
                        value={dadosBasicos.cargo}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, cargo: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade
                      </label>
                      <input
                        type="text"
                        value={dadosBasicos.cidade}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, cidade: e.target.value})}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      <input
                        type="text"
                        value={dadosBasicos.estado}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, estado: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      Pretensão Salarial (Opcional)
                    </label>
                    <input
                      type="text"
                      value={dadosBasicos.pretensaoSalarial}
                      onChange={(e) => setDadosBasicos({...dadosBasicos, pretensaoSalarial: e.target.value})}
                      className="input-field"
                      placeholder="Ex: R$ 5.000,00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resumo Profissional
                    </label>
                    <textarea
                      rows={5}
                      value={dadosBasicos.resumo}
                      onChange={(e) => setDadosBasicos({...dadosBasicos, resumo: e.target.value})}
                      className="input-field"
                      placeholder="Conte sobre sua experiência, objetivos e diferenciais..."
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remoto"
                        checked={dadosBasicos.disponivelParaTrabalhoRemoto}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, disponivelParaTrabalhoRemoto: e.target.checked})}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remoto" className="ml-2 text-sm text-gray-700">
                        Disponível para trabalho remoto
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mudanca"
                        checked={dadosBasicos.disponivelParaMudanca}
                        onChange={(e) => setDadosBasicos({...dadosBasicos, disponivelParaMudanca: e.target.checked})}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="mudanca" className="ml-2 text-sm text-gray-700">
                        Disponível para mudança de cidade
                      </label>
                    </div>
                  </div>

                  <button onClick={handleSalvarBasico} className="btn-primary flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {/* Tab: Experiência */}
            {activeTab === 'experiencia' && (
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Experiência Profissional</h2>
                  <button onClick={adicionarExperiencia} className="btn-primary flex items-center text-sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </button>
                </div>

                <div className="space-y-6">
                  {experiencias.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      Nenhuma experiência adicionada. Clique em "Adicionar" para começar.
                    </p>
                  ) : (
                    experiencias.map((exp, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="Nome da Empresa"
                            value={exp.empresa}
                            onChange={(e) => {
                              const newExp = [...experiencias];
                              newExp[index].empresa = e.target.value;
                              setExperiencias(newExp);
                            }}
                            className="input-field"
                          />
                          <input
                            type="text"
                            placeholder="Cargo"
                            value={exp.cargo}
                            onChange={(e) => {
                              const newExp = [...experiencias];
                              newExp[index].cargo = e.target.value;
                              setExperiencias(newExp);
                            }}
                            className="input-field"
                          />
                          <input
                            type="month"
                            placeholder="Data Início"
                            value={exp.dataInicio}
                            onChange={(e) => {
                              const newExp = [...experiencias];
                              newExp[index].dataInicio = e.target.value;
                              setExperiencias(newExp);
                            }}
                            className="input-field"
                          />
                          <input
                            type="month"
                            placeholder="Data Fim"
                            value={exp.dataFim}
                            onChange={(e) => {
                              const newExp = [...experiencias];
                              newExp[index].dataFim = e.target.value;
                              setExperiencias(newExp);
                            }}
                            className="input-field"
                            disabled={exp.atual}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="checkbox"
                            id={`atual-${index}`}
                            checked={exp.atual}
                            onChange={(e) => {
                              const newExp = [...experiencias];
                              newExp[index].atual = e.target.checked;
                              if (e.target.checked) {
                                newExp[index].dataFim = '';
                              }
                              setExperiencias(newExp);
                            }}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`atual-${index}`} className="ml-2 text-sm text-gray-700">
                            Trabalho aqui atualmente
                          </label>
                        </div>
                        <textarea
                          rows={3}
                          placeholder="Descrição das atividades e conquistas..."
                          value={exp.descricao}
                          onChange={(e) => {
                            const newExp = [...experiencias];
                            newExp[index].descricao = e.target.value;
                            setExperiencias(newExp);
                          }}
                          className="input-field mb-3"
                        />
                        <button
                          onClick={() => setExperiencias(experiencias.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-700 text-sm flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remover
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {experiencias.length > 0 && (
                  <button onClick={handleSalvarExperiencias} className="btn-primary flex items-center mt-6">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Experiências
                  </button>
                )}
              </div>
            )}

            {/* Tab: Formação */}
            {activeTab === 'formacao' && (
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Formação Acadêmica</h2>
                  <button onClick={adicionarFormacao} className="btn-primary flex items-center text-sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </button>
                </div>

                <div className="space-y-6">
                  {formacoes.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      Nenhuma formação adicionada. Clique em "Adicionar" para começar.
                    </p>
                  ) : (
                    formacoes.map((form, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="Instituição"
                            value={form.instituicao}
                            onChange={(e) => {
                              const newForm = [...formacoes];
                              newForm[index].instituicao = e.target.value;
                              setFormacoes(newForm);
                            }}
                            className="input-field"
                          />
                          <input
                            type="text"
                            placeholder="Curso"
                            value={form.curso}
                            onChange={(e) => {
                              const newForm = [...formacoes];
                              newForm[index].curso = e.target.value;
                              setFormacoes(newForm);
                            }}
                            className="input-field"
                          />
                          <select
                            value={form.nivel}
                            onChange={(e) => {
                              const newForm = [...formacoes];
                              newForm[index].nivel = e.target.value;
                              setFormacoes(newForm);
                            }}
                            className="input-field"
                          >
                            <option value="">Nível</option>
                            <option value="Técnico">Técnico</option>
                            <option value="Bacharelado">Bacharelado</option>
                            <option value="Licenciatura">Licenciatura</option>
                            <option value="Tecnólogo">Tecnólogo</option>
                            <option value="Pós-graduação">Pós-graduação</option>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Doutorado">Doutorado</option>
                          </select>
                          <select
                            value={form.status}
                            onChange={(e) => {
                              const newForm = [...formacoes];
                              newForm[index].status = e.target.value;
                              setFormacoes(newForm);
                            }}
                            className="input-field"
                          >
                            <option value="">Status</option>
                            <option value="Concluído">Concluído</option>
                            <option value="Cursando">Cursando</option>
                            <option value="Trancado">Trancado</option>
                          </select>
                          <input
                            type="number"
                            placeholder="Ano de Conclusão"
                            value={form.anoConclusao}
                            onChange={(e) => {
                              const newForm = [...formacoes];
                              newForm[index].anoConclusao = e.target.value;
                              setFormacoes(newForm);
                            }}
                            className="input-field"
                          />
                        </div>
                        <button
                          onClick={() => setFormacoes(formacoes.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-700 text-sm flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remover
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {formacoes.length > 0 && (
                  <button onClick={handleSalvarFormacoes} className="btn-primary flex items-center mt-6">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Formações
                  </button>
                )}
              </div>
            )}

            {/* Tab: Habilidades */}
            {activeTab === 'habilidades' && (
              <div className="space-y-6">
                {/* Habilidades Técnicas */}
                <div className="card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Habilidades Técnicas</h2>
                    <button onClick={adicionarHabilidade} className="btn-primary flex items-center text-sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Adicionar
                    </button>
                  </div>

                  <div className="space-y-3">
                    {habilidades.map((hab, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="text"
                          placeholder="Nome da habilidade"
                          value={hab.nome}
                          onChange={(e) => {
                            const newHab = [...habilidades];
                            newHab[index].nome = e.target.value;
                            setHabilidades(newHab);
                          }}
                          className="input-field flex-1"
                        />
                        <select
                          value={hab.nivel}
                          onChange={(e) => {
                            const newHab = [...habilidades];
                            newHab[index].nivel = e.target.value;
                            setHabilidades(newHab);
                          }}
                          className="input-field w-40"
                        >
                          <option value="Básico">Básico</option>
                          <option value="Intermediário">Intermediário</option>
                          <option value="Avançado">Avançado</option>
                        </select>
                        <button
                          onClick={() => setHabilidades(habilidades.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Idiomas */}
                <div className="card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Idiomas</h2>
                    <button onClick={adicionarIdioma} className="btn-primary flex items-center text-sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Adicionar
                    </button>
                  </div>

                  <div className="space-y-3">
                    {idiomas.map((idioma, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Idioma"
                          value={idioma.idioma}
                          onChange={(e) => {
                            const newIdiomas = [...idiomas];
                            newIdiomas[index].idioma = e.target.value;
                            setIdiomas(newIdiomas);
                          }}
                          className="input-field flex-1"
                        />
                        <select
                          value={idioma.nivel}
                          onChange={(e) => {
                            const newIdiomas = [...idiomas];
                            newIdiomas[index].nivel = e.target.value;
                            setIdiomas(newIdiomas);
                          }}
                          className="input-field w-40"
                        >
                          <option value="Básico">Básico</option>
                          <option value="Intermediário">Intermediário</option>
                          <option value="Avançado">Avançado</option>
                          <option value="Fluente">Fluente</option>
                          <option value="Nativo">Nativo</option>
                        </select>
                        <button
                          onClick={() => setIdiomas(idiomas.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={handleSalvarHabilidades} className="btn-primary flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Habilidades e Idiomas
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

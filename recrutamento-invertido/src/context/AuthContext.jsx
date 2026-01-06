import { createContext, useContext, useState } from 'react';
import { candidatosMock, empresasMock } from '../data/mockData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState(null); // 'candidato' ou 'empresa'

  const login = (email, senha, tipo) => {
    // Simulação de login (em produção, seria uma chamada API)
    if (tipo === 'candidato') {
      const candidato = candidatosMock.find(c => c.email === email);
      if (candidato) {
        setUsuario(candidato);
        setTipoUsuario('candidato');
        return true;
      }
    } else if (tipo === 'empresa') {
      const empresa = empresasMock.find(e => e.email === email);
      if (empresa) {
        setUsuario(empresa);
        setTipoUsuario('empresa');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    setTipoUsuario(null);
  };

  const cadastrar = (dados, tipo) => {
    // Simulação de cadastro (em produção, seria uma chamada API)
    const novoUsuario = {
      id: Date.now(),
      ...dados
    };
    
    if (tipo === 'candidato') {
      candidatosMock.push(novoUsuario);
    } else {
      empresasMock.push(novoUsuario);
    }
    
    setUsuario(novoUsuario);
    setTipoUsuario(tipo);
    return true;
  };

  const atualizarPerfil = (dadosAtualizados) => {
    setUsuario({ ...usuario, ...dadosAtualizados });
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      usuario, 
      tipoUsuario, 
      login, 
      logout, 
      cadastrar,
      atualizarPerfil,
      isAuthenticated: !!usuario 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

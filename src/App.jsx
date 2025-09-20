import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import './Visual/Estilo.css'; 

const URL = 'http://localhost:5052/api/leads';

function App() {

  const [leadsConvidados, setLeadsConvidados] = useState([]);
  const [leadsAceitos, setLeadsAceitos] = useState([]);
  const [abaAtiva, setAbaAtiva] = useState('invited'); 

  useEffect(() => {
    const buscarLeads = async () => {
      try {
        const resposta = await axios.get(URL); 
        const todosLeads = resposta.data;
        setLeadsConvidados(todosLeads.filter(lead => lead.status === 'novo')); 
        setLeadsAceitos(todosLeads.filter(lead => lead.status === 'aceito')); 

      } catch (error) {
        console.error("Erro :", error); 
      }
    };

    buscarLeads(); 
  }, []); 

  const leadAceito = async (leadId) => {
    try{
      const resposta = await axios.post(`${URL}/${leadId}/aceito`);
      const leadAtualizado = resposta.data;

      setLeadsConvidados(listaAtual => 
        listaAtual.filter(lead => lead.id !== leadId));

      setLeadsAceitos(listaAtual => 
        [...listaAtual, leadAtualizado]);
      
    } catch (error) {
      console.error("Erro ao aceitar o lead:", error);
    }
  };
  
  const leadNegado = async (leadId) => {
    try {
      await axios.post(`${URL}/${leadId}/negado`);
      
      setLeadsConvidados(listaAtual => 
        listaAtual.filter(lead => lead.id !== leadId)
      );

    } catch (error) {
      console.error("Erro ao recusar o lead:", error);
    }
  };
   
  return (
    <div className="app-container">
      
      <header className="tabs-header">
        <button 
          className={abaAtiva === 'invited' ? 'tab-button active' : 'tab-button'}
          onClick={() => setAbaAtiva('invited')}
        >
          Invited
        </button>
        <button 
          className={abaAtiva === 'accepted' ? 'tab-button active' : 'tab-button'}
          onClick={() => setAbaAtiva('accepted')}
        >
          Accepted
        </button>
      </header>

      <main className="lists-container">
        
        {abaAtiva === 'invited' && (
          <section className="lead-list">
            {leadsConvidados.map(lead => (
              <div key={lead.id} className="lead-card"> 
                
                <div className="lead-header">
                  <span className="avatar">{lead.contactFirstName.charAt(0)}</span>
                  <strong>{lead.contactFirstName}</strong>
                  <span className="date">{lead.dateCreated}</span>
                </div>
                
                <div className="lead-info">
                  <span>{lead.suburb}</span>
                  <span>{lead.category}</span>
                  <span>Job ID: {lead.id}</span>
                </div>
                
                <p className="lead-description">{lead.description}</p>
                
                <div className="lead-footer">
                  <button 
                    className="accept-button" 
                    onClick={() => leadAceito(lead.id)}
                  >
                    Accept
                  </button>
                  <button 
                    className="decline-button" 
                    onClick={() => leadNegado(lead.id)}
                  >
                    Decline
                  </button>

                  <span className="price">${lead.price.toFixed(2)} Lead Invitation</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {abaAtiva === 'accepted' && (
          <section className="lead-list">
            {leadsAceitos.map(lead => (
              <div key={lead.id} className="lead-card accepted-card">
                
                <div className="lead-header">
                  <span className="avatar">{lead.contactFullName.charAt(0)}</span>
                  <strong>{lead.contactFullName}</strong>
                  <span className="date">{lead.dateCreated}</span>
                </div>
                
                <div className="lead-info">
                  <span>{lead.suburb}</span>
                  <span>{lead.category}</span>
                  <span>Job ID: {lead.id}</span>
                </div>
                
                <div className="lead-contact"> 
                  <span>{lead.contactPhoneNumber}</span>
                  <span>{lead.contactEmail}</span>
                </div>
                
                <p className="lead-description">{lead.description}</p>
                
                <div className="lead-footer">
                  <span className="price">${lead.price.toFixed(2)} Lead Invitation</span>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
export default App;
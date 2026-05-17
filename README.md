# gestao-notas-frequencias

**Repositório GitHub:** [gubr98/ajuste-notas-frequencias](https://github.com/gubr98/ajuste-notas-frequencias.git)

Este repositório contém um **template pronto** para a prova de conceito do sistema de **Ajuste de Notas/Frequências**.  
Ele já vem com backend (Node + Express) e um frontend simples em HTML/JS para demonstrar o fluxo básico.

## Descrição do projeto 

Projeto em desenvolvimento para auxiliar na administração acadêmica. 
Desenvolvido para instituições de ensino que buscam excelência, o sistema oferece uma plataforma moderna, intuitiva e altamente segura para centralizar, organizar e gerenciar todas as informações acadêmicas.

![alt text](image.png)

## Objetivos

- **Centralização de Informações**: Unificar os dados acadêmicos em uma única plataforma, eliminando a dispersão de registros em múltiplos documentos e planilhas, de modo a otimizar a gestão institucional.

- **Usabilidade e Acessibilidade**: Desenvolver uma interface intuitiva e de fácil navegação, garantindo que estudantes, docentes e o corpo administrativo operem o sistema com autonomia e eficiência.

- **Otimização da Experiência Institucional**: Aprimorar o fluxo de trabalho e a interação diária de todos os atores envolvidos no ambiente acadêmico, promovendo maior fluidez nas rotinas escolares.

- **Escalabilidade e Adaptabilidade**: Projetar uma arquitetura sistêmica flexível, capaz de acompanhar o crescimento da instituição e absorver novas demandas tecnológicas e regulatórias a longo prazo.

## Justificativa

- **Consistência e Rastreabilidade de Dados**: A ausência de um repositório unificado evidencia a necessidade urgente de mecanismos que assegurem a integridade, o histórico e a confiabilidade das informações acadêmicas.

- **Mitigação do Retrabalho Administrativo**: A automação e a integração de processos visam reduzir a incidência de tarefas manuais e repetitivas, otimizando o tempo e os recursos da equipe operacional.

- **Sustentabilidade na Experiência do Usuário**: A modernização dos canais de atendimento e consulta atende à demanda por plataformas mais céleres, agradáveis e funcionais para a comunidade interna.

- **Segurança da Informação e Conformidade Legal**: O projeto se apoia na obrigatoriedade de proteger dados sensíveis e alinhar as práticas da instituição às diretrizes legais vigentes de governança digital e privacidade.


## Integrantes
- Caio  
- Gustavo  
- Patrícia  
- Kevin   
- Mariana  

## Tecnologias

- **Backend:** Node.js (Express) + TypeORM
- **Frontend:** HTML + JavaScript + Bootstrap 4.6.2 + Font Awesome
- **Ferramentas:** Git, VS Code (sugestão), Insomnia ou Postman para testar a API (opcional)

## Pré-requisitos

- **Node.js 20+** (LTS) → https://nodejs.org
- **Git** → https://git-scm.com

## Execução rápida (Windows, macOS e Linux)

1) Abra um terminal na pasta do projeto e rode o backend:
```bash
cd backend
npm install
npm run seed  # Popula o banco com dados iniciais
npm start    # ou npm run dev para modo desenvolvimento
```

2) Abra diretamente o arquivo `frontend/index.html`.  
As páginas estão em:
- **Página inicial:** `frontend/index.html` - Landing page com acesso às áreas
- **Login do Aluno:** `frontend/pages/login-aluno.html`
- **Dashboard do Aluno:** `frontend/pages/aluno-dashboard.html`
- **Nova Solicitação:** `frontend/pages/aluno.html`
- **Login do Docente:** `frontend/pages/login-docente.html`
- **Painel do Docente:** `frontend/pages/docente.html`
- **Login da Secretaria:** `frontend/pages/login-secretaria.html`
- **Painel da Secretaria:** `frontend/pages/secretaria.html`

3) (Opcional) Teste a API (healthcheck):
```
GET http://localhost:3000/health
GET http://localhost:3000/api/health
```

## Usuários Padrão para Testes

Após executar `npm run seed`, os seguintes usuários estarão disponíveis no banco:

| Email | Nome | Perfil | Uso |
|-------|------|--------|-----|
| `aluno1@uni.edu` | Aluno Um | Aluno | **Principal para testes** - Use este email no login do aluno |
| `prof1@uni.edu` | Prof. Dois | Docente | Use no login do docente |
| `secret@uni.edu` | Secretaria | Secretária | Use no login da secretaria |
| `admin@uni.edu` | Admin | Administrador | Usuário admin |

> **Importante:** O sistema de login atual é uma simulação. Qualquer email/senha funciona, mas o sistema sempre usa `aluno1@uni.edu` internamente para garantir compatibilidade com o banco de dados.

## Estrutura de pastas

```
.
├── backend/                 # API Express + TypeORM
│   ├── package.json
│   └── src/
│       ├── controllers
│       ├── entity
│       └── routes
|       └── seeds
├── frontend/
│   ├── index.html           # Landing page com acesso às áreas
│   └── pages/               # Telas do sistema
│       ├── login-aluno.html
│       ├── login-docente.html
│       ├── login-secretaria.html
│       ├── aluno-dashboard.html
│       ├── aluno.html
│       ├── docente.html
│       └── secretaria.html
├── docs/
│   └── EXECUCAO_LOCAL.md    # Documentação de execução local
├── .gitignore
└── README.md
```

## Variáveis de ambiente

Crie um arquivo `backend/.env` (ou copie `backend/.env.example`) se desejar personalizar a porta:

```
PORT=3000
```

Para adicionar os colegas como colaboradores:  
   Acesse **Settings → Collaborators → Add people** e adicione cada integrante.

## Fluxo da PoC (exemplo)

1. **Aluno** faz login em `login-aluno.html` (qualquer email/senha funciona)
2. **Aluno** acessa o dashboard e cria uma nova solicitação em `aluno.html`
3. **Docente** faz login em `login-docente.html` e acessa `docente.html`
4. **Docente** vê solicitações pendentes e **aprova/rejeita** com observações
5. **Secretaria** faz login em `login-secretaria.html` e acessa `secretaria.html`
6. **Secretaria** valida as solicitações aprovadas pelo docente

## Ajustes Realizados no Frontend

### Estilização Moderna
- **Bootstrap 4.6.2** para layout responsivo e componentes
- **Font Awesome 6.0** para ícones
- **Google Fonts (Inter)** para tipografia moderna
- Gradientes e sombras para visual moderno
- Cards com bordas arredondadas e efeitos de hover

### Telas de Login
- Telas de login específicas para cada área (Aluno, Docente, Secretaria)
- Cada área com sua própria paleta de cores:
  - **Aluno:** Azul (#007bff)
  - **Docente:** Verde (#28a745)
  - **Secretaria:** Azul claro (#17a2b8)
- Sistema de autenticação simulado com `sessionStorage`

### Páginas Principais
- **Dashboard do Aluno:** Visualização de solicitações com status coloridos
- **Nova Solicitação:** Formulário completo para ajuste de nota ou frequência
- **Painel do Docente:** Filtros por status e ações de aprovação/rejeição
- **Painel da Secretaria:** Validação final de solicitações aprovadas

### Melhorias Técnicas
- Detecção automática de URL base da API (funciona com `file://` e HTTP)
- Mapeamento de dados do backend para o formato esperado pelo frontend
- Tratamento de erros melhorado com mensagens claras
- Lista estática de disciplinas (já que não há API de disciplinas)
- Ajustes de padding em selects para evitar corte de conteúdo

### Navegação
- Navbar simplificada e consistente em todas as páginas
- Links de navegação adaptados para cada área
- Breadcrumbs removidos para visual mais limpo

## Endpoints principais (resumo)

- `GET /health` - Healthcheck do servidor
- `GET /api/health` - Healthcheck da API
- `GET /api/requests` - Lista todas as solicitações
- `GET /api/requests?status=pending|in_review|approved|rejected|validated` - Filtra por status
- `GET /api/requests/:id` - Obtém uma solicitação específica
- `POST /api/requests` - Cria uma nova solicitação
- `PATCH /api/requests/:id/status` - Atualiza o status de uma solicitação
- `GET /api/requests/:id/history` - Histórico de uma solicitação

### Exemplo de POST para criar solicitação:
```json
POST /api/requests
Content-Type: application/json

{
  "studentEmail": "aluno1@uni.edu",
  "courseCode": "DISC1",
  "discipline": "Cálculo I",
  "description": "Nota da P1 parece incorreta",
  "evidenceFiles": null
}
```

### Exemplo de PATCH para atualizar status:
```json
PATCH /api/requests/:id/status
Content-Type: application/json

{
  "status": "approved",
  "decisionNote": "Aprovado após revisão"
}
```

### Status disponíveis:
- `pending` - Em análise (padrão)
- `in_review` - Em revisão
- `approved` - Aprovado pelo docente
- `rejected` - Rejeitado pelo docente
- `validated` - Validado pela secretaria

## Notas Importantes

- Execute `npm run seed` sempre que precisar resetar os dados de teste
- O servidor precisa estar rodando na porta 3000 para as requisições funcionarem
- As páginas HTML podem ser abertas diretamente (file://) ou servidas pelo backend
- O sistema detecta automaticamente o protocolo e ajusta as URLs da API
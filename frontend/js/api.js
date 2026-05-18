const API = {
  get baseUrl() {
    if (window.location.protocol === "file:") {
      return "http://localhost:3000";
    }
    return window.location.origin;
  },

  async request(path, options = {}) {
    const url = `${this.baseUrl}${path}`;
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || data.message || `Erro ${res.status}`);
    }
    return data;
  },

  getRequests(status) {
    const q = status ? `?status=${status}` : "";
    return this.request(`/api/requests${q}`);
  },

  getRequest(id) {
    return this.request(`/api/requests/${id}`);
  },

  createRequest(body) {
    return this.request("/api/requests", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  updateStatus(id, status, decisionNote) {
    return this.request(`/api/requests/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status, decisionNote }),
    });
  },

  getHistory(id) {
    return this.request(`/api/requests/${id}/history`);
  },
};

const DISCIPLINAS = [
  { code: "CALC1", name: "Cálculo I" },
  { code: "ALG1", name: "Algoritmos I" },
  { code: "BD1", name: "Banco de Dados" },
  { code: "ENG1", name: "Engenharia de Software" },
  { code: "DISC1", name: "Programação Orientada a Objetos" },
];

const STATUS_LABELS = {
  pending: "Em análise",
  in_review: "Em revisão",
  approved: "Aprovado",
  rejected: "Rejeitado",
  validated: "Validado",
};

function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleString("pt-BR");
}

function statusBadge(status) {
  const label = STATUS_LABELS[status] || status;
  return `<span class="status-badge status-${status}">${label}</span>`;
}

function showAlert(message, type = "success") {
  const el = document.createElement("div");
  el.className = `alert alert-${type} alert-dismissible fade show alert-floating`;
  el.setAttribute("role", "alert");
  el.innerHTML = `
    ${message}
    <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

function filterByStudent(requests, email) {
  return requests.filter((r) => r.student && r.student.email === email);
}

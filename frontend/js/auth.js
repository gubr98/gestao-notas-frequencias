const AUTH = {
  STUDENT_EMAIL: "aluno1@uni.edu",

  login(area, name, email) {
    sessionStorage.setItem("area", area);
    sessionStorage.setItem("userName", name || "Usuário");
    sessionStorage.setItem("userEmail", email || "");
    if (area === "aluno") {
      sessionStorage.setItem("studentEmail", this.STUDENT_EMAIL);
    }
  },

  logout() {
    sessionStorage.clear();
    window.location.href = "/";
  },

  requireArea(area, loginPage) {
    const current = sessionStorage.getItem("area");
    if (current !== area) {
      window.location.href = loginPage;
      return false;
    }
    return true;
  },

  getStudentEmail() {
    return sessionStorage.getItem("studentEmail") || this.STUDENT_EMAIL;
  },
};

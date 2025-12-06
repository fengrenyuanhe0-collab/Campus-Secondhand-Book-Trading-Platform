document.addEventListener("DOMContentLoaded", () => {

  // ========== LOGIN PAGE ==========
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();

      // 临时存储用户
      localStorage.setItem("userEmail", email);

      // 登录成功 → 进入选择学校页面
      location.href = "choose-profile.html";
    });
  }

  // ========== PROFILE PAGE ==========
  const profileForm = document.getElementById("profileForm");

  if (profileForm) {
    // 下拉框内容
    const schools = ["Example University", "City College", "Henan University", "Tsinghua University"];
    const colleges = ["Computer Science", "Mathematics", "Economics", "Engineering", "Humanities"];
    const majors = ["Software Engineering", "CS", "Math", "Econ", "Automation"];
    const grades = [
      "Freshman (大一)", "Sophomore (大二)", "Junior (大三)", "Senior (大四)",
      "Master Student (研究生)", "PhD Student (博士生)", "Teacher (教师)", "Other (其它)"
    ];

    function fill(id, arr) {
      const el = document.getElementById(id);
      arr.forEach(v => {
        const op = document.createElement("option");
        op.value = v;
        op.textContent = v;
        el.appendChild(op);
      });
    }

    fill("school", schools);
    fill("college", colleges);
    fill("major", majors);
    fill("grade", grades);

    // 提交 → 进入本校社区（home.html）
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = {
        email: localStorage.getItem("userEmail"),
        school: document.getElementById("school").value,
        college: document.getElementById("college").value,
        major: document.getElementById("major").value,
        grade: document.getElementById("grade").value
      };

      localStorage.setItem("userProfile", JSON.stringify(user));

      // 进入首页
      location.href = "home.html";
    });
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.querySelector(".terminal");
  const terminalHeader = document.querySelector(".terminal-header");
  const terminalBody = document.querySelector(".terminal-body");
  const animatedNameEl = document.getElementById("animated-name");
  const nameShuffleScreen = document.getElementById("name-shuffle-screen");

  terminal.style.backgroundColor = "#000";
  terminalHeader.style.backgroundColor = "#000";
  terminalHeader.style.color = "#0f0";
  terminalBody.style.color = "#0f0";

  terminal.style.display = "none";
  if (nameShuffleScreen) nameShuffleScreen.style.display = "flex";

  // ── Name shuffle animation ─────────────────────────────────────
  const name = "Nishtha Gupta";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const shuffleDuration = 2500;
  const frameRate = 50;
  const totalFrames = shuffleDuration / frameRate;

  let display = Array.from(name).map(c => (c === " " ? " " : "_"));
  animatedNameEl.textContent = display.join("");

  let frame = 0;
  const interval = setInterval(() => {
    display = display.map((c, i) => {
      if (name[i] === " ") return " ";
      if (frame > (i / name.length) * totalFrames) return name[i];
      return chars.charAt(Math.floor(Math.random() * chars.length));
    });
    animatedNameEl.textContent = display.join("");
    frame++;

    if (frame >= totalFrames) {
      clearInterval(interval);
      if (nameShuffleScreen) {
        nameShuffleScreen.style.transition = "opacity 0.8s ease";
        nameShuffleScreen.style.opacity = "0";
      }
      setTimeout(() => {
        if (nameShuffleScreen) nameShuffleScreen.style.display = "none";
        terminal.style.display = "block";
        appendPrompt();
      }, 800);
    }
  }, frameRate);

  // ── State ──────────────────────────────────────────────────────
  const commandHistory = [];
  let historyIndex = 0;
  let themeColors = { textColor: "#0f0" };

  // ── Commands ───────────────────────────────────────────────────
  const commands = {

    help: () => `
      <span style="color:${themeColors.textColor};">help</span>${"&nbsp;".repeat(10)}- List all Commands <br>
      <span style="color:${themeColors.textColor};">welcome</span>${"&nbsp;".repeat(7)}- Introductory Section <br>
      <span style="color:${themeColors.textColor};">edu</span>${"&nbsp;".repeat(11)}- Academics <br>
      <span style="color:${themeColors.textColor};">projects</span>${"&nbsp;".repeat(6)}- My Projects <br>
      <span style="color:${themeColors.textColor};">research</span>${"&nbsp;".repeat(6)}- Research Papers [In Progress] <br>
      <span style="color:${themeColors.textColor};">skills</span>${"&nbsp;".repeat(8)}- My Skill Set <br>
      <span style="color:${themeColors.textColor};">achievements</span>${"&nbsp;".repeat(2)}- Highlights &amp; Awards <br>
      <span style="color:${themeColors.textColor};">socials</span>${"&nbsp;".repeat(7)}- Social Media Profiles <br>
      <span style="color:${themeColors.textColor};">email</span>${"&nbsp;".repeat(9)}- Reach out on Email <br>
      <span style="color:${themeColors.textColor};">resume</span>${"&nbsp;".repeat(8)}- Check out my Resume <br>
      <span style="color:${themeColors.textColor};">themes</span>${"&nbsp;".repeat(8)}- Website Themes <br>
      <span style="color:${themeColors.textColor};">clear</span>${"&nbsp;".repeat(9)}- Clear the Terminal <br>
      <span style="color:${themeColors.textColor};">exit</span>${"&nbsp;".repeat(10)}- Close Tab <br>
      <hr>
    `,

    ls: () => commands.help(),

    welcome: () => `
      Hi!, I am Nishtha Gupta, welcome to my portfolio website!, (TODO) GUI version.<br><br>
      Mathematics &amp; Computing undergraduate interested in Software Engineering,
      Backend Development, Distributed Systems, Artificial Intelligence, Machine Learning,
      NLP, and Quantitative Computing. I enjoy designing scalable backend systems,
      exploring modern AI technologies, and solving challenging engineering problems
      with mathematics and code.<br><br>
      Student @ RGIPT Amethi, actively building projects across software engineering and AI,
      and currently interning at
      <a href="https://flyrank.ai" target="_blank">FlyRank AI</a>
      as a Backend Engineering Intern.<hr>
    `,

    edu: () => `
      <span style="color:${themeColors.textColor};">Rajiv Gandhi Institute of Petroleum Technology (RGIPT)</span> | 2024 – 2028 <br>
      &nbsp;&nbsp;B.Tech, Mathematics &amp; Computing &nbsp;|&nbsp; CPI: 7.67 / 10 <br>
      &nbsp;&nbsp;Coursework: DSA · Algorithms · Real Analysis · Linear Algebra ·
      Probability &amp; Statistics · Numerical Methods · Computer Architecture · DBMS <br>
      <br>
      <span style="color:${themeColors.textColor};">Scottish Central School</span> &nbsp;|&nbsp; Class XII <br>
      <span style="color:${themeColors.textColor};">Bal Vikas Vidyalaya</span> &nbsp;|&nbsp; Class X <hr>
    `,

    projects: () => `
      Checkout my <a href="https://github.com/Nishtha453" target="_blank">GitHub</a>
      for everything. Some highlights: <br><br>

      <span style="color:${themeColors.textColor};">FlashLock</span>
      &nbsp;&nbsp;<a href="https://github.com/Nishtha453/flashlock" target="_blank">[github]</a> <br>
      &nbsp;&nbsp;Event-driven inventory locking system designed for high-concurrency flash sales. <br>
      &nbsp;&nbsp;Kafka handles the event stream, Redis manages distributed locks with TTL-based
      expiry, and PostgreSQL stores the final committed state. <br>
      &nbsp;&nbsp;<span style="color:#0cf;">Python · Kafka · Redis · PostgreSQL · Docker</span> <br>
      <br>

      <span style="color:${themeColors.textColor};">Zenvoice</span>
      &nbsp;&nbsp;<a href="https://github.com/Nishtha453/zenvoice" target="_blank">[github]</a>
      &nbsp;<a href="https://zenvoice-app.vercel.app/" target="_blank">[live]</a> <br>
      &nbsp;&nbsp;Full-stack invoice builder with PDF export, email delivery via Resend API,
      shareable public invoice links, JWT auth, and a live dashboard with analytics. <br>
      &nbsp;&nbsp;<span style="color:#0cf;">React · TypeScript · Node.js · PostgreSQL · JWT · jsPDF · Vercel + Render</span> <br>
      <br>

      <span style="color:${themeColors.textColor};">VaakSetu</span>
      &nbsp;&nbsp;<a href="https://github.com/Nishtha453/VaakSetu" target="_blank">[github]</a>
      &nbsp;<span style="color:#ff0;">[WIP]</span> <br>
      &nbsp;&nbsp;Indic language NLP bridge for speech and text processing targeting
      low-resource languages. <br>
      &nbsp;&nbsp;<span style="color:#0cf;">Python · NLP · Transformers</span> <br>
      <br>

      <span style="color:${themeColors.textColor};">Flipkart Grid Tribute</span>
      &nbsp;&nbsp;<a href="https://github.com/Nishtha453/flipkart-grid-tribute" target="_blank">[github]</a>
      &nbsp;<a href="https://Nishtha453.github.io/flipkart-grid-tribute" target="_blank">[live]</a> <br>
      &nbsp;&nbsp;Interactive tribute page for Flipkart Grid with Lottie animations,
      timeline, dark mode, and confetti. <br>
      &nbsp;&nbsp;<span style="color:#0cf;">HTML · Tailwind CSS · Lottie.js · AOS</span> <br>
      <hr>
    `,

research: () => `
  Two research papers currently in progress: <br><br>

  <span style="color:${themeColors.textColor};">
    Robustness of Object Detectors on Indian Road Categories Under Visual Corruption
  </span>
  &nbsp;<span style="color:#ff0;">[In Progress]</span> <br>
  &nbsp;&nbsp;Empirical study on the DriveIndia dataset (66K images, 24 categories, TiHAN-IIT Hyderabad): <br>
  &nbsp;&nbsp;measuring per-class AP degradation under fog, motion blur, and low-light for India-specific <br>
  &nbsp;&nbsp;categories (auto-rickshaws, cattle, handcarts) vs globally-standard ones (cars, buses, pedestrians). <br>
  &nbsp;&nbsp;Inference-heavy — fully reproducible on free-tier Colab. Dataset contributor: arXiv:2507.19912 <br>
  &nbsp;&nbsp;Target venues: <span style="color:#0cf;">ICVGIP 2026 · arXiv preprint Q4 2026</span> <br>
  <br>

  <span style="color:${themeColors.textColor};">
    VLM Calibration Under Conflicting Cultural Cues
  </span>
  &nbsp;<span style="color:#ff0;">[In Progress]</span> <br>
  &nbsp;&nbsp;Investigating epistemic overconfidence in Vision-Language Models when visual evidence <br>
  &nbsp;&nbsp;and textual context carry culturally conflicting signals — a failure mode disproportionately <br>
  &nbsp;&nbsp;affecting non-Western deployment contexts. In collaboration with Suparnojit Sarkar. <br>
  &nbsp;&nbsp;Building on arXiv:2511.17004 · Native Hindi fluency as core research advantage. <br>
  &nbsp;&nbsp;Target venues: <span style="color:#0cf;">arXiv preprint Q4 2026 · ETH SSRF / DAAD WISE applications</span> <br>
  <hr>
`,

    skills: () => `
      <span style="color:${themeColors.textColor};">Languages</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Python, C++, JavaScript, SQL, C <br>
      <span style="color:${themeColors.textColor};">Core CS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      DSA, OOP, OS, Computer Networks, DBMS, System Design <br>
      <span style="color:${themeColors.textColor};">Backend</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      FastAPI, Flask, REST APIs, Node.js <br>
      <span style="color:${themeColors.textColor};">Frontend</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      React, HTML, CSS <br>
      <span style="color:${themeColors.textColor};">AI / ML</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      NumPy, Pandas, Matplotlib, Seaborn, SciPy, Scikit-learn, TensorFlow, Streamlit <br>
      <span style="color:${themeColors.textColor};">Databases</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      PostgreSQL, SQLite, Firebase Firestore <br>
      <span style="color:${themeColors.textColor};">Tools</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Git, GitHub, Linux, Docker, VS Code, Jupyter Notebook <br>
      <span style="color:${themeColors.textColor};">Learning</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Java · Spring Boot · Angular · Distributed Systems · NLP · LLMs · Quant Computing <br>
      <hr>
    `,

achievements: () => `
  ★ &nbsp;1st Place — AAPG SDEC 2026 ($5,000 award) <br>
  ★ &nbsp;Merit-cum-Means Scholarship Awardee — RGIPT (25% tuition fee waiver) <br>
  ★ &nbsp;Dataset Contributor — DriveIndia, TiHAN-IIT Hyderabad (arXiv:2507.19912) <br>
  ★ &nbsp;Backend Engineering Intern @ FlyRank AI <br>
  ★ &nbsp;Head — Dev Club, GeeksforGeeks RGIPT Chapter <br>
  ★ &nbsp;Contributor &amp; Mentor — GirlScript Summer of Code (GSSoC) 2025 <br>
  ★ &nbsp;Teaching Head — Arpan, RGIPT Social Council <br>
  ★ &nbsp;Community Intern — RGIPT Outreach Program (Jan–May 2025) <br>
  <hr>
`,

    socials: () => `
      Find me at: <br>
      1. <a href="https://www.linkedin.com/in/nishtha-gupta-a6a117209/" target="_blank">LinkedIn</a> <br>
      2. <a href="https://github.com/Nishtha453" target="_blank">GitHub</a> <br>
      3. <a href="https://x.com/run_nish_run" target="_blank">X (Twitter)</a> <br>
      4. <a href="https://notesbynishtha.substack.com" target="_blank">Substack — Notes by Nishtha</a> <br>
      <hr>
    `,

    email: () => {
      window.open("mailto:nishthasasaram555@gmail.com");
      return "Reach out at: nishthasasaram555@gmail.com<hr>";
    },

    resume: () => {
      window.open("https://drive.google.com/file/d/1tDB7n5ATMaJrkj9ee1N5hlCiuveZhYEk/view?usp=drive_link");
      return "Opening resume... May not be the latest! xD<hr>";
    },

    themes: () => `
      <span style="color:${themeColors.textColor};">hacker</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(current) <br>
      <span style="color:${themeColors.textColor};">personal</span> <br>
      <span style="color:${themeColors.textColor};">dracula</span> <br>
      <span style="color:${themeColors.textColor};">solarized dark</span> <br>
      <span style="color:${themeColors.textColor};">monokai</span> <br>
      <span style="color:${themeColors.textColor};">nord</span> <br>
      <span style="color:${themeColors.textColor};">vcs</span> <br>
      <br>type 'theme to &lt;name&gt;' to switch.<hr>
    `,

    "theme to hacker": () => {
      applyTheme("#000", "#000", "#0f0", "#0f0", "#0cf");
      return "Switched to Hacker theme!<hr>";
    },
    "theme to personal": () => {
      applyTheme("#0D1926", "#252526", "#B4E1FD", "#B4E1FD", "#1E8EFF");
      return "Switched to Personal theme!<hr>";
    },
    "theme to dracula": () => {
      applyTheme("#282a36", "#44475a", "#f8f8f2", "#f8f8f2", "#8be9fd");
      return "Switched to Dracula theme!<hr>";
    },
    "theme to solarized dark": () => {
      applyTheme("#002b36", "#073642", "#93a1a1", "#93a1a1", "#268bd2");
      return "Switched to Solarized Dark theme!<hr>";
    },
    "theme to monokai": () => {
      applyTheme("#272822", "#383830", "#F8F8F2", "#F8F8F2", "#A6E22E");
      return "Switched to Monokai theme!<hr>";
    },
    "theme to nord": () => {
      applyTheme("#2E3440", "#3B4252", "#D8DEE9", "#D8DEE9", "#88C0D0");
      return "Switched to Nord theme!<hr>";
    },
    "theme to vcs": () => {
      applyTheme("#1e1e1e", "#252526", "#d4d4d4", "#d4d4d4", "#569cd6");
      return "Switched to VCS theme!<hr>";
    },

    clear: () => {
      terminalBody.innerHTML = "";
      return "";
    },

    exit: () => {
      const msg = "Closing session... <small>(Close manually if stuck)</small>";
      try {
        window.open("", "_self").close();
        setTimeout(() => window.close(), 100);
      } catch (err) {
        return `${msg}<br>Error: ${err.message}`;
      }
      return msg;
    },
  };

  // ── Theme helper ───────────────────────────────────────────────
  function applyTheme(bg, headerBg, headerFg, textColor, linkColor) {
    terminal.style.backgroundColor = bg;
    terminalHeader.style.backgroundColor = headerBg;
    terminalHeader.style.color = headerFg;
    terminalBody.style.color = textColor;
    themeColors.textColor = textColor;
    document.querySelectorAll("a").forEach(l => (l.style.color = linkColor));
  }

  // ── Command dispatcher ─────────────────────────────────────────
  const enterComm = (input) => {
    const parts = input.toLowerCase().split(" ");
    const fullCmd = parts.join(" ").trim();
    const baseCmd = parts[0];

    const fn = commands[fullCmd] ?? commands[baseCmd];
    if (!fn) {
      return `Command not found: <span style="color:#f55;">${baseCmd}</span> — try <span style="color:#0cf;">help</span> or <span style="color:#0cf;">ls</span> for available commands.`;
    }
    return typeof fn === "function" ? fn() : fn;
  };

  // ── Prompt ─────────────────────────────────────────────────────
  const appendPrompt = () => {
    const promptEl = document.createElement("p");
    promptEl.className = "prompt";
    promptEl.innerHTML = "~$ <span contenteditable='true' class='user-input'></span>";
    terminalBody.appendChild(promptEl);

    const userInput = promptEl.querySelector(".user-input");

    setTimeout(() => {
      promptEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      userInput.focus();
    }, 10);

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const command = userInput.textContent.trim();
        if (!command) return;

        commandHistory.push(command);
        historyIndex = commandHistory.length;
        userInput.setAttribute("contenteditable", "false");

        const output = enterComm(command);
        if (output) {
          const outEl = document.createElement("p");
          outEl.style.color = themeColors.textColor;
          outEl.innerHTML = output;
          terminalBody.appendChild(outEl);
        }
        appendPrompt();

      } else if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
          historyIndex--;
          userInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(userInput);
        }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          userInput.textContent = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          userInput.textContent = "";
        }
        placeCaretAtEnd(userInput);
      }
    });
  };

  const placeCaretAtEnd = (el) => {
    el.focus();
    if (window.getSelection && document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };
});
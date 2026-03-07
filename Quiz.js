const questions = [
      { question: "What is the brain of the computer?", options: ["CPU", "RAM", "Hard Disk", "Monitor"], answer: "CPU" },
      { question: "Which memory is volatile?", options: ["ROM", "SSD", "RAM", "DVD"], answer: "RAM" },
      { question: "Which language is used for web page structure?", options: ["CSS", "HTML", "Python", "Java"], answer: "HTML" },
      { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Record Link", "User Reference Locator", "Unified Routing Link"], answer: "Uniform Resource Locator" },
      { question: "Which is not an operating system?", options: ["Linux", "Windows", "Oracle", "macOS"], answer: "Oracle" },
      { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Tree"], answer: "Stack" },
      { question: "Which data structure uses FIFO?", options: ["Queue", "Stack", "Graph", "Heap"], answer: "Queue" },
      { question: "Big-O of binary search in sorted array is?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)" },
      { question: "Which sorting algorithm has average O(n log n)?", options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"], answer: "Merge Sort" },
      { question: "Which layer handles routing in OSI model?", options: ["Transport", "Network", "Data Link", "Session"], answer: "Network" },
      { question: "HTTP runs by default on which port?", options: ["21", "25", "80", "443"], answer: "80" },
      { question: "HTTPS typically uses which port?", options: ["110", "143", "443", "3389"], answer: "443" },
      { question: "What does DNS do?", options: ["Encrypts files", "Resolves domain names", "Stores cookies", "Compiles code"], answer: "Resolves domain names" },
      { question: "Which SQL command removes a table and its data?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], answer: "DROP" },
      { question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "2NF" },
      { question: "Primary key in a table must be:", options: ["Nullable", "Unique and not null", "Duplicated", "Optional"], answer: "Unique and not null" },
      { question: "Which command is used to fetch records from SQL table?", options: ["GET", "PULL", "SELECT", "SHOW"], answer: "SELECT" },
      { question: "In OOP, inheritance means:", options: ["Data hiding", "Creating object", "Acquiring properties from parent class", "Overloading only"], answer: "Acquiring properties from parent class" },
      { question: "Polymorphism allows:", options: ["One interface, many implementations", "Only one class", "No methods", "No objects"], answer: "One interface, many implementations" },
      { question: "Encapsulation is:", options: ["Wrapping data and methods together", "Running code faster", "Multiple inheritance", "Sorting data"], answer: "Wrapping data and methods together" },
      { question: "Which symbol is used for single-line comment in JavaScript?", options: ["<!-- -->", "//", "#", "/* */"], answer: "//" },
      { question: "Which JavaScript method converts JSON string to object?", options: ["JSON.stringify", "JSON.parse", "JSON.object", "parse.JSON"], answer: "JSON.parse" },
      { question: "Git command to create a new branch:", options: ["git init", "git checkout", "git branch <name>", "git merge"], answer: "git branch <name>" },
      { question: "Which command stages all changes in Git?", options: ["git add .", "git commit -a", "git push", "git stage all"], answer: "git add ." },
      { question: "IPv4 address length is:", options: ["32 bits", "64 bits", "128 bits", "16 bits"], answer: "32 bits" },
      { question: "IPv6 address length is:", options: ["32 bits", "64 bits", "96 bits", "128 bits"], answer: "128 bits" },
      { question: "Which protocol is connection-oriented?", options: ["UDP", "IP", "TCP", "ICMP"], answer: "TCP" },
      { question: "Which protocol is used for secure remote login?", options: ["FTP", "Telnet", "SSH", "SMTP"], answer: "SSH" },
      { question: "Which one is a NoSQL database?", options: ["MongoDB", "PostgreSQL", "Oracle DB", "MariaDB"], answer: "MongoDB" },
      { question: "In DBMS, ACID property 'A' means:", options: ["Accuracy", "Atomicity", "Availability", "Access"], answer: "Atomicity" },
      { question: "Which traversal of BST gives sorted order?", options: ["Preorder", "Postorder", "Inorder", "Level order"], answer: "Inorder" },
      { question: "Time complexity of accessing element by index in array:", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
      { question: "Which algorithm is used for shortest path with non-negative weights?", options: ["Kruskal", "Dijkstra", "Prim", "Floyd only"], answer: "Dijkstra" },
      { question: "Which scheduling algorithm may cause starvation?", options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF with aging"], answer: "Priority Scheduling" },
      { question: "Deadlock requires which condition?", options: ["Preemption always", "Circular wait", "Only one process", "Infinite memory"], answer: "Circular wait" },
      { question: "A process in waiting state is typically:", options: ["Using CPU", "Terminated", "Waiting for I/O", "In ready queue for CPU always"], answer: "Waiting for I/O" },
      { question: "Virtual memory primarily uses:", options: ["Cache", "Secondary storage", "Registers", "BIOS ROM"], answer: "Secondary storage" },
      { question: "Compiler translates:", options: ["Whole program at once", "Line by line", "Machine code to source code", "Only comments"], answer: "Whole program at once" },
      { question: "Interpreter translates:", options: ["Whole program first", "Line by line", "Binary only", "Assembly only"], answer: "Line by line" },
      { question: "Which language is strongly typed and JVM-based?", options: ["Java", "HTML", "CSS", "SQL"], answer: "Java" },
      { question: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "static"], answer: "const" },
      { question: "Which CSS property changes text color?", options: ["font-color", "text-style", "color", "foreground"], answer: "color" },
      { question: "In HTML, hyperlink is created with:", options: ["<p>", "<a>", "<link>", "<href>"], answer: "<a>" },
      { question: "REST APIs commonly use which data format?", options: ["YAML only", "JSON", "BMP", "MP3"], answer: "JSON" },
      { question: "Which attack tries many passwords automatically?", options: ["Phishing", "Brute-force", "Sniffing", "Spoofing"], answer: "Brute-force" },
      { question: "Which security principle gives least required rights?", options: ["Open access", "Least privilege", "Total control", "Anonymous root"], answer: "Least privilege" },
      { question: "Public key cryptography uses:", options: ["One same key", "Two different keys", "No key", "Only hash"], answer: "Two different keys" },
      { question: "Which cloud model offers virtual machines to users?", options: ["SaaS", "PaaS", "IaaS", "DaaS"], answer: "IaaS" },
      { question: "Which command checks Node.js version?", options: ["node --version", "node check", "npm version node", "node -check"], answer: "node --version" },
      { question: "In machine learning, overfitting means:", options: ["Model too simple", "Model memorizes training data", "No data", "Always best generalization"], answer: "Model memorizes training data" },
      { question: "Which one is a supervised learning algorithm?", options: ["K-Means", "Linear Regression", "Apriori", "PCA"], answer: "Linear Regression" },
      { question: "What does GPU excel at?", options: ["Parallel computations", "Long-term storage", "Network routing", "Text editing only"], answer: "Parallel computations" },
      { question: "Which number system uses base 2?", options: ["Decimal", "Octal", "Binary", "Hexadecimal"], answer: "Binary" },
      { question: "Hexadecimal system uses base:", options: ["8", "10", "12", "16"], answer: "16" },
      { question: "Which logic gate outputs 1 only when inputs differ?", options: ["AND", "OR", "XNOR", "XOR"], answer: "XOR" },
      { question: "Which file extension is commonly used for JavaScript?", options: [".js", ".java", ".json", ".jsxm"], answer: ".js" },
      { question: "Which of these is a version control system?", options: ["Git", "Docker", "Jenkins", "Nginx"], answer: "Git" },
      { question: "Which command pushes commits to remote in Git?", options: ["git fetch", "git clone", "git push", "git status"], answer: "git push" }
    ];

    const QUIZ_SIZE = 50;
    const QUIZ_TIME_SECONDS = 10 * 60;

    const questionNumber = document.getElementById("question-number");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");
    const timerEl = document.getElementById("timer");

    const quizContent = document.getElementById("quiz-content");
    const resultContent = document.getElementById("result-content");
    const scoreText = document.getElementById("score-text");
    const restartBtn = document.getElementById("restart-btn");

    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let totalTime = QUIZ_TIME_SECONDS;
    let timerInterval = null;

    function shuffleItems(items) {
      const arr = [...items];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function pickQuizQuestions() {
      return shuffleItems(questions).slice(0, Math.min(QUIZ_SIZE, questions.length));
    }

    function formatTime(seconds) {
      const min = String(Math.floor(seconds / 60)).padStart(2, "0");
      const sec = String(seconds % 60).padStart(2, "0");
      return `${min}:${sec}`;
    }

    function startTimer() {
      clearInterval(timerInterval);
      timerEl.textContent = `Time: ${formatTime(totalTime)}`;

      timerInterval = setInterval(() => {
        totalTime--;
        timerEl.textContent = `Time: ${formatTime(Math.max(totalTime, 0))}`;

        if (totalTime <= 0) {
          clearInterval(timerInterval);
          showResult();
        }
      }, 1000);
    }

    function loadQuestion() {
      selectedOption = null;
      nextBtn.disabled = true;
      optionsContainer.innerHTML = "";

      const current = quizQuestions[currentQuestionIndex];
      questionNumber.textContent = `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
      questionText.textContent = current.question;

      const shuffledOptions = shuffleItems(current.options);

      shuffledOptions.forEach((option) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;

        btn.addEventListener("click", () => {
          document.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          selectedOption = option;
          nextBtn.disabled = false;
        });

        optionsContainer.appendChild(btn);
      });
    }

    function handleNext() {
      const current = quizQuestions[currentQuestionIndex];

      if (!selectedOption) return;

      if (selectedOption === current.answer) {
        score++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      clearInterval(timerInterval);
      quizContent.classList.add("hidden");
      resultContent.classList.remove("hidden");
      scoreText.textContent = `Your score: ${score} / ${quizQuestions.length}`;
    }

    function restartQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      selectedOption = null;
      totalTime = QUIZ_TIME_SECONDS;
      quizQuestions = pickQuizQuestions();

      resultContent.classList.add("hidden");
      quizContent.classList.remove("hidden");

      loadQuestion();
      startTimer();
    }

    nextBtn.addEventListener("click", handleNext);
    restartBtn.addEventListener("click", restartQuiz);

    quizQuestions = pickQuizQuestions();
    loadQuestion();
    startTimer();

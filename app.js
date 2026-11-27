// Bank Soal Evaluasi IPAS Kelas V SD (Kurikulum Merdeka)
// Bab 1: Tumbuhan, Sumber Kehidupan di Bumi

const SVG_ILLUSTRATIONS = {
  parts: `
    <svg viewBox="0 0 360 190" role="img" aria-label="Diagram bagian tubuh tumbuhan dengan label angka 1 sampai 4">
      <rect width="360" height="190" rx="12" fill="#f8fff9"/>
      <path d="M20 148 Q180 140 340 148 L340 182 L20 182 Z" fill="#8d6e63"/>
      <!-- 4: Akar -->
      <g stroke="#d7ccc8" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M160 146 Q158 164 160 176"/>
        <path d="M159 154 Q138 164 126 172"/>
        <path d="M160 156 Q182 164 196 173"/>
      </g>
      <!-- 3: Batang -->
      <path d="M160 146 L160 54" stroke="#2e7d32" stroke-width="7" stroke-linecap="round"/>
      <!-- 2: Daun -->
      <path d="M158 112 Q114 102 104 78 Q136 76 158 104 Z" fill="#43a047"/>
      <path d="M162 94 Q206 84 216 60 Q184 58 162 86 Z" fill="#4caf50"/>
      <!-- 1: Bunga -->
      <g transform="translate(160, 44)">
        <circle cx="0" cy="-12" r="8" fill="#f06292"/>
        <circle cx="11" cy="-4" r="8" fill="#f06292"/>
        <circle cx="7" cy="9" r="8" fill="#f06292"/>
        <circle cx="-7" cy="9" r="8" fill="#f06292"/>
        <circle cx="-11" cy="-4" r="8" fill="#f06292"/>
        <circle cx="0" cy="0" r="7" fill="#ffca28"/>
      </g>
      <!-- Label angka -->
      <g font-family="Segoe UI, sans-serif" font-size="13" font-weight="700">
        <line x1="175" y1="44" x2="225" y2="34" stroke="#374151" stroke-width="1.5"/>
        <circle cx="236" cy="34" r="11" fill="#1b5e20"/><text x="236" y="38" text-anchor="middle" fill="#fff">1</text>
        <line x1="205" y1="74" x2="245" y2="74" stroke="#374151" stroke-width="1.5"/>
        <circle cx="256" cy="74" r="11" fill="#1b5e20"/><text x="256" y="78" text-anchor="middle" fill="#fff">2</text>
        <line x1="156" y1="124" x2="110" y2="124" stroke="#374151" stroke-width="1.5"/>
        <circle cx="98" cy="124" r="11" fill="#1b5e20"/><text x="98" y="128" text-anchor="middle" fill="#fff">3</text>
        <line x1="194" y1="168" x2="235" y2="168" stroke="#374151" stroke-width="1.5"/>
        <circle cx="246" cy="168" r="11" fill="#1b5e20"/><text x="246" y="172" text-anchor="middle" fill="#fff">4</text>
      </g>
    </svg>
  `,
  photosynthesis: `
    <svg viewBox="0 0 380 190" role="img" aria-label="Skema proses fotosintesis pada daun">
      <rect width="380" height="190" rx="12" fill="#f0fdf4"/>
      <!-- Matahari -->
      <circle cx="52" cy="42" r="20" fill="#fdd835"/>
      <text x="52" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Cahaya Matahari</text>
      <!-- Daun tengah -->
      <path d="M135 128 Q170 46 250 76 Q220 144 135 128 Z" fill="#43a047"/>
      <path d="M135 128 Q195 104 242 78" stroke="#c8e6c9" stroke-width="2.5" fill="none"/>
      <text x="192" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Klorofil (Daun)</text>
      <!-- Panah masuk -->
      <path d="M76 48 L142 76" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
      <rect x="20" y="96" width="94" height="26" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
      <text x="67" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">Gas X (Udara)</text>
      <path d="M114 109 L146 109" stroke="#0284c7" stroke-width="2"/>
      <rect x="134" y="150" width="90" height="26" rx="6" fill="#dbeafe" stroke="#2563eb"/>
      <text x="179" y="167" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Air (dari akar)</text>
      <path d="M179 150 L179 126" stroke="#2563eb" stroke-width="2"/>
      <!-- Panah keluar -->
      <rect x="266" y="54" width="96" height="28" rx="6" fill="#fef3c7" stroke="#d97706"/>
      <text x="314" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Karbohidrat</text>
      <path d="M236 82 L266 68" stroke="#d97706" stroke-width="2"/>
      <rect x="266" y="108" width="96" height="28" rx="6" fill="#dcfce7" stroke="#16a34a"/>
      <text x="314" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Gas Y (Oksigen)</text>
      <path d="M234 108 L266 120" stroke="#16a34a" stroke-width="2"/>
    </svg>
  `,
  flower: `
    <svg viewBox="0 0 360 190" role="img" aria-label="Diagram bagian bunga sempurna">
      <rect width="360" height="190" rx="12" fill="#fff7ed"/>
      <!-- Tangkai & Kelopak -->
      <rect x="174" y="132" width="12" height="44" rx="4" fill="#2e7d32"/>
      <path d="M150 132 Q180 148 210 132 Q180 122 150 132 Z" fill="#43a047"/>
      <!-- Mahkota -->
      <path d="M180 128 Q110 92 126 38 Q162 48 180 96 Z" fill="#f472b6"/>
      <path d="M180 128 Q250 92 234 38 Q198 48 180 96 Z" fill="#f472b6"/>
      <!-- Putik (tengah) -->
      <path d="M174 126 L176 54 Q180 42 184 54 L186 126 Z" fill="#a3e635" stroke="#4d7c0f" stroke-width="1.5"/>
      <ellipse cx="180" cy="48" rx="9" ry="6" fill="#bef264" stroke="#4d7c0f" stroke-width="1.5"/>
      <!-- Benang Sari -->
      <path d="M170 122 Q154 88 152 62" stroke="#ca8a04" stroke-width="2.5" fill="none"/>
      <ellipse cx="152" cy="58" rx="7" ry="4" fill="#facc15" stroke="#a16207"/>
      <path d="M190 122 Q206 88 208 62" stroke="#ca8a04" stroke-width="2.5" fill="none"/>
      <ellipse cx="208" cy="58" rx="7" ry="4" fill="#facc15" stroke="#a16207"/>
      <!-- Label A, B, C, D -->
      <g font-family="Segoe UI, sans-serif" font-size="12" font-weight="700">
        <line x1="189" y1="48" x2="255" y2="34" stroke="#334155" stroke-width="1.5"/>
        <circle cx="268" cy="34" r="11" fill="#0f766e"/><text x="268" y="38" text-anchor="middle" fill="#fff">A</text>
        <line x1="215" y1="58" x2="265" y2="68" stroke="#334155" stroke-width="1.5"/>
        <circle cx="278" cy="68" r="11" fill="#0f766e"/><text x="278" y="72" text-anchor="middle" fill="#fff">B</text>
        <line x1="130" y1="68" x2="88" y2="68" stroke="#334155" stroke-width="1.5"/>
        <circle cx="75" cy="68" r="11" fill="#0f766e"/><text x="75" y="72" text-anchor="middle" fill="#fff">C</text>
        <line x1="204" y1="134" x2="255" y2="144" stroke="#334155" stroke-width="1.5"/>
        <circle cx="268" cy="144" r="11" fill="#0f766e"/><text x="268" y="148" text-anchor="middle" fill="#fff">D</text>
      </g>
    </svg>
  `
};

const QUESTIONS = [
  {
    id: 1,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Mengidentifikasi bagian tumbuhan beserta fungsinya melalui gambar",
    illustration: "parts",
    question: "Perhatikan gambar tumbuhan di atas! Bagian yang ditunjuk oleh angka 4 berfungsi untuk ....",
    options: [
      "menyerap air dan mineral dari dalam tanah serta menopang tumbuhan",
      "tempat berlangsungnya fotosintesis karena memiliki banyak klorofil",
      "menarik perhatian serangga untuk membantu proses penyerbukan",
      "mengedarkan hasil fotosintesis dari daun ke seluruh bagian tumbuhan"
    ],
    answer: 0,
    explanation: "Angka 4 menunjuk bagian akar. Akar berfungsi menyerap air dan zat hara (mineral) dari dalam tanah serta memperkokoh berdirinya tumbuhan."
  },
  {
    id: 2,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Pengetahuan (C1)",
    indicator: "Menjelaskan fungsi batang sebagai jalur pengangkutan",
    question: "Bagian tumbuhan yang berperan mengangkut air dari akar menuju daun serta menyalurkan makanan hasil fotosintesis ke seluruh tubuh tumbuhan adalah ....",
    options: [
      "kelopak bunga",
      "batang",
      "rambut akar",
      "biji"
    ],
    answer: 1,
    explanation: "Batang memiliki pembuluh angkut (xilem dan floem) yang mengalirkan air serta mineral dari akar ke daun dan mengedarkan hasil fotosintesis."
  },
  {
    id: 3,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Membedakan jenis akar tunggang dan akar serabut",
    question: "Tanaman mangga dan jambu memiliki satu akar utama yang besar dan bercabang-cabang ke dalam tanah, sedangkan padi dan jagung memiliki akar yang kecil-kecil dan seragam. Jenis akar pada tanaman mangga adalah ....",
    options: [
      "akar serabut",
      "akar napas",
      "akar tunggang",
      "akar gantung"
    ],
    answer: 2,
    explanation: "Tumbuhan dikotil seperti mangga dan jambu memiliki akar tunggang (satu akar pokok yang tumbuh lurus ke bawah dan bercabang). Padi dan jagung berakar serabut."
  },
  {
    id: 4,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Analisis (C4)",
    indicator: "Menganalisis bentuk tulang daun dan contoh tumbuhannya",
    question: "Rani mengamati sehelai daun yang tulang daunnya berbentuk seperti jari-jari tangan manusia. Tumbuhan berikut yang memiliki bentuk tulang daun seperti yang diamati Rani adalah ....",
    options: [
      "daun pisang dan daun jagung",
      "daun singkong dan daun pepaya",
      "daun mangga dan daun jambu",
      "daun sirih dan daun eceng gondok"
    ],
    answer: 1,
    explanation: "Daun singkong dan daun pepaya memiliki tulang daun menjari. Pisang/jagung bertulang sejajar, mangga/jambu menyirip, sedangkan sirih melengkung."
  },
  {
    id: 5,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Penerapan (C3)",
    indicator: "Menentukan bagian tumbuhan tempat menyimpan cadangan makanan",
    question: "Beberapa tumbuhan menyimpan cadangan makanannya pada bagian tertentu. Pasangan tumbuhan dan tempat penyimpanan cadangan makanan yang tepat adalah ....",
    options: [
      "singkong — batang; tebu — akar",
      "kentang — umbi batang; wortel — umbi akar",
      "bawang merah — buah; pisang — biji",
      "mangga — daun; bayam — umbi akar"
    ],
    answer: 1,
    explanation: "Kentang merupakan modifikasi batang (umbi batang), sedangkan wortel dan singkong menyimpan cadangan makanan pada umbi akar."
  },
  {
    id: 6,
    topic: "Bagian Tubuh Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Menjelaskan fungsi buah dan biji bagi tumbuhan",
    question: "Pada tumbuhan berbiji, daging buah yang sering kita makan sebenarnya memiliki fungsi utama bagi tumbuhan itu sendiri, yaitu ....",
    options: [
      "melakukan fotosintesis di malam hari",
      "menyerap karbon dioksida dari udara",
      "melindungi biji dan membantu penyebaran biji",
      "menggantikan fungsi akar saat musim kemarau"
    ],
    answer: 2,
    explanation: "Buah melindungi biji yang berada di dalamnya serta menarik hewan atau manusia untuk memakannya sehingga biji dapat tersebar ke tempat baru."
  },
  {
    id: 7,
    topic: "Fotosintesis",
    level: "Pemahaman (C2)",
    indicator: "Mengidentifikasi bahan yang dibutuhkan dalam proses fotosintesis",
    illustration: "photosynthesis",
    question: "Perhatikan skema proses fotosintesis di atas! Gas X yang diserap oleh daun melalui stomata untuk melakukan fotosintesis adalah ....",
    options: [
      "oksigen",
      "nitrogen",
      "karbon dioksida",
      "uap air"
    ],
    answer: 2,
    explanation: "Untuk melakukan fotosintesis, tumbuhan membutuhkan karbon dioksida (CO2) dari udara, air dari tanah, cahaya matahari, dan klorofil."
  },
  {
    id: 8,
    topic: "Fotosintesis",
    level: "Pengetahuan (C1)",
    indicator: "Menentukan hasil dari proses fotosintesis",
    illustration: "photosynthesis",
    question: "Perhatikan skema proses fotosintesis di atas! Hasil fotosintesis yang sangat dibutuhkan manusia dan hewan untuk bernapas (ditunjukkan sebagai Gas Y) adalah ....",
    options: [
      "karbon dioksida",
      "oksigen",
      "glukosa",
      "klorofil"
    ],
    answer: 1,
    explanation: "Fotosintesis menghasilkan karbohidrat (glukosa/makanan bagi tumbuhan) dan gas oksigen (O2) yang dilepaskan ke udara untuk pernapasan makhluk hidup."
  },
  {
    id: 9,
    topic: "Fotosintesis",
    level: "Pengetahuan (C1)",
    indicator: "Menjelaskan peran klorofil pada daun",
    question: "Zat warna hijau pada daun yang berfungsi menangkap energi cahaya matahari saat fotosintesis disebut ....",
    options: [
      "stomata",
      "xilem",
      "klorofil",
      "floem"
    ],
    answer: 2,
    explanation: "Klorofil adalah pigmen hijau pada daun yang berperan menyerap energi cahaya matahari sebagai sumber energi fotosintesis."
  },
  {
    id: 10,
    topic: "Fotosintesis",
    level: "Analisis (C4)",
    indicator: "Menganalisis faktor cahaya matahari dalam percobaan fotosintesis",
    question: "Budi melakukan percobaan dengan meletakkan dua tanaman sejenis di tempat berbeda: Tanaman A diletakkan di halaman yang terkena sinar matahari, sedangkan Tanaman B diletakkan di dalam lemari tertutup yang gelap selama 5 hari. Kondisi yang paling mungkin terjadi pada Tanaman B adalah ....",
    options: [
      "daunnya menjadi lebih hijau segar karena tidak kepanasan",
      "tumbuh sangat subur dan menghasilkan banyak buah",
      "daunnya menguning dan layu karena tidak dapat berfotosintesis",
      "menghasilkan lebih banyak oksigen dibanding Tanaman A"
    ],
    answer: 2,
    explanation: "Tanpa cahaya matahari, tumbuhan tidak dapat melakukan fotosintesis untuk menghasilkan makanan, sehingga daunnya menguning (klorosis) dan lama-kelamaan layu."
  },
  {
    id: 11,
    topic: "Fotosintesis",
    level: "Pemahaman (C2)",
    indicator: "Mengidentifikasi bagian daun tempat keluar masuknya gas",
    question: "Mulut daun berukuran sangat kecil yang berfungsi sebagai tempat keluar masuknya gas karbon dioksida dan oksigen pada daun disebut ....",
    options: [
      "epidermis",
      "stomata",
      "mahkota",
      "kambium"
    ],
    answer: 1,
    explanation: "Stomata adalah pori-pori kecil di permukaan daun (umumnya di bagian bawah daun) yang menjadi jalur pertukaran gas karbon dioksida dan oksigen."
  },
  {
    id: 12,
    topic: "Fotosintesis",
    level: "Analisis (C4)",
    indicator: "Menjelaskan peran tumbuhan sebagai sumber kehidupan bagi bumi",
    question: "Mengapa tumbuhan disebut sebagai sumber kehidupan di bumi dalam rantai makanan?",
    options: [
      "Karena tumbuhan dapat bergerak mencari mangsanya sendiri",
      "Karena tumbuhan hanya membutuhkan oksigen untuk hidup",
      "Karena tumbuhan mampu membuat makanan sendiri melalui fotosintesis dan menyediakan oksigen",
      "Karena semua tumbuhan hidup lebih lama daripada hewan"
    ],
    answer: 2,
    explanation: "Tumbuhan berperan sebagai produsen karena mampu membuat makanan sendiri lewat fotosintesis dan melepaskan oksigen yang menopang kehidupan hewan serta manusia."
  },
  {
    id: 13,
    topic: "Fotosintesis",
    level: "Penerapan (C3)",
    indicator: "Menginterpretasi bukti hasil fotosintesis pada percobaan daun dalam air",
    question: "Saat daun segar dimasukkan ke dalam gelas berisi air lalu diletakkan di bawah sinar matahari terik, muncul gelembung-gelembung kecil pada permukaan daun. Gelembung tersebut membuktikan bahwa fotosintesis menghasilkan ....",
    options: [
      "garam mineral",
      "gas oksigen",
      "zat tepung",
      "tanah liat"
    ],
    answer: 1,
    explanation: "Gelembung udara yang muncul pada percobaan daun di dalam air di bawah sinar matahari adalah gas oksigen (O2) hasil proses fotosintesis."
  },
  {
    id: 14,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Mengidentifikasi alat kelamin jantan dan betina pada bunga",
    illustration: "flower",
    question: "Perhatikan gambar bagian-bagian bunga di atas! Bagian yang merupakan alat kelamin betina (putik) dan alat kelamin jantan (benang sari) secara berturut-turut ditunjukkan oleh huruf ....",
    options: [
      "A dan B",
      "B dan C",
      "C dan D",
      "A dan D"
    ],
    answer: 0,
    explanation: "Huruf A menunjuk putik (alat kelamin betina di tengah bunga) dan huruf B menunjuk benang sari (alat kelamin jantan penghasil serbuk sari). C adalah mahkota, D adalah kelopak."
  },
  {
    id: 15,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Pengetahuan (C1)",
    indicator: "Menjelaskan pengertian penyerbukan pada tumbuhan",
    question: "Peristiwa jatuhnya atau menempelnya serbuk sari ke kepala putik disebut ....",
    options: [
      "fotosintesis",
      "penyerbukan",
      "perkecambahan",
      "penguapan"
    ],
    answer: 1,
    explanation: "Penyerbukan (polinasi) adalah proses jatuhnya serbuk sari dari benang sari ke kepala putik sebagai awal perkembangbiakan generatif tumbuhan."
  },
  {
    id: 16,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Penerapan (C3)",
    indicator: "Menentukan perantara penyerbukan berdasarkan ciri bunga",
    question: "Bunga matahari memiliki mahkota berwarna kuning cerah, berbau harum, dan menghasilkan nektar yang manis. Ciri-ciri tersebut menunjukkan bahwa penyerbukan bunga matahari umumnya dibantu oleh ....",
    options: [
      "angin",
      "air hujan",
      "serangga seperti lebah dan kupu-kupu",
      "gaya gravitasi bumi"
    ],
    answer: 2,
    explanation: "Mahkota bunga yang berwarna mencolok, berbau harum, dan memiliki nektar berfungsi memikat serangga (lebah, kupu-kupu) sehingga membantu penyerbukan."
  },
  {
    id: 17,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Mengidentifikasi cara penyebaran biji tumbuhan",
    question: "Buah kelapa memiliki sabut berongga sehingga dapat mengapung di air, sedangkan biji dandelion ringan dan berbulu halus seperti parasut. Cara penyebaran biji kelapa dan dandelion secara berturut-turut dibantu oleh ....",
    options: [
      "hewan dan manusia",
      "air dan angin",
      "angin dan air",
      "gravitasi dan serangga"
    ],
    answer: 1,
    explanation: "Buah kelapa menyebar melalui air (mengapung di laut/sungai), sedangkan biji dandelion yang ringan dan berbulu halus mudah diterbangkan oleh angin."
  },
  {
    id: 18,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Pemahaman (C2)",
    indicator: "Mengelompokkan perkembangbiakan vegetatif alami pada tumbuhan",
    question: "Tanaman pisang berkembang biak dengan tunas, sedangkan bawang merah berkembang biak dengan umbi lapis. Kedua cara tersebut termasuk perkembangbiakan ....",
    options: [
      "generatif melalui biji",
      "vegetatif alami",
      "vegetatif buatan",
      "penyerbukan silang"
    ],
    answer: 1,
    explanation: "Perkembangbiakan tumbuhan tanpa melalui peleburan sel kelamin (tanpa biji) dan tanpa campur tangan manusia disebut perkembangbiakan vegetatif alami."
  },
  {
    id: 19,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Penerapan (C3)",
    indicator: "Menentukan teknik perkembangbiakan vegetatif buatan yang tepat",
    question: "Pak Andi ingin memperbanyak pohon mangga agar cepat berbuah dan memiliki sifat yang sama persis dengan induknya. Teknik yang dilakukan Pak Andi adalah mengupas kulit cabang, membungkusnya dengan tanah lembap dan sabut kelapa hingga tumbuh akar. Teknik ini disebut ....",
    options: [
      "mencangkok",
      "menyetek",
      "mengenten (menyambung)",
      "merunduk"
    ],
    answer: 0,
    explanation: "Mencangkok dilakukan pada tumbuhan berkayu dengan mengupas kulit batang dan membungkusnya dengan media tanah agar tumbuh akar sebelum dipotong dan ditanam."
  },
  {
    id: 20,
    topic: "Perkembangbiakan Tumbuhan",
    level: "Analisis (C4)",
    indicator: "Menganalisis dampak berkurangnya populasi serangga penyerbuk",
    question: "Jika populasi lebah dan kupu-kupu di suatu kebun buah menurun drastis akibat penggunaan pestisida berlebihan, dampak yang paling mungkin terjadi pada tanaman buah di kebun tersebut adalah ....",
    options: [
      "akar tumbuhan menjadi semakin panjang",
      "proses fotosintesis berlangsung dua kali lebih cepat",
      "proses penyerbukan terganggu sehingga hasil buah berkurang",
      "daun berubah warna menjadi merah muda"
    ],
    answer: 2,
    explanation: "Lebah dan kupu-kupu adalah agen penyerbuk penting. Jika jumlahnya menurun drastis, penyerbukan terganggu sehingga pembentukan buah dan biji pun menurun."
  }
];

const OPTION_KEYS = ["A", "B", "C", "D"];
const STORAGE_KEY = "ipas_v_tumbuhan_eval_v1";
const KKTP = 75;
const DEFAULT_MINUTES = 30;

// State aplikasi
const state = {
  student: { nama: "", kelas: "", absen: "" },
  questions: [],
  answers: {}, // { questionId: selectedIndex }
  flagged: {}, // { questionId: true }
  currentIndex: 0,
  useTimer: true,
  secondsLeft: DEFAULT_MINUTES * 60,
  startTimeMs: null,
  timerInterval: null,
  finished: false
};

// Elements
const screenStart = document.getElementById("screen-start");
const screenQuiz = document.getElementById("screen-quiz");
const screenResult = document.getElementById("screen-result");

const startForm = document.getElementById("start-form");
const inputNama = document.getElementById("input-nama");
const inputKelas = document.getElementById("input-kelas");
const inputAbsen = document.getElementById("input-absen");
const optShuffle = document.getElementById("opt-shuffle");
const optTimer = document.getElementById("opt-timer");
const btnResume = document.getElementById("btn-resume");

const metaStudent = document.getElementById("meta-student");
const metaTopic = document.getElementById("meta-topic");
const timerBox = document.getElementById("timer-box");
const timerDisplay = document.getElementById("timer-display");
const progressLabel = document.getElementById("progress-label");
const progressBar = document.getElementById("progress-bar");

const questionNumber = document.getElementById("question-number");
const questionLevel = document.getElementById("question-level");
const questionIllustration = document.getElementById("question-illustration");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const questionNav = document.getElementById("question-nav");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnFlag = document.getElementById("btn-flag");
const btnFinish = document.getElementById("btn-finish");
const btnSubmitSidebar = document.getElementById("btn-submit-sidebar");

const modalKisi = document.getElementById("modal-kisi");
const kisiTbody = document.getElementById("kisi-tbody");
const modalConfirm = document.getElementById("modal-confirm");
const confirmMessage = document.getElementById("confirm-message");

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function saveState() {
  if (state.finished) return;
  const payload = {
    student: state.student,
    questionOrder: state.questions.map((q) => q.id),
    answers: state.answers,
    flagged: state.flagged,
    currentIndex: state.currentIndex,
    useTimer: state.useTimer,
    secondsLeft: state.secondsLeft,
    startTimeMs: state.startTimeMs
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    // Abaikan jika storage penuh/tidak tersedia
  }
}

function clearSavedState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    // Abaikan
  }
}

function checkSavedSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && saved.student && saved.student.nama && Array.isArray(saved.questionOrder)) {
      btnResume.classList.remove("hidden");
      btnResume.textContent = `Lanjutkan Sesi (${saved.student.nama})`;
    }
  } catch (err) {
    clearSavedState();
  }
}

function showScreen(target) {
  screenStart.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResult.classList.add("hidden");
  target.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  stopTimer();
  if (!state.useTimer) {
    timerBox.classList.add("hidden");
    return;
  }
  timerBox.classList.remove("hidden");
  updateTimerUI();
  state.timerInterval = setInterval(() => {
    state.secondsLeft -= 1;
    updateTimerUI();
    saveState();
    if (state.secondsLeft <= 0) {
      stopTimer();
      finishQuiz();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerUI() {
  timerDisplay.textContent = formatTime(Math.max(0, state.secondsLeft));
  timerBox.classList.toggle("warning", state.secondsLeft <= 300);
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;

  metaStudent.textContent = `${state.student.nama} • Kelas ${state.student.kelas} (Absen ${state.student.absen})`;
  metaTopic.textContent = q.topic;
  questionNumber.textContent = `Soal ${state.currentIndex + 1} dari ${total}`;
  questionLevel.textContent = q.level;
  questionText.textContent = q.question;

  if (q.illustration && SVG_ILLUSTRATIONS[q.illustration]) {
    questionIllustration.innerHTML = SVG_ILLUSTRATIONS[q.illustration];
    questionIllustration.classList.remove("hidden");
  } else {
    questionIllustration.innerHTML = "";
    questionIllustration.classList.add("hidden");
  }

  optionsList.innerHTML = "";
  const chosen = state.answers[q.id];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn" + (chosen === idx ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", chosen === idx ? "true" : "false");

    const keySpan = document.createElement("span");
    keySpan.className = "option-key";
    keySpan.textContent = OPTION_KEYS[idx];

    const textSpan = document.createElement("span");
    textSpan.textContent = optText;

    btn.appendChild(keySpan);
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => selectOption(q.id, idx));
    optionsList.appendChild(btn);
  });

  const isFlagged = Boolean(state.flagged[q.id]);
  btnFlag.classList.toggle("active", isFlagged);
  btnFlag.textContent = isFlagged ? "🚩 Ditandai Ragu" : "🏳️ Ragu-ragu";

  btnPrev.disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;
  btnNext.classList.toggle("hidden", isLast);
  btnFinish.classList.toggle("hidden", !isLast);

  renderNavigation();
  updateProgress();
}

function selectOption(questionId, optionIndex) {
  state.answers[questionId] = optionIndex;
  saveState();
  renderQuestion();
}

function updateProgress() {
  const total = state.questions.length;
  const answeredCount = state.questions.filter((q) => state.answers[q.id] !== undefined).length;
  progressLabel.textContent = `${answeredCount} / ${total} Terjawab`;
  const pct = Math.round((answeredCount / total) * 100);
  progressBar.style.width = `${pct}%`;
}

function renderNavigation() {
  questionNav.innerHTML = "";
  state.questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = idx + 1;
    btn.className = "nav-num";
    if (idx === state.currentIndex) btn.classList.add("current");
    if (state.flagged[q.id]) {
      btn.classList.add("flagged");
    } else if (state.answers[q.id] !== undefined) {
      btn.classList.add("answered");
    }
    btn.addEventListener("click", () => {
      state.currentIndex = idx;
      saveState();
      renderQuestion();
    });
    questionNav.appendChild(btn);
  });
}

function openConfirmModal() {
  const total = state.questions.length;
  const answeredCount = state.questions.filter((q) => state.answers[q.id] !== undefined).length;
  const unanswered = total - answeredCount;
  const flaggedCount = state.questions.filter((q) => state.flagged[q.id]).length;

  if (unanswered > 0) {
    confirmMessage.textContent = `Masih ada ${unanswered} soal yang belum dijawab${flaggedCount > 0 ? ` dan ${flaggedCount} soal bertanda ragu-ragu` : ""}. Yakin ingin mengumpulkan sekarang?`;
  } else if (flaggedCount > 0) {
    confirmMessage.textContent = `Semua soal sudah terjawab, namun masih ada ${flaggedCount} soal bertanda ragu-ragu. Yakin ingin mengumpulkan?`;
  } else {
    confirmMessage.textContent = "Semua 20 soal sudah terjawab. Kumpulkan jawaban untuk melihat nilai dan pembahasan?";
  }
  modalConfirm.classList.remove("hidden");
}

function getPredicate(score) {
  if (score >= 90) return "Sangat Baik";
  if (score >= 75) return "Baik (Tuntas)";
  if (score >= 60) return "Cukup";
  return "Perlu Bimbingan";
}

function finishQuiz() {
  stopTimer();
  state.finished = true;
  clearSavedState();

  const total = state.questions.length;
  let correctCount = 0;
  const topicStats = {};

  state.questions.forEach((q) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { correct: 0, total: 0 };
    }
    topicStats[q.topic].total += 1;
    if (state.answers[q.id] === q.answer) {
      correctCount += 1;
      topicStats[q.topic].correct += 1;
    }
  });

  const score = Math.round((correctCount / total) * 100);
  const elapsedSec = state.startTimeMs ? Math.max(1, Math.round((Date.now() - state.startTimeMs) / 1000)) : 0;

  document.getElementById("result-student-info").textContent =
    `${state.student.nama} • Kelas ${state.student.kelas} • No. Absen ${state.student.absen}`;
  document.getElementById("result-score").textContent = score;
  document.getElementById("result-predicate").textContent = getPredicate(score);

  const scoreCircle = document.getElementById("score-circle");
  scoreCircle.classList.toggle("needs-work", score < KKTP);

  document.getElementById("result-title").textContent =
    score >= KKTP
      ? "Hebat! Kamu Sudah Memahami Materi Tumbuhan!"
      : "Terus Semangat! Mari Pelajari Pembahasannya!";

  document.getElementById("stat-correct").textContent = `${correctCount} / ${total}`;
  document.getElementById("stat-wrong").textContent = total - correctCount;
  document.getElementById("stat-kktp").textContent = score >= KKTP ? "Tuntas ✓" : "Belum Tuntas";
  document.getElementById("stat-duration").textContent = formatTime(elapsedSec);

  renderTopicBars(topicStats);
  renderReview("all");
  showScreen(screenResult);
}

function renderTopicBars(topicStats) {
  const container = document.getElementById("topic-bars");
  container.innerHTML = "";
  Object.entries(topicStats).forEach(([topic, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const item = document.createElement("div");
    item.className = "topic-bar-item";
    item.innerHTML = `
      <div class="topic-bar-label">
        <span>${topic}</span>
        <span>${data.correct}/${data.total} benar (${pct}%)</span>
      </div>
      <div class="topic-bar-track">
        <div class="topic-bar-fill" style="width: ${pct}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderReview(filter) {
  const list = document.getElementById("review-list");
  list.innerHTML = "";

  const items = state.questions
    .map((q, idx) => ({ q, idx, userAns: state.answers[q.id] }))
    .filter(({ q, userAns }) => {
      const isCorrect = userAns === q.answer;
      if (filter === "wrong") return !isCorrect;
      if (filter === "correct") return isCorrect;
      return true;
    });

  if (items.length === 0) {
    list.innerHTML = `<p class="subtitle">Tidak ada soal pada kategori filter ini.</p>`;
    return;
  }

  items.forEach(({ q, idx, userAns }) => {
    const isCorrect = userAns === q.answer;
    const userText =
      userAns !== undefined
        ? `${OPTION_KEYS[userAns]}. ${q.options[userAns]}`
        : "<em>Tidak dijawab</em>";
    const correctText = `${OPTION_KEYS[q.answer]}. ${q.options[q.answer]}`;

    const div = document.createElement("div");
    div.className = "review-item " + (isCorrect ? "correct" : "wrong");
    div.innerHTML = `
      <div class="review-meta">
        <span><strong>Nomor ${idx + 1}</strong> • ${q.topic}</span>
        <span class="status-pill ${isCorrect ? "correct" : "wrong"}">
          ${isCorrect ? "Benar ✓" : "Kurang Tepat ✕"}
        </span>
      </div>
      <p class="review-q">${q.question}</p>
      <div class="review-answers">
        <div><strong>Jawabanmu:</strong> ${userText}</div>
        <div><strong>Kunci Jawaban:</strong> ${correctText}</div>
      </div>
      <div class="review-explain"><strong>Pembahasan:</strong> ${q.explanation}</div>
    `;
    list.appendChild(div);
  });
}

function populateKisiTable() {
  kisiTbody.innerHTML = "";
  QUESTIONS.forEach((q) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${q.id}</td>
      <td>${q.topic}</td>
      <td>${q.indicator}</td>
      <td>${q.level}</td>
      <td><strong>${OPTION_KEYS[q.answer]}</strong></td>
    `;
    kisiTbody.appendChild(tr);
  });
}

// Event Listeners
startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = inputNama.value.trim();
  const kelas = inputKelas.value.trim();
  const absen = inputAbsen.value.trim();
  if (!nama || !kelas || !absen) return;

  state.student = { nama, kelas, absen };
  state.questions = optShuffle.checked ? shuffleArray(QUESTIONS) : [...QUESTIONS];
  state.answers = {};
  state.flagged = {};
  state.currentIndex = 0;
  state.useTimer = optTimer.checked;
  state.secondsLeft = DEFAULT_MINUTES * 60;
  state.startTimeMs = Date.now();
  state.finished = false;

  saveState();
  showScreen(screenQuiz);
  renderQuestion();
  startTimer();
});

btnResume.addEventListener("click", () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
    state.student = saved.student;
    state.questions = saved.questionOrder.map((id) => byId.get(id)).filter(Boolean);
    state.answers = saved.answers || {};
    state.flagged = saved.flagged || {};
    state.currentIndex = Math.min(saved.currentIndex || 0, state.questions.length - 1);
    state.useTimer = saved.useTimer !== false;
    state.secondsLeft = saved.secondsLeft ?? DEFAULT_MINUTES * 60;
    state.startTimeMs = saved.startTimeMs || Date.now();
    state.finished = false;

    showScreen(screenQuiz);
    renderQuestion();
    startTimer();
  } catch (err) {
    clearSavedState();
    btnResume.classList.add("hidden");
  }
});

btnPrev.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    saveState();
    renderQuestion();
  }
});

btnNext.addEventListener("click", () => {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex += 1;
    saveState();
    renderQuestion();
  }
});

btnFlag.addEventListener("click", () => {
  const q = state.questions[state.currentIndex];
  if (state.flagged[q.id]) {
    delete state.flagged[q.id];
  } else {
    state.flagged[q.id] = true;
  }
  saveState();
  renderQuestion();
});

btnFinish.addEventListener("click", openConfirmModal);
btnSubmitSidebar.addEventListener("click", openConfirmModal);

document.getElementById("btn-confirm-cancel").addEventListener("click", () => {
  modalConfirm.classList.add("hidden");
});

document.getElementById("btn-confirm-submit").addEventListener("click", () => {
  modalConfirm.classList.add("hidden");
  finishQuiz();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderReview(btn.dataset.filter);
  });
});

document.getElementById("btn-print-result").addEventListener("click", () => {
  window.print();
});

document.getElementById("btn-retry").addEventListener("click", () => {
  btnResume.classList.add("hidden");
  showScreen(screenStart);
});

// Modal Kisi-Kisi
document.getElementById("btn-kisi").addEventListener("click", () => {
  modalKisi.classList.remove("hidden");
});

[
  document.getElementById("btn-close-kisi"),
  document.getElementById("btn-close-kisi-bottom"),
  document.getElementById("modal-backdrop")
].forEach((el) => {
  el.addEventListener("click", () => modalKisi.classList.add("hidden"));
});

document.getElementById("btn-print-kisi").addEventListener("click", () => {
  document.body.classList.add("printing-kisi");
  window.print();
  document.body.classList.remove("printing-kisi");
});

// Init
populateKisiTable();
checkSavedSession();

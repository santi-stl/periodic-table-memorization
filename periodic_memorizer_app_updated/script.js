/*
 * Periodic Table Memorizer – Enhanced Edition
 *
 * This script powers the different modes of the application: Study, Learn,
 * Quiz, Grouped Quiz and the interactive Periodic Table. The design
 * emphasizes a clean grey/white interface with splashes of group‑specific
 * colours. Each element carries metadata describing its group, position
 * within the table, and a short seven‑word description of its general
 * chemical behaviour. Hovering an element in the periodic table reveals
 * an enlarged card directly under your cursor.
 */

// Element definitions. Each object holds the atomic number, symbol,
// name, group (column), period (row), optional table row (y) and column (x)
// used for our custom grid, a category used for colouring and grouping,
// and a seven‑word description associated with that category.
const elements = [
  // Period 1
  { number: 1, symbol: 'H', name: 'Hydrogen', group: 1, period: 1, category: 'hydrogen' },
  { number: 2, symbol: 'He', name: 'Helium', group: 18, period: 1, category: 'nobleGas' },
  // Period 2
  { number: 3, symbol: 'Li', name: 'Lithium', group: 1, period: 2, category: 'alkali' },
  { number: 4, symbol: 'Be', name: 'Beryllium', group: 2, period: 2, category: 'alkalineEarth' },
  { number: 5, symbol: 'B', name: 'Boron', group: 13, period: 2, category: 'icosagen' },
  { number: 6, symbol: 'C', name: 'Carbon', group: 14, period: 2, category: 'crystallogen' },
  { number: 7, symbol: 'N', name: 'Nitrogen', group: 15, period: 2, category: 'pnictogen' },
  { number: 8, symbol: 'O', name: 'Oxygen', group: 16, period: 2, category: 'chalcogen' },
  { number: 9, symbol: 'F', name: 'Fluorine', group: 17, period: 2, category: 'halogen' },
  { number: 10, symbol: 'Ne', name: 'Neon', group: 18, period: 2, category: 'nobleGas' },
  // Period 3
  { number: 11, symbol: 'Na', name: 'Sodium', group: 1, period: 3, category: 'alkali' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', group: 2, period: 3, category: 'alkalineEarth' },
  { number: 13, symbol: 'Al', name: 'Aluminum', group: 13, period: 3, category: 'icosagen' },
  { number: 14, symbol: 'Si', name: 'Silicon', group: 14, period: 3, category: 'crystallogen' },
  { number: 15, symbol: 'P', name: 'Phosphorus', group: 15, period: 3, category: 'pnictogen' },
  { number: 16, symbol: 'S', name: 'Sulfur', group: 16, period: 3, category: 'chalcogen' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', group: 17, period: 3, category: 'halogen' },
  { number: 18, symbol: 'Ar', name: 'Argon', group: 18, period: 3, category: 'nobleGas' },
  // Period 4
  { number: 19, symbol: 'K', name: 'Potassium', group: 1, period: 4, category: 'alkali' },
  { number: 20, symbol: 'Ca', name: 'Calcium', group: 2, period: 4, category: 'alkalineEarth' },
  { number: 21, symbol: 'Sc', name: 'Scandium', group: 3, period: 4, category: 'transition' },
  { number: 22, symbol: 'Ti', name: 'Titanium', group: 4, period: 4, category: 'transition' },
  { number: 23, symbol: 'V', name: 'Vanadium', group: 5, period: 4, category: 'transition' },
  { number: 24, symbol: 'Cr', name: 'Chromium', group: 6, period: 4, category: 'transition' },
  { number: 25, symbol: 'Mn', name: 'Manganese', group: 7, period: 4, category: 'transition' },
  { number: 26, symbol: 'Fe', name: 'Iron', group: 8, period: 4, category: 'transition' },
  { number: 27, symbol: 'Co', name: 'Cobalt', group: 9, period: 4, category: 'transition' },
  { number: 28, symbol: 'Ni', name: 'Nickel', group: 10, period: 4, category: 'transition' },
  { number: 29, symbol: 'Cu', name: 'Copper', group: 11, period: 4, category: 'transition' },
  { number: 30, symbol: 'Zn', name: 'Zinc', group: 12, period: 4, category: 'transition' },
  { number: 31, symbol: 'Ga', name: 'Gallium', group: 13, period: 4, category: 'icosagen' },
  { number: 32, symbol: 'Ge', name: 'Germanium', group: 14, period: 4, category: 'crystallogen' },
  { number: 33, symbol: 'As', name: 'Arsenic', group: 15, period: 4, category: 'pnictogen' },
  { number: 34, symbol: 'Se', name: 'Selenium', group: 16, period: 4, category: 'chalcogen' },
  { number: 35, symbol: 'Br', name: 'Bromine', group: 17, period: 4, category: 'halogen' },
  { number: 36, symbol: 'Kr', name: 'Krypton', group: 18, period: 4, category: 'nobleGas' },
  // Period 5
  { number: 37, symbol: 'Rb', name: 'Rubidium', group: 1, period: 5, category: 'alkali' },
  { number: 38, symbol: 'Sr', name: 'Strontium', group: 2, period: 5, category: 'alkalineEarth' },
  { number: 39, symbol: 'Y', name: 'Yttrium', group: 3, period: 5, category: 'transition' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', group: 4, period: 5, category: 'transition' },
  { number: 41, symbol: 'Nb', name: 'Niobium', group: 5, period: 5, category: 'transition' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', group: 6, period: 5, category: 'transition' },
  { number: 43, symbol: 'Tc', name: 'Technetium', group: 7, period: 5, category: 'transition' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', group: 8, period: 5, category: 'transition' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', group: 9, period: 5, category: 'transition' },
  { number: 46, symbol: 'Pd', name: 'Palladium', group: 10, period: 5, category: 'transition' },
  { number: 47, symbol: 'Ag', name: 'Silver', group: 11, period: 5, category: 'transition' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', group: 12, period: 5, category: 'transition' },
  { number: 49, symbol: 'In', name: 'Indium', group: 13, period: 5, category: 'icosagen' },
  { number: 50, symbol: 'Sn', name: 'Tin', group: 14, period: 5, category: 'crystallogen' },
  { number: 51, symbol: 'Sb', name: 'Antimony', group: 15, period: 5, category: 'pnictogen' },
  { number: 52, symbol: 'Te', name: 'Tellurium', group: 16, period: 5, category: 'chalcogen' },
  { number: 53, symbol: 'I', name: 'Iodine', group: 17, period: 5, category: 'halogen' },
  { number: 54, symbol: 'Xe', name: 'Xenon', group: 18, period: 5, category: 'nobleGas' },
  // Period 6
  { number: 55, symbol: 'Cs', name: 'Cesium', group: 1, period: 6, category: 'alkali' },
  { number: 56, symbol: 'Ba', name: 'Barium', group: 2, period: 6, category: 'alkalineEarth' },
  { number: 57, symbol: 'La', name: 'Lanthanum', group: 3, period: 6, category: 'lanthanide' },
  { number: 58, symbol: 'Ce', name: 'Cerium', group: 4, period: 8, category: 'lanthanide' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', group: 5, period: 8, category: 'lanthanide' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', group: 6, period: 8, category: 'lanthanide' },
  { number: 61, symbol: 'Pm', name: 'Promethium', group: 7, period: 8, category: 'lanthanide' },
  { number: 62, symbol: 'Sm', name: 'Samarium', group: 8, period: 8, category: 'lanthanide' },
  { number: 63, symbol: 'Eu', name: 'Europium', group: 9, period: 8, category: 'lanthanide' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', group: 10, period: 8, category: 'lanthanide' },
  { number: 65, symbol: 'Tb', name: 'Terbium', group: 11, period: 8, category: 'lanthanide' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', group: 12, period: 8, category: 'lanthanide' },
  { number: 67, symbol: 'Ho', name: 'Holmium', group: 13, period: 8, category: 'lanthanide' },
  { number: 68, symbol: 'Er', name: 'Erbium', group: 14, period: 8, category: 'lanthanide' },
  { number: 69, symbol: 'Tm', name: 'Thulium', group: 15, period: 8, category: 'lanthanide' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', group: 16, period: 8, category: 'lanthanide' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', group: 17, period: 8, category: 'lanthanide' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', group: 4, period: 6, category: 'transition' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', group: 5, period: 6, category: 'transition' },
  { number: 74, symbol: 'W', name: 'Tungsten', group: 6, period: 6, category: 'transition' },
  { number: 75, symbol: 'Re', name: 'Rhenium', group: 7, period: 6, category: 'transition' },
  { number: 76, symbol: 'Os', name: 'Osmium', group: 8, period: 6, category: 'transition' },
  { number: 77, symbol: 'Ir', name: 'Iridium', group: 9, period: 6, category: 'transition' },
  { number: 78, symbol: 'Pt', name: 'Platinum', group: 10, period: 6, category: 'transition' },
  { number: 79, symbol: 'Au', name: 'Gold', group: 11, period: 6, category: 'transition' },
  { number: 80, symbol: 'Hg', name: 'Mercury', group: 12, period: 6, category: 'transition' },
  { number: 81, symbol: 'Tl', name: 'Thallium', group: 13, period: 6, category: 'icosagen' },
  { number: 82, symbol: 'Pb', name: 'Lead', group: 14, period: 6, category: 'crystallogen' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', group: 15, period: 6, category: 'pnictogen' },
  { number: 84, symbol: 'Po', name: 'Polonium', group: 16, period: 6, category: 'chalcogen' },
  { number: 85, symbol: 'At', name: 'Astatine', group: 17, period: 6, category: 'halogen' },
  { number: 86, symbol: 'Rn', name: 'Radon', group: 18, period: 6, category: 'nobleGas' },
  // Period 7
  { number: 87, symbol: 'Fr', name: 'Francium', group: 1, period: 7, category: 'alkali' },
  { number: 88, symbol: 'Ra', name: 'Radium', group: 2, period: 7, category: 'alkalineEarth' },
  { number: 89, symbol: 'Ac', name: 'Actinium', group: 3, period: 7, category: 'actinide' },
  { number: 90, symbol: 'Th', name: 'Thorium', group: 4, period: 9, category: 'actinide' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', group: 5, period: 9, category: 'actinide' },
  { number: 92, symbol: 'U', name: 'Uranium', group: 6, period: 9, category: 'actinide' },
  { number: 93, symbol: 'Np', name: 'Neptunium', group: 7, period: 9, category: 'actinide' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', group: 8, period: 9, category: 'actinide' },
  { number: 95, symbol: 'Am', name: 'Americium', group: 9, period: 9, category: 'actinide' },
  { number: 96, symbol: 'Cm', name: 'Curium', group: 10, period: 9, category: 'actinide' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', group: 11, period: 9, category: 'actinide' },
  { number: 98, symbol: 'Cf', name: 'Californium', group: 12, period: 9, category: 'actinide' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', group: 13, period: 9, category: 'actinide' },
  { number: 100, symbol: 'Fm', name: 'Fermium', group: 14, period: 9, category: 'actinide' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', group: 15, period: 9, category: 'actinide' },
  { number: 102, symbol: 'No', name: 'Nobelium', group: 16, period: 9, category: 'actinide' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', group: 17, period: 9, category: 'actinide' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', group: 4, period: 7, category: 'transition' },
  { number: 105, symbol: 'Db', name: 'Dubnium', group: 5, period: 7, category: 'transition' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', group: 6, period: 7, category: 'transition' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', group: 7, period: 7, category: 'transition' },
  { number: 108, symbol: 'Hs', name: 'Hassium', group: 8, period: 7, category: 'transition' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', group: 9, period: 7, category: 'transition' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', group: 10, period: 7, category: 'transition' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', group: 11, period: 7, category: 'transition' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', group: 12, period: 7, category: 'transition' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', group: 13, period: 7, category: 'icosagen' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', group: 14, period: 7, category: 'crystallogen' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', group: 15, period: 7, category: 'pnictogen' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', group: 16, period: 7, category: 'chalcogen' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', group: 17, period: 7, category: 'halogen' },
  { number: 118, symbol: 'Og', name: 'Oganesson', group: 18, period: 7, category: 'nobleGas' }
];

// Group/category metadata: colour and seven‑word descriptions. The keys
// correspond to the 'category' property on each element. Colours are
// chosen to loosely reflect traditional periodic table palettes.
const groupInfo = {
  hydrogen:   { color: '#68D391', description: 'Colorless, odorless gases with very low reactivity' },
  alkali:     { color: '#63B3ED', description: 'Reactive metals forming strong basic oxide compounds' },
  alkalineEarth: { color: '#D53F8C', description: 'Reactive metals forming moderately basic oxide compounds' },
  transition: { color: '#ED8936', description: 'Metals with partially filled d-orbitals; variable states' },
  icosagen:   { color: '#319795', description: 'Semiconductors and metals with three valence electrons' },
  crystallogen: { color: '#2C7A7B', description: 'Includes nonmetals, metalloids, and metallic elements diversity' },
  pnictogen: { color: '#2A4365', description: 'Nonmetals, metalloids, metals with five valence electrons' },
  chalcogen: { color: '#81E6D9', description: 'Reactive nonmetals forming oxide and sulfide compounds' },
  halogen:   { color: '#2B6CB0', description: 'Very reactive nonmetals forming salts and acids' },
  nobleGas:  { color: '#E53E3E', description: 'Colorless, odorless gases with very low reactivity' },
  lanthanide: { color: '#90CDF4', description: 'Soft, silvery metals with high magnetic properties' },
  actinide:  { color: '#FEB2B2', description: 'Radioactive metals with complex electron configuration series' }
};

// Utility functions
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

// Helper to lighten a hex colour by mixing it with white. The amount
// parameter should be between 0 and 1 where 0 returns the original
// colour and 1 returns white. This function returns an rgb() string.
function lightenColor(hex, amount = 0.5) {
  const col = hex.replace('#', '');
  const r = parseInt(col.substring(0, 2), 16);
  const g = parseInt(col.substring(2, 4), 16);
  const b = parseInt(col.substring(4, 6), 16);
  const lr = Math.round(r + (255 - r) * amount);
  const lg = Math.round(g + (255 - g) * amount);
  const lb = Math.round(b + (255 - b) * amount);
  return `rgb(${lr}, ${lg}, ${lb})`;
}

// Helper to switch between screens
function showScreen(id) {
  qsa('.screen').forEach((el) => {
    if (el.id === id) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

// STUDY MODE
let studyIndex = 0;
function startStudy() {
  studyIndex = 0;
  updateStudy();
  showScreen('study-screen');
}
function updateStudy() {
  const el = elements[studyIndex];
  const info = groupInfo[el.category];
  const square = qs('#study-square');
  square.textContent = el.symbol;
  square.style.backgroundColor = info.color;
  qs('#study-name').textContent = el.name;
  qs('#study-progress').textContent = `${studyIndex + 1} / ${elements.length}`;

  // update small tile replicating periodic table style
  const tile = qs('#study-tile');
  if (tile) {
    const tileSquare = tile.querySelector('.element-square');
    tileSquare.textContent = el.symbol;
    tileSquare.style.backgroundColor = info.color;
    const tileName = tile.querySelector('.tile-name');
    tileName.textContent = el.name;
  }
}
function prevStudy() {
  if (studyIndex > 0) {
    studyIndex--;
    updateStudy();
  }
}
function nextStudy() {
  if (studyIndex < elements.length - 1) {
    studyIndex++;
    updateStudy();
  }
}

// LEARN MODE
let learnIndex = 0;
function startLearn() {
  learnIndex = 0;
  nextLearnQuestion();
  showScreen('learn-screen');
}
function nextLearnQuestion() {
  if (learnIndex >= elements.length) {
    // restart at end
    learnIndex = 0;
  }
  const element = elements[learnIndex];
  const catInfo = groupInfo[element.category];
  const square = qs('#learn-square');
  square.textContent = element.symbol;
  square.style.backgroundColor = catInfo.color;
  qs('#learn-progress').textContent = `${learnIndex + 1} / ${elements.length}`;
  // Generate options: correct + 3 wrong
  const options = [element];
  const pool = elements.filter((e) => e.symbol !== element.symbol);
  while (options.length < 4) {
    const rnd = pool[Math.floor(Math.random() * pool.length)];
    if (!options.includes(rnd)) options.push(rnd);
  }
  // Shuffle options
  options.sort(() => Math.random() - 0.5);
  const container = qs('#learn-options');
  container.innerHTML = '';
  options.forEach((opt) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-tile';
    // For learn options, only display the element's name. No symbol is shown
    // in order to encourage recall without clues. Colour the background
    // lightly based on its group to provide a subtle cue.
    // Do not set a background here; the CSS sets a white background with a subtle border.
    const optName = document.createElement('div');
    optName.className = 'option-name';
    optName.textContent = opt.name;
    optDiv.appendChild(optName);
    optDiv.addEventListener('click', () => {
      if (opt.symbol === element.symbol) {
        // correct
        learnIndex++;
        nextLearnQuestion();
      } else {
        // incorrect: shake tile and allow retry
        optDiv.classList.add('shake');
        setTimeout(() => optDiv.classList.remove('shake'), 500);
      }
    });
    container.appendChild(optDiv);
  });
}

// QUIZ MODE (free‑form typing)
let quizState;
function startQuiz() {
  quizState = {
    remaining: elements.slice(),
    current: null,
    correct: 0,
    total: 0,
    answered: false
  };
  pickQuizElement();
  showScreen('quiz-screen');
}
function pickQuizElement() {
  if (quizState.remaining.length === 0) {
    quizState.remaining = elements.slice();
  }
  const idx = Math.floor(Math.random() * quizState.remaining.length);
  quizState.current = quizState.remaining.splice(idx, 1)[0];
  quizState.answered = false;
  qs('#quiz-prompt').textContent = quizState.current.symbol;
  qs('#quiz-input').value = '';
  qs('#quiz-feedback').textContent = '';
  qs('#quiz-input').disabled = false;
  qs('#quiz-submit').textContent = 'Submit';
  qs('#quiz-score').textContent = `Score: ${quizState.correct} / ${quizState.total}`;
}
function handleQuizSubmit() {
  if (!quizState) return;
  const userAnswer = qs('#quiz-input').value.trim();
  if (!quizState.answered) {
    quizState.total++;
    const correctName = quizState.current.name.toLowerCase();
    if (userAnswer.toLowerCase() === correctName) {
      quizState.correct++;
      qs('#quiz-feedback').textContent = 'Correct!';
      qs('#quiz-feedback').style.color = '#2F855A';
    } else {
      qs('#quiz-feedback').textContent = `Incorrect. Correct: ${quizState.current.name}`;
      qs('#quiz-feedback').style.color = '#C53030';
    }
    qs('#quiz-input').disabled = true;
    qs('#quiz-submit').textContent = 'Next';
    quizState.answered = true;
    qs('#quiz-score').textContent = `Score: ${quizState.correct} / ${quizState.total}`;
  } else {
    pickQuizElement();
  }
}

// GROUPED QUIZ
let currentGroup; // string category
let groupQuestions;
let groupQuizIndex;
let groupQuizCorrect;
function startGroupSelection() {
  // populate group buttons
  const groups = Object.keys(groupInfo);
  const container = qs('#group-buttons');
  container.innerHTML = '';
  groups.forEach((cat) => {
    // exclude hydrogen category for grouped quiz since only one element
    if (cat === 'hydrogen') return;
    const btn = document.createElement('button');
    btn.className = 'mode-btn small';
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.style.backgroundColor = groupInfo[cat].color;
    btn.addEventListener('click', () => startGroupedQuiz(cat));
    container.appendChild(btn);
  });
  showScreen('group-selection-screen');
}
function startGroupedQuiz(cat) {
  currentGroup = cat;
  groupQuestions = elements.filter((e) => e.category === cat);
  groupQuizIndex = 0;
  groupQuizCorrect = 0;
  qs('#group-quiz-title').textContent = `Quiz: ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
  nextGroupQuiz();
  showScreen('group-quiz-screen');
}
function nextGroupQuiz() {
  if (groupQuizIndex >= groupQuestions.length) {
    // finished: show score
    qs('#group-quiz-prompt').textContent = 'Quiz complete!';
    qs('#group-quiz-input').style.display = 'none';
    qs('#group-quiz-submit').style.display = 'none';
    qs('#group-quiz-feedback').textContent = `You answered ${groupQuizCorrect} out of ${groupQuestions.length} correctly.`;
    qs('#group-quiz-score').textContent = '';
    return;
  }
  const element = groupQuestions[groupQuizIndex];
  qs('#group-quiz-prompt').textContent = element.symbol;
  qs('#group-quiz-input').value = '';
  qs('#group-quiz-input').style.display = 'block';
  qs('#group-quiz-submit').style.display = 'inline-block';
  qs('#group-quiz-feedback').textContent = '';
  qs('#group-quiz-score').textContent = `${groupQuizIndex + 1} / ${groupQuestions.length}`;
}
function handleGroupQuizSubmit() {
  const answer = qs('#group-quiz-input').value.trim();
  const element = groupQuestions[groupQuizIndex];
  if (answer.toLowerCase() === element.name.toLowerCase()) {
    groupQuizCorrect++;
  }
  groupQuizIndex++;
  nextGroupQuiz();
}

// PERIODIC TABLE
function buildPeriodicTable() {
  const container = qs('#periodic-table');
  container.innerHTML = '';
  elements.forEach((el) => {
    const tile = document.createElement('div');
    tile.className = 'element-tile';
    tile.textContent = el.symbol;
    tile.style.backgroundColor = groupInfo[el.category].color;
    // set grid position using CSS grid row/column
    tile.style.gridColumn = el.group;
    tile.style.gridRow = el.period;
    // tooltip
    tile.addEventListener('mouseenter', (ev) => showTooltip(ev, el));
    tile.addEventListener('mousemove', (ev) => positionTooltip(ev));
    tile.addEventListener('mouseleave', hideTooltip);
    container.appendChild(tile);
  });
}

let tooltipDiv;
function showTooltip(event, el) {
  // Create tooltip container if not exists
  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    tooltipDiv.className = 'tooltip';
    document.body.appendChild(tooltipDiv);
  }
  // Clear and build content
  tooltipDiv.innerHTML = '';
  // square with symbol
  const square = document.createElement('div');
  square.className = 'tooltip-square';
  square.textContent = el.symbol;
  square.style.backgroundColor = groupInfo[el.category].color;
  tooltipDiv.appendChild(square);
  // name
  const nameDiv = document.createElement('div');
  nameDiv.className = 'tooltip-name';
  nameDiv.textContent = el.name;
  tooltipDiv.appendChild(nameDiv);
  // description
  const descDiv = document.createElement('div');
  descDiv.className = 'tooltip-desc';
  descDiv.textContent = groupInfo[el.category].description;
  tooltipDiv.appendChild(descDiv);
  tooltipDiv.style.display = 'block';
  positionTooltip(event);
}
function positionTooltip(event) {
  if (!tooltipDiv) return;
  const offsetX = 10;
  const offsetY = 15;
  const x = event.pageX + offsetX;
  const y = event.pageY + offsetY;
  tooltipDiv.style.left = `${x}px`;
  tooltipDiv.style.top = `${y}px`;
}
function hideTooltip() {
  if (tooltipDiv) {
    tooltipDiv.style.display = 'none';
  }
}

// Attach event listeners after DOM load
document.addEventListener('DOMContentLoaded', () => {
  // home buttons
  qs('#btn-study').addEventListener('click', startStudy);
  qs('#btn-learn').addEventListener('click', startLearn);
  qs('#btn-quiz').addEventListener('click', startQuiz);
  qs('#btn-grouped').addEventListener('click', startGroupSelection);
  qs('#btn-table').addEventListener('click', () => {
    buildPeriodicTable();
    showScreen('table-screen');
  });
  // back buttons
  qsa('.back-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) {
        showScreen(target);
      } else {
        showScreen('home-screen');
      }
    });
  });
  // study nav
  qs('#study-prev').addEventListener('click', prevStudy);
  qs('#study-next').addEventListener('click', nextStudy);
  // quiz
  qs('#quiz-submit').addEventListener('click', handleQuizSubmit);
  // group quiz
  qs('#group-quiz-submit').addEventListener('click', handleGroupQuizSubmit);
});
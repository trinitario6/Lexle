'use strict';

// ─── WORD LIST ────────────────────────────────────────────────────────────────
const WORDS = [
  "about","above","abuse","actor","acute","admit","adopt","adult","after","again",
  "agent","agree","ahead","alarm","album","alert","alike","align","alive","alley",
  "allow","alone","along","altar","alter","angel","angle","angry","ankle","annex",
  "apart","apple","apply","apron","argue","arise","armor","arose","array","arrow",
  "atlas","atone","audio","audit","avoid","awake","award","aware","awful","abbey",
  "abbot","abide","abler","abode","acorn","acres","acrid","adapt","adept","adorn",
  "affix","afoot","agape","agate","agile","aging","aglow","agony","aired","aisle",
  "allay","allot","alloy","aloft","aloud","alpha","amaze","amber","amble","amend",
  "amiss","among","ample","amuse","annoy","annul","anode","antsy","aorta","ardor",
  "artsy","azure","abyss","adage","alias","anime","antic","aptly","arbor","arson",
  "ashen","attic","avian","axing","badly","baker","banjo","basic","basis","batch",
  "beach","beard","beast","began","begin","being","below","bench","birth","black",
  "blade","blame","bland","blank","blast","blaze","bleed","blend","bless","blind",
  "block","blood","bloom","blown","blues","blunt","board","bonus","boost","booth",
  "bound","brain","brand","brave","bread","break","breed","brick","bride","brief",
  "bring","brisk","broad","broke","brook","brown","brush","brute","build","built",
  "bunch","burst","buyer","balmy","banal","bandy","baron","beady","beige","belly",
  "biome","birch","bleat","blimp","blink","bliss","bloat","bloke","bluff","bogey",
  "bogus","booze","botch","boxer","braid","brash","brawl","brawn","brine","broil",
  "broth","bulge","bully","burly","butch","byway","carry","catch","cause","cease",
  "chair","chaos","charm","chart","chase","cheap","check","cheek","chess","chest",
  "chief","child","chill","chunk","civil","claim","clamp","clash","class","clean",
  "clear","clerk","click","cliff","climb","cling","clock","clone","close","cloth",
  "cloud","clout","coach","coast","color","comet","comic","coral","count","court",
  "cover","craft","crash","crazy","cream","creek","crisp","cross","crowd","crown",
  "cruel","crush","curve","cycle","cache","camel","canoe","carat","carve","cavil",
  "chafe","champ","chant","chasm","chewy","chive","chomp","chore","cinch","clack",
  "cleat","cleft","clink","cloak","clown","cluck","colon","combo","comma","condo",
  "conic","corny","covet","creak","crimp","crone","crony","crumb","cubic","cumin",
  "curry","cedar","candy","cabin","cable","crane","crawl","daily","dance","death",
  "debut","delay","delta","dense","depot","depth","derby","devil","digit","disco",
  "dodge","doing","doubt","dough","draft","drain","drama","dream","dress","drift",
  "drink","drive","drove","drown","dusty","dwarf","daisy","dally","datum","daunt",
  "decal","decoy","deity","delve","detox","dirge","dodgy","dopey","doted","dowdy",
  "dowel","drawl","drape","drawn","dread","drool","dunce","duped","eager","early",
  "earth","eight","elite","email","empty","enjoy","enter","entry","equal","error",
  "event","every","exact","extra","elate","elegy","emote","enact","endow","envoy",
  "epoch","etude","exert","exude","eerie","ember","ensue","expel","extol","fable",
  "faith","false","fancy","feral","field","fifth","fifty","fight","final","first",
  "fixed","flame","flash","flesh","float","floor","flora","flour","fluid","flush",
  "focus","foggy","force","forge","forth","forum","found","frame","frank","freed",
  "fresh","front","frost","froze","fruit","fully","funny","famed","feint","fizzy",
  "flair","flare","flint","flock","floss","flout","flung","foamy","folio","folly",
  "forte","foyer","frail","frill","frond","fumed","fauna","farce","ferry","fetch",
  "fiery","filth","finch","flaky","flank","fleck","flirt","flute","focal","foray",
  "franc","froth","fungi","funky","furry","fuzzy","giant","given","globe","gloom",
  "glory","gloss","glove","going","grace","grade","grain","grand","grant","grasp",
  "grass","great","greed","green","greet","grief","grind","groan","gross","group",
  "grove","grown","guard","guess","guild","gusto","gaudy","gauze","gecko","giddy",
  "gland","glint","gloat","glyph","gnash","gnome","goofy","gorge","grabs","graft",
  "grimy","gruff","guava","guile","gulch","gizmo","glare","glaze","gleam","habit",
  "harsh","haste","haven","heavy","hedge","hence","hinge","hoist","holly","honor",
  "horse","hotel","house","human","humid","humor","hurry","hyper","haiku","halve",
  "handy","haunt","hazel","heady","henna","heron","hoard","hovel","husky","hardy",
  "harpy","hasty","hatch","heave","hefty","hippy","homer","ideal","image","imply",
  "index","indie","inert","inner","input","intro","irony","issue","ivory","irate",
  "inane","ingot","joint","joker","judge","juice","juicy","jumbo","karma","knife",
  "knock","known","laser","later","laugh","layer","learn","least","leave","ledge",
  "legal","lemon","level","light","limit","linen","lingo","liver","logic","loose",
  "lotus","lover","lower","lunar","lyric","larva","latte","leafy","leapt","lemma",
  "liner","llama","lodge","lofty","loopy","lowly","lumpy","lanky","leaky","lithe",
  "loamy","lobby","louse","lousy","loyal","lucky","lurid","lusty","magic","major",
  "maker","manor","maple","march","match","media","mercy","merit","metal","might",
  "minor","minus","mirth","model","money","month","moral","motor","motto","mound",
  "mount","mouse","mouth","moved","movie","muddy","music","matey","mealy","messy",
  "mired","misty","mossy","mousy","muggy","mulch","murky","musty","manly","manic",
  "mauve","miner","minty","moldy","naive","nerve","never","night","ninja","noble",
  "noise","north","noted","novel","nurse","nasty","nifty","nippy","nutty","occur",
  "ocean","offer","often","opera","optic","orbit","order","other","outer","owned",
  "oxide","ozone","onset","oddly","paint","panel","paper","party","patch","pause",
  "peace","pearl","phase","phone","piano","piece","pilot","pixel","pizza","plain",
  "plane","plant","plaza","pluck","plume","point","poker","polar","power","press",
  "price","pride","prime","print","prior","prize","probe","prone","proof","prose",
  "proud","prove","proxy","pulse","pupil","purge","papal","patsy","peaky","penal",
  "peppy","perky","pesky","petty","picky","pithy","podgy","pokey","polka","porky",
  "pouty","privy","pudgy","pulpy","plait","plank","pleat","plumb","plunk","queen",
  "query","quest","quick","quiet","quirk","quota","quote","radar","radio","raise",
  "rally","ranch","range","rapid","ratio","reach","realm","rebel","refer","reign",
  "relax","reply","rider","ridge","rifle","right","rigid","risky","rival","river",
  "robot","rocky","rough","round","route","rover","ruler","rural","rusty","ratty",
  "rebut","recut","reedy","refit","relic","remix","renew","repay","repel","retch",
  "retro","revue","ritzy","rivet","roomy","rowdy","rummy","runty","sadly","saint",
  "salad","sauce","scale","scare","scene","score","scout","screw","sense","serve",
  "setup","seven","shade","shake","shall","shame","shape","share","shark","sharp",
  "sheer","shelf","shell","shift","shine","shirt","shock","shoot","shore","short",
  "shout","sight","silly","since","sixth","sixty","skill","skull","slate","slave",
  "sleek","sleep","slice","slide","slope","smart","smash","smell","smile","smoke",
  "snake","solar","solid","solve","sonic","sorry","sound","south","space","spare",
  "spark","speak","speed","spend","spice","spill","spine","spite","split","spoke",
  "sport","spray","squad","stack","staff","stage","stain","stake","stall","stand",
  "stark","start","state","steam","steel","steep","steer","stern","stick","stiff",
  "still","sting","stock","stone","stood","store","storm","story","strap","straw",
  "stray","strip","stuck","study","stuff","style","sugar","suite","sunny","super",
  "surge","swamp","swear","sweep","sweet","swept","swift","swing","sword","synth",
  "salty","sandy","sappy","saucy","savvy","seamy","seedy","shady","shaky","skimp",
  "slant","slash","slosh","sloth","slump","smear","smoky","snide","sniff","softy",
  "soggy","soppy","soupy","spasm","spiny","splat","spoof","spook","squat","stale",
  "stamp","stomp","stony","stout","strew","strut","suave","sulky","sully","surly",
  "table","taken","taste","teach","tears","tease","tempo","tense","thorn","three",
  "threw","throw","tidal","tight","timer","tired","title","today","token","torch",
  "total","tough","tower","track","trade","trail","train","trait","trend","trial",
  "tribe","trick","tried","troop","trove","truck","truly","trust","truth","twist",
  "ultra","under","unify","union","unity","until","upper","usual","tacky","taffy",
  "talon","tangy","tardy","tatty","tawny","tepid","testy","tipsy","totem","tubby",
  "tulip","tunic","vague","valid","value","vapor","verse","video","vigor","viral",
  "virus","visit","vista","vital","vivid","vocal","voice","voter","vowel","vying",
  "verge","vexed","venom","vicar","waste","watch","water","weary","weave","wedge",
  "weird","which","while","white","whole","whose","wider","witch","woman","women",
  "world","worry","worst","worth","would","wound","write","wrong","wrote","warty",
  "weedy","wimpy","wizen","wormy","wacky","witty","windy","yacht","yield","young",
  "yours","youth","zebra","zesty","zippy","yucky","yummy","zonal"
];

// Deduplicate and enforce exactly 5 letters
const WORD_SET = new Set();
const WORD_LIST = WORDS.filter(w => {
  const k = w.toLowerCase();
  if (k.length !== 5 || WORD_SET.has(k)) return false;
  WORD_SET.add(k);
  return true;
});

function isValid(w) { return WORD_SET.has(w.toLowerCase()); }

// ─── STATE ────────────────────────────────────────────────────────────────────
let answer     = '';
let currentRow = 0;
let currentCol = 0;
let grid       = newGrid();
let tileStates = newGrid();
let gameOver   = false;
let keyMap     = {};
let stats      = loadStats();
let skipPending = false;

function newGrid() { return Array.from({length:6}, () => Array(5).fill('')); }

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  buildBoard();
  buildKeyboard();
  newGame();
  refreshMiniStats();
  setupModals();
  setupInstall();
  registerSW();
  document.addEventListener('keydown', onPhysicalKey);
  if (!localStorage.getItem('wp-seen-help')) openOverlay('help-overlay');
});

// ─── NEW GAME ─────────────────────────────────────────────────────────────────
function newGame() {
  answer     = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase();
  currentRow = 0;
  currentCol = 0;
  grid       = newGrid();
  tileStates = newGrid();
  gameOver   = false;
  keyMap     = {};
  skipPending = false;
  renderBoard();
  renderKeyboard();
}

// ─── BOARD ────────────────────────────────────────────────────────────────────
function buildBoard() {
  const board = document.getElementById('board');
  if (!board) return;
  board.innerHTML = '';
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 5; c++) {
      const t = document.createElement('div');
      t.className = 'tile';
      t.id = 't' + r + c;
      board.appendChild(t);
    }
  }
}

function renderBoard() {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 5; c++) {
      const t = document.getElementById('t' + r + c);
      if (!t) continue;
      const letter = grid[r][c];
      const state  = tileStates[r][c];
      t.textContent = letter;
      t.className   = 'tile' + (letter ? ' has-letter' : '') + (state ? ' ' + state : '');
    }
  }
}

// ─── KEYBOARD ─────────────────────────────────────────────────────────────────
var KB_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','DEL']
];

function buildKeyboard() {
  KB_ROWS.forEach(function(row, i) {
    var el = document.getElementById('kb-r' + (i + 1));
    if (!el) return;
    el.innerHTML = '';
    row.forEach(function(k) {
      var btn = document.createElement('button');
      btn.className   = 'key' + (k.length > 1 ? ' wide' : '');
      btn.textContent = k === 'DEL' ? '⌫' : k;
      btn.dataset.k   = k;
      btn.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        handleKey(k === 'DEL' ? '⌫' : k);
      });
      el.appendChild(btn);
    });
  });
}

function renderKeyboard() {
  document.querySelectorAll('.key').forEach(function(btn) {
    var k = btn.dataset.k === 'DEL' ? '⌫' : btn.dataset.k;
    var state = keyMap[k];
    btn.className = 'key' + (btn.dataset.k.length > 1 ? ' wide' : '') + (state ? ' ' + state : '');
  });
}

// ─── INPUT ────────────────────────────────────────────────────────────────────
function onPhysicalKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (e.key === 'Enter')     handleKey('ENTER');
  else if (e.key === 'Backspace') handleKey('⌫');
  else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
}

function handleKey(k) {
  if (gameOver) return;
  if (k === '⌫')         deleteLetter();
  else if (k === 'ENTER') submitGuess();
  else if (/^[A-Z]$/.test(k)) typeLetter(k);
}

function typeLetter(k) {
  if (currentCol >= 5) return;
  grid[currentRow][currentCol] = k;
  var t = document.getElementById('t' + currentRow + currentCol);
  if (t) { t.textContent = k; t.className = 'tile has-letter'; }
  currentCol++;
}

function deleteLetter() {
  if (currentCol <= 0) return;
  currentCol--;
  grid[currentRow][currentCol] = '';
  var t = document.getElementById('t' + currentRow + currentCol);
  if (t) { t.textContent = ''; t.className = 'tile'; }
}

// ─── SUBMIT ───────────────────────────────────────────────────────────────────
function submitGuess() {
  if (currentCol < 5) { shakeRow(currentRow); showToast('Not enough letters'); return; }
  var guess = grid[currentRow].join('');
  if (!isValid(guess)) { shakeRow(currentRow); showToast('Not in word list'); return; }

  var result = evaluate(guess.toUpperCase(), answer);

  flipReveal(currentRow, result, function() {
    var pri = { correct: 3, present: 2, absent: 1 };
    guess.toUpperCase().split('').forEach(function(ch, i) {
      if (!keyMap[ch] || pri[result[i]] > pri[keyMap[ch]]) keyMap[ch] = result[i];
    });
    renderKeyboard();

    var won = result.every(function(r) { return r === 'correct'; });
    if (won) {
      gameOver = true;
      recordResult(true, currentRow + 1);
      var msgs = ['Genius! 🧠','Magnificent! ✨','Impressive! 👏','Splendid! 🎉','Great! 😊','Phew! 😅'];
      setTimeout(function() {
        bounceRow(currentRow);
        showToast(msgs[Math.min(currentRow, 5)]);
        setTimeout(function() { showEndModal(true); }, 1600);
      }, 100);
    } else {
      currentRow++;
      if (currentRow >= 6) {
        gameOver = true;
        recordResult(false, 6);
        setTimeout(function() {
          showToast(answer, 2800);
          setTimeout(function() { showEndModal(false); }, 1800);
        }, 300);
      }
    }
  });
}

function evaluate(guess, ans) {
  var result = ['absent','absent','absent','absent','absent'];
  var aArr   = ans.split('');
  var gArr   = guess.split('');
  var used   = [false,false,false,false,false];
  for (var i = 0; i < 5; i++) {
    if (gArr[i] === aArr[i]) { result[i] = 'correct'; used[i] = true; gArr[i] = null; }
  }
  for (var i = 0; i < 5; i++) {
    if (!gArr[i]) continue;
    for (var j = 0; j < 5; j++) {
      if (!used[j] && gArr[i] === aArr[j]) { result[i] = 'present'; used[j] = true; break; }
    }
  }
  return result;
}

// ─── ANIMATIONS ───────────────────────────────────────────────────────────────
function flipReveal(row, result, done) {
  var step = 320;
  result.forEach(function(state, c) {
    var t = document.getElementById('t' + row + c);
    setTimeout(function() {
      t.classList.add('flip-in');
      setTimeout(function() {
        t.className   = 'tile ' + state;
        t.textContent = grid[row][c];
        tileStates[row][c] = state;
        t.classList.add('flip-out');
        setTimeout(function() { t.classList.remove('flip-out'); }, 250);
      }, 250);
    }, c * step);
  });
  setTimeout(done, 5 * step + 350);
}

function shakeRow(row) {
  for (var c = 0; c < 5; c++) {
    (function(col) {
      var t = document.getElementById('t' + row + col);
      if (!t) return;
      t.classList.add('row-shake');
      setTimeout(function() { t.classList.remove('row-shake'); }, 400);
    })(c);
  }
}

function bounceRow(row) {
  for (var c = 0; c < 5; c++) {
    (function(col) {
      var t = document.getElementById('t' + row + col);
      if (!t) return;
      setTimeout(function() {
        t.classList.add('win-bounce');
        setTimeout(function() { t.classList.remove('win-bounce'); }, 600);
      }, col * 70);
    })(c);
  }
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
var _toastTimer;
function showToast(msg, dur) {
  dur = dur || 1500;
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  clearTimeout(_toastTimer);
  el.classList.add('show');
  _toastTimer = setTimeout(function() { el.classList.remove('show'); }, dur);
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function defaultStats() { return { played:0, wins:0, streak:0, best:0, dist:[0,0,0,0,0,0] }; }
function loadStats() { return safeJSON(localStorage.getItem('wp-stats')) || defaultStats(); }
function saveStats() { localStorage.setItem('wp-stats', JSON.stringify(stats)); }

function recordResult(won, guesses) {
  localStorage.setItem('wp-seen-help','1');
  stats.played++;
  if (won) {
    stats.wins++;
    stats.streak++;
    stats.best = Math.max(stats.best, stats.streak);
    stats.dist[guesses - 1]++;
  } else {
    stats.streak = 0;
  }
  saveStats();
  refreshMiniStats();
}

function winPct() {
  return stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;
}

function refreshMiniStats() {
  setText('ms-played', stats.played);
  setText('ms-win',    winPct() + '%');
  setText('ms-streak', stats.streak);
  setText('ms-best',   stats.best);
}

function fillStats(prefix) {
  setText(prefix + '-played', stats.played);
  setText(prefix + '-win',    winPct() + '%');
  setText(prefix + '-streak', stats.streak);
  setText(prefix + '-best',   stats.best);
}

function renderDist(highlightRow) {
  var max = Math.max(1, Math.max.apply(null, stats.dist));
  var el  = document.getElementById('dist-chart');
  if (!el) return;
  el.innerHTML = stats.dist.map(function(n, i) {
    return '<div class="dist-row">' +
      '<span class="dist-num">' + (i+1) + '</span>' +
      '<div class="dist-bar-wrap">' +
      '<div class="dist-bar' + (highlightRow === i ? ' highlight' : '') + '" ' +
      'style="width:' + Math.max(8, (n/max)*100) + '%">' + n + '</div>' +
      '</div></div>';
  }).join('');
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function openOverlay(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeOverlay(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

function showEndModal(won) {
  setText('end-title', won ? '🎉 Brilliant!' : 'Game Over');
  var ab = document.getElementById('end-answer-box');
  if (ab) ab.style.display = won ? 'none' : 'block';
  setText('end-answer', answer);
  fillStats('es');
  renderDist(won ? currentRow : -1);
  setTimeout(function() { openOverlay('end-overlay'); }, 400);
}

function setupModals() {
  on('help-btn',    'click', function() { openOverlay('help-overlay'); });
  on('help-close',  'click', function() { closeOverlay('help-overlay'); });
  on('help-play',   'click', function() { closeOverlay('help-overlay'); });

  on('stats-btn',   'click', function() { fillStats('st'); renderDist(-1); openOverlay('stats-overlay'); });
  on('stats-close', 'click', function() { closeOverlay('stats-overlay'); });
  on('stats-close2','click', function() { closeOverlay('stats-overlay'); });

  on('end-close',   'click', function() { closeOverlay('end-overlay'); });
  on('end-close2',  'click', function() { closeOverlay('end-overlay'); });
  on('new-game-btn','click', function() { closeOverlay('end-overlay'); setTimeout(newGame, 200); });

  // Header reset button
  on('new-round-btn', 'click', function() {
    if (gameOver || currentRow === 0) {
      skipPending = false;
      newGame();
      return;
    }
    if (skipPending) {
      skipPending = false;
      newGame();
    } else {
      skipPending = true;
      showToast('Tap again to skip this word ↺', 2000);
      setTimeout(function() { skipPending = false; }, 2100);
    }
  });

  // Backdrop close
  document.querySelectorAll('.overlay').forEach(function(ov) {
    ov.addEventListener('click', function(e) {
      if (e.target === ov) ov.classList.remove('open');
    });
  });
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function on(id, evt, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener(evt, fn);
}
function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}
function safeJSON(s) { try { return s ? JSON.parse(s) : null; } catch(e) { return null; } }

// ─── SERVICE WORKER ───────────────────────────────────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function() {});
  }
}

// ─── INSTALL PROMPT ───────────────────────────────────────────────────────────
var _deferredPrompt = null;
function setupInstall() {
  var banner = document.getElementById('install-banner');
  if (!banner) return;

  if (localStorage.getItem('wp-install-dismissed')) {
    banner.style.display = 'none';
    return;
  }

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    _deferredPrompt = e;
    setTimeout(function() { banner.classList.add('show'); }, 4000);
  });

  on('ib-install-btn', 'click', function() {
    banner.classList.remove('show');
    if (_deferredPrompt) {
      _deferredPrompt.prompt();
      _deferredPrompt.userChoice.then(function(r) {
        _deferredPrompt = null;
        if (r.outcome === 'accepted') showToast('Installing…');
      });
    }
  });

  on('ib-dismiss', 'click', function() {
    banner.classList.remove('show');
    localStorage.setItem('wp-install-dismissed', '1');
  });
}

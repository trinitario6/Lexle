'use strict';

// ─── WORD LIST (1000+ unique 5-letter words) ──────────────────────────────────
const RAW_WORDS = [
  // A
  "about","above","abuse","actor","acute","admit","adopt","adult","after","again",
  "agent","agree","ahead","alarm","album","alert","alike","align","alive","alley",
  "allow","alone","along","altar","alter","angel","angle","angry","ankle","annex",
  "apart","apple","apply","apron","argue","arise","armor","arose","array","arrow",
  "atlas","atone","audio","audit","avoid","awake","award","aware","awful","abbey",
  "abbot","abhor","abide","abler","abode","acorn","acres","acrid","adapt","adept",
  "adorn","affix","afoot","agape","agate","agile","aging","aglow","agony","aired",
  "aisle","allay","allot","alloy","aloft","aloud","alpha","amaze","amber","amble",
  "amend","amiss","among","ample","amuse","annoy","annul","anode","antsy","aorta",
  "aping","ardor","artsy","azure","abyss","adage","alias","algae","anime","antic",
  "aphid","aptly","arbor","arson","ashen","attic","avian","axing","aorta",
  // B
  "badly","baker","banjo","basic","basis","batch","beach","beard","beast","began",
  "begin","being","below","bench","bevel","birth","black","blade","blame","bland",
  "blank","blast","blaze","bleed","blend","bless","blind","block","blood","bloom",
  "blown","blues","blunt","board","bonus","boost","booth","bound","brain","brand",
  "brave","bread","break","breed","brick","bride","brief","bring","brisk","broad",
  "broke","brook","brown","brush","brute","build","built","bunch","burst","buyer",
  "balmy","banal","bandy","baron","beady","beige","belle","belly","beret","bezel",
  "bilge","binge","biome","birch","bleat","blimp","blink","bliss","bloat","bloke",
  "bluff","bogey","bogus","booze","botch","boxer","braid","brash","brawl","brawn",
  "brine","broil","broth","buggy","bulge","bully","bumpy","burly","butch","byway",
  "bytes","bylaw","buxom","birch","bulky","bushy","busty","bitty","balsa","baste",
  // C
  "carry","catch","cause","cease","chair","chaos","charm","chart","chase","cheap",
  "check","cheek","chess","chest","chief","child","chill","chunk","civil","claim",
  "clamp","clash","class","clean","clear","clerk","click","cliff","climb","cling",
  "clock","clone","close","cloth","cloud","clout","coach","coast","color","comet",
  "comic","coral","count","court","cover","craft","crash","crazy","cream","creek",
  "crisp","cross","crowd","crown","cruel","crush","curve","cycle","cache","caddy",
  "camel","cameo","canoe","carat","carve","cavil","cello","chafe","champ","chant",
  "chasm","chewy","chide","chive","chomp","chore","chump","cinch","clack","cleat",
  "cleft","clink","cloak","clown","cluck","codec","coils","colon","combo","combs",
  "comma","condo","conic","corny","coupe","coven","covet","crank","creak","crimp",
  "crone","crony","crops","crumb","cubic","cubit","cumin","curry","cynic","cedar",
  "candy","cabin","cable","civic","crimp","crane","crape","crass","crawl","crisp",
  // D
  "daily","dance","death","debut","delay","delta","dense","depot","depth","derby",
  "devil","digit","disco","diver","dizzy","dodge","doing","doubt","dough","draft",
  "drain","drama","dream","dress","drift","drink","drive","drove","drown","dryer",
  "dusty","dwarf","daisy","dally","datum","daunt","dawns","decal","decoy","deign",
  "deity","delve","detox","dingo","dirge","dodgy","domed","donut","dopey","dorky",
  "doted","dowdy","dowel","drawl","drape","drawn","dread","dregs","drool","druid",
  "dumps","dunce","duped","dingo","daffy","dainty","dingy","dimly","dolly","dowse",
  // E
  "eager","early","earth","eight","elite","email","embed","empty","enjoy","enter",
  "entry","equal","error","event","every","exact","extra","eclat","edify","eerie",
  "elbow","elder","emcee","enemy","epoch","erode","ethos","evade","exalt","exist",
  "expel","extol","exult","elegy","elate","endow","enact","emote","envoy","etude",
  "exert","exude","essay","evoke","extol","elfin","elude","erect",
  // F
  "fable","facet","faith","false","fancy","feral","field","fifth","fifty","fight",
  "final","first","fixed","flame","flash","flask","flesh","float","floor","flora",
  "flour","fluid","flush","focus","foggy","force","forge","forth","forum","found",
  "frame","frank","freed","fresh","front","frost","froze","fruit","fully","funny",
  "fatal","fauna","feign","femur","ferny","finch","fjord","fleck","flung","flyby",
  "foamy","fugue","flair","flare","fizzy","feint","fatty","famed","forte","foyer",
  "folly","frond","frill","frail","fumed","fiord","flint","flock","floss","flout",
  "flunk","fetid","fazen","fazed","flaky","fizzy","furry","fussy","fuzzy",
  // G
  "giant","given","globe","gloom","glory","gloss","glove","going","grace","grade",
  "grain","grand","grant","grasp","grass","great","greed","green","greet","grief",
  "grind","groan","gross","group","grove","grown","guard","guess","guild","gusto",
  "gaily","gamut","gavel","glare","glean","glide","glint","golem","golly","gravy",
  "graze","grebe","grill","grime","grimy","gripe","groin","grope","grout","growl",
  "gruel","grunt","guile","gummy","gypsy","gaudy","gauze","gecko","giddy","gland",
  "gloat","glyph","gnash","gnome","goofy","gorge","grabs","graft","gruff","guava",
  "gulch","girly","gandy","globs","gulpy","gunky","gaffe","gulag","gamey",
  // H
  "habit","harsh","haste","haven","heavy","hedge","hence","hinge","hippo","hoist",
  "holly","honor","horse","hotel","house","human","humid","humor","hurry","hyper",
  "haiku","halve","handy","haunt","hazel","heady","henna","herby","heron","hippy",
  "hoard","hoary","hovel","husky","harpy","hatch","havoc","hefty","helix","hertz",
  "hulky","huffy","homey","horsy","hammy","harpy","heist","hilly","hinty","hippo",
  // I
  "ideal","image","imply","inbox","index","indie","inert","inner","input","intel",
  "intro","irony","issue","ivory","irate","idiot","igloo","ingot","ionic","itchy",
  "infer","incur","inane","inter","ionic","inked","irked",
  // J
  "jazzy","joint","joker","joust","judge","juice","juicy","jumbo","jelly","jerky",
  "jiffy","jewel","juror","jaded","janky","jargy","jokey","jumpy","jazzy",
  // K
  "karma","kneel","knife","knock","known","kayak","knead","kudzu","knack","knave",
  "knoll","kinky","kooky","kelpy","krill","kitty","kapow",
  // L
  "laser","later","laugh","layer","learn","least","leave","ledge","legal","lemon",
  "level","light","limit","linen","lingo","liver","logic","loose","lotus","lover",
  "lower","lunar","lusty","lyric","lapel","lapse","larva","latte","leafy","leapt",
  "lemma","liner","llama","lodge","lofty","loopy","lowly","lumpy","lacey","lardy",
  "lanky","leaky","leech","lipid","lithe","loamy","loath","lobby","loner","louse",
  "lumpy","lymph","leery","libel","local","lucid","lusty","lyric","lousy","loopy",
  // M
  "magic","major","maker","manor","maple","march","match","maxim","media","mercy",
  "merit","metal","might","minor","minus","mirth","model","money","month","moral",
  "motor","motto","mound","mount","mouse","mouth","moved","movie","muddy","music",
  "mambo","melee","melon","metro","micro","milky","mimic","miser","moist","molar",
  "moose","morph","matey","mealy","messy","mired","misty","moles","mossy","mousy",
  "muggy","mulch","murky","musty","myrrh","magma","manly","marvy","matey","mealy",
  "minty","misty","moldy","moody","mousy","muddy","mulch","mushy","murky","mangy",
  // N
  "naive","nerve","never","night","ninja","noble","noise","north","noted","novel",
  "nurse","nymph","nasty","nifty","nippy","nubby","nutty","nadir","nomad","nooks",
  "nervy","nippy","nobly","notch","nifty","noisy","nervy","navel","needy","nitty",
  // O
  "occur","ocean","offer","often","opera","optic","orbit","order","other","ought",
  "outer","owned","oxide","ozone","oddly","onset","owing","otter","offal","oaken",
  "obese","odder","oldie","olive","ombre","onset","oozed","opine","overt","owing",
  // P
  "paint","panel","paper","party","patch","pause","peace","pearl","phase","phone",
  "piano","piece","pilot","pixel","pizza","plain","plane","plant","plaza","plead",
  "pluck","plume","point","poker","polar","posed","power","press","price","pride",
  "prime","print","prior","prize","probe","prone","proof","prose","proud","prove",
  "proxy","pulse","pupil","purge","pagan","parka","paved","payer","penal","perch",
  "petal","petty","phony","pinch","plaid","plank","plumb","plunk","podgy","pokey",
  "polka","poppy","posse","potty","prawn","preen","prism","privy","prude","prune",
  "psalm","pudgy","puffy","punky","purse","pushy","pouty","porky","pongy","pithy",
  "picky","peeve","pesky","perky","peppy","patsy","papal","paddy","pally","pansy",
  "pasty","patchy","peppy","perky","petty","picky","piney","pixie","plump","plunk",
  "plush","polly","pondy","poppy","porky","potty","pouty","privy","prosy","pudgy",
  // Q
  "queen","query","quest","queue","quick","quiet","quirk","quota","quote","quaff",
  "qualm","quell","quaky","quill","quirk","quirt","quota",
  // R
  "radar","radio","raise","rally","ranch","range","rapid","ratio","reach","realm",
  "rebel","refer","reign","relax","reply","rider","ridge","rifle","right","rigid",
  "risky","rival","river","robot","rocky","rouge","rough","round","route","rover",
  "ruler","rural","rusty","racer","ramen","randy","rebus","redux","regal","remix",
  "renew","repay","repel","retch","retro","revue","ritzy","rivet","roomy","rowdy",
  "rummy","runty","rebut","recut","reedy","refit","relic","repot","rerun","reuse",
  "rigor","rogue","rugby","rainy","rangy","ratty","rawly","reedy","ritzy","roomy",
  "rowdy","ruddy","rugby","rusty","randy","riled","rigid","rinky","risky","ritzy",
  // S
  "sadly","saint","salad","sauce","scale","scare","scene","score","scout","screw",
  "sedan","sense","serve","setup","seven","shade","shake","shall","shame","shape",
  "share","shark","sharp","sheer","shelf","shell","shift","shine","shirt","shock",
  "shoot","shore","short","shout","sight","sigma","silly","since","sixth","sixty",
  "skill","skull","slate","slave","sleek","sleep","slice","slide","slime","slope",
  "smart","smash","smell","smile","smoke","snake","solar","solid","solve","sonic",
  "sorry","sound","south","space","spare","spark","speak","speed","spend","spice",
  "spill","spine","spite","split","spoke","sport","spray","squad","stack","staff",
  "stage","stain","stake","stall","stand","stark","start","state","steam","steel",
  "steep","steer","stern","stick","stiff","still","sting","stock","stone","stood",
  "store","storm","story","strap","straw","stray","strip","stuck","study","stuff",
  "style","sugar","suite","sunny","super","surge","swamp","swear","sweep","sweet",
  "swept","swift","swing","sword","swore","synth","salty","sandy","sappy","saucy",
  "savvy","seamy","seedy","shady","shaky","silty","sissy","skimp","slant","slash",
  "slosh","sloth","slump","smear","smoky","snaky","snide","sniff","softy","soggy",
  "soppy","soupy","spasm","spiny","splat","spoof","spook","spurn","spurt","squat",
  "staid","stagy","stale","stamp","stomp","stony","stout","strew","strut","suave",
  "sulky","sully","surly","satay","scald","scalp","scamp","scant","scowl","scrub",
  "seize","serge","shank","shirk","shrub","shrug","shuck","shunt","skiff","slain",
  "sleet","slick","slink","smite","snare","sneer","snore","snort","snout","snowy",
  "snuff","sober","spawn","speck","spiel","spike","spire","spoil","spool","spore",
  "spout","sprig","spunk","squab","steak","stave","swain","swami","swank","sward",
  "swung","synod","scamp","scone","scoop","scour","scowl","scrub","sedan","seedy",
  "serum","silky","simpy","siren","sixty","skimp","slimy","slurp","smock","spade",
  "spall","spang","spoof","spoil","spool","spore","sprat","spree","saucy","saucy",
  // T
  "table","taken","taste","teach","tears","tease","tempo","tense","terra","thorn",
  "three","threw","throw","tidal","tight","timer","tired","title","today","token",
  "tonal","torch","total","tough","tower","track","trade","trail","train","trait",
  "trend","trial","tribe","trick","tried","trill","troop","trove","truck","truly",
  "trust","truth","tuner","twist","tying","tacky","taffy","talon","tangy","tardy",
  "tatty","tawny","tepid","testy","tipsy","totem","tubby","tulip","tunic","taint",
  "tango","taunt","theft","thump","tithe","tonic","toque","topaz","torso","trawl",
  "triad","trull","tryst","tuber","tumor","turbo","twang","tweak","tweed","tanky",
  "tawny","tepid","terse","testy","tippy","toffy","toity","tonal","trashy","tubby",
  "tufty","tulip","turvy","twixt","typic","tacky","taint","talky","tangy","tardy",
  // U
  "ultra","uncle","under","unify","union","unity","until","upper","usher","usual",
  "ulcer","umbra","uncut","unfed","unmet","unpin","unwed","upset","usurp","uvula",
  "udder","ulnar","ultra","umbra","unfit","unwed","upend","uptown",
  // V
  "vague","valid","value","vapor","verse","video","vigor","viral","virus","visit",
  "vista","vital","vivid","vocal","voice","voter","vowel","vying","valor","vegan",
  "vigil","vinyl","viola","viper","vomit","veiny","verge","vexed","venom","vapid",
  "vaunt","vicar","vying","vexed","vigil","vroom",
  // W
  "waste","watch","water","weary","weave","wedge","weird","which","while","white",
  "whole","whose","wider","witch","woman","women","world","worry","worst","worth",
  "would","wound","write","wrong","wrote","waltz","warty","washy","weedy","whelk",
  "whiff","whirl","whisk","wimpy","wince","windy","wispy","wizen","wrack","wrath",
  "wreak","wreck","wring","wrist","wooly","wormy","waken","wally","waddy","weedy",
  "whiny","woozy","wordy","wacky","wafty","waify","warty","waspy","weedy","wimpy",
  "windy","witty","wobbly","wonky","woozy","wordy","wrath","wrung",
  // Y-Z
  "yacht","yield","young","yours","youth","zebra","zesty","zippy","yucky","yummy",
  "zonal","zones","zooms","zappy","zingy","zippy","zesty","yappy","yowly",
];

// Deduplicate and enforce exactly 5 letters
const _seen = new Set();
const WORD_LIST = RAW_WORDS.filter(w => {
  const k = w.trim().toLowerCase();
  if (k.length !== 5 || _seen.has(k)) return false;
  _seen.add(k); return true;
});

function ALL_VALID(w) { return _seen.has(w.toLowerCase().trim()); }

// ─── STATE ────────────────────────────────────────────────────────────────────
let answer     = '';
let currentRow = 0;
let currentCol = 0;
let grid       = newGrid();
let tileStates = newGrid();
let gameOver   = false;
let keyMap     = {};
let stats      = loadStats();

function newGrid() { return Array.from({length:6}, () => Array(5).fill('')); }

// ─── BOOT ─────────────────────────────────────────────────────────────────────
(function init() {
  buildBoard();
  buildKeyboard();
  startFreshGame();
  refreshMiniStats();
  setupModals();
  setupInstall();
  registerSW();
  document.addEventListener('keydown', onPhysicalKey);
  if (!localStorage.getItem('wp-seen-help')) openOverlay('help-overlay');
})();

// ─── WORD SELECTION ───────────────────────────────────────────────────────────
function randomWord() {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase();
}

function startFreshGame() {
  answer = randomWord();
  currentRow = 0; currentCol = 0;
  grid = newGrid(); tileStates = newGrid();
  gameOver = false; keyMap = {};
  renderBoard(); renderKeyboard();
}

// ─── BOARD ────────────────────────────────────────────────────────────────────
function buildBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  for (let r = 0; r < 6; r++)
    for (let c = 0; c < 5; c++) {
      const t = document.createElement('div');
      t.className = 'tile'; t.id = `t${r}${c}`;
      board.appendChild(t);
    }
}

function renderBoard() {
  for (let r = 0; r < 6; r++)
    for (let c = 0; c < 5; c++) {
      const t   = document.getElementById(`t${r}${c}`);
      const ltr = grid[r][c];
      const st  = tileStates[r][c];
      t.textContent = ltr;
      t.className = 'tile' + (ltr ? ' has-letter' : '') + (st ? ` ${st}` : '');
    }
}

// ─── KEYBOARD ─────────────────────────────────────────────────────────────────
const KB = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫'],
];

function buildKeyboard() {
  KB.forEach((row, i) => {
    const el = document.getElementById(`kb-r${i+1}`);
    el.innerHTML = '';
    row.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'key' + (k.length > 1 ? ' wide' : '');
      btn.textContent = k; btn.dataset.k = k;
      btn.addEventListener('pointerdown', e => { e.preventDefault(); handleKey(k); });
      el.appendChild(btn);
    });
  });
}

function renderKeyboard() {
  document.querySelectorAll('.key').forEach(btn => {
    const k = btn.dataset.k;
    btn.className = 'key' + (k.length > 1 ? ' wide' : '') + (keyMap[k] ? ` ${keyMap[k]}` : '');
  });
}

// ─── INPUT ────────────────────────────────────────────────────────────────────
function onPhysicalKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (e.key === 'Enter')          handleKey('ENTER');
  else if (e.key === 'Backspace') handleKey('⌫');
  else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
}

function handleKey(k) {
  if (gameOver) return;
  if (k === '⌫')           deleteLetter();
  else if (k === 'ENTER')  submitGuess();
  else if (/^[A-Z]$/.test(k)) typeLetter(k);
}

function typeLetter(k) {
  if (currentCol >= 5) return;
  grid[currentRow][currentCol] = k;
  const t = document.getElementById(`t${currentRow}${currentCol}`);
  t.textContent = k; t.className = 'tile has-letter';
  currentCol++;
}

function deleteLetter() {
  if (currentCol <= 0) return;
  currentCol--;
  grid[currentRow][currentCol] = '';
  const t = document.getElementById(`t${currentRow}${currentCol}`);
  t.textContent = ''; t.className = 'tile';
}

// ─── GUESS ────────────────────────────────────────────────────────────────────
function submitGuess() {
  if (currentCol < 5) { shakeRow(currentRow); toast('Not enough letters'); return; }
  const guess = grid[currentRow].join('');
  if (!ALL_VALID(guess)) { shakeRow(currentRow); toast('Not in word list'); return; }

  const result = evaluate(guess.toUpperCase(), answer);
  flipReveal(currentRow, result, () => {
    const pri = { correct:3, present:2, absent:1 };
    guess.toUpperCase().split('').forEach((ch, i) => {
      if (!keyMap[ch] || pri[result[i]] > pri[keyMap[ch]]) keyMap[ch] = result[i];
    });
    renderKeyboard();

    const won = result.every(r => r === 'correct');
    if (won) {
      gameOver = true;
      recordResult(true, currentRow + 1);
      const msgs = ['Genius! 🧠','Magnificent! ✨','Impressive! 👏','Splendid! 🎉','Great! 😊','Phew! 😅'];
      setTimeout(() => {
        bounceRow(currentRow);
        toast(msgs[Math.min(currentRow, 5)]);
        setTimeout(() => showEndModal(true), 1600);
      }, 100);
    } else {
      currentRow++;
      if (currentRow >= 6) {
        gameOver = true;
        recordResult(false, 6);
        setTimeout(() => {
          toast(answer, 2800);
          setTimeout(() => showEndModal(false), 1800);
        }, 300);
      }
    }
  });
}

function evaluate(guess, answer) {
  const result = Array(5).fill('absent');
  const aArr = answer.split('');
  const gArr = guess.split('');
  const used  = Array(5).fill(false);
  for (let i = 0; i < 5; i++) {
    if (gArr[i] === aArr[i]) { result[i] = 'correct'; used[i] = true; gArr[i] = null; }
  }
  for (let i = 0; i < 5; i++) {
    if (!gArr[i]) continue;
    for (let j = 0; j < 5; j++) {
      if (!used[j] && gArr[i] === aArr[j]) { result[i] = 'present'; used[j] = true; break; }
    }
  }
  return result;
}

// ─── ANIMATIONS ───────────────────────────────────────────────────────────────
function flipReveal(row, result, done) {
  const step = 320;
  result.forEach((state, c) => {
    const t = document.getElementById(`t${row}${c}`);
    setTimeout(() => {
      t.classList.add('flip-in');
      setTimeout(() => {
        t.className = `tile ${state}`;
        t.textContent = grid[row][c];
        t.classList.add('flip-out');
        setTimeout(() => t.classList.remove('flip-out'), 250);
        tileStates[row][c] = state;
      }, 250);
    }, c * step);
  });
  setTimeout(done, 5 * step + 350);
}

function shakeRow(row) {
  for (let c = 0; c < 5; c++) {
    const t = document.getElementById(`t${row}${c}`);
    t.classList.add('row-shake');
    setTimeout(() => t.classList.remove('row-shake'), 400);
  }
}

function bounceRow(row) {
  for (let c = 0; c < 5; c++) {
    const t = document.getElementById(`t${row}${c}`);
    setTimeout(() => {
      t.classList.add('win-bounce');
      setTimeout(() => t.classList.remove('win-bounce'), 600);
    }, c * 70);
  }
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
let _toastTimer;
function toast(msg, dur = 1500) {
  const el = document.getElementById('toast');
  el.textContent = msg; clearTimeout(_toastTimer);
  el.classList.add('show');
  _toastTimer = setTimeout(() => el.classList.remove('show'), dur);
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function defaultStats() { return { played:0, wins:0, streak:0, best:0, dist:[0,0,0,0,0,0] }; }
function loadStats()    { return safeJSON(localStorage.getItem('wp-stats')) || defaultStats(); }
function saveStats()    { localStorage.setItem('wp-stats', JSON.stringify(stats)); }

function recordResult(won, guesses) {
  localStorage.setItem('wp-seen-help','1');
  stats.played++;
  if (won) {
    stats.wins++; stats.streak++;
    stats.best = Math.max(stats.best, stats.streak);
    stats.dist[guesses - 1]++;
  } else { stats.streak = 0; }
  saveStats(); refreshMiniStats();
}

function winPct() { return stats.played ? Math.round((stats.wins / stats.played) * 100) : 0; }

function refreshMiniStats() {
  document.getElementById('ms-played').textContent = stats.played;
  document.getElementById('ms-win').textContent    = winPct() + '%';
  document.getElementById('ms-streak').textContent = stats.streak;
  document.getElementById('ms-best').textContent   = stats.best;
}

function fillStats(prefix) {
  document.getElementById(`${prefix}-played`).textContent = stats.played;
  document.getElementById(`${prefix}-win`).textContent    = winPct() + '%';
  document.getElementById(`${prefix}-streak`).textContent = stats.streak;
  document.getElementById(`${prefix}-best`).textContent   = stats.best;
}

function renderDist(highlightRow) {
  const max = Math.max(1, ...stats.dist);
  document.getElementById('dist-chart').innerHTML = stats.dist.map((n, i) => `
    <div class="dist-row">
      <span class="dist-num">${i+1}</span>
      <div class="dist-bar-wrap">
        <div class="dist-bar ${highlightRow === i ? 'highlight' : ''}"
             style="width:${Math.max(8, (n/max)*100)}%">${n}</div>
      </div>
    </div>`).join('');
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function openOverlay(id)  { document.getElementById(id).classList.add('open'); }
function closeOverlay(id) { document.getElementById(id).classList.remove('open'); }

function showEndModal(won) {
  document.getElementById('end-title').textContent = won ? '🎉 Brilliant!' : 'Game Over';
  const ab = document.getElementById('end-answer-box');
  ab.style.display = won ? 'none' : 'block';
  document.getElementById('end-answer').textContent = answer;
  fillStats('es'); renderDist(won ? currentRow : -1);
  setTimeout(() => openOverlay('end-overlay'), 400);
}

function setupModals() {
  document.getElementById('help-btn').addEventListener('click', () => openOverlay('help-overlay'));
  ['help-close','help-play'].forEach(id =>
    document.getElementById(id)?.addEventListener('click', () => closeOverlay('help-overlay')));

  document.getElementById('stats-btn').addEventListener('click', () => {
    fillStats('st'); renderDist(-1); openOverlay('stats-overlay');
  });
  ['stats-close','stats-close2'].forEach(id =>
    document.getElementById(id)?.addEventListener('click', () => closeOverlay('stats-overlay')));

  ['end-close','end-close2'].forEach(id =>
    document.getElementById(id)?.addEventListener('click', () => closeOverlay('end-overlay')));

  document.getElementById('new-game-btn').addEventListener('click', () => {
    closeOverlay('end-overlay');
    startFreshGame();
  });

  // Header reset button — works at any time; double-tap to skip mid-game
  let _skipPending = false;
  document.getElementById('new-round-btn').addEventListener('click', () => {
    if (gameOver || currentRow === 0) {
      _skipPending = false;
      startFreshGame();
      return;
    }
    if (_skipPending) {
      _skipPending = false;
      startFreshGame();
    } else {
      _skipPending = true;
      toast('Tap again to start a new word ↺', 2000);
      setTimeout(() => { _skipPending = false; }, 2100);
    }
  });

  document.querySelectorAll('.overlay').forEach(ov =>
    ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('open'); }));
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function safeJSON(s) { try { return s ? JSON.parse(s) : null; } catch { return null; } }

// ─── SERVICE WORKER ───────────────────────────────────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ─── INSTALL PROMPT ───────────────────────────────────────────────────────────
let _deferredPrompt = null;
function setupInstall() {
  if (localStorage.getItem('wp-install-dismissed')) return;
  const banner = document.getElementById('install-banner');
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); _deferredPrompt = e;
    setTimeout(() => banner.classList.add('show'), 4000);
  });
  document.getElementById('ib-install-btn').addEventListener('click', async () => {
    banner.classList.remove('show');
    if (_deferredPrompt) {
      _deferredPrompt.prompt();
      const { outcome } = await _deferredPrompt.userChoice;
      _deferredPrompt = null;
      if (outcome === 'accepted') toast('Installing…');
    }
  });
  document.getElementById('ib-dismiss').addEventListener('click', () => {
    banner.classList.remove('show');
    localStorage.setItem('wp-install-dismissed','1');
  });
}

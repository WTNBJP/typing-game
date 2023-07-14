const content = document.getElementById('content');
const sentenceJP = document.getElementById('sentence-jp');
const sentence = document.getElementById('sentence');
const sentenceEnglish = document.getElementById('sentenceEnglish');
const buttonJP = document.getElementById('JP');
const buttonEN = document.getElementById('EN');
const miss = document.getElementById('miss');
const count = document.getElementById('counter');
const typed = document.getElementById('typed');
const scores = document.getElementById('scores');
const missScore = document.getElementById('miss-score');
const persent = document.getElementById('persent');
const correctSound = new Audio('./sound/correct.mp3');
const missSound = new Audio('./sound/miss.mp3');
const sentenceCorrect = new Audio('./sound/sentenceCorrect.mp3');
let JapaneseSentence1;
let JapaneseSentence2;
let ArratJapaneseSentece1;
let EnglishSentence;
let ArrayEnglishSentence;
let key;
let spanTag;
let sumOfSpan;
let time = 299;
let correct = 0;
let mistake = 0;
let score = 0;


const typeEnglish = [
  "The quick brown fox jumps over the lazy dog.",
  "I love coding in JavaScript.",
  "OpenAI's ChatGPT is an amazing language model.",
  "Learning new things is always exciting.",
  "The sun is shining brightly today.",
  "My favorite color is blue.",
  "She plays the piano beautifully.",
  "I enjoy reading books in my free time.",
  "The world is full of possibilities.",
  "Life is what you make it.",
  "Coding challenges help improve programming skills.",
  "The cat meowed loudly.",
  "I dream of traveling the world.",
  "Time flies when you're having fun.",
  "Success comes to those who work hard.",
  "Don't worry, be happy!",
  "The coffee shop is a great place to relax.",
  "I like to watch movies on weekends.",
  "Music soothes the soul.",
  "The ocean waves are mesmerizing.",
  "Hard work pays off in the end.",
  "Laughter is the best medicine.",
  "I prefer tea over coffee.",
  "The moonlight illuminated the night sky.",
  "Let's go for a walk in the park.",
  "The mountains are calling.",
  "Life is a journey, not a destination.",
  "She danced gracefully on stage.",
  "Learning languages broadens your horizons.",
  "The smell of fresh flowers is delightful.",
  "Challenges make you stronger.",
  "I enjoy cooking meals for my friends.",
  "The world needs more kindness.",
  "Stay positive and keep smiling.",
  "A cup of hot chocolate is perfect on a cold day.",
  "I like to explore new places.",
  "Books can transport you to different worlds.",
  "The sound of rain is soothing.",
  "Learning is a lifelong process.",
  "The future belongs to those who believe in their dreams.",
  "Life is too short to hold grudges.",
  "She sings with passion and emotion.",
  "I find joy in the little things.",
  "The city never sleeps.",
  "I appreciate the beauty of nature.",
  "Knowledge is power.",
  "The smell of freshly baked bread is irresistible.",
  "I enjoy going for long walks.",
  "The possibilities are endless.",
  "Every day is a new beginning.",
  "She has a heart of gold.",
  "I love the sound of waves crashing on the shore.",
  "Music brings people together.",
  "The rain washed away all the worries.",
  "Happiness is a state of mind.",
  "I like to challenge myself to learn new skills.",
  "The world is a vast and diverse place.",
  "The stars twinkle in the night sky.",
  "I believe in the power of positive thinking.",
  "The smell of freshly brewed coffee is invigorating.",
  "Life is meant to be lived to the fullest.",
  "She has a beautiful smile.",
  "I enjoy spending time with loved ones.",
  "The autumn leaves are a sight to behold.",
  "Dream big and never give up.",
  "The wind whispered through the trees.",
  "I am grateful for all the opportunities life has given me.",
  "The sound of children's laughter is contagious.",
  "I find inspiration in the beauty of nature.",
  "The world is full of interesting people.",
  "I strive to be the best version of myself.",
  "The first step is always the hardest.",
  "I like to watch the sunset.",
  "The smell of the ocean is refreshing.",
  "Kindness costs nothing.",
  "I enjoy solving puzzles.",
  "The journey is as important as the destination.",
  "I believe in the power of love.",
  "The chirping of birds signals the arrival of spring.",
  "I am constantly learning and growing.",
  "The smell of freshly cut grass is invigorating.",
  "Life is a beautiful gift.",
  "She has a talent for painting.",
  "I find peace in solitude.",
  "The sound of a baby's laughter is heartwarming.",
  "I believe in the inherent goodness of people.",
  "The smell of rain on a hot day is refreshing.",
  "Success is a result of hard work and determination.",
  "I enjoy watching the stars at night.",
  "The world is full of opportunities waiting to be seized.",
  "I am blessed with wonderful friends and family.",
  "The sound of waves crashing on the rocks is powerful.",
  "I find joy in helping others.",
  "The key to happiness is gratitude.",
  "I am constantly amazed by the wonders of the universe.",
  "The smell of freshly baked cookies is delightful.",
  "Life is too precious to waste.",
  "She has a way with words.",
  "I enjoy taking photographs of beautiful landscapes.",
  "The sound of a waterfall is soothing to the soul.",
  "Dreams have the power to become reality."
];

const typeJapanese = [
  "今日は晴れています",
  "私は日本料理が好きです",
  "旅行に行きたいです",
  "美味しいコーヒーが飲みたいです",
  "新しい言語を学ぶのは楽しいです",
  "友達と一緒に映画を見に行きました",
  "毎日の運動は健康に良いです",
  "日本の文化に興味があります",
  "家族と一緒に過ごす時間は幸せです",
  "音楽は心を癒します",
  "おいしい料理を作るのが好きです",
  "自然の中を散歩するのはリラックスできます",
  "努力すれば夢は叶います",
  "新しい本を読むのが楽しみです",
  "人生は挑戦の連続です",
  "日本の花火は美しいです",
  "時間は貴重な資源です",
  "友達と一緒に旅行に行くのは楽しいです",
  "笑顔は心を温かくします",
  "外国の文化を学ぶのは面白いです",
  "毎日の積み重ねが成果を生みます",
  "日本の四季は素晴らしいです",
  "新しい技術に挑戦するのは刺激的です",
  "健康な食事を摂ることは大切です",
  "学ぶことは人生の財産です",
  "家族との食事は楽しいひとときです",
  "綺麗な景色を見ると心が落ち着きます",
  "困難を乗り越えることで成長できます",
  "音楽は人々を結びつけます",
  "一日の疲れを癒すのは良い睡眠です",
  "ポジティブな考え方が幸せを引き寄せます",
  "お気に入りの本を読むのはリラックスできます",
  "人生は一度きりですから、充実した毎日を送りたいです",
  "美しい自然に感謝します",
  "目標に向かって努力しましょう",
  "おいしいパンの香りはたまりません",
  "散歩することで心が落ち着きます",
  "可能性は無限大です",
  "今日という一日は新たな始まりです",
  "心優しい人に出会えると幸せです",
  "波の音を聞くと癒されます",
  "音楽は心を豊かにします",
  "雨が心を洗い流します",
  "幸せは心の中にあります",
  "新しいスキルを学ぶことで自己成長できます",
  "世界は多様で興味深い人々で溢れています",
  "星が夜空できらめいています",
  "ポジティブな思考が成功につながります",
  "香ばしいコーヒーの香りは元気を与えてくれます",
  "一期一会の人生を大切にしましょう",
  "彼女は素敵な笑顔を持っています",
  "大切な人と過ごす時間を楽しんでいます",
  "紅葉は目を楽しませてくれます",
  "大きな夢を持ち、諦めずに頑張りましょう",
  "風が木々をささやきます",
  "人生がくれた機会に感謝します",
  "子供たちの笑い声は伝染します",
  "自然の美しさにインスピレーションを受けます",
  "世界は興味深い人々で溢れています",
  "自分自身のベストバージョンを目指します",
  "最初の一歩はいつも一番難しいです",
  "夕日を眺めるのが好きです",
  "海の香りは爽やかです",
  "親切にすることは何もコストはかかりません",
  "パズルを解くのが好きです",
  "旅の目的地としてだけでなく、旅の途中を楽しんでください",
  "愛の力を信じています",
  "鳥の鳴き声は春の訪れを告げます",
  "私は常に学び続け、成長しています",
  "芝刈りの匂いは元気を与えてくれます",
  "人生は美しい贈り物です",
  "彼女は絵を描く才能があります",
  "静寂の中に安らぎを見つけます",
  "赤ちゃんの笑い声は心温まるものです",
  "人々の本質的な善良さを信じています",
  "蒸し暑い日に降る雨の香りはさわやかです",
  "成功は努力と決断の結果です",
  "夜空の星を眺めるのは楽しいです",
  "掴むべき機会がたくさんあります",
  "素晴らしい友達と家族に恵まれています",
  "岩場に打ちつける波の音は力強いです",
  "人々を助けることに喜びを見出します",
  "幸せの鍵は感謝です",
  "宇宙の驚異に常に驚かされます",
  "焼きたてのクッキーの香りは楽しいです",
  "人生は短いので無駄にしないようにしましょう",
  "彼女は言葉遣いが上手です",
  "美しい風景を写真に撮るのが好きです",
  "滝の音は心を癒します",
  "夢には現実になる力があります",
  "世界は本であり、旅しない人はただのページを読むだけです",
  "自己ケアの重要性を信じています",
  "キャンプファイヤーの香りは思い出深いです",
  "幸福は内側にあります",
  "芸術の美しさに心が安らぎます",
  "拍手の音は最高です",
  "現在の瞬間に感謝します",
  "成長のための可能性は無限です",
  "愛はすべてを克服します",
  "新しいことを試すのが好きです",
  "世界はより多くの思いやりと理解を必要としています"
];

const typeJapanese2 = [
  'きょうははれています',
  'わたしはにほんりょうりがすきです',
  'りょこうにいきたいです',
  'おいしいこーひーがのみたいです',
  'あたらしいげんごをまなぶのはたのしいです',
  'ともだちといっしょにえいがをみにいきました',
  'まいにちのうんどうはけんこうにいいです',
  'にほんのぶんかにきょうみがあります',
  'かぞくといっしょにすごすじかんはしあわせです',
  'おんがくはこころをいやします',
  'おいしいりょうりをつくるのがすきです',
  'しぜんのなかをさんぽするのはりらっくすできます',
  'どりょくすればゆめはかないます',
  'あたらしいほんをよむのがたのしみです',
  'じんせいはちょうせんのれんぞくです',
  'にほんのはなびはうつくしいです',
  'じかんはきちょうなしげんです',
  'ともだちといっしょにりょこうにいくのはたのしいです',
  'えがおはこころをあたたかくします',
  'がいこくのぶんかをまなぶのはおもしろいです',
  'まいにちのつみかさねがせいかをうみます',
  'にほんのしきはすばらしいです',
  'あたらしいぎじゅつにちょうせんするのはしげきてきです',
  'けんこうなしょくじをとることはたいせつです',
  'まなぶことはじんせいのざいさんです',
  'かぞくとのしょくじはたのしいひとときです',
  'きれいなけしきをみるとこころがおちつきます',
  'こんなんをのりこえることでせいちょうできます',
  'おんがくはひとびとをむすびつけます',
  'いちにちのつかれをいやすのはよいすいみんです',
  'ぽじてぃぶなかんがえかたがしあわせをひきよせます',
  'おきにいりのほんをよむのはりらっくすできます',
  'じんせいはいちどきりですから、じゅうじつしたまつをおくりたいです',
  'うつくしいしぜんにかんしゃします',
  'もくひょうにむかってどりょくしましょう',
  'おいしいぱんのにおいはたまりません',
  'さんぽすることでこころがおちつきます',
  'かのうせいはむげんだいです',
  'きょうといういちにちはあらたなはじまりです',
  'こころやさしいひとにであえるとしあわせです',
  'なみのおとをきくといやされます',
  'おんがくはこころをゆたかにします',
  'あめがこころをあらいながします',
  'しあわせはこころのなかにあります',
  'あたらしいすきるをまなぶことでじこせいちょうできます',
  'せかいはたようできょうみぶかいひとびとであふれています',
  'ほしのよぞらできらめいています',
  'ぽじてぃぶなしんこうがせいこうにつながります',
  'こうばしいこーひーのにおいはげんきをあたえてくれます',
  'いちごいちえのじんせいをたいせつにしましょう',
  'かのじょはすてきなえがおをもっています',
  'たいせつなひととすごすじかんをたのしんでいます',
  'こうようはめをたのしませてくれます',
  'おおきなゆめをもち、あきらめずにがんばりましょう',
  'かぜがきぎをささやきます',
  'じんせいがくれたきかいにかんしゃします',
  'こどもたちのわらいごえはでんせんします',
  'しぜんのうつくしさにいんすぴれーしょんをうけます',
  'せかいはきょうみぶかいひとびとであふれています',
  'じぶんじしんのべすとばーじょんをめざします',
  'さいしょのいっぽはいつもいちばんむずかしいです',
  'ゆうひをながめるのがすきです',
  'うみのにおいはさわやかです',
  'しんせつにすることはなにもこすとはかかりません',
  'ぱずるをとくのがすきです',
  'たびのもくてきちとしてだけでなく、たびのとちゅうをたのしんでください',
  'あいのちからをしんじています',
  'とりのなきごえははるのおとずれをつげます',
  'わたしはつねにまなびつづけ、せいちょうしています',
  'しばかりのにおいはげんきをあたえてくれます',
  'じんせいはうつくしいおくりものです',
  'かのじょはえをかくさいのうがあります',
  'せいじゃくのなかにやすらぎをみつけます',
  'あかちゃんのわらいごえはこころあたたまるものです',
  'ひとびとのほんしつてきなよしあさをしんじています',
  'むしあついひにふるあめのにおいはさわやかです',
  'せいこうはどりょくとけっていのけっかです',
  'よぞらのほしをながめるのはたのしいです',
  'つかむべききかいがたくさんあります',
  'すばらしいともだちとかぞくにめぐまれています',
  'いわばにうちつけるなみのおとはちからづよいです',
  'ひとびとをたすけることによろこびをみだします',
  'こうふくのかぎはかんしゃです',
  'うちゅうのきょういにつねにおどろかされます',
  'やきたてのくっきーのにおいはたのしいです',
  'じんせいはみじかいのでむだにしないようにしましょう',
  'かのじょはことばづかいがうまいです',
  'うつくしいふうけいをしゃしんにとるのがすきです',
  'たきのおとはこころをいやします',
  'ゆめにはげんじつになるちからがあります',
  'せかいはほんであり、たびしないひとはただのぺーじをよむだけです',
  'じこけあのじゅうようせいをしんじています',
  'きゃんぷふぁいやーのにおいはおもいでぶかいです',
  'こうふくはうちがわにあります',
  'げいじゅつのうつくしさにこころがやすらぎます',
  'はくしゅのおとはさいこうです',
  'げんざいのしゅんかんにかんしゃします',
  'せいちょうのためのかのうせいはむげんです',
  'あいはすべてをこくおくします',
  'あたらしいことをためすのがすきです',
  'せかいはよりおおくのおもいやりとりかいをひつようとしています'
];

//英語文章作成
function makeEnglishSentence() {
  EnglishSentence = typeEnglish[Math.floor(Math.random() * typeEnglish.length)];
  EnglishSentenceArray = EnglishSentence.split('').forEach((char) => {
    const spanTag = document.createElement('span');
    spanTag.innerText = char;
    sentenceEnglish.appendChild(spanTag);
  });
}

//英語タイピングスタート
buttonEN.addEventListener('click', () => {
  count.textContent = time + 1;
  let i = 0;
  buttonEN.disabled = true;
  buttonEN.hidden = true;
  buttonJP.disabled = true;
  buttonJP.hidden = true;
  makeEnglishSentence();
  sumOfSpan = sentenceEnglish.querySelectorAll('span');
  document.onkeydown = (e) => {
    key = e.key;
    if(EnglishSentence[i] == key) {
      sumOfSpan[i].classList.add('done');
      correctSound.play();
      correctSound.currentTime = 0;
      correct += 1;
      i++;
    } else if(key === 'Shift') {
      mistake += 0;
    } else if(EnglishSentence[1] != key) {
      missSound.play();
      missSound.currentTime = 0;
      mistake += 1;
      miss.textContent = mistake;
    }
    if(i == EnglishSentence.length) {
      sentenceCorrect.play();
      sentenceCorrect.currentTime = 0;
      score += 1;
      scores.textContent = score;
      sentenceEnglish.textContent = '';
      makeEnglishSentence();
      sumOfSpan = sentenceEnglish.querySelectorAll('span');
      i = 0;
    }
  }
  const timer = setInterval(() => {
    if(time == 0) {
      clearInterval(timer);
      content.textContent = '';
      scores.textContent = `点数:${score}点`;
      missScore.textContent = `ミス回数:${mistake}回`
      persent.textContent = `正答率:${((correct / (mistake + correct)) * 100).toPrecision(3)}%`
      
    }
    count.textContent = time;
    time--;
  }, 1000);
});

//日本語練習
buttonJP.addEventListener('click', () => {
  count.textContent = time + 1;
  buttonEN.disabled = true;
  buttonEN.hidden = true;
  buttonJP.disabled = true;
  buttonJP.hidden = true;
  let randomNum = Math.floor(Math.random() * typeJapanese.length);
  sentenceJP.textContent = typeJapanese[randomNum];
  JapaneseSentence2 = typeJapanese2[randomNum];
  keygraph.build(JapaneseSentence2);
  const disp = () => {
  // これからタイプしなければいけないキーの取得
  document.getElementById("sentence").textContent = keygraph.key_candidate();
  // タイプし終わったキーの取得
  document.getElementById("typed").textContent = keygraph.key_done();
  };
  document.body.addEventListener("keydown", e => {
    if (keygraph.next(e.key)) {
      correctSound.play();
      correctSound.currentTime = 0;
      correct += 1;
    } else {
      missSound.play();
      missSound.currentTime = 0;
      mistake += 1;
      miss.textContent = mistake;
    }
    if (keygraph.is_finished()) {
      randomNum = Math.floor(Math.random() * typeJapanese.length);
      sentenceJP.textContent = typeJapanese[randomNum];
      JapaneseSentence2 = typeJapanese2[randomNum];
      keygraph.build(JapaneseSentence2);
      sentenceCorrect.play();
      sentenceCorrect.currentTime = 0;
      score += 1;
      scores.textContent = score;
    }
    disp();
  });
  disp();
  const timer = setInterval(() => {
    if(time == 0) {
      clearInterval(timer);
      content.textContent = '';
      scores.textContent = `点数:${score}点`;
      missScore.textContent = `ミス回数:${mistake}回`
      persent.textContent = `正答率:${((correct / (mistake + correct)) * 100).toPrecision(3)}%`
      
    }
    count.textContent = time;
    time--;
  }, 1000);
})


function kanaRoma(kana) {
  let threeLetter;
  let twoLetter;
  let oneLetter;
  for(let i = 0; i < kana.length; i++) {
    threeLetter = kana[i] + kana[i + 1] + kana[i + 2];
    twoLetter = kana[i] + kana[i + 1];
    oneLetter = kana[i]
    if(){

    }
  }
}
'use strict';

const oneLetterTable = {
  "あ": ["a"], 
  "い": ["i"],
  "う": ["u", "wu", "whu"],
  "え": ["e"],
  "お": ["o"],
  "か": ["ka", "ca"],
  "き": ["ki"],
  "く": ["ku", "cu"],
  "け": ["ke"],
  "こ": ["ko", "co"],
  "さ": ["sa"],
  "し": ["si", "shi", "ci"],
  "す": ["su"],
  "せ": ["se", "ce"],
  "そ": ["so"],
  "た": ["ta"],
  "ち": ["ti", "chi"],
  "つ": ["tu", "tsu"],
  "て": ["te"],
  "と": ["to"],
  "な": ["na"],
  "に": ["ni"],
  "ぬ": ["nu"],
  "ね": ["ne"],
  "の": ["no"],
  "は": ["ha"],
  "ひ": ["hi"],
  "ふ": ["hu", "fu"],
  "へ": ["he"],
  "ほ": ["ho"],
  "ま": ["ma"],
  "み": ["mi"],
  "む": ["mu"],
  "め": ["me"],
  "も": ["mo"],
  "や": ["ya"],
  "ゆ": ["yu"],
  "よ": ["yo"],
  "ら": ["ra"],
  "り": ["ri"],
  "る": ["ru"],
  "れ": ["re"],
  "ろ": ["ro"],
  "わ": ["wa"],
  "を": ["wo"],
  "ん": ["nn", "n"],
  "が": ["ga"],
  "ぎ": ["gi"],
  "ぐ": ["gu"],
  "げ": ["ge"],
  "ご": ["go"],
  "ざ": ["za"],
  "じ": ["ji", "zi"],
  "ず": ["zu"],
  "ぜ": ["ze"],
  "ぞ": ["zo"],
  "だ": ["da"],
  "ぢ": ["di"],
  "づ": ["du"],
  "で": ["de"],
  "ど": ["do"],
  "ば": ["ba"],
  "び": ["bi"],
  "ぶ": ["bu"],
  "べ": ["be"],
  "ぼ": ["bo"],
  "ぱ": ["pa"],
  "ぴ": ["pi"],
  "ぷ": ["pu"],
  "ぺ": ["pe"],
  "ぽ": ["po"],
  "ゔ": ["vu"],
  "っ": ["ltu", "xtu", "ltsu", "xtsu"],
  "ぁ": ["la", "xa"],
  "ぃ": ["li", "xi", "lyi", "xyi"],
  "ぅ": ["lu", "xu"],
  "ぇ": ["le", "xe", "lye", "xye"],
  "ぉ": ["lo", "xo"],
  "ゃ": ["lya", "xya"],
  "ゅ": ["lyu", "xyu"],
  "ょ": ["lyo", "xyo"],
  "ゎ": ["lwa", "xwa"],
  "ヵ": ["lka", "xka"],
  "ヶ": ["lke", "xke"],
  "A": ["A"],
  "B": ["B"],
  "C": ["C"],
  "D": ["D"],
  "E": ["E"],
  "F": ["F"],
  "G": ["G"],
  "H": ["H"],
  "I": ["I"],
  "J": ["J"],
  "K": ["K"],
  "L": ["L"],
  "M": ["M"],
  "N": ["N"],
  "O": ["O"],
  "P": ["P"],
  "Q": ["Q"],
  "R": ["R"],
  "S": ["S"],
  "T": ["T"],
  "U": ["U"],
  "V": ["V"],
  "W": ["W"],
  "X": ["X"],
  "Y": ["Y"],
  "Z": ["Z"],
  "a": ["a"],
  "b": ["b"],
  "c": ["c"],
  "d": ["d"],
  "e": ["e"],
  "f": ["f"],
  "g": ["g"],
  "h": ["h"],
  "i": ["i"],
  "j": ["j"],
  "k": ["k"],
  "l": ["l"],
  "m": ["m"],
  "n": ["n"],
  "o": ["o"],
  "p": ["p"],
  "q": ["q"],
  "r": ["r"],
  "s": ["s"],
  "t": ["t"],
  "u": ["u"],
  "v": ["v"],
  "w": ["w"],
  "x": ["x"],
  "y": ["y"],
  "z": ["z"],
  "1": ["1"],
  "2": ["2"],
  "3": ["3"],
  "4": ["4"],
  "5": ["5"],
  "6": ["6"],
  "7": ["7"],
  "8": ["8"],
  "9": ["9"],
  "0": ["0"],
  "-": ["-"],
  "ー": ["-"],
  " ": ["␣"],
  "　": ["␣"],
  "!": ["!"],
  "！": ["!"],
  "?": ["?"],
  "？": ["?"],
  "&": ["&"],
  "＆": ["&"],
  "%": ["%"],
  "％": ["%"],
  "$": ["$"],
  "＄": ["$"],
  "#": ["#"],
  "＃": ["#"],
  "@": ["@"],
  "＠": ["@"],
  ",": [","],
  "、": [","],
  ".": ["."],
  "。": ["."],
  ":": [":"],
  "：": [":"],
  ";": [";"],
  "；": [";"],
  "^": ["^"],
  "＾": ["^"],
  "=": ["="],
  "＝": ["="],
  "+" : ["+"],
  "＋": ["+"],
  "*": ["*"],
  "＊": ["*"],
  "\\": ["\\"],
  "/": ["/"],
  "<": ["<"],
  "＜": ["<"],
  ">": [">"],
  "＞": [">"],
  "|": ["|"],
  "｜": ["|"],
  "~": ["~"],
  "〜": ["~"],
  "(": ["("],
  "（": ["("],
  ")": [")"],
  "）": [")"],
  "{": ["{"],
  "『": ["{"],
  "}": ["}"],
  "』": ["}"],
  "_": ["_"],
  "＿": ["_"],
};

const twoLetterTable = {
  "きゃ": ["kya"],
  "きぃ": ["kyi"],
  "きゅ": ["kyu"],
  "きぇ": ["kye"],
  "きょ": ["kyo"],
  "しゃ": ["sya", "sha"],
  "しぃ": ["syi"], 
  "しゅ": ["syu", "shu"],
  "しぇ": ["sye", "she"],
  "しょ": ["syo", "sho"],
  "ちゃ": ["tya", "cha", "cya"],
  "ちぃ": ["tyi", "cyi"],
  "ちゅ": ["tyu", "chu", "cyu"],
  "ちぇ": ["tye", "che", "cye"],
  "ちょ": ["tyo", "cho", "cyo"],
  "にゃ": ["nya"],
  "にぃ": ["nyi"],
  "にゅ": ["nyu"],
  "にぇ": ["nye"],
  "にょ": ["nyo"],
  "ひゃ": ["hya"],
  "ひぃ": ["hyi"],
  "ひゅ": ["hyu"],
  "ひぇ": ["hye"],
  "ひょ": ["hyo"],
  "みゃ": ["mya"],
  "みぃ": ["myi"],
  "みゅ": ["myu"],
  "みぇ": ["mye"],
  "みょ": ["myo"],
  "りゃ": ["rya"],
  "りぃ": ["ryi"],
  "りゅ": ["ryu"],
  "りぇ": ["rye"],
  "りょ": ["ryo"],
  "ぎゃ": ["gya"],
  "ぎぃ": ["gyi"],
  "ぎゅ": ["gyu"],
  "ぎぇ": ["gye"],
  "ぎょ": ["gyo"],
  "じゃ": ["ja", "jya", "zya"],
  "じぃ": ["zyi", "jyi"],
  "じゅ": ["ju", "jyu", "zyu"],
  "じぇ": ["je", "zye", "jye"],
  "じょ": ["jo", "jyo", "zyo"],
  "ぢゃ": ["dya"],
  "ぢぃ": ["dyi"],
  "ぢゅ": ["dyu"],
  "ぢぇ": ["dye"],
  "ぢょ": ["dyo"],
  "びゃ": ["bya"],
  "びぃ": ["byi"],
  "びゅ": ["byu"],
  "びぇ": ["bye"],
  "びょ": ["byo"],
  "ぴゃ": ["pya"],
  "ぴぃ": ["pyi"],
  "ぴゅ": ["pyu"],
  "ぴぇ": ["pye"],
  "ぴょ": ["pyo"],
  "いぇ": ["ye"],
  "うぁ": ["wha"],
  "うぃ": ["wi", "whi"],
  "うぇ": ["we", "whe"],
  "うぉ": ["who"],
  "くぁ": ["qa", "kwa"],
  "くぃ": ["qi", "kwi"],
  "くぅ": ["qu"],
  "くぇ": ["qe", "kwe"],
  "くぉ": ["qo", "kwo"],
  "つぁ": ["tsa"],
  "つぃ": ["tsi"],
  "つぇ": ["tse"],
  "つぉ": ["tso"],
  "てゃ": ["tha"],
  "てぃ": ["thi"],
  "てゅ": ["thu"],
  "てぇ": ["the"],
  "てょ": ["tho"],
  "とぁ": ["twa"],
  "とぃ": ["twi"],
  "とぅ": ["twu"],
  "とぇ": ["twe"],
  "とぉ": ["two"],
  "ふぁ": ["fa"],
  "ふゃ": ["fya"],
  "ふぃ": ["fi"],
  "ふゅ": ["fyu"],
  "ふぇ": ["fe"],
  "ふぉ": ["fo"],
  "ふょ": ["fyo"],
  "ぐぁ": ["gwa"],
  "ぐぃ": ["gwi"],
  "ぐぅ": ["gwu"],
  "ぐぇ": ["gwe"],
  "ぐぉ": ["gwo"],
  "でゃ": ["dha"],
  "でぃ": ["dhi"],
  "でゅ": ["dhu"],
  "でぇ": ["dhe"],
  "でょ": ["dho"],
  "どぁ": ["dwa"],
  "どぃ": ["dwi"],
  "どぅ": ["dwu"],
  "どぇ": ["dwe"],
  "どぉ": ["dwo"],
  "ゔぁ": ["va"],
  "ゔゃ": ["vya"],
  "ゔぃ": ["vi", "vyi"],
  "ゔゅ": ["vyu"],
  "ゔぇ": ["ve", "vye"],
  "ゔぉ": ["vo"],
  "ゔょ": ["vyo"]
};

const threeLetterTable = {
  "っう": ["wwu","wwhu"],
  "っか": ["kka","cca"],
  "っき": ["kki"],
  "っく": ["kku","ccu"],
  "っけ": ["kke"],
  "っこ": ["kko","cco"],
  "っさ": ["ssa"],
  "っし": ["ssi","sshi","cci"],
  "っす": ["ssu"],
  "っせ": ["sse","cce"],
  "っそ": ["sso"],
  "った": ["tta"],
  "っち": ["tti","cchi"],
  "っつ": ["ttu","ttsu"],
  "って": ["tte"],
  "っと": ["tto"],
  "っは": ["hha"],
  "っひ": ["hhi"],
  "っふ": ["hhu","ffu"],
  "っへ": ["hhe"],
  "っほ": ["hho"],
  "っま": ["mma"],
  "っみ": ["mmi"],
  "っむ": ["mmu"],
  "っめ": ["mme"],
  "っも": ["mmo"],
  "っや": ["yya"],
  "っゆ": ["yyu"],
  "っよ": ["yyo"],
  "っら": ["rra"],
  "っり": ["rri"],
  "っる": ["rru"],
  "っれ": ["rre"],
  "っろ": ["rro"],
  "っわ": ["wwa"],
  "っを": ["wwo"],
  "っヴ": ["vvu"],
  "っが": ["gga"],
  "っぎ": ["ggi"],
  "っぐ": ["ggu"],
  "っげ": ["gge"],
  "っご": ["ggo"],
  "っざ": ["zza"],
  "っじ": ["zzi", "jji"],
  "っず": ["zzu"],
  "っぜ": ["zze"],
  "っぞ": ["zzo"],
  "っだ": ["dda"],
  "っぢ": ["ddi"],
  "っづ": ["ddu"],
  "っで": ["dde"],
  "っど": ["ddo"],
  "っば": ["bba"],
  "っび": ["bbi"],
  "っぶ": ["bbu"],
  "っべ": ["bbe"],
  "っぼ": ["bbo"],
  "っぱ": ["ppa"],
  "っぴ": ["ppi"],
  "っぷ": ["ppu"],
  "っぺ": ["ppe"],
  "っぽ": ["ppo"],
  "っゔ": ["vvu"]
};

const ROMAJI_TABLE_4 = {
  "っきゃ": ["kkya"],
  "っきぃ": ["kkyi"],
  "っきゅ": ["kkyu"],
  "っきぇ": ["kkye"],
  "っきょ": ["kkyo"],
  "っしゃ": ["ssya", "ssha"],
  "っしぃ": ["ssyi"],
  "っしゅ": ["ssyu", "sshu"],
  "っしぇ": ["ssye", "sshe"],
  "っしょ": ["ssyo", "ssho"],
  "っちゃ": ["ttya", "ccha", "ccya"],
  "っちぃ": ["ttyi", "ccyi"],
  "っちゅ": ["ttyu", "cchu", "ccyu"],
  "っちぇ": ["ttye", "cche", "ccye"],
  "っちょ": ["ttyo","ccho", "ccyo"],
  "っひゃ": ["hhya"],
  "っひぃ": ["hhyi"],
  "っひゅ": ["hhyu"],
  "っひぇ": ["hhye"],
  "っひょ": ["hhyo"],
  "っみゃ": ["mmya"],
  "っみぃ": ["mmyi"],
  "っみゅ": ["mmyu"],
  "っみぇ": ["mmye"],
  "っみょ": ["mmyo"],
  "っりゃ": ["rrya"],
  "っりぃ": ["rryi"],
  "っりゅ": ["rryu"],
  "っりぇ": ["rrye"],
  "っりょ": ["rryo"],
  "っぎゃ": ["ggya"],
  "っぎぃ": ["ggyi"],
  "っぎゅ": ["ggyu"],
  "っぎぇ": ["ggye"],
  "っぎょ": ["ggyo"],
  "っじゃ": ["jja", "jjya", "zzya"],
  "っじぃ": ["zzyi", "jjyi"],
  "っじゅ": ["jju", "jjyu", "zzyu"],
  "っじぇ": ["jje", "zzye", "jjye"],
  "っじょ": ["jjo", "jjyo", "zzyo"],
  "っぢゃ": ["ddya"],
  "っぢぃ": ["ddyi"],
  "っぢゅ": ["ddyu"],
  "っぢぇ": ["ddye"],
  "っぢょ": ["ddyo"],
  "っびゃ": ["bbya"],
  "っびぃ": ["bbyi"],
  "っびゅ": ["bbyu"],
  "っびぇ": ["bbye"],
  "っびょ": ["bbyo"],
  "っぴゃ": ["ppya"],
  "っぴぃ": ["ppyi"],
  "っぴゅ": ["ppyu"],
  "っぴぇ": ["ppye"],
  "っぴょ": ["ppyo"],
  "っいぇ": ["yye"],
  "っうぁ": ["wwha"],
  "っうぃ": ["wwi", "wwhi"],
  "っうぇ": ["wwe", "wwhe"],
  "っうぉ": ["wwho"],
  "っくぁ": ["qqa", "kkwa"],
  "っくぃ": ["qqi", "kkwi"],
  "っくぅ": ["qqu"],
  "っくぇ": ["qqe", "kkwe"],
  "っくぉ": ["qqo", "kkwo"],
  "っつぁ": ["ttsa"],
  "っつぃ": ["ttsi"],
  "っつぇ": ["ttse"],
  "っつぉ": ["ttso"],
  "ってゃ": ["ttha"],
  "ってぃ": ["tthi"],
  "ってゅ": ["tthu"],
  "ってぇ": ["tthe"],
  "ってょ": ["ttho"],
  "っとぁ": ["ttwa"],
  "っとぃ": ["ttwi"],
  "っとぅ": ["ttwu"],
  "っとぇ": ["ttwe"],
  "っとぉ": ["ttwo"],
  "っふぁ": ["ffa"],
  "っふゃ": ["ffya"],
  "っふぃ": ["ffi"],
  "っふゅ": ["ffyu"],
  "っふぇ": ["ffe"],
  "っふぉ": ["ffo"],
  "っふょ": ["ffyo"],
  "っぐぁ": ["ggwa"],
  "っでゃ": ["ddha"],
  "っでぃ": ["ddhi"],
  "っでゅ": ["ddhu"],
  "っでぇ": ["ddhe"],
  "っでょ": ["ddho"],
  "っどぁ": ["ddwa"],
  "っどぃ": ["ddwi"],
  "っどぅ": ["ddwu"],
  "っどぇ": ["ddwe"],
  "っどぉ": ["ddwo"],
  "っゔぁ": ["vva"],
  "っゔゃ": ["vvya"],
  "っゔぃ": ["vvi", "vvyi"],
  "っゔゅ": ["vvyu"],
  "っゔぇ": ["vve", "vvye"],
  "っゔぉ": ["vvo"],
  "っゔょ": ["vvyo"]
};


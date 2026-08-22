/* =========================================================
   技能五輪 ウェブデザイン職種を知ろう — app.js
   依存ライブラリなし。ES2017 程度の構文のみ。
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. ステップ定義（エディタの初期コード）
     --------------------------------------------------------- */
  var STEPS = {
    step1: {
      label: "STEP 1 HTML",
      lang: "html",
      title: "STEP 1 — HTML: 自己紹介カードを作ろう",
      text: "「???」の部分を自分の情報に書きかえよう。<li> を1行ふやして好きなものを追加してもOK。",
      hint:
        "<p>HTMLは <code>&lt;タグ&gt;中身&lt;/タグ&gt;</code> の形。開いたら必ず閉じる。</p>" +
        "<p>例: <code>&lt;li&gt;好きな食べ物: ラーメン&lt;/li&gt;</code></p>" +
        "<p>画像を入れたいときは <code>&lt;img src=\"https://picsum.photos/200\" alt=\"写真\"&gt;</code>（ネットにつながっていれば表示される）</p>",
      html:
        '<div class="card">\n' +
        "  <h1>??? の自己紹介</h1>\n" +
        "  <p>小牧工科高校 ?年生</p>\n" +
        "  <ul>\n" +
        "    <li>好きなこと: ???</li>\n" +
        "    <li>得意なこと: ???</li>\n" +
        "    <li>ひとこと: ???</li>\n" +
        "  </ul>\n" +
        "  <button id=\"btn\">よろしく！</button>\n" +
        "</div>\n",
      css:
        "body {\n" +
        "  font-family: sans-serif;\n" +
        "  background: #f3f5fb;\n" +
        "  margin: 0;\n" +
        "  padding: 32px;\n" +
        "}\n" +
        ".card {\n" +
        "  background: white;\n" +
        "  padding: 24px;\n" +
        "  max-width: 360px;\n" +
        "}\n",
      js: "// STEP 3 でここに書きます\n",
    },
    step2: {
      label: "STEP 2 CSS",
      lang: "css",
      title: "STEP 2 — CSS: 見た目を変えよう",
      text: "CSSタブを開いて、色・角丸・影を変えてみよう。保存ボタンはない。書いたらすぐ右に反映される。",
      hint:
        "<p>やってみること（どれか1つでOK）</p>" +
        "<ul>" +
        "<li>背景色を変える: <code>background: #1f5eff;</code>（<code>#</code>のあとは好きな色コード。<code>red</code> <code>gold</code> <code>hotpink</code> などの名前でもOK）</li>" +
        "<li>角を丸くする: <code>border-radius: 16px;</code></li>" +
        "<li>影をつける: <code>box-shadow: 0 12px 32px rgba(0,0,0,0.2);</code></li>" +
        "<li>文字を大きく: <code>h1 { font-size: 32px; }</code></li>" +
        "</ul>" +
        "<p>「書いたのに変わらない」ときは、<code>;</code>（セミコロン）と <code>}</code> の閉じ忘れをチェック。</p>",
      html:
        '<div class="card">\n' +
        "  <h1>自己紹介カード</h1>\n" +
        "  <p>小牧工科高校 2年生</p>\n" +
        "  <ul>\n" +
        "    <li>好きなこと: ゲーム</li>\n" +
        "    <li>得意なこと: 早起き</li>\n" +
        "  </ul>\n" +
        "  <button id=\"btn\">よろしく！</button>\n" +
        "</div>\n",
      css:
        "body {\n" +
        "  font-family: sans-serif;\n" +
        "  background: #f3f5fb;\n" +
        "  margin: 0;\n" +
        "  padding: 32px;\n" +
        "}\n\n" +
        "/* ここを変えてみよう */\n" +
        ".card {\n" +
        "  background: white;      /* 背景色 */\n" +
        "  color: #1b2233;         /* 文字色 */\n" +
        "  padding: 24px;\n" +
        "  max-width: 360px;\n" +
        "  border-radius: 0px;     /* 角丸: 0 → 16px にしてみよう */\n" +
        "  box-shadow: none;       /* 影: none → 0 12px 32px rgba(0,0,0,0.2) */\n" +
        "}\n\n" +
        "h1 {\n" +
        "  font-size: 24px;\n" +
        "  margin: 0 0 8px;\n" +
        "}\n\n" +
        "button {\n" +
        "  background: #1f5eff;\n" +
        "  color: white;\n" +
        "  border: none;\n" +
        "  padding: 10px 20px;\n" +
        "  border-radius: 999px;\n" +
        "  font-size: 16px;\n" +
        "  cursor: pointer;\n" +
        "}\n",
      js: "// STEP 3 でここに書きます\n",
    },
    step3: {
      label: "STEP 3 JS",
      lang: "js",
      title: "STEP 3 — JavaScript: ボタンに動きをつけよう",
      text: "JSタブを開こう。ボタンを押すとカードの色が変わる＆カウントアップするコードが書いてある。数字や色を変えて遊んでみよう。",
      hint:
        "<p>流れは3つ。①部品をつかむ ②「クリックされたら」を待つ ③中身を書きかえる</p>" +
        "<pre>var btn = document.getElementById(\"btn\");   // ①\n" +
        "btn.addEventListener(\"click\", function () {  // ②\n" +
        "  btn.textContent = \"押された！\";            // ③\n" +
        "});</pre>" +
        "<p>エラーが出たら下の黒いコンソール欄に赤い文字で表示される。行番号を見て、<code>\"</code> や <code>)</code> の閉じ忘れを探そう。</p>" +
        "<p>ランダムな色にしたい: <code>\"hsl(\" + Math.random() * 360 + \", 80%, 60%)\"</code></p>",
      html:
        '<div class="card" id="card">\n' +
        "  <h1>自己紹介カード</h1>\n" +
        "  <p>小牧工科高校 2年生</p>\n" +
        "  <p>いいね: <strong id=\"count\">0</strong></p>\n" +
        "  <button id=\"btn\">いいね！</button>\n" +
        "</div>\n",
      css:
        "body {\n" +
        "  font-family: sans-serif;\n" +
        "  background: #f3f5fb;\n" +
        "  margin: 0;\n" +
        "  padding: 32px;\n" +
        "}\n" +
        ".card {\n" +
        "  background: white;\n" +
        "  color: #1b2233;\n" +
        "  padding: 24px;\n" +
        "  max-width: 360px;\n" +
        "  border-radius: 16px;\n" +
        "  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);\n" +
        "  transition: background 0.3s;\n" +
        "}\n" +
        "button {\n" +
        "  background: #1f5eff;\n" +
        "  color: white;\n" +
        "  border: none;\n" +
        "  padding: 10px 20px;\n" +
        "  border-radius: 999px;\n" +
        "  font-size: 16px;\n" +
        "  cursor: pointer;\n" +
        "}\n",
      js:
        "// ① 部品をつかむ\n" +
        "var btn = document.getElementById(\"btn\");\n" +
        "var card = document.getElementById(\"card\");\n" +
        "var countEl = document.getElementById(\"count\");\n\n" +
        "var count = 0;\n" +
        "var colors = [\"#ffe9a8\", \"#c9f7d2\", \"#cfe3ff\", \"#ffd0ec\", \"white\"];\n\n" +
        "// ② クリックされたら…\n" +
        "btn.addEventListener(\"click\", function () {\n" +
        "  // ③ 中身を書きかえる\n" +
        "  count = count + 1;\n" +
        "  countEl.textContent = count;\n" +
        "  card.style.background = colors[count % colors.length];\n\n" +
        "  if (count === 10) {\n" +
        "    btn.textContent = \"10回ありがとう！\";\n" +
        "  }\n" +
        "});\n\n" +
        "console.log(\"準備OK\");\n",
    },
    mini: {
      label: "ミニ競技",
      lang: "css",
      title: "ミニ競技 — 見本のカードを5分で再現",
      text: "HTMLは用意ずみ。CSSだけで上の見本にできるだけ近づけよう。完ぺきじゃなくてOK。「近さ」と「速さ」が勝負。",
      hint:
        "<p>見本のスペック（ページの表にも書いてある）</p>" +
        "<ul>" +
        "<li>カード: 幅 300px / 白 / 角丸 16px / 内側の余白 24px / 影 <code>0 12px 32px rgba(20,40,90,0.15)</code></li>" +
        "<li>タグ: 背景 <code>#e7f0ff</code> / 文字 <code>#1f5eff</code> / 12px 太字 / 角丸 999px / 余白 4px 10px</li>" +
        "<li>見出し: 20px 太字</li>" +
        "<li>説明文: 14px / 文字色 <code>#5b667d</code></li>" +
        "<li>ボタン: 横いっぱい / 背景 <code>#1f5eff</code> / 白文字 / 角丸 10px / 余白 12px / 枠線なし</li>" +
        "</ul>",
      html:
        '<div class="card">\n' +
        '  <span class="tag">12/5-6 開催</span>\n' +
        "  <h2>技能五輪 全国大会</h2>\n" +
        "  <p>ウェブデザイン職種を見学しよう。会場はAichi Sky Expo。</p>\n" +
        "  <button>くわしく見る</button>\n" +
        "</div>\n",
      css:
        "body {\n" +
        "  margin: 0;\n" +
        "  min-height: 100vh;\n" +
        "  display: grid;\n" +
        "  place-items: center;\n" +
        "  background: #f3f5fb;\n" +
        "  font-family: sans-serif;\n" +
        "}\n\n" +
        "/* ここから下を書こう */\n" +
        ".card {\n\n}\n\n" +
        ".tag {\n\n}\n\n" +
        "h2 {\n\n}\n\n" +
        "p {\n\n}\n\n" +
        "button {\n\n}\n",
      js: "",
    },
    free: {
      label: "自由",
      lang: "html",
      title: "自由 — AIが出したコードを貼って動かそう",
      text: "duck.ai で作ったコードをここに貼りつけよう。<style> の中身はCSSタブ、<script> の中身はJSタブに分けて貼ると見やすい（HTMLタブに全部貼っても動く）。",
      hint:
        "<p>AIの出力が1つのHTMLファイルなら、<strong>HTMLタブに全部貼るだけ</strong>で動く。</p>" +
        "<p>動かないとき: 下のコンソール欄の赤いエラーをそのままコピーして、AIに「このエラーが出た。直して」と送ろう。</p>" +
        "<p>外部の画像やライブラリ（CDN）を読みこむコードは、学校のネットワークだと動かないことがある。「ライブラリを使わずに」とAIにお願いしよう。</p>",
      html:
        "<!\x2d- ここにAIのコードを貼りつけよう -\x2d>\n" +
        "<h1>Hello!</h1>\n" +
        "<p>ここに自由に書いてOK。</p>\n",
      css: "body {\n  font-family: sans-serif;\n  padding: 24px;\n}\n",
      js: "",
    },
  };
  var STEP_ORDER = ["step1", "step2", "step3", "mini", "free"];
  var LANGS = ["html", "css", "js"];
  var STORAGE_PREFIX = "komaki2026.editor.";

  /* ---------------------------------------------------------
     1.5 ヒントパネルのデータ（言語 × ステップ）
     HINTS[lang][stepId] が無ければ HINTS[lang].common を使う。
     codes の各要素がクリックで挿入されるチップになる。
     注意: この中に script の閉じタグや HTML コメントの開始をそのまま書かない
     （offline.html にインライン化したときにタグが閉じる）。
     --------------------------------------------------------- */
  var HTML_HINTS = [
    { name: "h1", desc: "見出し", codes: ["<h1>見出し</h1>", "<h2>小さめの見出し</h2>"] },
    { name: "p", desc: "段落（ふつうの文章）", codes: ["<p>段落</p>"] },
    { name: "img", desc: "画像", codes: ['<img src="https://picsum.photos/200" alt="写真">'] },
    { name: "a", desc: "リンク", codes: ['<a href="https://example.com">リンク</a>'] },
    { name: "ul / li", desc: "箇条書き", codes: ["<ul>\n  <li>項目</li>\n  <li>項目</li>\n</ul>", "<li>項目</li>"] },
    { name: "button", desc: "ボタン", codes: ["<button>ボタン</button>", '<button id="btn">押してね</button>'] },
    { name: "div", desc: "まとまり（箱）", codes: ['<div class="box">\n  ここに中身\n</div>'] },
    { name: "span", desc: "文の一部だけ囲む", codes: ["<span>ここだけ</span>", '<span class="red">ここだけ</span>'] },
    { name: "br", desc: "改行", codes: ["<br>"] },
  ];
  var CSS_PALETTE = [
    { label: "赤", value: "#ff4d6d" },
    { label: "オレンジ", value: "#ff9f1c" },
    { label: "黄", value: "#ffd60a" },
    { label: "緑", value: "#2ec4b6" },
    { label: "水色", value: "#5ed0ff" },
    { label: "青", value: "#1f5eff" },
    { label: "紫", value: "#8b5cf6" },
    { label: "ピンク", value: "#ff7ab6" },
    { label: "白", value: "white" },
    { label: "黒", value: "#111111" },
  ];
  var CSS_HINTS = [
    { palette: true, name: "色", desc: "クリックで色コードが入る" },
    { name: "color", desc: "文字の色", codes: ["color: #ff4d6d;", "color: white;", "color: #1f5eff;"] },
    { name: "background", desc: "背景", codes: ["background: #1f5eff;", "background: gold;", "background: linear-gradient(135deg, #5ed0ff, #ff4fd8);"] },
    { name: "font-size", desc: "文字の大きさ", codes: ["font-size: 24px;", "font-size: 14px;", "font-size: 40px;"] },
    { name: "border-radius", desc: "角丸", codes: ["border-radius: 16px;", "border-radius: 999px;"] },
    { name: "box-shadow", desc: "影", codes: ["box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);", "box-shadow: 0 0 0 4px #ffd60a;"] },
    { name: "padding", desc: "内側の余白", codes: ["padding: 16px;", "padding: 8px 20px;"] },
    { name: "margin", desc: "外側の余白", codes: ["margin: 16px;", "margin: 0 auto;"] },
    { name: "border", desc: "枠線", codes: ["border: 2px solid #1f5eff;", "border: 4px dashed #ff4d6d;"] },
    { name: "text-align", desc: "文字の位置", codes: ["text-align: center;", "text-align: right;"] },
    { name: "font-weight", desc: "文字の太さ", codes: ["font-weight: bold;", "font-weight: normal;"] },
    { name: "width / height", desc: "横幅 / 高さ", codes: ["width: 300px;", "height: 120px;", "width: 100%;"] },
    { name: "display: flex", desc: "横並び", codes: ["display: flex;\ngap: 12px;", "display: flex;\njustify-content: center;\nalign-items: center;"] },
    { name: "transition", desc: "なめらかに変化", codes: ["transition: 0.3s;", "transition: transform 0.2s;"] },
    { name: ":hover", desc: "マウスを乗せたとき", codes: ["button:hover {\n  background: #ff4d6d;\n}", ".card:hover {\n  transform: scale(1.05);\n}"] },
  ];
  var JS_HINTS = [
    { name: "querySelector", desc: "要素を取る", codes: ['var el = document.querySelector("#id");', 'var btn = document.querySelector("button");'] },
    { name: "addEventListener", desc: "押したとき", codes: ['btn.addEventListener("click", () => {\n  \n});'] },
    { name: "textContent", desc: "文字を変える", codes: ['el.textContent = "新しい文字";'] },
    { name: "style", desc: "見た目を変える", codes: ['el.style.background = "pink";', 'el.style.color = "white";', 'el.style.fontSize = "32px";'] },
    { name: "count++", desc: "数を1ふやす", codes: ["var count = 0;", "count++;"] },
    { name: "if", desc: "もし…なら", codes: ["if (count >= 10) {\n  \n}", "if (count % 2 === 0) {\n  \n} else {\n  \n}"] },
    { name: "Math.random()", desc: "ランダム（0〜1）", codes: ["Math.random()", "var n = Math.floor(Math.random() * 6) + 1;"] },
    { name: "setInterval", desc: "くり返し", codes: ["setInterval(() => {\n  \n}, 1000);"] },
    { name: "console.log", desc: "確認用に表示", codes: ['console.log("確認");', "console.log(count);"] },
  ];
  var HINTS = {
    html: { common: HTML_HINTS, step1: HTML_HINTS },
    css: { common: CSS_HINTS, step2: CSS_HINTS },
    js: { common: JS_HINTS, step3: JS_HINTS },
  };
  var HINTS_OPEN_KEY = "komaki2026.hintsOpen";

  /* ---------------------------------------------------------
     1.6 「3つの言葉の役割」と「積み重ねデモ」で共有するコード例
     #stackDemo の3枚（コード表示 + iframe 描画）をここから描画する。
     --------------------------------------------------------- */
  var EXAMPLE = {
    html:
      "<h1>自己紹介</h1>\n" +
      "<p>小牧工科高校 2年生</p>\n" +
      '<button id="btn">いいね</button>\n' +
      '<p>いいね: <span id="count">0</span></p>\n',
    css:
      "body {\n  font-family: sans-serif;\n  padding: 16px;\n}\n" +
      "h1 {\n  color: #1f5eff;\n}\n" +
      "button {\n  background: #1f5eff;\n  color: white;\n  border: 0;\n  border-radius: 999px;\n  padding: 8px 20px;\n}\n",
    js:
      'var btn = document.querySelector("#btn");\n' +
      "var count = 0;\n" +
      'btn.addEventListener("click", function () {\n' +
      "  count = count + 1;\n" +
      '  document.querySelector("#count").textContent = count;\n' +
      "});\n",
  };
  var STACK_STAGES = [
    { label: "HTML", cls: "c-html", langs: ["html"], caption: "HTMLだけ。ブラウザの初期設定の見た目。" },
    { label: "+ CSS", cls: "c-css", langs: ["html", "css"], caption: "HTML + CSS。色・フォント・角丸がついた。" },
    { label: "+ JS", cls: "c-js", langs: ["html", "css", "js"], caption: "HTML + CSS + JS。押してみて → 数が増える。" },
  ];

  /* ---------------------------------------------------------
     2. ユーティリティ
     --------------------------------------------------------- */
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function debounce(fn, ms) {
    var timer = null;
    return function () {
      var args = arguments;
      var self = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(self, args);
      }, ms);
    };
  }
  function storageGet(key) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* プライベートモード等では保存できないが動作は続ける */
    }
  }
  function storageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      /* noop */
    }
  }

  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // file:// や http で開いたときのフォールバック
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {
        ok = false;
      }
      document.body.removeChild(ta);
      if (ok) resolve();
      else reject(new Error("copy failed"));
    });
  }

  /* ---------------------------------------------------------
     3. エディタ
     --------------------------------------------------------- */
  var editor = {
    root: $("#editor"),
    stepTabs: $("#stepTabs"),
    langTabs: $("#langTabs"),
    title: $("#stepTitle"),
    text: $("#stepText"),
    hint: $("#stepHint"),
    areas: {
      html: $("#codeHtml"),
      css: $("#codeCss"),
      js: $("#codeJs"),
    },
    cm: { html: null, css: null, js: null },
    preview: $("#preview"),
    status: $("#previewStatus"),
    consoleList: $("#consoleList"),
    runBtn: $("#runBtn"),
    resetBtn: $("#resetBtn"),
    copyBtn: $("#copyBtn"),
    consoleClear: $("#consoleClear"),
    hintsPanel: $("#hintsPanel"),
    hintsToggle: $("#hintsToggle"),
    hintsTabs: $("#hintsTabs"),
    hintsList: $("#hintsList"),
    currentStep: "step1",
    currentLang: "html",
    resetArmed: false,
    resetTimer: null,
  };

  function getValue(lang) {
    return editor.cm[lang] ? editor.cm[lang].getValue() : editor.areas[lang].value;
  }
  function setValue(lang, value) {
    if (editor.cm[lang]) {
      editor.cm[lang].setValue(value || "");
      editor.cm[lang].clearHistory();
    } else {
      editor.areas[lang].value = value || "";
    }
  }
  function getCode() {
    return { html: getValue("html"), css: getValue("css"), js: getValue("js") };
  }
  function setCode(code) {
    setValue("html", code.html);
    setValue("css", code.css);
    setValue("js", code.js);
  }

  function saveCurrent() {
    storageSet(STORAGE_PREFIX + editor.currentStep, getCode());
  }

  function buildDocument(code) {
    // iframe 内で script の閉じタグが出てくるとタグが閉じてしまうので無害化
    var safeJs = (code.js || "").replace(/<\/script/gi, "<\\/script");
    var bridge =
      "(function(){" +
      "function send(type,message){try{parent.postMessage({source:'komaki-preview',type:type,message:String(message)},'*');}catch(e){}}" +
      "window.onerror=function(msg,src,line,col){send('error',msg+(line?' (行 '+line+')':''));return false;};" +
      "window.addEventListener('unhandledrejection',function(e){send('error','Promise エラー: '+(e.reason&&e.reason.message||e.reason));});" +
      "var origLog=console.log;console.log=function(){var a=Array.prototype.slice.call(arguments).map(function(v){try{return typeof v==='object'?JSON.stringify(v):String(v);}catch(e){return String(v);}});send('log',a.join(' '));origLog.apply(console,arguments);};" +
      "window.alert=function(m){send('log','alert: '+m);};" +
      "window.confirm=function(m){send('log','confirm: '+m+' → true');return true;};" +
      "window.prompt=function(m){send('log','prompt: '+m+' → \"\"');return '';};" +
      "})();";
    return (
      "<!DOCTYPE html><html lang=\"ja\"><head><meta charset=\"utf-8\">" +
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
      "<style>" + (code.css || "") + "</style>" +
      "<script>" + bridge + "<\/script>" +
      "</head><body>" +
      (code.html || "") +
      "<script>" + safeJs + "<\/script>" +
      "</body></html>"
    );
  }

  function clearConsole() {
    editor.consoleList.innerHTML = "";
    var li = document.createElement("li");
    li.className = "empty";
    li.textContent = "ここにエラーや console.log が表示されます";
    editor.consoleList.appendChild(li);
  }

  function appendConsole(type, message) {
    var empty = $(".empty", editor.consoleList);
    if (empty) empty.remove();
    var li = document.createElement("li");
    li.className = type;
    li.textContent = (type === "error" ? "✕ " : "› ") + message;
    editor.consoleList.appendChild(li);
    editor.consoleList.parentNode.scrollTop = editor.consoleList.parentNode.scrollHeight;
  }

  function run() {
    var code = getCode();
    clearConsole();
    editor.status.textContent = "更新中…";
    editor.status.classList.add("busy");
    editor.preview.srcdoc = buildDocument(code);
  }

  var runDebounced = debounce(run, 300);

  function selectLang(lang) {
    editor.currentLang = lang;
    LANGS.forEach(function (l) {
      var area = editor.areas[l];
      var wrap = area.parentNode;
      var tab = $('.lang-tab[data-lang="' + l + '"]', editor.langTabs);
      var active = l === lang;
      wrap.hidden = !active;
      if (active && editor.cm[l]) editor.cm[l].refresh();
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
    });
    renderHints();
  }

  function loadStep(stepId, opts) {
    var step = STEPS[stepId];
    if (!step) return;
    opts = opts || {};
    editor.currentStep = stepId;

    $all(".step-tab", editor.stepTabs).forEach(function (btn) {
      var active = btn.getAttribute("data-step") === stepId;
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    editor.title.textContent = step.title;
    editor.text.textContent = step.text;
    editor.hint.innerHTML = step.hint;

    var saved = opts.ignoreSaved ? null : storageGet(STORAGE_PREFIX + stepId);
    setCode(saved || step);
    selectLang(step.lang);
    disarmReset();
    run();
  }

  function disarmReset() {
    editor.resetArmed = false;
    clearTimeout(editor.resetTimer);
    editor.resetBtn.classList.remove("btn-danger-armed");
    editor.resetBtn.textContent = "リセット";
  }

  function onResetClick() {
    if (!editor.resetArmed) {
      // 1回目: 確認状態にする（confirm は使わない）
      editor.resetArmed = true;
      editor.resetBtn.classList.add("btn-danger-armed");
      editor.resetBtn.textContent = "本当に戻す？ もう一度押す";
      editor.resetTimer = setTimeout(disarmReset, 4000);
      return;
    }
    // 2回目: 実行
    storageRemove(STORAGE_PREFIX + editor.currentStep);
    loadStep(editor.currentStep, { ignoreSaved: true });
    toast("初期コードに戻しました");
  }

  function onCopyCode() {
    var code = getCode();
    var combined =
      "<!DOCTYPE html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n" +
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
      "  <title>My Page</title>\n  <style>\n" + code.css + "\n  </style>\n</head>\n<body>\n" +
      code.html + "\n  <script>\n" + code.js + "\n  <\/script>\n</body>\n</html>\n";
    copyText(combined).then(
      function () {
        toast("HTMLをまるごとコピーしました");
      },
      function () {
        toast("コピーできませんでした。手動で選択してください");
      }
    );
  }

  function handleTabKey(e) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    var ta = e.target;
    var start = ta.selectionStart;
    var end = ta.selectionEnd;
    var value = ta.value;
    if (e.shiftKey) {
      // 行頭の2スペースを削る
      var lineStart = value.lastIndexOf("\n", start - 1) + 1;
      if (value.substr(lineStart, 2) === "  ") {
        ta.value = value.slice(0, lineStart) + value.slice(lineStart + 2);
        ta.selectionStart = Math.max(lineStart, start - 2);
        ta.selectionEnd = Math.max(lineStart, end - 2);
      }
    } else {
      ta.value = value.slice(0, start) + "  " + value.slice(end);
      ta.selectionStart = ta.selectionEnd = start + 2;
    }
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }

  /* ---------------------------------------------------------
     3.4 コード例 → 「自由」ステップ、積み重ねデモ
     --------------------------------------------------------- */
  function openInFree(code, focusLang, message) {
    if (editor.currentStep !== "free") loadStep("free");
    LANGS.forEach(function (l) {
      if (typeof code[l] === "string") setValue(l, code[l]);
    });
    selectLang(focusLang || "html");
    saveCurrent();
    run();
    openDrawer();
    if (message) toast(message);
  }

  function stageCode(stage) {
    var code = { html: "", css: "", js: "" };
    stage.langs.forEach(function (l) {
      code[l] = EXAMPLE[l];
    });
    return code;
  }

  function initExample() {
    // 役割カードに <pre id="exHtml"> 等があれば同じコードを流し込む（現在のページには無い。無ければスキップ）
    var pres = { html: $("#exHtml"), css: $("#exCss"), js: $("#exJs") };
    LANGS.forEach(function (l) {
      if (pres[l]) pres[l].textContent = EXAMPLE[l].replace(/\n$/, "");
    });

    // 積み重ねデモ（コード + iframe 描画）
    var root = $("#stackDemo");
    if (!root) return;
    STACK_STAGES.forEach(function (stage, i) {
      var fig = document.createElement("figure");
      fig.className = "stack-item";

      var head = document.createElement("div");
      head.className = "stack-head";
      var label = document.createElement("span");
      label.className = "stack-label " + stage.cls;
      label.textContent = stage.label;
      var step = document.createElement("span");
      step.className = "stack-step";
      step.textContent = (i + 1) + " / " + STACK_STAGES.length;
      head.appendChild(label);
      head.appendChild(step);
      fig.appendChild(head);

      var body = document.createElement("div");
      body.className = "stack-body";

      var pre = document.createElement("pre");
      pre.className = "stack-code";
      stage.langs.forEach(function (l, n) {
        var span = document.createElement("span");
        var isNew = n === stage.langs.length - 1;
        span.className = "stack-chunk " + (isNew ? "is-new" : "is-old");
        var text = EXAMPLE[l].replace(/\n$/, "");
        if (l === "css") text = "<style>\n" + text + "\n</style>";
        if (l === "js") text = "<script>\n" + text + "\n<\/script>";
        span.textContent = text + (isNew ? "" : "\n\n");
        pre.appendChild(span);
      });
      body.appendChild(pre);
      // 足された部分（最後のチャンク）が見えるところまでスクロールしておく
      var newChunk = pre.lastChild;
      setTimeout(function () {
        pre.scrollTop = Math.max(0, newChunk.offsetTop - pre.offsetTop - 6);
      }, 0);

      var frame = document.createElement("iframe");
      frame.className = "stack-frame";
      frame.title = "表示: " + stage.label;
      frame.setAttribute("sandbox", "allow-scripts");
      frame.srcdoc = buildDocument(stageCode(stage));
      body.appendChild(frame);
      fig.appendChild(body);

      var cap = document.createElement("figcaption");
      var capText = document.createElement("span");
      capText.textContent = stage.caption;
      cap.appendChild(capText);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-sm";
      btn.textContent = "エディタで試す";
      btn.addEventListener("click", function () {
        openInFree(
          stageCode(stage),
          stage.langs[stage.langs.length - 1],
          "「自由」ステップに " + stage.label.replace("+ ", "") + " までのコードを入れました"
        );
      });
      cap.appendChild(btn);
      fig.appendChild(cap);

      root.appendChild(fig);
    });
  }

  /* ---------------------------------------------------------
     3.5 ヒントパネル（クリックでカーソル位置に挿入）
     --------------------------------------------------------- */
  function insertAtCursor(lang, text) {
    var cm = editor.cm[lang];
    if (cm) {
      cm.replaceSelection(text, "end");
      cm.focus();
    } else {
      var ta = editor.areas[lang];
      var start = ta.selectionStart || 0;
      var end = ta.selectionEnd || 0;
      ta.value = ta.value.slice(0, start) + text + ta.value.slice(end);
      ta.selectionStart = ta.selectionEnd = start + text.length;
      ta.focus();
    }
    saveCurrent();
    run();
  }

  function makeChip(code, label, extraClass) {
    var row = document.createElement("div");
    row.className = "hint-chip-row";
    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "hint-chip" + (extraClass ? " " + extraClass : "");
    chip.textContent = label || code;
    chip.title = "クリックでカーソル位置に入れる";
    chip.addEventListener("click", function () {
      insertAtCursor(editor.currentLang, code);
      toast("入れました: " + (label || code.split("\n")[0]));
    });
    var copy = document.createElement("button");
    copy.type = "button";
    copy.className = "hint-copy";
    copy.textContent = "コピー";
    copy.setAttribute("aria-label", "コピー: " + (label || code));
    copy.addEventListener("click", function (e) {
      e.stopPropagation();
      copyText(code).then(
        function () {
          toast("コピーしました");
        },
        function () {
          toast("コピーできませんでした");
        }
      );
    });
    row.appendChild(chip);
    row.appendChild(copy);
    return row;
  }

  function renderHints() {
    if (!editor.hintsList) return;
    var lang = editor.currentLang;
    var table = HINTS[lang] || {};
    var items = table[editor.currentStep] || table.common || [];

    $all(".hints-tab", editor.hintsTabs).forEach(function (tab) {
      var active = tab.getAttribute("data-lang") === lang;
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    editor.hintsList.innerHTML = "";
    editor.hintsList.setAttribute("data-lang", lang);
    items.forEach(function (item) {
      var group = document.createElement("div");
      group.className = "hint-group";
      var head = document.createElement("div");
      head.className = "hint-head";
      var name = document.createElement("code");
      name.className = "hint-name";
      name.textContent = item.name;
      var desc = document.createElement("span");
      desc.className = "hint-desc";
      desc.textContent = item.desc;
      head.appendChild(name);
      head.appendChild(desc);
      group.appendChild(head);

      if (item.palette) {
        var pal = document.createElement("div");
        pal.className = "hint-palette";
        CSS_PALETTE.forEach(function (c) {
          var sw = document.createElement("button");
          sw.type = "button";
          sw.className = "hint-swatch";
          sw.style.background = c.value;
          sw.title = c.label + " " + c.value;
          sw.setAttribute("aria-label", c.label + " " + c.value + " を入れる");
          sw.addEventListener("click", function () {
            insertAtCursor(editor.currentLang, c.value);
            toast("入れました: " + c.value);
          });
          pal.appendChild(sw);
        });
        group.appendChild(pal);
      } else {
        (item.codes || []).forEach(function (code) {
          group.appendChild(makeChip(code));
        });
      }
      editor.hintsList.appendChild(group);
    });
  }

  function setHintsOpen(open, save) {
    if (!editor.hintsPanel) return;
    editor.hintsPanel.classList.toggle("is-collapsed", !open);
    editor.hintsToggle.setAttribute("aria-expanded", open ? "true" : "false");
    editor.hintsToggle.title = open ? "ヒントをたたむ" : "ヒントを開く";
    if (save) storageSet(HINTS_OPEN_KEY, !!open);
    refreshEditorsSoon();
  }

  function hintsOpenDefault() {
    return !(isNarrow() || document.body.classList.contains("screen-mode"));
  }

  function initHints() {
    if (!editor.hintsPanel) return;
    var saved = storageGet(HINTS_OPEN_KEY);
    setHintsOpen(typeof saved === "boolean" ? saved : hintsOpenDefault(), false);

    editor.hintsToggle.addEventListener("click", function () {
      setHintsOpen(editor.hintsPanel.classList.contains("is-collapsed"), true);
    });
    $all(".hints-tab", editor.hintsTabs).forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectLang(tab.getAttribute("data-lang"));
      });
    });
  }

  // スクリーンモードに入ったとき、保存された好みが無ければヒントをたたむ
  function onScreenModeChangedForHints(on) {
    if (!editor.hintsPanel) return;
    if (typeof storageGet(HINTS_OPEN_KEY) === "boolean") return;
    setHintsOpen(on ? false : hintsOpenDefault(), false);
  }

  function initEditor() {
    if (!editor.root) return;

    // ステップタブを生成
    STEP_ORDER.forEach(function (id) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "step-tab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("data-step", id);
      btn.textContent = STEPS[id].label;
      btn.addEventListener("click", function () {
        loadStep(id);
      });
      editor.stepTabs.appendChild(btn);
    });

    $all(".lang-tab", editor.langTabs).forEach(function (tab) {
      tab.addEventListener("click", function () {
        var lang = tab.getAttribute("data-lang");
        selectLang(lang);
        if (editor.cm[lang]) editor.cm[lang].focus();
        else editor.areas[lang].focus();
      });
    });

    var CM_MODES = { html: "htmlmixed", css: "css", js: "javascript" };
    LANGS.forEach(function (l) {
      var area = editor.areas[l];
      if (window.CodeMirror) {
        // vendor/codemirror を同梱。CDN には依存しない
        var cm = window.CodeMirror.fromTextArea(area, {
          mode: CM_MODES[l],
          theme: "material-darker",
          lineNumbers: true,
          lineWrapping: true,
          indentUnit: 2,
          tabSize: 2,
          indentWithTabs: false,
          autoCloseBrackets: true,
          autoCloseTags: l === "html",
          matchBrackets: true,
          inputStyle: "contenteditable",
          extraKeys: {
            Tab: function (c) {
              if (c.somethingSelected()) c.indentSelection("add");
              else c.replaceSelection("  ", "end");
            },
            "Shift-Tab": function (c) {
              c.indentSelection("subtract");
            },
          },
        });
        cm.on("change", function () {
          saveCurrent();
          runDebounced();
        });
        editor.cm[l] = cm;
      } else {
        area.addEventListener("input", function () {
          saveCurrent();
          runDebounced();
        });
        area.addEventListener("keydown", handleTabKey);
      }
    });

    editor.runBtn.addEventListener("click", run);
    editor.resetBtn.addEventListener("click", onResetClick);
    editor.copyBtn.addEventListener("click", onCopyCode);
    editor.consoleClear.addEventListener("click", clearConsole);

    editor.preview.addEventListener("load", function () {
      editor.status.textContent = "● 表示中";
      editor.status.classList.remove("busy");
    });

    window.addEventListener("message", function (e) {
      var data = e.data;
      if (!data || data.source !== "komaki-preview") return;
      if (e.source !== editor.preview.contentWindow) return;
      appendConsole(data.type === "error" ? "error" : "log", data.message);
    });

    // ページ内の「このステップをエディタで開く」ボタン
    $all(".open-step").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadStep(btn.getAttribute("data-step"));
        openDrawer();
      });
    });

    // 資料中のコード例 → 「自由」ステップに流し込んで開く
    $all(".try-code[data-code]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var pre = $(btn.getAttribute("data-code"));
        var lang = btn.getAttribute("data-lang") || "html";
        if (!pre) return;
        var code = {};
        code[lang] = pre.textContent.replace(/^\n+|\s+$/g, "") + "\n";
        openInFree(code, lang, "「自由」ステップの " + lang.toUpperCase() + " に入れました");
      });
    });

    initExample();

    initHints();
    loadStep("step1");
  }

  /* ---------------------------------------------------------
     4. プロンプトなどのコピーボタン
     --------------------------------------------------------- */
  function initCopyButtons() {
    $all(".copy-btn[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = $(btn.getAttribute("data-copy"));
        if (!target) return;
        copyText(target.textContent.trim()).then(
          function () {
            var original = btn.textContent;
            btn.textContent = "コピーした！";
            toast("コピーしました");
            setTimeout(function () {
              btn.textContent = original;
            }, 1500);
          },
          function () {
            toast("コピーできませんでした");
          }
        );
      });
    });
  }

  function refreshEditors() {
    LANGS.forEach(function (l) {
      if (editor.cm[l]) editor.cm[l].refresh();
    });
  }

  /* ---------------------------------------------------------
     4.5 エディタ ドロワー（画面下からスライド）
     --------------------------------------------------------- */
  var DRAWER_KEY = "komaki2026.drawerHeight";
  var DRAWER_MIN = 30;
  var DRAWER_MAX = 95;
  var DRAWER_DEFAULT = 60;
  var drawer = {
    el: $("#editorDrawer"),
    handle: $("#drawerHandle"),
    toggle: $("#drawerToggle"),
    closeBtn: $("#drawerClose"),
    maxBtn: $("#maximizeBtn"),
    open: false,
    height: DRAWER_DEFAULT,
    maximized: false,
    restoreHeight: DRAWER_DEFAULT,
  };

  function isNarrow() {
    return window.innerWidth < 800;
  }

  function applyDrawerHeight(vh, save) {
    vh = Math.max(DRAWER_MIN, Math.min(DRAWER_MAX, vh));
    drawer.height = vh;
    document.documentElement.style.setProperty("--drawer-h", vh + "vh");
    if (save) storageSet(DRAWER_KEY, vh);
    refreshEditorsSoon();
  }

  var refreshTimer = null;
  function refreshEditorsSoon() {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(refreshEditors, 60);
  }

  function openDrawer() {
    if (!drawer.el) return;
    drawer.open = true;
    drawer.el.classList.add("is-open");
    drawer.el.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    drawer.toggle.textContent = "✕ 閉じる";
    drawer.toggle.setAttribute("aria-expanded", "true");
    // 非表示→表示の直後と、スライドインが終わった後に描画し直す
    refreshEditorsSoon();
    setTimeout(refreshEditors, 350);
  }

  function closeDrawer() {
    if (!drawer.el) return;
    drawer.open = false;
    drawer.el.classList.remove("is-open");
    drawer.el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    drawer.toggle.textContent = "</> エディタ";
    drawer.toggle.setAttribute("aria-expanded", "false");
    if (document.activeElement && drawer.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  }

  function toggleDrawer() {
    if (drawer.open) closeDrawer();
    else openDrawer();
  }

  function setMaximized(on) {
    drawer.maximized = on;
    drawer.maxBtn.setAttribute("aria-pressed", on ? "true" : "false");
    drawer.maxBtn.textContent = on ? "元に戻す" : "最大化";
    if (on) {
      drawer.restoreHeight = drawer.height;
      applyDrawerHeight(DRAWER_MAX, false);
    } else {
      applyDrawerHeight(drawer.restoreHeight, false);
    }
  }

  function initDrawerDrag() {
    var startY = 0;
    var startH = 0;
    function onMove(e) {
      var y = e.touches ? e.touches[0].clientY : e.clientY;
      var deltaVh = ((startY - y) / window.innerHeight) * 100;
      applyDrawerHeight(startH + deltaVh, false);
    }
    function onUp() {
      drawer.el.classList.remove("is-dragging");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onUp);
      storageSet(DRAWER_KEY, drawer.height);
      drawer.maximized = false;
      drawer.maxBtn.setAttribute("aria-pressed", "false");
      drawer.maxBtn.textContent = "最大化";
      refreshEditors();
    }
    function onDown(e) {
      if (isNarrow()) return;
      startY = e.touches ? e.touches[0].clientY : e.clientY;
      startH = drawer.height;
      drawer.el.classList.add("is-dragging");
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      document.addEventListener("touchmove", onMove, { passive: true });
      document.addEventListener("touchend", onUp);
      if (e.cancelable && !e.touches) e.preventDefault();
    }
    drawer.handle.addEventListener("mousedown", onDown);
    drawer.handle.addEventListener("touchstart", onDown, { passive: true });
  }

  function isInsideEditorInput(el) {
    if (!el) return false;
    if (isTypingTarget(el)) return true;
    return !!(el.closest && el.closest(".CodeMirror"));
  }

  function initDrawer() {
    if (!drawer.el) return;
    var saved = storageGet(DRAWER_KEY);
    applyDrawerHeight(typeof saved === "number" ? saved : DRAWER_DEFAULT, false);

    drawer.toggle.addEventListener("click", toggleDrawer);
    drawer.closeBtn.addEventListener("click", closeDrawer);
    drawer.maxBtn.addEventListener("click", function () {
      setMaximized(!drawer.maximized);
    });
    initDrawerDrag();

    // キーボード: E で開閉、Esc で閉じる（入力中は無効）
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.open) {
        closeDrawer();
        e.stopImmediatePropagation();
        return;
      }
      if ((e.key === "e" || e.key === "E") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (isInsideEditorInput(e.target)) return;
        e.preventDefault();
        toggleDrawer();
      }
    });

    window.addEventListener("resize", refreshEditorsSoon);
  }

  /* ---------------------------------------------------------
     5. スクリーンモード（スライド表示）
     --------------------------------------------------------- */
  var screen = {
    btn: $("#screenModeBtn"),
    prev: $("#slidePrev"),
    next: $("#slideNext"),
    counter: $("#slideCounter"),
    slides: $all("main > .slide"),
    index: 0,
    on: false,
  };

  function showSlide(i) {
    if (i < 0 || i >= screen.slides.length) return;
    screen.index = i;
    screen.slides.forEach(function (s, n) {
      s.classList.toggle("is-active", n === i);
      if (n === i) s.scrollTop = 0;
    });
    screen.prev.disabled = i === 0;
    screen.next.disabled = i === screen.slides.length - 1;
    screen.counter.textContent = (i + 1) + " / " + screen.slides.length;
    // URLハッシュも合わせておくと、解除後にその場所へ戻れる
    if (screen.slides[i].id && history.replaceState) {
      history.replaceState(null, "", "#" + screen.slides[i].id);
    }
  }

  function nearestSlideIndex() {
    var best = 0;
    var bestDist = Infinity;
    var mid = window.innerHeight * 0.35;
    screen.slides.forEach(function (s, n) {
      var rect = s.getBoundingClientRect();
      var dist = Math.abs(rect.top - mid);
      if (rect.top <= mid && rect.bottom > mid) {
        best = n;
        bestDist = -1;
      } else if (bestDist >= 0 && dist < bestDist) {
        best = n;
        bestDist = dist;
      }
    });
    return best;
  }

  function setScreenMode(on) {
    if (on === screen.on) return;
    screen.on = on;
    if (on) {
      var start = nearestSlideIndex();
      document.body.classList.add("screen-mode");
      showSlide(start);
    } else {
      var current = screen.slides[screen.index];
      document.body.classList.remove("screen-mode");
      screen.slides.forEach(function (s) {
        s.classList.remove("is-active");
      });
      if (current) current.scrollIntoView({ block: "start" });
    }
    screen.btn.setAttribute("aria-pressed", on ? "true" : "false");
    screen.btn.textContent = on ? "スクリーンモード: ON（Escで解除）" : "スクリーンモード";
    onScreenModeChangedForHints(on);
  }

  function isTypingTarget(el) {
    if (!el) return false;
    var tag = el.tagName;
    return tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT" || el.isContentEditable;
  }

  function initScreenMode() {
    if (!screen.btn || screen.slides.length === 0) return;
    screen.btn.addEventListener("click", function () {
      setScreenMode(!screen.on);
    });
    screen.prev.addEventListener("click", function () {
      showSlide(screen.index - 1);
    });
    screen.next.addEventListener("click", function () {
      showSlide(screen.index + 1);
    });
    document.addEventListener("keydown", function (e) {
      if (!screen.on) return;
      if (e.key === "Escape") {
        setScreenMode(false);
        return;
      }
      if (isInsideEditorInput(e.target)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        showSlide(screen.index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        showSlide(screen.index - 1);
      } else if (e.key === "Home") {
        showSlide(0);
      } else if (e.key === "End") {
        showSlide(screen.slides.length - 1);
      }
    });
  }

  /* ---------------------------------------------------------
     6. フェードイン（IntersectionObserver。無ければ即表示）
     --------------------------------------------------------- */
  function initReveal() {
    var targets = $all(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) {
        t.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    targets.forEach(function (t) {
      io.observe(t);
    });
  }

  /* ---------------------------------------------------------
     7. ワークシートの自動保存
     --------------------------------------------------------- */
  function initWorksheet() {
    $all(".ws-q textarea[data-key]").forEach(function (ta) {
      var key = "komaki2026.ws." + ta.getAttribute("data-key");
      var saved = storageGet(key);
      if (typeof saved === "string") ta.value = saved;
      ta.addEventListener(
        "input",
        debounce(function () {
          storageSet(key, ta.value);
        }, 300)
      );
    });
  }

  /* ---------------------------------------------------------
     起動
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initEditor();
    initDrawer();
    initCopyButtons();
    initScreenMode();
    initReveal();
    initWorksheet();
  });
})();

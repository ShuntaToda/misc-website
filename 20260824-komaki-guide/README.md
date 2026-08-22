# 技能五輪 ウェブデザイン職種を知ろう（2026.08.24 小牧工科高校）

技能五輪・アビリンピック2026 競技解説ガイド勉強会（主催: 愛知県 / 運営: エイブラハム株式会社）の教材ページ。
高校生約20名（全員PCあり）が、12/5-6 の全国大会当日に見学者へ「ウェブデザイン職種」を解説できるようになることが目的。

- 公開URL（予定）: https://shuntatoda.github.io/misc-website/20260824-komaki-guide/
- CDNなし・ログイン不要。GitHub Pages の静的ホスティングで動く。唯一の依存はエディタ用 CodeMirror 5（MIT）で `vendor/` に同梱。

## ファイル

| ファイル | 内容 |
| --- | --- |
| `index.html` | メインページ（`style.css` / `app.js` を読み込む） |
| `style.css` | スタイル。ダークテーマ、スクリーンモード、レスポンシブ |
| `app.js` | 自作エディタ、スクリーンモード、コピーボタン、ワークシート保存。ステップの初期コードは `STEPS`、04「同じHTMLでも…」積み重ねデモ（コード表示 + iframe srcdoc）は `EXAMPLE` / `STACK_STAGES` から描画（「3つの言葉の役割」カードは用語解説のみでコードは出さない）、エディタ左の「ヒント」パネルの内容は `HINTS`（言語 × ステップ。ステップ未指定なら `common`）に定義 |
| `offline.html` | `index.html` に CSS/JS を全部インライン化した1ファイル版。ネットが無くてもダブルクリックで開ける保険。**画像・動画は `images/` を相対パス参照しているので、フォルダごと USB に入れること** |
| `images/` | 写真・動画（下記「画像・動画」参照） |
| `vendor/codemirror/` | エディタ用の CodeMirror 5.65.18（MIT、`LICENSE` 同梱）。CDN は使わずローカル同梱。core + xml/css/javascript/htmlmixed モード + material-darker テーマ + closebrackets/closetag/matchbrackets アドオン |

### offline.html の同期ルール

`index.html` / `style.css` / `app.js` を直したら、`offline.html` も手で同期する。
やり方: `index.html` の `<link rel="stylesheet" href="style.css" />` を `<style>…</style>`（style.css の中身）に、
`<script src="app.js"></script>` を `<script>…</script>`（app.js の中身）に置き換えるだけ。
`vendor/codemirror/*.css` の `<link>` と `*.js` の `<script src>` も同じ順番でインライン化する（offline.html は vendor も内包していて、ファイル単体で動く）。
`app.js` の中に `</script>` という文字列を書かないこと（コメントも含む。インライン化したときにタグが閉じる）。同様に `<!--` も書かない（`HINTS` / `STEPS` のコード例に必要なら `"<!\x2d-"` のようにエスケープする）。
再生成後は、インライン部分を元の `<link>` / `<script src>` に戻すと `index.html` と一致することを確認する。

## ヒントパネルと早見表

- **ヒントパネル**（エディタ内の左カラム、幅 240px）: タグ名・プロパティ名を知らなくても、チップをクリックするだけでカーソル位置にコードが入り、すぐ実行される（CodeMirror の `replaceSelection`。CodeMirror が無いときは textarea の `selectionStart` で挿入）。各チップに「コピー」ボタンもある。
  - 内容は「現在のステップ × 現在の言語タブ」で切り替わる（`HINTS[lang][stepId]` → 無ければ `HINTS[lang].common`）。STEP1 = HTML タグ、STEP2 = CSS プロパティ（値の例 2〜3 パターン＋色パレット）、STEP3 = JS の定番。ミニ競技・自由はパネル上部の HTML/CSS/JS タブで全セットを切替（エディタの言語タブと連動）
  - CSS タブには色パレット（赤〜黒の10色）。クリックで色コード文字列だけが入る（`color: ` を入れてから色を押す使い方）
  - 上部に「困ったら」3行（ヒントをクリック / コンソールの赤い文字を読む / リセットで戻せる）
  - 「◀ ヒント」ボタンで折りたたみ。開閉状態は localStorage `komaki2026.hintsOpen` に保存。保存が無いときは初期「開」、ただし画面幅 800px 未満とスクリーンモード中は初期「閉」
- **早見表セクション**（`#cheatsheet`、ハンズオン①の直後、ナビ「早見表」）: HTML / CSS / JS の3カラムに「書き方 / 意味」の表。スクリーンモードのスライドにも含まれる。`Ctrl+P` で印刷すると `@media print` で早見表だけが白背景・黒文字で出る（配布用）

## 画像・動画

すべて講師（戸田駿太）本人が撮影（使用許可あり）。ページ内の `<figcaption>` は写真の説明のみで、出典表記は付けない。
写真は長辺 1600px 以下・500KB 目安に縮小、動画は H.264 / yuv420p / 音声なし / faststart で 1280px・約2MB に変換して `images/` に保存。
**`index.html` も `offline.html` も `images/` を相対パス参照しているので、配布するときは `images/` ごとフォルダで渡すこと。**

| ファイル | 内容 | 配置 |
| --- | --- | --- |
| `national2024-competing.jpg` | 第62回 技能五輪全国大会（2024）ウェブデザイン職種 競技中（残り時間表示） | 02 技能五輪とは「大会の雰囲気」 |
| `aichi2025-medals.jpg` | あいち技能五輪・アビリンピック2025 のメダル（金・銀・銅） | 02 技能五輪とは「大会の雰囲気」 |
| `lyon2024-opening-ceremony.jpg` | WorldSkills Lyon 2024 開会式 | 02 「全国大会 → 国際大会への道」図の下 |
| `lyon2024.mp4` / `lyon2024-poster.jpg` | WorldSkills Lyon 2024 会場の動画（縦 960×1280、約10秒、`autoplay muted loop playsinline`）とそのポスター画像 | 02 「全国大会 → 国際大会への道」図の下（開会式写真の横） |
| `national2025-venue.jpg` | 第63回 技能五輪全国大会（2025）ウェブデザイン職種 会場（開始前） | 03 ウェブデザイン職種とは |
| `devtools-step1-open.jpg` / `devtools-step2-panel.jpg` / `devtools-step3-edit.jpg` | DevTools の操作手順（右クリック→検証 / Elements と Styles / h1 行の拡大）。2026/01 の体験会素材を流用。丸枠・ラベルは CSS オーバーレイ（画像に対する % 配置）で重ねている | 04 「DevTools で好きなサイトを書きかえてみよう」 |
| `national2024-banner.jpg` | 第62回 技能五輪全国大会（2024）ウェブデザイン職種 競技紹介バナー（縦長） | 03 ウェブデザイン職種とは |

- 縦長の写真・動画は `<figure class="photo portrait">` に入れ、親を `.photo-grid.with-portrait`（2fr : 1fr）にすると横長写真と高さがそろう。
- 変換の例: `sips -s format jpeg -s formatOptions 70 -Z 1600 in.jpg --out images/x.jpg` / `ffmpeg -i in.mp4 -an -vf "scale=-2:1280,format=yuv420p" -c:v libx264 -crf 30 -preset slow -movflags +faststart images/lyon2024.mp4`

## 事前確認事項（前日〜当日朝）

- [ ] 学校のネットワークで以下が開けるか（フィルタリングに注意）
  - [ ] https://shuntatoda.github.io/misc-website/20260824-komaki-guide/ （このページ）
  - [ ] https://duck.ai （ハンズオン②。開けない場合は講師PCのデモ＋ `offline.html` の「自由」タブで手書きに切替）
  - [ ] 任意: https://picsum.photos （STEP1 ヒントの画像URL。開けなくても支障なし）
- [ ] 生徒PCのブラウザ（Chrome / Edge 推奨）で DevTools（F12）が制限されていないか
- [ ] 生徒PCでクリップボードコピーが動くか（`file://` で開いた場合はフォールバックで動く）
- [ ] プロジェクタで「スクリーンモード」を試す（ヘッダー右上ボタン / Esc で解除 / ← → で移動）
- [ ] `offline.html` と `images/`（写真＋動画）をフォルダごと USB メモリにも入れておく（ページが開けない場合の配布用）
- [ ] 12月の全国大会の会場名・日程に変更がないか（ページ内: 「12月5日(土)・6日(日)、愛知」「Aichi Sky Expo」の記載を確認）
- [ ] 昨年の M3 課題の説明（写真スライドショーアプリ）が話せるように一度見直す

## 当日の進行メモ（13:00–15:00）

| 時刻 | 内容 | メモ |
| --- | --- | --- |
| 0:00–0:10 | 自己紹介・技能五輪とは | セクション 02。国際大会の体験談を1つ |
| 0:10–0:25 | ウェブデザイン職種とは | セクション 03。モジュール→評価ポイント→道具→昨年M3 |
| 0:25–0:35 | ウェブサイトの仕組み | セクション 04。「いいね」デモを押させる → DevTools で学校HPを書きかえ実演 → 生徒にもやらせる |
| 0:35–1:10 | ハンズオン① | セクション 05。STEP1→2→3 を各10分。机間巡視。早い子はミニ競技タブへ |
| 1:10–1:20 | 休憩 | |
| 1:20–1:45 | ハンズオン② duck.ai | セクション 06。PROMPT 1 → 「自由」タブに貼る → PROMPT 2/3 でくり返し |
| 1:45–2:00 | 解説ストーリーの種づくり | セクション 08。ワークシートに書く5分 → グループ発表10分 |

- エディタ左の「ヒント」パネル: 生徒には「書き方がわからなかったら左のヒントをクリック」と最初に伝える。投影中は邪魔なら「◀ ヒント」でたたむ
- エディタは画面下からスライドする「ドロワー」。右下の「</> エディタ」ボタン／キーボード `E` で開閉、`Esc` で閉じる。上端のつまみをドラッグで高さ 30〜95vh（localStorage に保存）、「最大化」で 95vh。開いたまま資料をスクロールできる。各ステップカードの「このステップをエディタで開く」、コード例の「エディタで試す」（「自由」ステップに流し込み）からも開く
- スクリーンモードで投影しつつ、生徒は自分のPCで同じページを開いて進める。スクリーンモード中もドロワーは使える
- エディタの内容は生徒PCの localStorage に自動保存される（ブラウザを閉じても残る）。「リセット」は2回押しで初期コードに戻る
- JS のエラーはエディタ下の CONSOLE に赤字で出る。「赤い文字をそのままAIに貼る」と案内する
- ミニ競技（セクション 07）は時間が余ったとき用。5分で打ち切って隣同士で見比べる

## ローカルで確認

```sh
cd 20260824-komaki-guide
python3 -m http.server 8000
# → http://localhost:8000/
```

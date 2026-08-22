# misc-website

イベント・講演・体験会のために作成した静的サイトをまとめて GitHub Pages で公開しているリポジトリです。

- 公開URL: https://websites.shuntem.net/ （`CNAME` で独自ドメインを設定）
- ビルド工程なし。リポジトリの内容がそのまま静的配信されます。

## ディレクトリ構成

| パス | 内容 |
| --- | --- |
| `index.html` | トップページ（サイト一覧） |
| `assets/home.css` | トップページのスタイル |
| `assets/home.js` | トップページのロジック。サイト一覧データ `SITES`、検索・フィルタ・並び替え、three.js 背景 |
| `vendor/three/` | three.js（`three.module.min.js` / `three.core.min.js` / `LICENSE`）のローカル同梱 |
| `CNAME` | GitHub Pages の独自ドメイン設定 |
| `YYYYMMDD-xxx/` | 各イベント用サイト（下表） |

### イベントディレクトリ一覧

`assets/home.js` の `SITES` と同じ内容です。

| ディレクトリ | 内容 | 日付 |
| --- | --- | --- |
| `20260824-komaki-guide/` | 小牧工科高校 - 技能五輪ウェブデザイン職種を知ろう（競技解説ガイド勉強会。サイト内エディタと AI で HTML/CSS/JS を体験） | 2026.08.24 |
| `20260227-claude-code-seminar/` | 超初級から！Claude / Claude Code の始め方を解説（セミナーのスライド資料） | 2026.02.27 |
| `20260111-gorin-taiken/` | ものづくり体験会 - 技能五輪（中学生向け AI ウェブサイト・アプリ制作体験） | 2026.01.11 |
| `20251216aichi-sougoukouka/` | 愛知総合工科高等学校 - 講演（高校生によるウェブサイト・ゲームの作品一覧） | 2025.12.16 |
| `20251205-tsukuba-one-school-one-skill/` | つくば市立高山中学校 - One School One Skill（中学生による作品一覧） | 2025.12.05 |
| `20250613-komaki-guide/` | 小牧工科高校 - 技能五輪ウェブデザイン職種競技解説ガイド（全国大会2025） | 2025.06.13 |

## トップページの機能

- **three.js 背景**: 水色のパーティクルを近接線で結んだネットワークと、ワイヤーフレームの幾何体が常時アニメーション。マウス／タッチ位置にカメラがパララックス追従し、カーソル近傍のパーティクルが押し出され、線が濃くなります。`prefers-reduced-motion` では動きを抑制、WebGL 非対応環境では CSS グラデーション背景にフォールバックします。
- **検索**: タイトル・説明・タグ・日付に対するキーワード検索
- **年フィルタ**: `SITES` の日付から自動生成される年チップで絞り込み
- **並び替え**: 新しい順 / 古い順

## サイトの追加方法

1. `YYYYMMDD-短い英語名/` の形式で新しいディレクトリを作り、`index.html` などを配置する。
2. `assets/home.js` の `SITES` 配列に 1 件追加する（順序は問いません。日付で自動ソートされます）。

   | フィールド | 必須 | 説明 |
   | --- | --- | --- |
   | `title` | ○ | カードに表示するタイトル |
   | `description` | ○ | 1〜2 行の説明文 |
   | `date` | ○ | `YYYY-MM-DD`。表示は `YYYY.MM.DD` に変換され、年フィルタにも使われる |
   | `href` | ○ | リンク先（`./ディレクトリ名/index.html` など相対パス） |
   | `tag` | | 右上に出す小さなラベル（例: 講演 / 体験会 / セミナー） |
   | `article` | | 関連記事の URL。指定するとカードに「関連記事 ↗」リンクが付く |

   ```js
   {
     title: "○○高校 - △△講演",
     description: "講演で作成した作品の一覧ページ",
     date: "2026-10-01",
     href: "./20261001-example-event/index.html",
     tag: "講演",
     article: "https://dev.classmethod.jp/articles/example/",
   },
   ```

3. `main` に push すると GitHub Pages に反映されます。

## ローカルでの確認

トップページは ES Modules と importmap を使っているため `file://` では動きません。リポジトリ直下で簡易サーバーを立てて確認してください。

```sh
python3 -m http.server 8000
# → http://localhost:8000/
```

## 各イベントディレクトリの補足

- `20260824-komaki-guide/`: `index.html` + `style.css` + `app.js` 構成。`offline.html` は CSS/JS/CodeMirror をすべてインライン化した単体配布版（画像・動画は `images/` を相対参照）。詳細は同ディレクトリの `README.md` を参照。
- `20260227-claude-code-seminar/`: Marp で書き出した HTML スライド（`03_marp_claude-seminar.html`）のみ。`index.html` は無く、トップページからはこのファイルに直接リンクしています。
- `20260111-gorin-taiken/`: 体験会のページと参加者作品（`results/`）、当日資料 PDF。
- `20251216aichi-sougoukouka/`: 作品データは `data.js` に定義。
- `20251205-tsukuba-one-school-one-skill/`: 作品ごとのサブディレクトリと配布資料 PDF。
- `20250613-komaki-guide/`: 解説ページ本体と、その PDF 版・参考画像。

## ライセンス / クレジット

- [three.js](https://threejs.org/)（MIT）— `vendor/three/LICENSE`
- [CodeMirror 5](https://codemirror.net/5/)（MIT）— `20260824-komaki-guide/vendor/codemirror/LICENSE`

/**
 * websites.shuntem.net トップページ
 * - SITES 配列にサイト情報を追加するだけで一覧に反映されます。
 * - 背景は three.js のパーティクルネットワーク（WebGL 非対応時は CSS グラデーションのみ）。
 */

// ---------------------------------------------------------------------------
// サイト一覧データ
// 追加方法: 下の配列に以下の形式でオブジェクトを追加してください（順序は問いません。日付で自動ソートされます）。
//   {
//     title: "表示タイトル",
//     description: "1〜2行の説明文",
//     date: "YYYY-MM-DD",          // 表示は YYYY.MM.DD に変換されます
//     href: "./ディレクトリ名/index.html",
//     tag: "講演" など任意のラベル（省略可）,
//     article: "https://...",      // 関連記事URL（省略可）
//   },
// ---------------------------------------------------------------------------
const SITES = [
  {
    title: "小牧工科高校 - 技能五輪ウェブデザイン職種を知ろう",
    description:
      "技能五輪・アビリンピック2026 競技解説ガイド勉強会。HTML/CSS/JSの仕組みと競技内容を、サイト内エディタとAIで体験しながら学ぶページ",
    date: "2026-08-24",
    href: "./20260824-komaki-guide/index.html",
    tag: "勉強会",
  },
  {
    title: "超初級から！Claude / Claude Code の始め方を解説",
    description:
      "Claude・Cowork・Claude Code の概要と実演、始め方を紹介したセミナーのスライド資料",
    date: "2026-02-27",
    href: "./20260227-claude-code-seminar/03_marp_claude-seminar.html",
    tag: "セミナー",
  },
  {
    title: "ものづくり体験会 - 技能五輪",
    description: "中学生向けのAIを使ったウェブサイト・アプリ制作体験のためのページ",
    date: "2026-01-11",
    href: "./20260111-gorin-taiken/index.html",
    tag: "体験会",
  },
  {
    title: "愛知総合工科高等学校 - 講演",
    description: "AIとウェブ開発に関する講演で作成した高校生によるウェブサイト・ゲームの作品一覧",
    date: "2025-12-16",
    href: "./20251216aichi-sougoukouka/index.html",
    tag: "講演",
    article: "https://dev.classmethod.jp/articles/highschool-vibe-coding/",
  },
  {
    title: "つくば市立高山中学校 - One School One Skill",
    description: "中学生によるAIを活用したウェブサイト・ゲーム制作の体験で作成した作品一覧",
    date: "2025-12-05",
    href: "./20251205-tsukuba-one-school-one-skill/index.html",
    tag: "体験会",
    article: "https://dev.classmethod.jp/articles/gorin-one-school-one-skill/",
  },
  {
    title: "小牧工科高校 - 技能五輪ウェブデザイン職種競技解説ガイド",
    description: "技能五輪全国大会2025のウェブデザイン職種の競技内容を解説するためのページ",
    date: "2025-06-13",
    href: "./20250613-komaki-guide/index.html",
    tag: "解説",
  },
];

// ---------------------------------------------------------------------------
// 一覧の描画・フィルタ
// ---------------------------------------------------------------------------
const state = { year: "all", sort: "desc", query: "" };

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const countShown = document.getElementById("count-shown");
const countTotal = document.getElementById("count-total");
const yearChips = document.getElementById("year-chips");
const searchInput = document.getElementById("search");

const formatDate = (iso) => iso.replace(/-/g, ".");

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

const cardHtml = (site, index) => `
  <li style="--i:${index}">
    <a class="card" href="${escapeHtml(site.href)}">
      <div class="card__meta">
        <span class="card__date">${formatDate(site.date)}</span>
        ${site.tag ? `<span class="card__tag">${escapeHtml(site.tag)}</span>` : ""}
      </div>
      <h2 class="card__title">${escapeHtml(site.title)}</h2>
      <p class="card__desc">${escapeHtml(site.description)}</p>
      <div class="card__foot">
        <span class="card__open">開く <span aria-hidden="true">→</span></span>
      </div>
    </a>
    ${
      site.article
        ? `<a class="card__article card__article--float" href="${escapeHtml(site.article)}" target="_blank" rel="noopener noreferrer">関連記事 ↗</a>`
        : ""
    }
  </li>`;

const filtered = () => {
  const q = state.query.trim().toLowerCase();
  return SITES.filter((s) => {
    if (state.year !== "all" && !s.date.startsWith(state.year)) return false;
    if (!q) return true;
    return `${s.title} ${s.description} ${s.tag ?? ""} ${s.date}`.toLowerCase().includes(q);
  }).sort((a, b) => (state.sort === "desc" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
};

let firstRender = true;
const render = () => {
  const list = filtered();
  const paint = () => {
    grid.classList.toggle("is-refiltering", !firstRender);
    grid.innerHTML = list.map(cardHtml).join("");
    empty.hidden = list.length > 0;
    countShown.textContent = String(list.length);
    firstRender = false;
  };
  if (firstRender || !grid.children.length) {
    paint();
    return;
  }
  for (const li of grid.children) li.classList.add("is-leaving");
  setTimeout(paint, 200);
};

const buildYearChips = () => {
  const years = [...new Set(SITES.map((s) => s.date.slice(0, 4)))].sort().reverse();
  yearChips.innerHTML = [
    `<button type="button" class="chip is-active" data-year="all" aria-pressed="true">すべて</button>`,
    ...years.map((y) => `<button type="button" class="chip" data-year="${y}" aria-pressed="false">${y}</button>`),
  ].join("");
};

const activate = (group, attr, value) => {
  for (const btn of group.querySelectorAll(`[${attr}]`)) {
    const active = btn.getAttribute(attr) === value;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  }
};

yearChips.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-year]");
  if (!btn) return;
  state.year = btn.dataset.year;
  activate(yearChips, "data-year", state.year);
  render();
});

document.querySelector(".sort").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-sort]");
  if (!btn) return;
  state.sort = btn.dataset.sort;
  activate(btn.parentElement, "data-sort", state.sort);
  render();
});

let searchTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.query = searchInput.value;
    render();
  }, 120);
});

document.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--i", i));
countTotal.textContent = String(SITES.length);
buildYearChips();
render();

// ---------------------------------------------------------------------------
// 背景: three.js パーティクルネットワーク
// ---------------------------------------------------------------------------
const startBackground = async () => {
  const canvas = document.getElementById("bg");
  const hasWebGL = (() => {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      return false;
    }
  })();
  if (!hasWebGL) return; // CSS グラデーション背景にフォールバック

  let THREE;
  try {
    THREE = await import("three");
  } catch (err) {
    console.warn("three.js の読み込みに失敗しました。静的背景を使用します。", err);
    return;
  }

  const isMobile = window.innerWidth < 768;
  const COUNT = isMobile ? 70 : 170;
  const LINK_DIST = isMobile ? 2.4 : 2.6;
  const BOUNDS = { x: 14, y: 9, z: 5 };

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 16;

  // --- パーティクル ---
  const positions = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * BOUNDS.x * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2;
    velocities[i * 3] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
  }
  const pointsGeo = new THREE.BufferGeometry();

  const sprite = (() => {
    const size = 64;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.8)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();

  const points = new THREE.Points(
    pointsGeo,
    new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 0.22 : 0.18,
      map: sprite,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      sizeAttenuation: true,
    }),
  );
  scene.add(points);

  // --- 線（頂点カラーでカーソル近傍を明るく） ---
  const maxLinks = COUNT * 6;
  const linePositions = new Float32Array(maxLinks * 2 * 3);
  const lineColors = new Float32Array(maxLinks * 2 * 3);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
  lineGeo.setDrawRange(0, 0);
  const lines = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false }),
  );
  scene.add(lines);
  const colorBase = new THREE.Color(0x7dd3fc).multiplyScalar(0.55); // 通常時は淡く
  const colorHot = new THREE.Color(0x0ea5e9); // カーソル近傍は濃く

  // --- 浮遊する幾何体 ---
  const shapes = [];
  const shapeDefs = isMobile
    ? [[new THREE.IcosahedronGeometry(1.6, 0), -4, 3, -3]]
    : [
        [new THREE.IcosahedronGeometry(1.8, 0), -9, 3.5, -4],
        [new THREE.OctahedronGeometry(1.3, 0), 9.5, -3, -3],
        [new THREE.TorusGeometry(1.3, 0.35, 10, 40), 4, 5, -6],
      ];
  for (const [geo, x, y, z] of shapeDefs) {
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0x0ea5e9, wireframe: true, transparent: true, opacity: 0.16 }),
    );
    mesh.position.set(x, y, z);
    mesh.userData.base = new THREE.Vector3(x, y, z);
    mesh.userData.speed = 0.12 + Math.random() * 0.12;
    scene.add(mesh);
    shapes.push(mesh);
  }

  // --- マウス / タッチ追従 ---
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FOLLOW = reduced ? 0.3 : 1; // reduced-motion 時は追従を弱める
  const LERP = 0.07;
  const mouse = { x: 0, y: 0 }; // lerp 後の NDC (-1..1)
  const target = { x: 0, y: 0 }; // 生の NDC
  const cursorWorld = new THREE.Vector3(); // z=0 平面上のカーソル位置
  const prevCursorWorld = new THREE.Vector3();
  let cursorSpeed = 0; // カーソルの移動速度（さざ波の強さに使用）
  let cursorActive = false;
  const ndcVec = new THREE.Vector3();
  const setTarget = (clientX, clientY) => {
    target.x = (clientX / window.innerWidth - 0.5) * 2;
    target.y = -(clientY / window.innerHeight - 0.5) * 2;
    cursorActive = true;
  };
  window.addEventListener("mousemove", (e) => setTarget(e.clientX, e.clientY), { passive: true });
  window.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (t) setTarget(t.clientX, t.clientY);
    },
    { passive: true },
  );
  window.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (t) setTarget(t.clientX, t.clientY);
  }, { passive: true });

  // カーソル位置を z=0 平面へ投影
  const projectCursor = () => {
    ndcVec.set(mouse.x, mouse.y, 0.5).unproject(camera);
    const dir = ndcVec.sub(camera.position).normalize();
    const dist = -camera.position.z / dir.z;
    cursorWorld.copy(camera.position).addScaledVector(dir, dist);
  };

  // パーティクルの変位（カーソルの押し出し）。描画座標 = base + disp
  const base = positions; // 自由移動する基準座標
  const disp = new Float32Array(COUNT * 3);
  const drawPos = new Float32Array(COUNT * 3);
  pointsGeo.setAttribute("position", new THREE.BufferAttribute(drawPos, 3));
  const INFLUENCE = isMobile ? 3.2 : 4;
  const INF2 = INFLUENCE * INFLUENCE;

  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const speedScale = reduced ? 0.08 : 1;
  const pos = pointsGeo.attributes.position;
  let visible = true;
  document.addEventListener("visibilitychange", () => {
    visible = !document.hidden;
  });

  const step = (time) => {
    const t = time * 0.001;

    // マウス追従（lerp）
    mouse.x += (target.x - mouse.x) * LERP;
    mouse.y += (target.y - mouse.y) * LERP;
    camera.position.x = mouse.x * 4.5 * FOLLOW;
    camera.position.y = mouse.y * 3 * FOLLOW;
    camera.lookAt(0, 0, 0);
    prevCursorWorld.copy(cursorWorld);
    projectCursor();
    cursorSpeed = cursorSpeed * 0.9 + cursorWorld.distanceTo(prevCursorWorld) * 0.1;
    const ripple = cursorActive ? Math.min(1, 0.35 + cursorSpeed * 4) * FOLLOW : 0;

    // パーティクル移動（境界で反射）＋カーソル近傍の押し出し
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      base[ix] += velocities[ix] * speedScale;
      base[ix + 1] += velocities[ix + 1] * speedScale;
      base[ix + 2] += velocities[ix + 2] * speedScale;
      if (Math.abs(base[ix]) > BOUNDS.x) velocities[ix] *= -1;
      if (Math.abs(base[ix + 1]) > BOUNDS.y) velocities[ix + 1] *= -1;
      if (Math.abs(base[ix + 2]) > BOUNDS.z) velocities[ix + 2] *= -1;

      if (ripple > 0) {
        const dx = base[ix] + disp[ix] - cursorWorld.x;
        const dy = base[ix + 1] + disp[ix + 1] - cursorWorld.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < INF2 && d2 > 1e-4) {
          const d = Math.sqrt(d2);
          const f = (1 - d / INFLUENCE) * 0.09 * ripple; // 近いほど強く押し出す
          disp[ix] += (dx / d) * f;
          disp[ix + 1] += (dy / d) * f;
        }
      }
      // 変位はばねのように戻る
      disp[ix] *= 0.94;
      disp[ix + 1] *= 0.94;
      drawPos[ix] = base[ix] + disp[ix];
      drawPos[ix + 1] = base[ix + 1] + disp[ix + 1];
      drawPos[ix + 2] = base[ix + 2];
    }
    pos.needsUpdate = true;

    // 近接する点を線で結ぶ（カーソル近傍は色を濃く）
    let n = 0;
    const d2max = LINK_DIST * LINK_DIST;
    for (let i = 0; i < COUNT && n < maxLinks; i++) {
      const ax = drawPos[i * 3];
      const ay = drawPos[i * 3 + 1];
      const az = drawPos[i * 3 + 2];
      const cx = ax - cursorWorld.x;
      const cy = ay - cursorWorld.y;
      const near = cursorActive ? Math.max(0, 1 - Math.sqrt(cx * cx + cy * cy) / INFLUENCE) : 0;
      for (let j = i + 1; j < COUNT && n < maxLinks; j++) {
        const dx = ax - drawPos[j * 3];
        const dy = ay - drawPos[j * 3 + 1];
        const dz = az - drawPos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < d2max) {
          const o = n * 6;
          linePositions[o] = ax;
          linePositions[o + 1] = ay;
          linePositions[o + 2] = az;
          linePositions[o + 3] = drawPos[j * 3];
          linePositions[o + 4] = drawPos[j * 3 + 1];
          linePositions[o + 5] = drawPos[j * 3 + 2];
          const r = colorBase.r + (colorHot.r - colorBase.r) * near;
          const g = colorBase.g + (colorHot.g - colorBase.g) * near;
          const b = colorBase.b + (colorHot.b - colorBase.b) * near;
          lineColors[o] = lineColors[o + 3] = r;
          lineColors[o + 1] = lineColors[o + 4] = g;
          lineColors[o + 2] = lineColors[o + 5] = b;
          n++;
        }
      }
    }
    lineGeo.setDrawRange(0, n * 2);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    // 幾何体の回転とゆらぎ＋マウスに応じた傾き・位置ずれ
    for (const s of shapes) {
      s.rotation.x += (0.002 + mouse.y * 0.004 * FOLLOW) * speedScale;
      s.rotation.y += (0.003 * s.userData.speed * 10 + mouse.x * 0.006 * FOLLOW) * speedScale;
      const b = s.userData.base;
      s.position.x += (b.x + mouse.x * 1.2 * FOLLOW - s.position.x) * 0.05;
      s.position.y += (b.y + Math.sin(t * s.userData.speed) * 0.6 + mouse.y * 0.9 * FOLLOW - s.position.y) * 0.05;
    }

    points.rotation.y = Math.sin(t * 0.05) * 0.08 * speedScale + mouse.x * 0.12 * FOLLOW;
    points.rotation.x = -mouse.y * 0.08 * FOLLOW;
    lines.rotation.copy(points.rotation);

    renderer.render(scene, camera);
  };

  let frames = 0;
  const loop = (time) => {
    if (visible) {
      step(time);
      frames++;
    }
    requestAnimationFrame(loop);
  };

  step(0);
  canvas.classList.add("is-ready");
  // prefers-reduced-motion 時は speedScale / FOLLOW で動きを抑えて描画
  requestAnimationFrame(loop);

  // 検証用（headless テストでカメラ・パーティクル座標を参照）
  window.__bg = { camera, mouse, target, cursorWorld, drawPos, disp, step, get frames() { return frames; } };
};

startBackground();

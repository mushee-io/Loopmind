
const DEMOS = [
  { id: 1, name: 'Identity Eye Scan', tag: 'Biometric', desc: 'Simulates biometric intake, liveness, and memory binding.', steps: ['Reading visual signature', 'Running liveness gate', 'Binding identity capsule', 'Publishing trust score'], score: 97, speed: '3.2s' },
  { id: 2, name: 'Agent Spawn', tag: 'Agents', desc: 'Creates a context-aware agent with inherited memory.', steps: ['Provisioning role shell', 'Injecting policies', 'Loading context tape', 'Launching agent'], score: 95, speed: '2.4s' },
  { id: 3, name: 'Subspace Builder', tag: 'Workspace', desc: 'Creates a private workspace for a team or user.', steps: ['Allocating namespace', 'Applying permissions', 'Syncing objects', 'Rendering workspace'], score: 94, speed: '2.1s' },
  { id: 4, name: 'Memory Verification', tag: 'Trust', desc: 'Scores memory provenance and reviews confidence.', steps: ['Tracing source', 'Comparing signatures', 'Computing certainty', 'Publishing trail'], score: 99, speed: '1.8s' },
  { id: 5, name: 'Signal Capture', tag: 'Capture', desc: 'Takes a note, chat, or submission and converts it into reusable memory.', steps: ['Collecting signal', 'Normalizing content', 'Tagging entities', 'Indexing packet'], score: 96, speed: '1.6s' },
  { id: 6, name: 'Retrieve Context', tag: 'Retrieve', desc: 'Pulls the strongest context block for an agent query.', steps: ['Reading intent', 'Ranking memory blocks', 'Resolving collisions', 'Returning answer rail'], score: 98, speed: '20ms' },
  { id: 7, name: 'Approval Queue', tag: 'Ops', desc: 'Submits a memory packet for approval and promotion.', steps: ['Packaging packet', 'Assigning reviewer', 'Tracking comments', 'Approving publish'], score: 93, speed: '2.9s' },
  { id: 8, name: 'Trust Ladder', tag: 'Trust', desc: 'Builds a visible trust ladder for every object.', steps: ['Computing base trust', 'Applying reviewer weights', 'Adjusting confidence', 'Saving ladder'], score: 97, speed: '2.2s' },
  { id: 9, name: 'Policy Toggle', tag: 'Controls', desc: 'Switches retention, approval, and replay policies.', steps: ['Loading policy set', 'Applying toggle change', 'Re-evaluating objects', 'Saving guardrails'], score: 91, speed: '1.4s' },
  { id: 10, name: 'Research Panel', tag: 'Research', desc: 'Organizes responses and signals into a research workspace.', steps: ['Creating cohort', 'Binding responses', 'Synthesizing patterns', 'Exporting insight'], score: 92, speed: '3.4s' },
  { id: 11, name: 'Audit Trail Replay', tag: 'Replay', desc: 'Replays a memory event line through its full lifecycle.', steps: ['Selecting event tape', 'Rebuilding timeline', 'Highlighting changes', 'Publishing replay'], score: 96, speed: '2.8s' },
  { id: 12, name: 'Memory Compression', tag: 'Optimize', desc: 'Condenses long-form interaction into reusable chunks.', steps: ['Splitting material', 'Clustering ideas', 'Removing noise', 'Saving compressed blocks'], score: 90, speed: '1.9s' },
  { id: 13, name: 'Vault Sync', tag: 'Vault', desc: 'Synchronizes a private vault across subspaces.', steps: ['Checking vault state', 'Resolving deltas', 'Encrypting packets', 'Publishing sync'], score: 98, speed: '2.3s' },
  { id: 14, name: 'Enterprise Board View', tag: 'Enterprise', desc: 'Renders a board-ready summary surface for LoopMind.', steps: ['Loading executive cards', 'Computing KPIs', 'Refreshing feed', 'Syncing layout'], score: 95, speed: '1.7s' },
  { id: 15, name: 'Mainnet Gateway', tag: 'Access', desc: 'Simulates the handoff from landing pages into the product shell.', steps: ['Checking profile', 'Validating access', 'Loading workspace', 'Opening shell'], score: 97, speed: '1.5s' },
  { id: 16, name: 'Signal Marketplace', tag: 'Exchange', desc: 'Lists reusable intelligence blocks for selection and routing.', steps: ['Loading intelligence units', 'Sorting by trust', 'Building deck', 'Opening exchange'], score: 89, speed: '2.0s' },
  { id: 17, name: 'Conversation Ingest', tag: 'Capture', desc: 'Turns a conversation into traceable memory objects.', steps: ['Tokenizing dialog', 'Tagging entities', 'Creating memory arcs', 'Saving record'], score: 94, speed: '2.6s' },
  { id: 18, name: 'Sentiment Map', tag: 'Insights', desc: 'Generates a weighted sentiment and intent map.', steps: ['Reading signal tone', 'Assigning sentiment', 'Scoring importance', 'Rendering map'], score: 88, speed: '1.3s' },
  { id: 19, name: 'Role Matrix', tag: 'Permissions', desc: 'Creates role matrices for contributors and reviewers.', steps: ['Loading members', 'Assigning permissions', 'Running checks', 'Publishing matrix'], score: 93, speed: '1.8s' },
  { id: 20, name: 'Prompt Memory Bridge', tag: 'AI', desc: 'Injects LoopMind context into an active prompt session.', steps: ['Selecting memory set', 'Building prompt context', 'Attaching response rules', 'Sending payload'], score: 96, speed: '1.2s' },
  { id: 21, name: 'Quality Bar Sweep', tag: 'Analytics', desc: 'Scans signal quality across memory classes.', steps: ['Loading classes', 'Computing quality', 'Flagging weak links', 'Updating bars'], score: 95, speed: '2.1s' },
  { id: 22, name: 'Submission Bundle', tag: 'Submission', desc: 'Bundles a set of outputs for review and shipping.', steps: ['Collecting files', 'Attaching metadata', 'Assigning reviewers', 'Submitting bundle'], score: 92, speed: '2.7s' },
  { id: 23, name: 'Agent Pairing', tag: 'Agents', desc: 'Pairs two agents inside one shared memory rail.', steps: ['Choosing agents', 'Negotiating context', 'Applying controls', 'Launching duo'], score: 91, speed: '2.2s' },
  { id: 24, name: 'Knowledge Snapshot', tag: 'Snapshot', desc: 'Creates a polished snapshot for demos, board review, or investors.', steps: ['Collecting KPIs', 'Building story blocks', 'Rendering export', 'Saving snapshot'], score: 98, speed: '1.9s' }
];

const SUBMISSIONS = [
  ['LM-1024', 'Identity Capsule', 'Submitted', 'High'],
  ['LM-1025', 'Agent Memory Pack', 'Reviewing', 'Medium'],
  ['LM-1026', 'Research Cluster', 'Approved', 'High'],
  ['LM-1027', 'Enterprise Snapshot', 'Queued', 'Low'],
  ['LM-1028', 'Mainnet Access', 'Approved', 'Critical'],
  ['LM-1029', 'Vault Sync', 'Submitted', 'Medium'],
];

const BARS = [
  ['Signal quality', 94], ['Policy coverage', 88], ['Agent accuracy', 91], ['Replay integrity', 97], ['Subspace health', 93], ['Submission throughput', 86]
];

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function renderBars(targetSel) {
  const wrap = qs(targetSel);
  if (!wrap) return;
  wrap.innerHTML = BARS.map(([label, value]) => `
    <div class="progress-row">
      <span>${label}</span>
      <div class="progress-bar"><i style="--w:${value}%"></i></div>
      <strong>${value}%</strong>
    </div>
  `).join('');
}

function renderSubmissionTable(targetSel) {
  const wrap = qs(targetSel);
  if (!wrap) return;
  wrap.innerHTML = `
    <table class="table">
      <thead><tr><th>ID</th><th>Object</th><th>Status</th><th>Priority</th></tr></thead>
      <tbody>
        ${SUBMISSIONS.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>`;
}

function createDemoCard(demo) {
  return `
    <article class="demo-card">
      <div class="demo-head">
        <div>
          <div class="small-chip">${demo.tag}</div>
          <h3>${demo.name}</h3>
        </div>
        <div class="demo-status">${demo.speed}</div>
      </div>
      <p>${demo.desc}</p>
      <div class="mini-bars">
        <div><i style="--w:${demo.score}%"></i></div>
        <div><i style="--w:${Math.max(60, demo.score - 5)}%"></i></div>
        <div><i style="--w:${Math.min(100, demo.score + 2)}%"></i></div>
      </div>
      <div class="demo-footer">
        <span class="caption">Trust score ${demo.score}%</span>
        <button class="demo-button" data-demo-id="${demo.id}">Run demo</button>
      </div>
    </article>`;
}

function renderDemos(targetSel, count=24) {
  const wrap = qs(targetSel);
  if (!wrap) return;
  wrap.innerHTML = DEMOS.slice(0, count).map(createDemoCard).join('');
}

function setLog(lines) {
  const pre = qs('#demo-log');
  if (!pre) return;
  pre.textContent = lines.join('\n');
}

function showModalForDemo(id) {
  const demo = DEMOS.find(d => d.id === Number(id));
  if (!demo) return;
  const modal = qs('#demo-modal');
  const title = qs('#modal-title');
  const desc = qs('#modal-desc');
  const timeline = qs('#modal-timeline');
  const score = qs('#modal-score');
  title.textContent = demo.name;
  desc.textContent = demo.desc;
  score.textContent = `${demo.score}% trust`;
  timeline.innerHTML = demo.steps.map((step, index) => `
    <div class="timeline-step">
      <div class="timeline-bullet"></div>
      <div>${step}</div>
      <div class="state-pill">step ${index + 1}</div>
    </div>
  `).join('');
  modal.classList.add('open');

  const lines = [`[${demo.tag}] ${demo.name}`, `speed: ${demo.speed}`, '---'];
  demo.steps.forEach((step, idx) => lines.push(`${idx + 1}. ${step}`));
  lines.push(`result: complete • trust ${demo.score}%`);
  setLog(lines);

  let active = 0;
  const pills = qsa('.timeline-step .state-pill', timeline);
  pills.forEach(p => p.textContent = 'queued');
  const interval = setInterval(() => {
    if (active > 0) pills[active - 1].textContent = 'done';
    if (active < pills.length) pills[active].textContent = 'running';
    active += 1;
    if (active > pills.length) clearInterval(interval);
  }, 500);
}

function initModal() {
  const modal = qs('#demo-modal');
  if (!modal) return;
  qs('#close-modal').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });
}

function initToggles() {
  qsa('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => toggle.classList.toggle('active'));
  });
}

function initRunAll() {
  const button = qs('#run-all-demos');
  if (!button) return;
  button.addEventListener('click', () => {
    const lines = ['LoopMind demo suite', 'status: batch run', '---'];
    let total = 0;
    DEMOS.slice(0, 8).forEach((demo, idx) => {
      total += demo.score;
      lines.push(`${idx + 1}. ${demo.name} • ${demo.score}% • ${demo.speed}`);
    });
    lines.push('---');
    lines.push(`suite trust average: ${Math.round(total / 8)}%`);
    setLog(lines);
  });
}

function initDemoClicks() {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-demo-id]');
    if (!button) return;
    showModalForDemo(button.dataset.demoId);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBars('#performance-bars');
  renderSubmissionTable('#submission-table');
  renderDemos('#demo-grid', 24);
  renderDemos('#mini-demo-grid', 6);
  initModal();
  initToggles();
  initRunAll();
  initDemoClicks();

  const stat = qs('#live-stat');
  if (stat) {
    let value = 126;
    setInterval(() => {
      value += Math.floor(Math.random() * 4);
      stat.textContent = `${value} live memory objects`;
    }, 1800);
  }
});

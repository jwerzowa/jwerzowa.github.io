(function () {
  const THUMB_FALLBACK_ICON = `
    <svg class="thumb-fallback-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="20" y="20" width="24" height="24" rx="2"></rect>
      <path d="M26 20 V12 M32 20 V12 M38 20 V12 M26 44 V52 M32 44 V52 M38 44 V52 M20 26 H12 M20 32 H12 M20 38 H12 M44 26 H52 M44 32 H52 M44 38 H52"></path>
    </svg>
  `;

  const container = document.getElementById("project-detail");

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    container.innerHTML = `
      <p class="empty-state">Project not found. <a href="index.html">Go back to all projects</a>.</p>
    `;
    return;
  }

  document.title = `${project.title} — Julien Werzowa`;

  container.innerHTML = `
    ${project.category ? `<div class="eyebrow">${escapeHtml(project.category)}</div>` : ""}
    <h1>${escapeHtml(project.title)}</h1>
    ${project.date ? `<div class="meta-date">${escapeHtml(project.date)}</div>` : ""}
    <div class="card-tags">
      ${project.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
    </div>

    <div class="hero-thumb">
      ${THUMB_FALLBACK_ICON}
      ${project.thumbnail ? `<img class="thumb" src="${escapeHtml(project.thumbnail)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
    </div>

    <section>
      <h2>Summary</h2>
      <p class="description">${escapeHtml(project.summary)}</p>
    </section>

    <section>
      <h2>Details</h2>
      <p class="description">${escapeHtml(project.description)}</p>
    </section>

    ${project.images && project.images.length ? `
    <section>
      <h2>Gallery</h2>
      <div class="gallery">
        ${project.images.map((img) => `
          <figure class="gallery-item">
            <a href="${escapeHtml(img.src)}" target="_blank" rel="noopener noreferrer">
              <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || project.title)}" loading="lazy" onerror="this.closest('figure').remove()">
            </a>
            ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    </section>
    ` : ""}

    <section>
      <h2>Skills Needed</h2>
      <ul class="skills-list">
        ${project.skills.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    </section>

    ${project.links.repo ? `
    <section>
      <a class="repo-button" href="${escapeHtml(project.links.repo)}" target="_blank" rel="noopener noreferrer">
        View on GitHub &rarr;
      </a>
    </section>
    ` : ""}
  `;
})();

(function () {
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
    <h1>${escapeHtml(project.title)}</h1>
    ${project.date ? `<div class="meta-date">${escapeHtml(project.date)}</div>` : ""}
    <div class="card-tags">
      ${project.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
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
              <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || project.title)}" loading="lazy">
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

    <section>
      <a class="repo-button" href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer">
        View on GitHub &rarr;
      </a>
    </section>
  `;
})();

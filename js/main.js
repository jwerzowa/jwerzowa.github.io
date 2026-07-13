(function () {
  const filterBar = document.getElementById("filter-bar");
  const grid = document.getElementById("project-grid");
  const emptyState = document.getElementById("empty-state");
  const resultCount = document.getElementById("result-count");
  const clearBtn = document.getElementById("clear-filters");

  const activeTags = new Set();

  const allTags = Array.from(
    new Set(PROJECTS.flatMap((p) => p.tags))
  ).sort();

  function renderFilterBar() {
    filterBar.innerHTML = "";
    allTags.forEach((tag) => {
      const btn = document.createElement("button");
      btn.className = "tag-pill" + (activeTags.has(tag) ? " active" : "");
      btn.type = "button";
      btn.textContent = tag;
      btn.addEventListener("click", () => toggleTag(tag));
      filterBar.appendChild(btn);
    });
  }

  function toggleTag(tag) {
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
    } else {
      activeTags.add(tag);
    }
    render();
  }

  function matchesFilter(project) {
    if (activeTags.size === 0) return true;
    return project.tags.some((t) => activeTags.has(t));
  }

  function renderGrid() {
    const visible = PROJECTS.filter(matchesFilter);
    grid.innerHTML = "";

    visible.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <h3><a href="project.html?id=${encodeURIComponent(project.id)}">${escapeHtml(project.title)}</a></h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="card-tags">
          ${project.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      `;
      grid.appendChild(card);
    });

    emptyState.hidden = visible.length !== 0;
    resultCount.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"}`;
    clearBtn.disabled = activeTags.size === 0;
  }

  function render() {
    renderFilterBar();
    renderGrid();
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  clearBtn.addEventListener("click", () => {
    activeTags.clear();
    render();
  });

  render();
})();

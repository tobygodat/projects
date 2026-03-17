// ── Aisle Data (placeholder content — replace with your media) ──────────────

const aisles = {
  work: {
    title: "AISLE 01",
    subtitle: "Social Correction",
    theme: "light",
    quote: `Obey.`,
    description: "",
    items: [
      {
        type: "visual",
        youtubeId: "5Z_7TkX92bU",
        source: "Bartleby, the Scrivener (Stop-Motion Adaptation)",
        curatorNote: "In this short clip of the stop-motion adaptation of Bartleby by Herman Melville, Bartleby calmly and politely declines to perform the task he was assigned by his boss. This elicits a grandiose, dramatic reaction manifested by literal, atmospheric strikes of lightning, encapsulating how going against the status quo is so looked down upon by those in capitalist power. The white sterile environment of the corporate office, paralleling that of the convenience store, emphasizes how one's sense of self is forgone as workers are reduced to nothing more than widgets in a society that values productivity above all else. Bartleby's quiet rejection disrupts this system, creating a need for immediate social punishment."
      }
    ]
  },

  relationships: {
    title: "AISLE 02",
    subtitle: "Work and Productivity",
    theme: "light",
    quote: `Be Useful.`,
    description: "",
    items: [
      {
        type: "text",
        source: "Convenience Store Woman — Sayaka Murata, 2016",
        quote: `"But, then, how come you're only doing that sort of job?" Mamiko asked, puzzled... "You see, Keiko's not very strong, and that's why she doesn't have a regular job," Miho said, covering for me. "I mean, if finding a job is so hard, then at least you should get married."`,
        curatorNote: "This excerpt from <i>Convenience Store Woman</i> by Sayaka Murata depicts a social gathering in which Keiko, a 36-year-old convenience store clerk, receives direct concern and criticism from her friends for her career choice. Though likely with no intent of cruelty or ridicule, their comments serve as a subconscious rejection of Keiko's way of life. Society has always been dictated by the dynamic between in-groups and out-groups, and Keiko's placement into the latter, her career being deemed inferior to what might be expected of someone her age, results in quiet attempted correction. This excerpt was chosen for its depiction of how those who meet the societal productivity standard discreetly pressure those deemed beneath them into social conformity."
      }
    ]
  },

  gender: {
    title: "Aisle 3",
    description:
      "",
    items: [
      {
        title: "The Giver",
        caption: "",
        media: "thegiver.jpg",
      },
    ],
  },

  timelines: {
    title: "AISLE 04",
    subtitle: "Work & Productivity",
    theme: "light",
    quote: `Be Normal.`,
    description: "",
    items: [
      {
        type: "text",
        source: "Convenience Store Woman — Sayaka Murata, 2016",
        quote: `"I want you to be cured, Keiko... Please try to be normal!"`,
        curatorNote: "This excerpt from Sayaka Murata's <i>Convenience Store Woman</i> depicts the moment Keiko's sister breaks down into a plea for Keiko to pursue a societally acceptable and conventional career. Her emotionally charged outcry to Keiko serves as a subtle nudge, pressuring Keiko into social correction. As <a href='https://pubmed.ncbi.nlm.nih.gov/24820295/'>Su Yeong Kim and Yijie Wang</a> examine in their 2009 research, strong cultural values like family reputation and adherence to social norms can create tension when individuals diverge from expected life paths. Families often act as the primary agent of change for an individual, as seen in this instance as Keiko is slowly disciplined back into the acceptable boundaries of society."
      }
    ]
  },

  identity: {
    title: "Aisle 5",
    description:
      "",
    items: [
      {
        title: "Placeholder Item 1",
        caption: "",
        media: null,
      },
    ],
  },
};

// ── DOM References ──────────────────────────────────────────────────────────

const entryView = document.getElementById("entry-view");
const enterDoor = document.getElementById("enter-door");
const storeView = document.getElementById("store-view");
const aisleView = document.getElementById("aisle-view");
const aisleHeader = document.querySelector(".aisle-header");
const aisleItems = document.getElementById("aisle-items");
const backBtn = document.getElementById("back-btn");

// ── Entry Handlers ────────────────────────────────────────────────────────────

if (enterDoor) {
  enterDoor.addEventListener("click", () => {
    entryView.classList.add("entering");
    // Wait for animation to finish before switching views (1800ms)
    setTimeout(() => {
      entryView.classList.remove("active", "entering");
      storeView.classList.add("active");
      window.scrollTo({ top: 0 });
    }, 1800);
  });
}

// ── Hotspot Click Handlers ──────────────────────────────────────────────────

document.querySelectorAll(".hotspot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.aisle;
    openAisle(key);
  });
});

backBtn.addEventListener("click", closeAisle);

// ── Navigation ──────────────────────────────────────────────────────────────

function openAisle(key) {
  const aisle = aisles[key];
  if (!aisle) return;

  aisleItems.innerHTML = "";

  if (aisle.theme === "light") {
    aisleView.classList.add("light-theme");
    
    // Light Theme Header
    aisleHeader.innerHTML = `
      <div class="light-badge-container">
        <span class="light-badge-left">${aisle.title}</span>
        <span class="light-badge-divider">|</span>
        <span class="light-badge-right">${aisle.subtitle}</span>
      </div>
      <h2 class="light-quote-title">${aisle.quote}</h2>
      <p class="light-desc-text">${aisle.description}</p>
      <hr class="light-header-hr" />
    `;

    // Light Theme Items
    aisle.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "light-card-row";

      if (item.type === "text") {
        // Left: Text Excerpt, Right: Curator's Note
        row.innerHTML = `
          <div class="light-card text-card">
            <div class="light-card-header">
              <svg class="book-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              <span class="light-card-type">TEXT EXCERPT</span>
            </div>
            <div class="light-card-source">${item.source}</div>
            <blockquote class="light-card-quote">${item.quote}</blockquote>
          </div>
          <div class="light-card curator-note-card">
            <div class="light-card-header">
              <svg class="book-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <span class="light-card-type">CURATOR'S NOTE</span>
            </div>
            <p class="curator-note-text">${item.curatorNote}</p>
          </div>
        `;
      } else if (item.type === "visual") {
        // Left: Visual Artifact (YouTube or image), Right: Curator's Note
        let mediaHTML = '';
        if (item.youtubeId) {
          mediaHTML = `<iframe src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=0" title="${item.source || ''}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style="width:100%;height:100%;position:absolute;top:0;left:0;"></iframe>`;
        } else if (item.media) {
          mediaHTML = `<img src="${item.media}" alt="${item.source || ''}" style="width:100%;height:100%;object-fit:cover;">`;
        }
        row.innerHTML = `
          <div class="light-card visual-embed-card">
            <div class="light-card-header" style="padding:20px 20px 10px;">
              <svg class="book-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span class="light-card-type">VISUAL ARTIFACT</span>
            </div>
            <div class="light-card-source" style="padding:0 20px 10px;">${item.source || ''}</div>
            <div class="visual-embed-container">${mediaHTML}</div>
          </div>
          <div class="light-card curator-note-card">
            <div class="light-card-header">
              <svg class="book-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <span class="light-card-type">CURATOR'S NOTE</span>
            </div>
            <p class="curator-note-text">${item.curatorNote}</p>
          </div>
        `;
      }

      aisleItems.appendChild(row);
    });

  } else {
    // Default Dark Theme Logic
    aisleView.classList.remove("light-theme");
    
    aisleHeader.innerHTML = `
      <h2 id="aisle-title">${aisle.title}</h2>
      <p id="aisle-description">${aisle.description}</p>
    `;

    aisle.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "item-card collapsed";

      // Toggle expanded state on click
      card.addEventListener("click", () => {
        document.querySelectorAll('.item-card').forEach(c => {
          if (c !== card) c.classList.remove('expanded');
        });
        card.classList.toggle("expanded");
      });

      const leftText = document.createElement("div");
      leftText.className = "item-text text-left";
      leftText.innerHTML = `
        <div class="text-content">
          <h3>${item.title}</h3>
        </div>
      `;

      const mediaDiv = document.createElement("div");
      mediaDiv.className = "item-media";
      if (item.youtubeId) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${item.youtubeId}?autoplay=0`;
        iframe.title = item.title;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        mediaDiv.appendChild(iframe);
      } else if (item.media) {
        const img = document.createElement("img");
        img.src = item.media;
        img.alt = item.title;
        mediaDiv.appendChild(img);
      } else {
        mediaDiv.textContent = "[ media placeholder ]";
      }

      const rightText = document.createElement("div");
      rightText.className = "item-text text-right";
      rightText.innerHTML = `
        <div class="text-content">
          <p>${item.caption}</p>
        </div>
      `;

      card.appendChild(leftText);
      card.appendChild(mediaDiv);
      card.appendChild(rightText);
      aisleItems.appendChild(card);
    });
  }

  // Transition views
  storeView.classList.remove("active");
  aisleView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAisle() {
  aisleView.classList.remove("active");
  storeView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

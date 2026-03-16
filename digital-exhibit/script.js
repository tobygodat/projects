// ── Aisle Data (placeholder content — replace with your media) ──────────────

const aisles = {
  work: {
    title: "Aisle 1 — Social Correction",
    description:
      "",
    items: [
      {
        title: "The Truman Show",
        caption: "In this short clip of the stop-motion adaptation of Bartleby by Herman Melville, Bartleby calmly and politely declines to perform the task he was assigned by his boss. This elicits a grandiose, dramatic reaction manifested by literal, atmospheric strikes of lightning, encapsulating how going against the status quo is so looked down upon by those in capitalist power. The white sterile environment of the corporate office, paralleling that of the convenience store, emphasizes how one’s sense of self is forgone as workers are reduced to nothing more than widgets in a society that values productivity above all else. Bartleby’s quiet rejection disrupts this system, creating a need for immediate social punishment.",
        youtubeId: "5Z_7TkX92bU",
      },
    ],
  },

  relationships: {
    title: "Aisle 2 — Work and Productivity",
    description: "“But, then, how come you’re only doing that sort of job?” Mamiko asked, puzzled... “You see, Keiko’s not very strong, and that’s why she doesn’t have a regular job,” Miho said, covering for me. “I mean, if finding a job is so hard, then at least you should get married.”",
    items: [
      {
        title: "This excerpt from *Convenience Store Woman* by Sayaka Murata depicts a social gathering in which Keiko, a 36-year-old convenience store clerk, receives direct concern and criticism from her friends for her career choice. Though likely with no intent of cruelty or ridicule, their comments serve as a subconscious rejection of Keiko's way of life. Society has always been dictated by the dynamic between in-groups and out-groups, and Keiko's placement into the latter, her career being deemed inferior to what might be expected of someone her age, results in quiet attempted correction. ",
        caption: "This excerpt was chosen for its depiction of how those who meet the societal productivity standard discreetly pressure those deemed beneath them into social conformity.",
        media: "governmentbureau.jpg",
      },
    ],
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
    title: "Aisle 4",
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
const aisleTitle = document.getElementById("aisle-title");
const aisleDesc = document.getElementById("aisle-description");
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

  aisleTitle.textContent = aisle.title;
  aisleDesc.textContent = aisle.description;

  // Build item cards
  aisleItems.innerHTML = "";
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

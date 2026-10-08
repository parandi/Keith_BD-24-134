// ==========================================================================
// CODEX CAMAEL: Main Application Controller
// A life-saving digital reference. 100% offline.
// 100% Offline-First Architecture (Zero CDNs, Zero Remote Calls)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  CAMAEL.init();
});

const CAMAEL = {
  activeSection: "compendium", // default landing section
  audioCtx: null,
  cprInterval: null,
  cprActive: false,
  mapState: {
    scale: 1.0,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    startX: 0,
    startY: 0
  },

  // ------------------------------------------------------------------------
  // Initialization
  // ------------------------------------------------------------------------
  init() {
    this.migrateStorage();
    this.initNavigation();
    this.initSwissDrawer();
    this.initSosOverlay();
    this.initSearchAndFilters();
    this.renderCompendium();
    this.renderGearPlanner();
    this.renderRecipes();
    this.renderCrisis();
    this.renderManual();
    this.renderRadio();
    this.initWorldMap();
    this.initTools();
    this.initLogbook();
    this.initModal();

    console.log("CODEX CAMAEL: Offline Survival Reference Initialized. All systems operational.");
  },

  migrateStorage() {
    const legacyPrefix = "camael_";
    const newPrefix = "codex_camael_";
    try {
      const keysToMigrate = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(legacyPrefix)) {
          keysToMigrate.push(key);
        }
      }
      keysToMigrate.forEach(key => {
        const subKey = key.slice(legacyPrefix.length);
        const newKey = `${newPrefix}${subKey}`;
        const val = localStorage.getItem(key);
        if (localStorage.getItem(newKey) === null && val !== null) {
          localStorage.setItem(newKey, val);
        }
      });
    } catch (e) {
      console.warn("Storage migration exception:", e);
    }
  },

  // Audio Context helper (resumed on user gesture)
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  // ------------------------------------------------------------------------
  // Navigation Routing & Swiss Drawer
  // ------------------------------------------------------------------------
  initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link, .swiss-nav-item");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.dataset.section;
        this.switchSection(target);
        this.closeSwissDrawer();
      });
    });

    // Check hash if present
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(`section-${hash}`)) {
      this.switchSection(hash);
    }
  },

  initSwissDrawer() {
    const menuBtn = document.getElementById("swissMenuBtn");
    const overlay = document.getElementById("swissDrawerOverlay");
    const closeBtn = document.getElementById("swissDrawerCloseBtn");

    if (menuBtn && overlay) {
      menuBtn.addEventListener("click", () => this.openSwissDrawer());
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeSwissDrawer());
    }
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeSwissDrawer();
      });
    }
  },

  openSwissDrawer() {
    const overlay = document.getElementById("swissDrawerOverlay");
    if (overlay) overlay.classList.add("active");
  },

  closeSwissDrawer() {
    const overlay = document.getElementById("swissDrawerOverlay");
    if (overlay) overlay.classList.remove("active");
  },

  // ------------------------------------------------------------------------
  // SOS Full-Screen Overlay & Ultra-Reserve Mode
  // ------------------------------------------------------------------------
  initSosOverlay() {
    const sosBtn = document.getElementById("sosCheatSheetBtn");
    const overlay = document.getElementById("sosOverlay");
    const closeBtn = document.getElementById("sosCloseBtn");
    const reserveToggleBtn = document.getElementById("toggleUltraReserveBtn");

    if (sosBtn && overlay) {
      sosBtn.addEventListener("click", () => this.openSosOverlay());
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeSosOverlay());
    }
    if (reserveToggleBtn) {
      reserveToggleBtn.addEventListener("click", () => this.toggleUltraReserve());
    }
  },

  openSosOverlay() {
    const overlay = document.getElementById("sosOverlay");
    if (overlay) overlay.classList.add("active");
  },

  closeSosOverlay() {
    const overlay = document.getElementById("sosOverlay");
    if (overlay) overlay.classList.remove("active");
  },

  toggleUltraReserve() {
    document.body.classList.toggle("ultra-reserve-mode");
    const isUltra = document.body.classList.contains("ultra-reserve-mode");
    const btn = document.getElementById("toggleUltraReserveBtn");
    if (btn) {
      btn.textContent = isUltra ? "🔋 ULTRA-RESERVE OLED: ACTIVE" : "🔋 ULTRA-RESERVE OLED: OFF";
      btn.style.color = isUltra ? "var(--accent-tactical)" : "#fff";
      btn.style.borderColor = isUltra ? "var(--accent-tactical)" : "#555";
    }
  },

  switchSection(sectionId) {
    this.activeSection = sectionId;

    // Update nav links & drawer active classes
    document.querySelectorAll(".nav-link, .swiss-nav-item").forEach(link => {
      link.classList.toggle("active", link.dataset.section === sectionId);
    });

    // Update section views
    document.querySelectorAll(".section-view").forEach(sec => {
      sec.classList.remove("active");
    });
    const targetEl = document.getElementById(`section-${sectionId}`);
    if (targetEl) targetEl.classList.add("active");

    // Update Sub-header title & filter controls
    this.updateSubHeader(sectionId);

    // If map activated, resize canvas to container and redraw
    if (sectionId === "map") {
      requestAnimationFrame(() => {
        this.resizeCanvas();
        this.drawMap();
        setTimeout(() => {
          this.resizeCanvas();
          this.drawMap();
        }, 60);
      });
    }

    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  updateSubHeader(sectionId) {
    const titleEl = document.getElementById("subHeaderTitle");
    const countEl = document.getElementById("subHeaderCount");
    const filterPillsEl = document.getElementById("filterPillsContainer");
    const searchInput = document.getElementById("globalSearchInput");

    searchInput.value = "";
    filterPillsEl.innerHTML = "";

    switch(sectionId) {
      case "compendium":
        titleEl.textContent = "Scavenger's Compendium";
        countEl.textContent = `${window.CAMAEL_ITEMS.length} Items`;
        this.createFilterPills([
          { label: "All Items", key: "all", active: true },
          { label: "Tier S (Priceless)", key: "tier-s" },
          { label: "Tier A (High)", key: "tier-a" },
          { label: "🌲 Forest", key: "biome-forest" },
          { label: "💧 Wetland", key: "biome-wetland" },
          { label: "🏙️ Urban Ruins", key: "biome-urban" },
          { label: "🌊 Coastal", key: "biome-coastal" },
          { label: "🌾 Arid / Plains", key: "biome-arid" },
          { label: "Flora", key: "flora" },
          { label: "Materials", key: "materials" },
          { label: "☠️ Toxic Hazards", key: "toxic" }
        ], (key) => this.filterCompendium(key, searchInput.value));
        break;

      case "gear":
        titleEl.textContent = "Gear, Vault & Telemetry Planner";
        countEl.textContent = `${window.CAMAEL_GEAR ? window.CAMAEL_GEAR.length : 0} Mandatory Items`;
        this.createFilterPills([
          { label: "All Loadouts", key: "all", active: true },
          { label: "💧 Water Systems", key: "water" },
          { label: "🔥 Fire & Thermal", key: "fire" },
          { label: "🩹 Medical Trauma", key: "medical" },
          { label: "🏕️ Shelter Systems", key: "shelter" },
          { label: "🧭 Navigation Azimuth", key: "navigation" }
        ], (key) => this.filterGear(key, searchInput.value));
        break;

      case "recipes":
        titleEl.textContent = "Survival Kitchen & Lifesavers";
        countEl.textContent = `${window.CAMAEL_RECIPES.length} Recipes`;
        this.createFilterPills([
          { label: "All Recipes", key: "all", active: true },
          { label: "🚨 Lifesavers Only", key: "lifesavers" },
          { label: "Camp Cooking", key: "cooking" }
        ], (key) => this.filterRecipes(key, searchInput.value));
        break;

      case "incaseof":
        titleEl.textContent = "Immediate Crisis Playbooks";
        countEl.textContent = `${window.CAMAEL_CRISIS.length} Scenarios`;
        this.createFilterPills([
          { label: "All Scenarios", key: "all", active: true },
          { label: "Medical / CPR", key: "medical" },
          { label: "Disaster / Nuclear", key: "disaster" },
          { label: "Extreme Weather", key: "weather" }
        ], (key) => this.filterCrisis(key, searchInput.value));
        break;

      case "manual":
        titleEl.textContent = "Field Manual & Diagrams";
        countEl.textContent = `${window.CAMAEL_MANUAL.length} Guides`;
        this.createFilterPills([
          { label: "All Guides", key: "all", active: true },
          { label: "Navigation / Sun", key: "navigation" },
          { label: "Water", key: "water" },
          { label: "Firecraft", key: "fire" },
          { label: "Cordage & Knots", key: "cordage" }
        ], (key) => this.filterManual(key, searchInput.value));
        break;

      case "radio":
        titleEl.textContent = "Emergency Radio & Comms";
        countEl.textContent = `${window.CAMAEL_RADIO.frequencies.length} Frequencies`;
        break;

      case "map":
        titleEl.textContent = "Offline Cartography & Waypoints";
        countEl.textContent = "Global Vector";
        break;

      case "logbook":
        titleEl.textContent = "Private Offline Vault & ICE";
        countEl.textContent = "Local Storage";
        break;
    }
  },

  createFilterPills(pills, callback) {
    const container = document.getElementById("filterPillsContainer");
    container.innerHTML = "";
    pills.forEach(p => {
      const btn = document.createElement("button");
      btn.className = `pill-btn ${p.active ? "active" : ""}`;
      btn.textContent = p.label;
      btn.addEventListener("click", () => {
        container.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        callback(p.key);
      });
      container.appendChild(btn);
    });
  },

  initSearchAndFilters() {
    const searchInput = document.getElementById("globalSearchInput");
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const activePill = document.querySelector("#filterPillsContainer .pill-btn.active");
      const key = activePill ? activePill.dataset.key || "all" : "all";

      if (this.activeSection === "compendium") this.filterCompendium(key, query);
      if (this.activeSection === "recipes") this.filterRecipes(key, query);
      if (this.activeSection === "incaseof") this.filterCrisis(key, query);
      if (this.activeSection === "manual") this.filterManual(key, query);
    });
  },

  // ------------------------------------------------------------------------
  // Module 3: Scavenger's Compendium
  // ------------------------------------------------------------------------
  renderCompendium(items = window.CAMAEL_ITEMS) {
    const grid = document.getElementById("compendiumGrid");
    grid.innerHTML = "";

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "grid-card";
      
      let badgeClass = "card-tier-badge";
      if (item.tier === "S") badgeClass += " tier-s";
      else if (item.tier === "A") badgeClass += " tier-a";
      else if (item.tier === "B") badgeClass += " tier-b";
      else if (item.tier === "DANGER") badgeClass += " badge-danger";

      const firstBiome = (item.biomes && item.biomes.length > 0) ? item.biomes[0] : item.category.toUpperCase();

      card.innerHTML = `
        <div class="card-top">
          <div class="card-lead-symbol">${item.symbol}</div>
          <div class="${badgeClass}">${item.barterValue.split(' ')[0]} ${item.tier}</div>
        </div>
        <div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description.substring(0, 115)}...</p>
        </div>
        <div class="card-footer-meta" style="flex-wrap: wrap; gap: 4px;">
          <span>${item.edibility}</span>
          <span style="color: var(--accent-safe); font-weight: 600;">${firstBiome}</span>
        </div>
      `;

      card.addEventListener("click", () => this.showItemDetail(item));
      grid.appendChild(card);
    });
  },

  filterCompendium(filterKey, query = "") {
    let items = window.CAMAEL_ITEMS;
    if (filterKey === "tier-s") items = items.filter(i => i.tier === "S");
    else if (filterKey === "tier-a") items = items.filter(i => i.tier === "A");
    else if (filterKey === "flora") items = items.filter(i => i.category === "flora");
    else if (filterKey === "materials") items = items.filter(i => i.category === "materials");
    else if (filterKey === "toxic") items = items.filter(i => i.category === "toxic");
    else if (filterKey === "biome-forest") items = items.filter(i => i.biomes && i.biomes.some(b => b.includes("Forest")));
    else if (filterKey === "biome-wetland") items = items.filter(i => i.biomes && i.biomes.some(b => b.includes("Wetland")));
    else if (filterKey === "biome-urban") items = items.filter(i => i.biomes && i.biomes.some(b => b.includes("Urban")));
    else if (filterKey === "biome-coastal") items = items.filter(i => i.biomes && i.biomes.some(b => b.includes("Coastal")));
    else if (filterKey === "biome-arid") items = items.filter(i => i.biomes && i.biomes.some(b => b.includes("Arid")));

    if (query) {
      items = items.filter(i => 
        i.name.toLowerCase().includes(query) ||
        i.description.toLowerCase().includes(query) ||
        i.edibility.toLowerCase().includes(query) ||
        i.survivalUsage.toLowerCase().includes(query) ||
        (i.biomes && i.biomes.some(b => b.toLowerCase().includes(query)))
      );
    }
    this.renderCompendium(items);
  },

  showItemDetail(item) {
    const biomesHtml = item.biomes && item.biomes.length > 0 
      ? item.biomes.map(b => `<span class="pill-btn active" style="font-size: 10px; padding: 2px 8px; margin-right: 4px; margin-bottom: 4px; display: inline-block;">${b}</span>`).join('') 
      : '<span style="color: var(--text-secondary);">Unspecified</span>';

    const toolsHtml = item.toolsRequired && item.toolsRequired.length > 0
      ? item.toolsRequired.map(t => `
          <div style="padding: 10px 12px; border: 1px solid var(--border-color); background: var(--bg-secondary); margin-bottom: 8px;">
            <div style="font-weight: 700; color: #fff;">🔧 Required: ${t.tool}</div>
            <div style="font-size: 11px; color: var(--accent-info); margin-top: 3px;">📍 <strong>Where to acquire:</strong> ${t.acquisition}</div>
          </div>
        `).join('')
      : '<p style="color: var(--text-secondary);">No specialized tools required (Forageable with bare hands).</p>';

    let riskHtml = '';
    if (item.riskMitigation) {
      const btnAction = item.riskMitigation.solutionAction 
        ? `<button onclick="window.navigateToSolution('${item.riskMitigation.solutionAction.section}', '${item.riskMitigation.solutionAction.targetId}')" class="pill-btn" style="background: var(--text-primary); color: #000; font-weight: 700; margin-top: 10px; cursor: pointer; padding: 8px 14px; font-size: 11px; display: inline-flex; align-items: center; gap: 6px;">
             ⚡ ${item.riskMitigation.solutionAction.buttonText}
           </button>` 
        : '';

      riskHtml = `
        <div style="margin-top: 18px; padding: 14px; border: 1px solid var(--accent-alert); background: rgba(255, 77, 77, 0.08);">
          <div style="font-size: 11px; font-weight: 700; color: var(--accent-alert); letter-spacing: 0.05em; text-transform: uppercase;">⚠️ IDENTIFIED RISK / DANGER</div>
          <p style="margin-top: 4px; color: #ffcccc; font-size: 12px; line-height: 1.5;">${item.riskMitigation.risk}</p>
          <div style="font-size: 11px; font-weight: 700; color: var(--accent-safe); letter-spacing: 0.05em; text-transform: uppercase; margin-top: 10px;">🛡️ HOW TO DEAL WITH IT (MITIGATION)</div>
          <p style="margin-top: 4px; color: #ffffff; font-size: 12px; line-height: 1.5;">${item.riskMitigation.solution}</p>
          ${btnAction}
        </div>
      `;
    }

    this.openModal({
      title: `${item.name} (${item.symbol})`,
      content: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="card-tier-badge ${item.tier === 'S' ? 'tier-s' : item.tier === 'A' ? 'tier-a' : item.tier === 'DANGER' ? 'badge-danger' : ''}">${item.barterValue}</span>
          <span class="card-tier-badge" style="border-color: #888;">${item.edibility}</span>
          ${item.safetyRating ? `<span class="card-tier-badge" style="border-color: #555;">${item.safetyRating}</span>` : ''}
        </div>

        <div class="modal-section-title">SPECIFIC BIOMES & LOCATIONS (FOUND IN)</div>
        <div style="margin-bottom: 14px;">
          ${biomesHtml}
        </div>

        <div class="modal-section-title">REQUIRED TOOLS & WHERE TO ACQUIRE THEM</div>
        <div style="margin-bottom: 14px;">
          ${toolsHtml}
        </div>

        <div class="modal-section-title">DESCRIPTION & IDENTIFICATION</div>
        <p>${item.description}</p>

        <div class="modal-section-title">SURVIVAL APPLICATION & USAGE</div>
        <p>${item.survivalUsage}</p>

        ${riskHtml}
      `
    });
  },

  // ------------------------------------------------------------------------
  // Module: Gear, Telemetry & Trip Planner (Phase 6 Implementation)
  // ------------------------------------------------------------------------
  renderGearPlanner(gearList = window.CAMAEL_GEAR) {
    const container = document.getElementById("gearLoadoutList");
    const countBadge = document.getElementById("loadoutCountBadge");
    if (!container) return;
    container.innerHTML = "";

    if (countBadge && gearList) {
      countBadge.textContent = `${gearList.length} Items`;
    }

    if (!gearList || gearList.length === 0) {
      container.innerHTML = `<div style="padding: 24px; color: var(--text-secondary); text-align: center;">No gear matching active filters.</div>`;
      return;
    }

    gearList.forEach(item => {
      const card = document.createElement("div");
      card.className = "gear-item-card";
      card.id = `gear-card-${item.id}`;

      const substitutesHtml = item.substitutes && item.substitutes.length > 0
        ? item.substitutes.map((sub, idx) => `
            <div style="margin-top: 10px; padding: 10px 14px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 4px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-weight: 700; color: #fff; font-size: 13px;">
                  <span class="substitute-badge">ALT ${idx + 1} // ${sub.tier.toUpperCase()}</span>
                  ${sub.name}
                </span>
                ${sub.sourceSection ? `
                  <button onclick="window.navigateToSolution('${sub.sourceSection}', '${sub.sourceId}')" class="pill-btn" style="font-size: 10px; padding: 2px 8px; color: var(--accent-tactical); border-color: var(--accent-tactical);">
                    VIEW ${sub.sourceSection.toUpperCase()} &rarr;
                  </button>
                ` : ''}
              </div>
              <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 0;">${sub.instructions}</p>
            </div>
          `).join('')
        : `<p style="font-size: 11px; color: var(--text-secondary); margin: 0;">No improvised substitutes available for this critical item.</p>`;

      card.innerHTML = `
        <div class="gear-item-header" onclick="CAMAEL.toggleGearSubstitute('${item.id}')">
          <div>
            <div class="gear-item-title">
              <span>${item.name}</span>
              <span class="card-tier-badge tier-s" style="font-size: 9px;">${item.essentialRating}</span>
            </div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${item.summary}</div>
            <div style="font-size: 11px; font-family: var(--font-mono); color: var(--accent-tactical); margin-top: 6px;">
              STANDARD PACK QTY: ${item.baseQty}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span id="accordion-arrow-${item.id}" style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">
              [+] EXPAND ALTS
            </span>
          </div>
        </div>

        <div id="substitutes-panel-${item.id}" class="gear-substitutes-panel">
          <div style="font-family: var(--font-mono); font-size: 10px; font-weight: 700; color: var(--accent-tactical); letter-spacing: 0.08em; margin-bottom: 8px;">
            FALLBACK CHAIN & WILDCRAFT SUBSTITUTES:
          </div>
          ${substitutesHtml}
        </div>
      `;

      container.appendChild(card);
    });

    // Wire up trip planner selectors
    const biomeSelect = document.getElementById("plannerBiomeSelect");
    const durationSelect = document.getElementById("plannerDurationSelect");
    const partySelect = document.getElementById("plannerPartySelect");

    if (biomeSelect && !biomeSelect.dataset.wired) {
      biomeSelect.dataset.wired = "true";
      const updateTelemetry = () => this.calculateTripTelemetry();
      biomeSelect.addEventListener("change", updateTelemetry);
      if (durationSelect) durationSelect.addEventListener("change", updateTelemetry);
      if (partySelect) partySelect.addEventListener("change", updateTelemetry);
    }
  },

  toggleGearSubstitute(itemId) {
    const panel = document.getElementById(`substitutes-panel-${itemId}`);
    const arrow = document.getElementById(`accordion-arrow-${itemId}`);
    if (panel) {
      const isActive = panel.classList.toggle("active");
      if (arrow) {
        arrow.textContent = isActive ? "[-] HIDE ALTS" : "[+] EXPAND ALTS";
        arrow.style.color = isActive ? "var(--accent-tactical)" : "var(--text-secondary)";
      }
    }
  },

  calculateTripTelemetry() {
    const biome = document.getElementById("plannerBiomeSelect")?.value || "Forest & Woodland";
    const duration = document.getElementById("plannerDurationSelect")?.value || "overnight";
    const party = parseInt(document.getElementById("plannerPartySelect")?.value || "2", 10);

    let days = 1;
    if (duration === "day") days = 0.5;
    else if (duration === "overnight") days = 1;
    else if (duration === "multiday") days = 3;
    else if (duration === "grid_down") days = 7;

    // Water calculation: 3L / person / day (adjusted for arid/desert)
    const waterMultiplier = biome.includes("Arid") ? 4.5 : 3.0;
    const totalWater = (party * days * waterMultiplier).toFixed(1);

    // Calories: 2200 kcal / person / day
    const foodDays = days;

    // Med units
    const medUnits = Math.max(2, party * (days > 2 ? 3 : 2));

    // Telemetry updates
    const waterVal = document.getElementById("telemetryWaterVal");
    const waterStatus = document.getElementById("telemetryWaterStatus");
    const medVal = document.getElementById("telemetryMedVal");
    const foodVal = document.getElementById("telemetryFoodVal");

    if (waterVal) waterVal.textContent = `${totalWater} L`;
    if (waterStatus) waterStatus.textContent = `${party} PPL // ${days} DAYS TARGET`;
    if (medVal) medVal.textContent = `${medUnits < 10 ? '0' + medUnits : medUnits} UNITS`;
    if (foodVal) foodVal.textContent = `${foodDays} DAYS`;

    // Filter gear list based on biome
    if (window.CAMAEL_GEAR) {
      const filtered = window.CAMAEL_GEAR.filter(g => !g.biomes || g.biomes.some(b => b.includes(biome.split(' ')[0])));
      this.renderGearPlanner(filtered);
    }
  },

  filterGear(key, query = "") {
    let list = window.CAMAEL_GEAR || [];
    if (key === "water") list = list.filter(g => g.category === "water");
    else if (key === "fire") list = list.filter(g => g.category === "fire");
    else if (key === "medical") list = list.filter(g => g.category === "medical");
    else if (key === "shelter") list = list.filter(g => g.category === "shelter");
    else if (key === "navigation") list = list.filter(g => g.category === "navigation");

    if (query) {
      list = list.filter(g => 
        g.name.toLowerCase().includes(query) ||
        g.summary.toLowerCase().includes(query) ||
        (g.substitutes && g.substitutes.some(s => s.name.toLowerCase().includes(query) || s.instructions.toLowerCase().includes(query)))
      );
    }
    this.renderGearPlanner(list);
  },

  // ------------------------------------------------------------------------
  // Module 2: Survival Kitchen & Recipes
  // ------------------------------------------------------------------------
  renderRecipes(recipes = window.CAMAEL_RECIPES) {
    const grid = document.getElementById("recipesGrid");
    grid.innerHTML = "";

    // Extract all unique ingredients from recipes for the sidebar
    const allIngredients = new Set();
    window.CAMAEL_RECIPES.forEach(r => {
      r.ingredients.forEach(ing => allIngredients.add(ing));
    });

    this.renderPantryIngredients(Array.from(allIngredients).sort());

    recipes.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "grid-card";

      const isLifesaver = recipe.category === "lifesavers";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-lead-symbol" style="font-size: 20px;">${isLifesaver ? "🚨 LIFESAVER" : "🍲 RATION"}</div>
          <div class="card-tier-badge ${isLifesaver ? 'tier-s' : 'tier-a'}">${recipe.prepTime}</div>
        </div>
        <div>
          <h3 class="card-title">${recipe.name}</h3>
          <p class="card-desc">${recipe.summary}</p>
        </div>
        <div class="card-footer-meta">
          <span>${recipe.calories}</span>
          <span>${recipe.ingredients.length} Ingredients</span>
        </div>
      `;

      card.addEventListener("click", () => this.showRecipeDetail(recipe));
      grid.appendChild(card);
    });
  },

  renderPantryIngredients(ingredients) {
    const container = document.getElementById("pantryIngredientsList");
    if (!container) return;
    container.innerHTML = "";

    // Load saved pantry selection
    const savedPantry = JSON.parse(localStorage.getItem("codex_camael_pantry") || localStorage.getItem("camael_pantry") || "[]");

    ingredients.forEach(ing => {
      const isChecked = savedPantry.includes(ing);
      const label = document.createElement("label");
      label.className = `ingredient-check-label ${isChecked ? 'selected' : ''}`;
      label.innerHTML = `
        <input type="checkbox" value="${ing}" ${isChecked ? 'checked' : ''}>
        <span>${ing}</span>
      `;

      label.querySelector("input").addEventListener("change", (e) => {
        label.classList.toggle("selected", e.target.checked);
        this.savePantry();
        this.matchPantryRecipes();
      });

      container.appendChild(label);
    });
  },

  savePantry() {
    const selected = [];
    document.querySelectorAll("#pantryIngredientsList input:checked").forEach(input => {
      selected.push(input.value);
    });
    localStorage.setItem("codex_camael_pantry", JSON.stringify(selected));
  },

  matchPantryRecipes() {
    const selected = JSON.parse(localStorage.getItem("codex_camael_pantry") || localStorage.getItem("camael_pantry") || "[]");
    const countBanner = document.getElementById("pantryMatchNotice");

    if (selected.length === 0) {
      if (countBanner) countBanner.style.display = "none";
      this.renderRecipes(window.CAMAEL_RECIPES);
      return;
    }

    const matched = [];
    window.CAMAEL_RECIPES.forEach(r => {
      const hasAll = r.ingredients.every(i => selected.includes(i));
      const hasSome = r.ingredients.some(i => selected.includes(i));
      if (hasAll || hasSome) {
        matched.push({
          ...r,
          matchStatus: hasAll ? "100% MATCH" : "PARTIAL"
        });
      }
    });

    if (countBanner) {
      countBanner.style.display = "block";
      countBanner.textContent = `Pantry Filter: Found ${matched.length} recipes matching your selected ingredients.`;
    }

    this.renderRecipes(matched.length > 0 ? matched : window.CAMAEL_RECIPES);
  },

  filterRecipes(key, query = "") {
    let recipes = window.CAMAEL_RECIPES;
    if (key === "lifesavers") recipes = recipes.filter(r => r.category === "lifesavers");
    else if (key === "cooking") recipes = recipes.filter(r => r.category === "cooking");

    if (query) {
      recipes = recipes.filter(r => 
        r.name.toLowerCase().includes(query) ||
        r.summary.toLowerCase().includes(query) ||
        r.ingredients.some(i => i.toLowerCase().includes(query))
      );
    }
    this.renderRecipes(recipes);
  },

  showRecipeDetail(recipe) {
    this.openModal({
      title: recipe.name,
      content: `
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <span class="card-tier-badge ${recipe.category === 'lifesavers' ? 'tier-s' : 'tier-a'}">${recipe.prepTime}</span>
          <span class="card-tier-badge">${recipe.calories}</span>
          <span class="card-tier-badge">${recipe.smokeRisk}</span>
        </div>
        <div class="modal-section-title">REQUIRED INGREDIENTS</div>
        <ul style="padding-left: 20px; margin-bottom: 14px;">
          ${recipe.ingredients.map(i => `<li><strong>${i}</strong></li>`).join('')}
        </ul>
        <div class="modal-section-title">PREPARATION INSTRUCTIONS</div>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
          ${recipe.instructions.map(step => `<p>${step}</p>`).join('')}
        </div>
        <div class="modal-section-title" style="color: var(--accent-safe);">CRUCIAL SURVIVAL NOTES</div>
        <p>${recipe.survivalNotes}</p>
        <p style="margin-top: 10px; color: var(--text-secondary); font-size: 11px;">Shelf Life: ${recipe.shelfLife}</p>
      `
    });
  },

  // ------------------------------------------------------------------------
  // Module 4: Crisis Playbooks & Emergency Response
  // ------------------------------------------------------------------------
  renderCrisis(scenarios = window.CAMAEL_CRISIS) {
    const grid = document.getElementById("crisisGrid");
    grid.innerHTML = "";

    scenarios.forEach(item => {
      const card = document.createElement("div");
      card.className = "grid-card";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-lead-symbol">${item.icon}</div>
          <div class="card-tier-badge badge-danger">${item.urgency.split(' ')[0]}</div>
        </div>
        <div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.summary}</p>
        </div>
        <div class="card-footer-meta">
          <span>${item.category.toUpperCase()}</span>
          <span style="color: var(--accent-alert);">VIEW IMMEDIATE ACTION &rarr;</span>
        </div>
      `;

      card.addEventListener("click", () => this.showCrisisDetail(item));
      grid.appendChild(card);
    });
  },

  filterCrisis(key, query = "") {
    let list = window.CAMAEL_CRISIS;
    if (key === "medical") list = list.filter(c => c.category === "medical");
    else if (key === "disaster") list = list.filter(c => c.category === "disaster");
    else if (key === "weather") list = list.filter(c => c.category === "weather");

    if (query) {
      list = list.filter(c => 
        c.title.toLowerCase().includes(query) ||
        c.summary.toLowerCase().includes(query)
      );
    }
    this.renderCrisis(list);
  },

  showCrisisDetail(item) {
    this.openModal({
      title: item.title,
      content: `
        <div style="padding: 10px; background: rgba(255, 77, 77, 0.1); border: 1px solid var(--accent-alert); margin-bottom: 16px; color: var(--accent-alert);">
          <strong>URGENCY LEVEL:</strong> ${item.urgency}
        </div>
        <div class="modal-section-title" style="color: var(--accent-alert);">FIRST 60 SECONDS (IMMEDIATE ACTION)</div>
        <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
          ${item.first60s.map(s => `<li><strong>${s}</strong></li>`).join('')}
        </ul>
        <div class="modal-section-title">NEXT 1 HOUR ACTION PLAN</div>
        <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
          ${item.nextHour.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div class="modal-section-title">EXTENDED 24-HOUR SURVIVAL PROTOCOL</div>
        <p>${item.extendedRules}</p>
      `
    });
  },

  // ------------------------------------------------------------------------
  // Module 5: Field Manual & Visual Diagrams
  // ------------------------------------------------------------------------
  renderManual(guides = window.CAMAEL_MANUAL) {
    const grid = document.getElementById("manualGrid");
    grid.innerHTML = "";

    guides.forEach(guide => {
      const card = document.createElement("div");
      card.className = "grid-card";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-lead-symbol" style="font-size: 20px;">🛠️ GUIDE</div>
          <div class="card-tier-badge tier-b">${guide.category.toUpperCase()}</div>
        </div>
        <div>
          <h3 class="card-title">${guide.title}</h3>
          <p class="card-desc">${guide.summary}</p>
          <div class="diagram-card">
            ${guide.svgDiagram}
            <div class="diagram-caption">Inline Visual Reference</div>
          </div>
        </div>
        <div class="card-footer-meta">
          <span>${guide.steps.length} Core Steps</span>
          <span style="color: #fff;">EXPAND MANUAL &rarr;</span>
        </div>
      `;

      card.addEventListener("click", () => this.showManualDetail(guide));
      grid.appendChild(card);
    });
  },

  filterManual(key, query = "") {
    let list = window.CAMAEL_MANUAL;
    if (key === "navigation") list = list.filter(m => m.category === "navigation");
    else if (key === "water") list = list.filter(m => m.category === "water");
    else if (key === "fire") list = list.filter(m => m.category === "fire");
    else if (key === "cordage") list = list.filter(m => m.category === "cordage");

    if (query) {
      list = list.filter(m => 
        m.title.toLowerCase().includes(query) ||
        m.summary.toLowerCase().includes(query)
      );
    }
    this.renderManual(list);
  },

  showManualDetail(guide) {
    this.openModal({
      title: guide.title,
      content: `
        <div class="diagram-card" style="margin-bottom: 20px;">
          ${guide.svgDiagram}
        </div>
        <div class="modal-section-title">STEP-BY-STEP FIELD EXECUTION</div>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
          ${guide.steps.map(step => `<p>${step}</p>`).join('')}
        </div>
        <div class="modal-section-title" style="color: var(--accent-safe);">TACTICAL FIELD TIP</div>
        <p>${guide.proTip}</p>
      `
    });
  },

  // ------------------------------------------------------------------------
  // Module 6: Emergency Radio & Morse Transceiver
  // ------------------------------------------------------------------------
  renderRadio() {
    const freqList = document.getElementById("radioFreqList");
    if (!freqList) return;
    freqList.innerHTML = "";

    window.CAMAEL_RADIO.frequencies.forEach(f => {
      const item = document.createElement("div");
      item.className = "grid-card";
      item.style.minHeight = "auto";
      item.innerHTML = `
        <div class="card-top" style="margin-bottom: 8px;">
          <strong style="font-size: 15px;">${f.channel}</strong>
          <span class="card-tier-badge tier-s">${f.freq}</span>
        </div>
        <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">${f.purpose}</p>
        <div style="font-size: 11px; color: var(--text-muted);">
          <span>Service: ${f.service} | Range: ${f.range}</span>
        </div>
      `;
      freqList.appendChild(item);
    });

    // NATO Alphabet Quick Chart
    const natoGrid = document.getElementById("natoAlphabetGrid");
    if (natoGrid) {
      natoGrid.innerHTML = "";
      Object.entries(window.CAMAEL_RADIO.natoAlphabet).forEach(([letter, word]) => {
        const span = document.createElement("div");
        span.style.padding = "6px 10px";
        span.style.border = "1px solid var(--border-color)";
        span.style.fontSize = "11px";
        span.innerHTML = `<strong>${letter}</strong>: ${word}`;
        natoGrid.appendChild(span);
      });
    }

    // Morse Translator Input
    const morseInput = document.getElementById("morseTextInput");
    const morseDisplay = document.getElementById("morseOutputDisplay");

    if (morseInput && morseDisplay) {
      morseInput.addEventListener("input", (e) => {
        const text = e.target.value.toUpperCase();
        let encoded = "";
        for (let char of text) {
          if (window.CAMAEL_RADIO.morseCode[char]) {
            encoded += window.CAMAEL_RADIO.morseCode[char] + " ";
          }
        }
        morseDisplay.textContent = encoded || "... --- ...";
      });
    }
  },

  // ------------------------------------------------------------------------
  // Interactive Tools: CPR Metronome, 7-10 Calculator, Morse Audio
  // ------------------------------------------------------------------------
  initTools() {
    // 1. CPR Metronome (110 BPM)
    const cprBtn = document.getElementById("cprStartBtn");
    const cprPulse = document.getElementById("cprPulseBox");

    if (cprBtn && cprPulse) {
      cprBtn.addEventListener("click", () => {
        if (this.cprActive) {
          clearInterval(this.cprInterval);
          this.cprActive = false;
          cprBtn.textContent = "START CPR METRONOME (110 BPM)";
          cprBtn.style.backgroundColor = "";
          cprPulse.classList.remove("beat");
        } else {
          this.cprActive = true;
          cprBtn.textContent = "STOP CPR METRONOME";
          cprBtn.style.backgroundColor = "var(--accent-alert)";

          const intervalMs = (60 / 110) * 1000; // ~545ms
          this.playBeep(880, 0.08);
          cprPulse.classList.add("beat");
          setTimeout(() => cprPulse.classList.remove("beat"), 100);

          this.cprInterval = setInterval(() => {
            this.playBeep(880, 0.08);
            cprPulse.classList.add("beat");
            setTimeout(() => cprPulse.classList.remove("beat"), 100);
          }, intervalMs);
        }
      });
    }

    // 2. 7-10 Nuclear Fallout Decay Calculator
    const sliderTime = document.getElementById("falloutHoursSlider");
    const timeDisplay = document.getElementById("falloutHoursDisplay");
    const resultBox = document.getElementById("falloutResultBox");

    if (sliderTime && resultBox) {
      const updateFallout = () => {
        const hours = parseFloat(sliderTime.value);
        timeDisplay.textContent = `${hours} Hours`;

        // The 7-10 rule: R(t) = R0 * t^(-1.2)
        // At 1 hour: 100%
        // At 7 hours: ~10%
        // At 49 hours: ~1%
        const decayFactor = Math.pow(hours, -1.2);
        const remainingPct = (decayFactor * 100).toFixed(2);
        const reductionPct = (100 - remainingPct).toFixed(2);

        let safetyMsg = "SURVIVAL EVACUATION DANGEROUS (Remain sealed inside bunker)";
        let color = "#ff4d4d";

        if (hours >= 48 && hours < 336) {
          safetyMsg = "BRIEF EMERGENCY FORAGING PERMITTED (Limit exposure to < 30 mins)";
          color = "#ffaa00";
        } else if (hours >= 336) {
          safetyMsg = "RELATIVE OUTDOOR EGRESS ALLOWED (Wear mask & wash upon re-entry)";
          color = "#00dd88";
        }

        resultBox.innerHTML = `
          <div><strong>RADIATION DECAY:</strong> ${reductionPct}% Neutralized (${remainingPct}% remains)</div>
          <div style="margin-top: 6px; color: ${color};"><strong>STATUS:</strong> ${safetyMsg}</div>
        `;
      };

      sliderTime.addEventListener("input", updateFallout);
      updateFallout();
    }

    // 3. Morse Sound & Flash Player
    const playMorseBtn = document.getElementById("playMorseAudioBtn");
    const emergencySosBtn = document.getElementById("emergencySosBtn");
    const strobeScreen = document.getElementById("morseStrobeScreen");

    if (playMorseBtn) {
      playMorseBtn.addEventListener("click", () => {
        const morseDisplay = document.getElementById("morseOutputDisplay");
        const code = morseDisplay.textContent || "... --- ...";
        this.playMorseSequence(code);
      });
    }

    if (emergencySosBtn) {
      emergencySosBtn.addEventListener("click", () => {
        this.playMorseSequence("... --- ...");
      });
    }
  },

  playBeep(freq, duration) {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch(e) {
      console.warn("Audio playback blocked or unavailable:", e);
    }
  },

  playMorseSequence(morseStr) {
    const ditMs = 100;
    const dahMs = 300;
    const strobe = document.getElementById("morseStrobeScreen");

    let delay = 0;
    for (let char of morseStr) {
      if (char === ".") {
        setTimeout(() => {
          this.playBeep(750, ditMs / 1000);
          if (strobe) {
            strobe.style.display = "block";
            setTimeout(() => strobe.style.display = "none", ditMs);
          }
        }, delay);
        delay += ditMs + 100;
      } else if (char === "-") {
        setTimeout(() => {
          this.playBeep(750, dahMs / 1000);
          if (strobe) {
            strobe.style.display = "block";
            setTimeout(() => strobe.style.display = "none", dahMs);
          }
        }, delay);
        delay += dahMs + 100;
      } else if (char === " ") {
        delay += 200;
      }
    }
  },

  // ------------------------------------------------------------------------
  // Module 1: World Map & Cartography
  // ------------------------------------------------------------------------
  initWorldMap() {
    const canvas = document.getElementById("worldMapCanvas");
    if (!canvas) return;

    // Load custom waypoints from localStorage or defaults
    this.waypoints = JSON.parse(localStorage.getItem("codex_camael_waypoints") || localStorage.getItem("camael_waypoints") || "null");
    if (!this.waypoints) {
      this.waypoints = window.CAMAEL_GEO.defaultWaypoints;
      localStorage.setItem("codex_camael_waypoints", JSON.stringify(this.waypoints));
    }

    this.renderWaypointList();

    // Auto-resize observer when container becomes visible or changes size
    if (window.ResizeObserver && canvas.parentElement) {
      const ro = new ResizeObserver(() => {
        if (this.activeSection === "map") {
          this.resizeCanvas();
          this.drawMap();
        }
      });
      ro.observe(canvas.parentElement);
    }

    // Canvas Mouse & Touch controls for Pan/Zoom
    canvas.addEventListener("mousedown", (e) => {
      this.mapState.isDragging = true;
      this.mapState.startX = e.clientX - this.mapState.offsetX;
      this.mapState.startY = e.clientY - this.mapState.offsetY;
    });

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update live coordinates on HUD if inside canvas
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const w = canvas.width || 800;
        const h = canvas.height || 500;
        const scale = Math.max(0.1, this.mapState.scale);
        const originX = w / 2 + this.mapState.offsetX;
        const originY = h / 2 + this.mapState.offsetY;

        let lon = ((x - originX) / (w * scale)) * 360;
        let lat = -((y - originY) / (h * scale)) * 180;
        lat = Math.max(-90, Math.min(90, lat));
        while (lon > 180) lon -= 360;
        while (lon < -180) lon += 360;

        const hudCoords = document.getElementById("mapHudCoords");
        if (hudCoords) {
          hudCoords.textContent = `COORDINATES: ${lat.toFixed(2)}° N, ${lon.toFixed(2)}° E`;
        }
      }

      if (!this.mapState.isDragging) return;
      this.mapState.offsetX = e.clientX - this.mapState.startX;
      this.mapState.offsetY = e.clientY - this.mapState.startY;
      this.drawMap();
    });

    window.addEventListener("mouseup", () => {
      this.mapState.isDragging = false;
    });

    canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
      this.mapState.scale = Math.max(0.5, Math.min(8.0, this.mapState.scale * zoomFactor));
      this.drawMap();
    }, { passive: false });

    // Touch support for mobile devices
    let lastTouchX = 0;
    let lastTouchY = 0;
    canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.mapState.isDragging = true;
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
      }
    }, { passive: true });

    canvas.addEventListener("touchmove", (e) => {
      if (this.mapState.isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - lastTouchX;
        const dy = e.touches[0].clientY - lastTouchY;
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
        this.mapState.offsetX += dx;
        this.mapState.offsetY += dy;
        this.drawMap();
      }
    }, { passive: true });

    canvas.addEventListener("touchend", () => {
      this.mapState.isDragging = false;
    });

    // Map Buttons
    const zoomInBtn = document.getElementById("mapZoomIn");
    const zoomOutBtn = document.getElementById("mapZoomOut");
    const resetBtn = document.getElementById("mapReset");
    const addWpBtn = document.getElementById("addWaypointBtn");

    if (zoomInBtn) zoomInBtn.addEventListener("click", () => {
      this.mapState.scale = Math.min(8.0, this.mapState.scale * 1.3);
      this.drawMap();
    });

    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => {
      this.mapState.scale = Math.max(0.5, this.mapState.scale * 0.7);
      this.drawMap();
    });

    if (resetBtn) resetBtn.addEventListener("click", () => {
      this.mapState.scale = 1.0;
      this.mapState.offsetX = 0;
      this.mapState.offsetY = 0;
      this.resizeCanvas();
      this.drawMap();
    });

    if (addWpBtn) addWpBtn.addEventListener("click", () => {
      this.promptAddWaypoint();
    });

    // Click on canvas to drop pin or inspect coords
    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const w = canvas.width || 800;
      const h = canvas.height || 500;
      const scale = Math.max(0.1, this.mapState.scale);
      const originX = w / 2 + this.mapState.offsetX;
      const originY = h / 2 + this.mapState.offsetY;

      let lon = ((x - originX) / (w * scale)) * 360;
      let lat = -((y - originY) / (h * scale)) * 180;
      lat = Math.max(-90, Math.min(90, lat));
      while (lon > 180) lon -= 360;
      while (lon < -180) lon += 360;

      const hudCoords = document.getElementById("mapHudCoords");
      if (hudCoords) {
        hudCoords.textContent = `COORDINATES: ${lat.toFixed(2)}° N, ${lon.toFixed(2)}° E`;
      }
    });

    window.addEventListener("resize", () => {
      if (this.activeSection === "map") {
        this.resizeCanvas();
        this.drawMap();
      }
    });

    this.resizeCanvas();
    this.drawMap();
  },

  resizeCanvas() {
    const canvas = document.getElementById("worldMapCanvas");
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const w = Math.floor(rect.width || container.clientWidth || (window.innerWidth > 768 ? window.innerWidth - 360 : window.innerWidth) || 800);
    const h = Math.floor(rect.height || container.clientHeight || (window.innerHeight - 130) || 550);

    if (w > 0 && h > 0) {
      canvas.width = w;
      canvas.height = h;
    }
  },

  drawMap() {
    const canvas = document.getElementById("worldMapCanvas");
    if (!canvas) return;
    if (canvas.width <= 0 || canvas.height <= 0) {
      this.resizeCanvas();
    }

    let w = canvas.width;
    let h = canvas.height;
    if (w <= 0 || h <= 0) {
      w = canvas.width = 800;
      h = canvas.height = 550;
    }

    const ctx = canvas.getContext("2d");

    // Clear background
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, w, h);

    const originX = w / 2 + this.mapState.offsetX;
    const originY = h / 2 + this.mapState.offsetY;
    const scale = this.mapState.scale;

    // Projection: Equirectangular lon [-180, 180] -> x, lat [-90, 90] -> y
    const project = (lon, lat) => {
      const px = originX + (lon / 360) * w * scale;
      const py = originY - (lat / 180) * h * scale;
      return [px, py];
    };

    // Draw Grid Lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.font = "9px " + getComputedStyle(document.body).fontFamily;
    ctx.fillStyle = "rgba(255, 255, 255, 0.25)";

    for (let lon = -180; lon <= 180; lon += 30) {
      const [x1, y1] = project(lon, -88);
      const [x2, y2] = project(lon, 88);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      if (x1 >= 0 && x1 <= w) {
        ctx.fillText(lon === 0 ? "0°" : lon > 0 ? `${lon}°E` : `${Math.abs(lon)}°W`, x1 + 3, h - 8);
      }
    }

    for (let lat = -80; lat <= 80; lat += 20) {
      const [x1, y1] = project(-180, lat);
      const [x2, y2] = project(180, lat);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      if (y1 >= 15 && y1 <= h - 15) {
        ctx.fillText(lat === 0 ? "EQUATOR" : lat > 0 ? `${lat}°N` : `${Math.abs(lat)}°S`, 10, y1 - 4);
      }
    }

    // Equator highlight (Dashed Amber)
    ctx.strokeStyle = "rgba(255, 170, 0, 0.35)";
    ctx.setLineDash([6, 4]);
    const [eqX1, eqY] = project(-180, 0);
    const [eqX2] = project(180, 0);
    ctx.beginPath();
    ctx.moveTo(eqX1, eqY);
    ctx.lineTo(eqX2, eqY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Continents
    ctx.fillStyle = "#161616";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.4;

    window.CAMAEL_GEO.continents.forEach(cont => {
      ctx.beginPath();
      cont.polygon.forEach((pt, idx) => {
        const [px, py] = project(pt[0], pt[1]);
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Continent Label
      if (cont.labelPos) {
        const [lx, ly] = project(cont.labelPos[0], cont.labelPos[1]);
        if (lx >= 0 && lx <= w && ly >= 0 && ly <= h) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
          ctx.font = "bold 10px " + getComputedStyle(document.body).fontFamily;
          ctx.fillText(cont.name.toUpperCase(), lx, ly);
        }
      }
    });

    // Draw Waypoints
    this.waypoints.forEach(wp => {
      const [wx, wy] = project(wp.lon, wp.lat);
      
      const pinColor = wp.type === "water" ? "#4da6ff" :
                       wp.type === "shelter" ? "#00dd88" :
                       wp.type === "danger" ? "#ff4d4d" : "#ffaa00";

      // Outer glow pulse ring
      ctx.beginPath();
      ctx.arc(wx, wy, 12, 0, Math.PI * 2);
      ctx.fillStyle = pinColor === "#4da6ff" ? "rgba(77, 166, 255, 0.2)" :
                      pinColor === "#00dd88" ? "rgba(0, 221, 136, 0.2)" :
                      pinColor === "#ff4d4d" ? "rgba(255, 77, 77, 0.2)" : "rgba(255, 170, 0, 0.2)";
      ctx.fill();

      // Solid inner pin
      ctx.beginPath();
      ctx.arc(wx, wy, 6, 0, Math.PI * 2);
      ctx.fillStyle = pinColor;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label background & text
      ctx.font = "bold 10px " + getComputedStyle(document.body).fontFamily;
      const textWidth = ctx.measureText(wp.name).width;
      ctx.fillStyle = "rgba(10, 10, 10, 0.85)";
      ctx.fillRect(wx + 10, wy - 9, textWidth + 8, 16);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(wx + 10, wy - 9, textWidth + 8, 16);

      ctx.fillStyle = "#ffffff";
      ctx.fillText(wp.name, wx + 14, wy + 3);
    });
  },

  renderWaypointList() {
    const list = document.getElementById("waypointListContainer");
    if (!list) return;
    list.innerHTML = "";

    this.waypoints.forEach(wp => {
      const item = document.createElement("div");
      item.className = "waypoint-item";
      item.innerHTML = `
        <div class="waypoint-item-top">
          <span class="waypoint-title">${wp.name}</span>
          <span class="card-tier-badge" style="font-size: 9px;">${wp.type.toUpperCase()}</span>
        </div>
        <div class="waypoint-coords">${wp.lat.toFixed(2)}° N, ${wp.lon.toFixed(2)}° E</div>
        <p style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">${wp.desc}</p>
      `;

      item.addEventListener("click", () => {
        // Center map on this waypoint
        const canvas = document.getElementById("worldMapCanvas");
        if (!canvas) return;
        if (canvas.width <= 0 || canvas.height <= 0) {
          this.resizeCanvas();
        }
        const w = canvas.width || 800;
        const h = canvas.height || 550;
        this.mapState.offsetX = -(wp.lon / 360) * w * this.mapState.scale;
        this.mapState.offsetY = (wp.lat / 180) * h * this.mapState.scale;
        this.drawMap();
      });

      list.appendChild(item);
    });
  },

  promptAddWaypoint() {
    const name = prompt("Enter Waypoint Name (e.g. Pine River Spring):");
    if (!name) return;
    const lat = parseFloat(prompt("Enter Latitude (-90 to 90):", "35.00"));
    const lon = parseFloat(prompt("Enter Longitude (-180 to 180):", "-80.00"));
    const type = prompt("Type (water, shelter, cache, danger, forage):", "water");
    const desc = prompt("Short Description:", "Clean water source");

    if (!isNaN(lat) && !isNaN(lon)) {
      this.waypoints.push({
        id: "wp_" + Date.now(),
        name,
        lat,
        lon,
        type: type || "cache",
        desc: desc || "",
        notes: "User dropped coordinate."
      });
      localStorage.setItem("codex_camael_waypoints", JSON.stringify(this.waypoints));
      this.renderWaypointList();
      this.drawMap();
    }
  },

  // ------------------------------------------------------------------------
  // Module 7: Private Offline Vault & Logbook
  // ------------------------------------------------------------------------
  initLogbook() {
    const fields = ["iceName", "iceBlood", "iceAllergies", "rallyPrimary", "rallySecondary", "radioSchedule", "packInventory", "survivalJournal"];
    
    // Load stored values
    fields.forEach(f => {
      const el = document.getElementById(f);
      if (el) {
        el.value = localStorage.getItem(`codex_camael_${f}`) || localStorage.getItem(`camael_${f}`) || "";
        el.addEventListener("input", (e) => {
          localStorage.setItem(`codex_camael_${f}`, e.target.value);
        });
      }
    });

    // Export JSON Backup
    const exportBtn = document.getElementById("exportLogbookBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const data = {};
        fields.forEach(f => {
          data[f] = localStorage.getItem(`codex_camael_${f}`) || localStorage.getItem(`camael_${f}`) || "";
        });
        data.waypoints = JSON.parse(localStorage.getItem("codex_camael_waypoints") || localStorage.getItem("camael_waypoints") || "[]");
        data.pantry = JSON.parse(localStorage.getItem("codex_camael_pantry") || localStorage.getItem("camael_pantry") || "[]");

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `codex_camael_emergency_backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Import JSON Backup
    const importInput = document.getElementById("importLogbookInput");
    if (importInput) {
      importInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const data = JSON.parse(evt.target.result);
            fields.forEach(f => {
              const val = data[f] !== undefined ? data[f] : (data[`codex_camael_${f}`] !== undefined ? data[`codex_camael_${f}`] : data[`camael_${f}`]);
              if (val !== undefined) {
                localStorage.setItem(`codex_camael_${f}`, val);
                const el = document.getElementById(f);
                if (el) el.value = val;
              }
            });
            const importedWaypoints = data.waypoints || data.codex_camael_waypoints || data.camael_waypoints;
            if (importedWaypoints) {
              localStorage.setItem("codex_camael_waypoints", JSON.stringify(importedWaypoints));
              this.waypoints = importedWaypoints;
              this.renderWaypointList();
              this.drawMap();
            }
            const importedPantry = data.pantry || data.codex_camael_pantry || data.camael_pantry;
            if (importedPantry) {
              localStorage.setItem("codex_camael_pantry", JSON.stringify(importedPantry));
              this.renderRecipes();
            }
            alert("CODEX CAMAEL: Emergency Vault restored successfully.");
          } catch(err) {
            alert("Error parsing backup file.");
          }
        };
        reader.readAsText(file);
      });
    }
  },

  // ------------------------------------------------------------------------
  // Modal Drawer
  // ------------------------------------------------------------------------
  initModal() {
    const overlay = document.getElementById("modalOverlay");
    const closeBtn = document.getElementById("modalCloseBtn");
    if (overlay && closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.closeModal();
      });
    }
  },

  openModal({ title, content }) {
    const overlay = document.getElementById("modalOverlay");
    const titleEl = document.getElementById("modalTitle");
    const bodyEl = document.getElementById("modalBody");

    if (overlay && titleEl && bodyEl) {
      titleEl.textContent = title;
      bodyEl.innerHTML = content;
      overlay.classList.add("active");
    }
  },

  closeModal() {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("active");
  }
};

// Global cross-navigation helper for IA risk mitigation and solution routing
window.navigateToSolution = function(section, targetId) {
  CAMAEL.closeModal();
  CAMAEL.switchSection(section);

  if (targetId) {
    setTimeout(() => {
      if (section === "recipes" && window.CAMAEL_RECIPES) {
        const item = window.CAMAEL_RECIPES.find(r => r.id === targetId);
        if (item) CAMAEL.showRecipeDetail(item);
      } else if (section === "incaseof" && window.CAMAEL_CRISIS) {
        const item = window.CAMAEL_CRISIS.find(c => c.id === targetId);
        if (item) CAMAEL.showCrisisDetail(item);
      } else if (section === "manual" && window.CAMAEL_MANUAL) {
        const item = window.CAMAEL_MANUAL.find(m => m.id === targetId);
        if (item) CAMAEL.showManualDetail(item);
      } else if (section === "compendium" && window.CAMAEL_ITEMS) {
        const item = window.CAMAEL_ITEMS.find(i => i.id === targetId);
        if (item) CAMAEL.showItemDetail(item);
      }
    }, 150);
  }
};


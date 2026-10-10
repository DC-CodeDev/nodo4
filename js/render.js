function getData(lang) {
  return lang === 'en' ? DATA_EN : DATA_ES;
}

function renderUI(lang) {
  const data = getData(lang);
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll('[data-ui]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-ui');
    if (data.ui && data.ui[key] !== undefined) {
      el.textContent = data.ui[key];
    }
  });

  const pdfLink = document.getElementById('pdf-link');
  if (pdfLink && CONFIG.PDF) {
    const file = CONFIG.PDF[lang] || CONFIG.PDF.es;
    pdfLink.href = file;
    const textSpan = pdfLink.querySelector('span');
    const label = (data.ui && data.ui.pdfLabel) || 'Descargar documentación completa';
    const type = (data.ui && data.ui.pdfType) || 'PDF';
    const size = typeof CONFIG.PDF.sizeMB === 'object'
      ? (CONFIG.PDF.sizeMB[lang] || CONFIG.PDF.sizeMB.es)
      : (CONFIG.PDF.sizeMB || '0,4');
    if (textSpan) {
      textSpan.textContent = `${label} (${type}, ${size} MB)`;
    }
  }
}

function renderNav(lang, state) {
  const data = getData(lang);
  const container = document.getElementById('nav-chips');
  if (!container) return;
  container.innerHTML = '';

  CONFIG.SECTIONS.forEach((sec) => {
    const n = sec.id;
    const secData = data['s' + n] || {};
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-chip' + (state.active === n ? ' is-active' : '');
    btn.id = 'chip-' + n;
    btn.textContent = n;
    btn.title = n + '. ' + (secData.t || '');
    btn.setAttribute('aria-label', (data.ui.section || 'Sección') + ' ' + n + ': ' + (secData.t || ''));
    container.appendChild(btn);
  });
}

function renderBody(sec, data, targetEl) {
  let container = targetEl;
  if (!container) {
    const bodyEl = document.getElementById('body-' + sec.id);
    container = bodyEl ? (bodyEl.querySelector('.sec-inner') || bodyEl) : null;
  }
  if (!container) return;
  container.innerHTML = '';
  const secData = data['s' + sec.id] || {};

  if (sec.type === 'para') {
    const p = document.createElement('p');
    p.className = 'sec-para';
    p.textContent = secData.p || '';
    container.appendChild(p);
  } else if (sec.type === 'checks') {
    const ul = document.createElement('ul');
    ul.className = 'checks';
    const checkSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>';
    (secData.checks || []).forEach((itemText) => {
      const li = document.createElement('li');
      if (sec.id === 2) {
        li.className = 'check--warn';
      }
      const iconSpan = document.createElement('span');
      iconSpan.className = 'check-icon';
      iconSpan.innerHTML = checkSvg;

      const textSpan = document.createElement('span');
      textSpan.className = 'check-text';
      textSpan.textContent = itemText;

      li.appendChild(iconSpan);
      li.appendChild(textSpan);
      ul.appendChild(li);
    });
    container.appendChild(ul);

    if (sec.id === 2 && secData.epp) {
      const eppDiv = document.createElement('div');
      eppDiv.className = 'epp-row';
      secData.epp.forEach((label, i) => {
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = (CONFIG.EPP && CONFIG.EPP[i]) || '';
        img.alt = '';
        img.width = 180;
        img.height = 180;
        img.loading = 'lazy';

        const figcap = document.createElement('figcaption');
        figcap.textContent = label;

        fig.appendChild(img);
        fig.appendChild(figcap);
        eppDiv.appendChild(fig);
      });
      container.appendChild(eppDiv);
    }
  } else if (sec.type === 'pasos') {
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'steps';

    let groups = [];
    if (secData.groups) {
      groups = secData.groups.map(([title, stepsList]) => ({ title, steps: stepsList, hasTitle: true }));
    } else if (secData.steps) {
      groups = [{ title: '', steps: secData.steps, hasTitle: false }];
    }

    groups.forEach((g) => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'steps-group';

      if (g.hasTitle) {
        const h3 = document.createElement('h3');
        h3.className = 'steps-title';
        h3.textContent = g.title;
        groupDiv.appendChild(h3);
      }

      const ol = document.createElement('ol');
      ol.className = 'steps-list';

      (g.steps || []).forEach((stepText, idx) => {
        const li = document.createElement('li');
        if (idx === 0) {
          li.className = 'step--warn';
        }

        const numSpan = document.createElement('span');
        numSpan.className = 'step-num';
        numSpan.textContent = idx + 1;

        const textSpan = document.createElement('span');
        textSpan.className = 'step-text';
        textSpan.textContent = stepText;

        li.appendChild(numSpan);
        li.appendChild(textSpan);
        ol.appendChild(li);
      });

      groupDiv.appendChild(ol);
      stepsContainer.appendChild(groupDiv);
    });

    container.appendChild(stepsContainer);
  } else if (sec.type === 'r22') {
    const root = document.createElement('div');
    root.className = 'r22-section';

    // 1. Grid superior: Intro + Garrafa + Química
    const topGrid = document.createElement('div');
    topGrid.className = 'r22-grid-top';

    // 1a. Intro card
    if (secData.intro) {
      const introCard = document.createElement('div');
      introCard.className = 'r22-card r22-card--intro';

      const h3 = document.createElement('h3');
      h3.className = 'r22-card-title';
      h3.textContent = secData.intro.title || '';
      introCard.appendChild(h3);

      const p = document.createElement('p');
      p.className = 'r22-card-text';
      p.textContent = secData.intro.text || '';
      introCard.appendChild(p);

      if (secData.intro.alertText) {
        const alertBox = document.createElement('div');
        alertBox.className = 'r22-alert-box';
        const alertH4 = document.createElement('strong');
        alertH4.className = 'r22-alert-title';
        alertH4.textContent = (secData.intro.alertTitle || 'Importante') + ': ';
        const alertSpan = document.createElement('span');
        alertSpan.textContent = secData.intro.alertText;
        alertBox.appendChild(alertH4);
        alertBox.appendChild(alertSpan);
        introCard.appendChild(alertBox);
      }
      topGrid.appendChild(introCard);
    }

    // 1b. Garrafa card
    const garrafaCard = document.createElement('div');
    garrafaCard.className = 'r22-card r22-card--garrafa';
    if (secData.garrafaImg) {
      const gImg = document.createElement('img');
      gImg.src = secData.garrafaImg;
      gImg.alt = secData.garrafaAlt || 'Garrafa R22';
      gImg.width = 180;
      gImg.height = 360;
      gImg.loading = 'lazy';
      gImg.className = 'r22-garrafa-img';
      garrafaCard.appendChild(gImg);
    }
    topGrid.appendChild(garrafaCard);

    // 1c. Química card
    if (secData.quimica) {
      const quimCard = document.createElement('div');
      quimCard.className = 'r22-card r22-card--quimica';

      const qH3 = document.createElement('h3');
      qH3.className = 'r22-card-title';
      qH3.textContent = secData.quimica.title || '';
      quimCard.appendChild(qH3);

      const qList = document.createElement('ul');
      qList.className = 'r22-quim-list';
      (secData.quimica.items || []).forEach(([k, v]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${k}:</strong> <span>${v}</span>`;
        qList.appendChild(li);
      });
      quimCard.appendChild(qList);

      if (secData.quimica.moleculaImg) {
        const molBox = document.createElement('div');
        molBox.className = 'r22-molecula-box';
        const molTitle = document.createElement('div');
        molTitle.className = 'r22-molecula-title';
        molTitle.textContent = secData.quimica.moleculaTitle || 'Estructura molecular:';
        molBox.appendChild(molTitle);

        const molImg = document.createElement('img');
        molImg.src = secData.quimica.moleculaImg;
        molImg.alt = secData.quimica.moleculaAlt || 'Estructura molecular';
        molImg.width = 375;
        molImg.height = 200;
        molImg.loading = 'lazy';
        molImg.className = 'r22-molecula-img';
        molBox.appendChild(molImg);

        quimCard.appendChild(molBox);
      }
      topGrid.appendChild(quimCard);
    }
    root.appendChild(topGrid);

    // 2. Grid medio: Características (izquierda) + Datos técnicos (derecha)
    const midGrid = document.createElement('div');
    midGrid.className = 'r22-grid-mid';

    // 2a. Características principales
    const caractCol = document.createElement('div');
    caractCol.className = 'r22-col';

    const cTitle = document.createElement('h3');
    cTitle.className = 'r22-subhead';
    cTitle.textContent = secData.caractTitle || 'Características principales';
    caractCol.appendChild(cTitle);

    const cList = document.createElement('div');
    cList.className = 'r22-caract-list';
    (secData.caractItems || []).forEach((item) => {
      const cItem = document.createElement('div');
      cItem.className = 'r22-caract-item';

      if (item.icon) {
        const iconImg = document.createElement('img');
        iconImg.src = item.icon;
        iconImg.alt = '';
        iconImg.width = 44;
        iconImg.height = 44;
        iconImg.loading = 'lazy';
        iconImg.className = 'r22-item-icon';
        cItem.appendChild(iconImg);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'r22-caract-text';
      const itemTitle = document.createElement('strong');
      itemTitle.textContent = item.title;
      const itemDesc = document.createElement('span');
      itemDesc.textContent = item.desc;
      textWrap.appendChild(itemTitle);
      textWrap.appendChild(itemDesc);
      cItem.appendChild(textWrap);

      cList.appendChild(cItem);
    });
    caractCol.appendChild(cList);
    midGrid.appendChild(caractCol);

    // 2b. Datos técnicos (Tabla)
    const tecCol = document.createElement('div');
    tecCol.className = 'r22-col';

    const tTitle = document.createElement('h3');
    tTitle.className = 'r22-subhead';
    tTitle.textContent = secData.tecnicosTitle || 'Datos técnicos';
    tecCol.appendChild(tTitle);

    const tecCols = secData.tecnicosCols || ['Parámetro', 'Valor'];
    const tecRows = secData.tecnicosRows || [];

    // Tabla Desktop
    const tableWide = document.createElement('div');
    tableWide.className = 'table-wide r22-table-wide';
    tableWide.setAttribute('role', 'table');

    const headRow = document.createElement('div');
    headRow.className = 'table-row table-head-row';
    headRow.setAttribute('role', 'row');
    headRow.style.gridTemplateColumns = 'minmax(0, 1.4fr) minmax(0, 1.2fr)';
    tecCols.forEach((col) => {
      const ch = document.createElement('div');
      ch.className = 'table-colheader';
      ch.setAttribute('role', 'columnheader');
      ch.textContent = col;
      headRow.appendChild(ch);
    });
    tableWide.appendChild(headRow);

    tecRows.forEach(([p, v]) => {
      const rDiv = document.createElement('div');
      rDiv.className = 'table-row';
      rDiv.setAttribute('role', 'row');
      rDiv.style.gridTemplateColumns = 'minmax(0, 1.4fr) minmax(0, 1.2fr)';

      const c1 = document.createElement('div');
      c1.className = 'table-cell cell-title';
      c1.setAttribute('role', 'cell');
      c1.textContent = p;

      const c2 = document.createElement('div');
      c2.className = 'table-cell cell-primary';
      c2.setAttribute('role', 'cell');
      c2.textContent = v;

      rDiv.appendChild(c1);
      rDiv.appendChild(c2);
      tableWide.appendChild(rDiv);
    });
    tecCol.appendChild(tableWide);

    // Tarjetas Mobile
    const tableCards = document.createElement('div');
    tableCards.className = 'table-cards r22-table-cards';
    tecRows.forEach(([p, v]) => {
      const card = document.createElement('div');
      card.className = 'card';
      const cHead = document.createElement('div');
      cHead.className = 'card-head';
      const cTitleSpan = document.createElement('span');
      cTitleSpan.className = 'card-title';
      cTitleSpan.textContent = p;
      cHead.appendChild(cTitleSpan);
      const cBody = document.createElement('div');
      cBody.className = 'card-body';
      const cField = document.createElement('div');
      cField.className = 'card-field';
      const cVal = document.createElement('div');
      cVal.className = 'card-value-primary';
      cVal.textContent = v;
      cField.appendChild(cVal);
      cBody.appendChild(cField);
      card.appendChild(cHead);
      card.appendChild(cBody);
      tableCards.appendChild(card);
    });
    tecCol.appendChild(tableCards);

    midGrid.appendChild(tecCol);
    root.appendChild(midGrid);

    // 3. Grid inferior: Medidas de cuidado + Aplicaciones y Ambiente
    const btmGrid = document.createElement('div');
    btmGrid.className = 'r22-grid-btm';

    // 3a. Medidas de cuidado
    const cuidCol = document.createElement('div');
    cuidCol.className = 'r22-col';

    const cuidTitle = document.createElement('h3');
    cuidTitle.className = 'r22-subhead';
    cuidTitle.textContent = secData.cuidadosTitle || 'Medidas de cuidado';
    cuidCol.appendChild(cuidTitle);

    const cuidList = document.createElement('ul');
    cuidList.className = 'r22-cuidados-list';
    (secData.cuidadosItems || []).forEach((item) => {
      const li = document.createElement('li');
      li.className = 'r22-cuidado-item';

      if (item.icon) {
        const iconImg = document.createElement('img');
        iconImg.src = item.icon;
        iconImg.alt = '';
        iconImg.width = 40;
        iconImg.height = 40;
        iconImg.loading = 'lazy';
        iconImg.className = 'r22-item-icon';
        li.appendChild(iconImg);
      }
      const textSpan = document.createElement('span');
      textSpan.className = 'r22-cuidado-text';
      textSpan.textContent = item.text;
      li.appendChild(textSpan);
      cuidList.appendChild(li);
    });
    cuidCol.appendChild(cuidList);
    btmGrid.appendChild(cuidCol);

    // 3b. Aplicaciones y Medio ambiente
    const appsCol = document.createElement('div');
    appsCol.className = 'r22-col';

    const appTitle = document.createElement('h3');
    appTitle.className = 'r22-subhead';
    appTitle.textContent = secData.appsTitle || 'Aplicaciones';
    appsCol.appendChild(appTitle);

    const appsList = document.createElement('ul');
    appsList.className = 'r22-apps-list';
    (secData.appsItems || []).forEach((item) => {
      const li = document.createElement('li');
      li.className = 'r22-app-item';

      if (item.icon) {
        const iconImg = document.createElement('img');
        iconImg.src = item.icon;
        iconImg.alt = '';
        iconImg.width = 38;
        iconImg.height = 38;
        iconImg.loading = 'lazy';
        iconImg.className = 'r22-item-icon';
        li.appendChild(iconImg);
      }
      const textSpan = document.createElement('span');
      textSpan.className = 'r22-app-text';
      textSpan.textContent = item.text;
      li.appendChild(textSpan);
      appsList.appendChild(li);
    });
    appsCol.appendChild(appsList);

    // Banner ambiente
    if (secData.ambienteTitle) {
      const ambCard = document.createElement('div');
      ambCard.className = 'r22-ambiente-banner';
      if (secData.ambienteIcon) {
        const ambImg = document.createElement('img');
        ambImg.src = secData.ambienteIcon;
        ambImg.alt = '';
        ambImg.width = 44;
        ambImg.height = 44;
        ambImg.loading = 'lazy';
        ambImg.className = 'r22-ambiente-icon';
        ambCard.appendChild(ambImg);
      }
      const ambContent = document.createElement('div');
      const ambH4 = document.createElement('strong');
      ambH4.className = 'r22-ambiente-title';
      ambH4.textContent = secData.ambienteTitle;
      const ambP = document.createElement('p');
      ambP.className = 'r22-ambiente-text';
      ambP.textContent = secData.ambienteText || '';
      ambContent.appendChild(ambH4);
      ambContent.appendChild(ambP);
      ambCard.appendChild(ambContent);
      appsCol.appendChild(ambCard);
    }

    btmGrid.appendChild(appsCol);
    root.appendChild(btmGrid);

    container.appendChild(root);
  } else if (sec.type === 'componentes') {
    const compDiv = document.createElement('div');
    compDiv.className = 'comp';

    const photoDiv = document.createElement('div');
    photoDiv.className = 'comp-photo';

    const img = document.createElement('img');
    img.src = 'assets/camara.webp';
    img.alt = secData.alt || '';
    img.width = 668;
    img.height = 768;
    img.loading = 'lazy';
    photoDiv.appendChild(img);

    (CONFIG.MARKERS || []).forEach((pos, idx) => {
      const n = idx + 1;
      const markerBtn = document.createElement('button');
      markerBtn.type = 'button';
      markerBtn.className = 'marker';
      markerBtn.dataset.marker = String(n);
      markerBtn.style.left = pos[0] + '%';
      markerBtn.style.top = pos[1] + '%';
      const itemName = (secData.items && secData.items[idx]) || '';
      markerBtn.setAttribute('aria-label', n + '. ' + itemName);
      markerBtn.setAttribute('aria-pressed', 'false');
      markerBtn.textContent = n;
      photoDiv.appendChild(markerBtn);
    });

    const infoDiv = document.createElement('div');

    const hint = document.createElement('p');
    hint.className = 'comp-hint';
    hint.setAttribute('data-noprint', '');
    hint.textContent = (data.ui && data.ui.tapHint) || '';
    infoDiv.appendChild(hint);

    const ol = document.createElement('ol');
    ol.className = 'comp-list';

    (secData.items || []).forEach((itemText, idx) => {
      const n = idx + 1;
      const li = document.createElement('li');

      const itemBtn = document.createElement('button');
      itemBtn.type = 'button';
      itemBtn.className = 'comp-item';
      itemBtn.dataset.marker = String(n);
      itemBtn.setAttribute('aria-pressed', 'false');

      const numSpan = document.createElement('span');
      numSpan.className = 'comp-item-num';
      numSpan.textContent = n;

      const labelSpan = document.createElement('span');
      labelSpan.className = 'comp-item-label';
      labelSpan.textContent = itemText;

      itemBtn.appendChild(numSpan);
      itemBtn.appendChild(labelSpan);
      li.appendChild(itemBtn);
      ol.appendChild(li);
    });

    infoDiv.appendChild(ol);
    compDiv.appendChild(photoDiv);
    compDiv.appendChild(infoDiv);
    container.appendChild(compDiv);
  } else if (sec.type === 'tabla') {
    const cols = secData.cols || [];
    const rows = secData.rows || [];
    const primaryIdx = sec.primary !== undefined ? sec.primary : -1;

    // 1. Table wide
    const tableWide = document.createElement('div');
    tableWide.className = 'table-wide';
    tableWide.setAttribute('role', 'table');

    const headerRow = document.createElement('div');
    headerRow.className = 'table-row table-head-row';
    headerRow.setAttribute('role', 'row');
    if (sec.grid) {
      headerRow.style.gridTemplateColumns = sec.grid;
    }

    cols.forEach((colName) => {
      const colHeader = document.createElement('div');
      colHeader.className = 'table-colheader';
      colHeader.setAttribute('role', 'columnheader');
      colHeader.textContent = colName;
      headerRow.appendChild(colHeader);
    });
    tableWide.appendChild(headerRow);

    rows.forEach((row, ri) => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'table-row';
      rowDiv.setAttribute('role', 'row');
      if (sec.grid) {
        rowDiv.style.gridTemplateColumns = sec.grid;
      }

      row.forEach((cellData, ci) => {
        const cellDiv = document.createElement('div');
        cellDiv.className = 'table-cell';
        cellDiv.setAttribute('role', 'cell');

        if (ci === 0) {
          cellDiv.classList.add('cell-title');
          if (sec.icons && CONFIG.CAL && CONFIG.CAL[ri]) {
            const calImg = document.createElement('img');
            calImg.src = CONFIG.CAL[ri];
            calImg.alt = '';
            calImg.width = 114;
            calImg.height = 114;
            calImg.loading = 'lazy';
            calImg.className = 'table-cell-icon';
            cellDiv.appendChild(calImg);
          }
          const titleText = document.createElement('span');
          titleText.textContent = cellData;
          cellDiv.appendChild(titleText);
        } else if (ci === primaryIdx) {
          cellDiv.classList.add('cell-primary');
          cellDiv.textContent = cellData;
        } else if (Array.isArray(cellData)) {
          const ul = document.createElement('ul');
          cellData.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
          });
          cellDiv.appendChild(ul);
        } else {
          cellDiv.textContent = cellData;
        }

        rowDiv.appendChild(cellDiv);
      });

      tableWide.appendChild(rowDiv);
    });

    // 2. Table cards
    const tableCards = document.createElement('div');
    tableCards.className = 'table-cards';

    rows.forEach((row, ri) => {
      const card = document.createElement('div');
      card.className = 'card';

      const cardHead = document.createElement('div');
      cardHead.className = 'card-head';

      if (sec.icons && CONFIG.CAL && CONFIG.CAL[ri]) {
        const calImg = document.createElement('img');
        calImg.src = CONFIG.CAL[ri];
        calImg.alt = '';
        calImg.width = 114;
        calImg.height = 114;
        calImg.loading = 'lazy';
        calImg.className = 'card-head-icon';
        cardHead.appendChild(calImg);
      }

      const cardTitle = document.createElement('span');
      cardTitle.className = 'card-title';
      cardTitle.textContent = row[0];
      cardHead.appendChild(cardTitle);

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      row.slice(1).forEach((cellData, ci) => {
        const fieldIdx = ci + 1;
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'card-field';

        const label = document.createElement('div');
        label.className = 'card-label';
        label.textContent = cols[fieldIdx] || '';
        fieldDiv.appendChild(label);

        if (fieldIdx === primaryIdx) {
          const valDiv = document.createElement('div');
          valDiv.className = 'card-value-primary';
          valDiv.textContent = cellData;
          fieldDiv.appendChild(valDiv);
        } else if (Array.isArray(cellData)) {
          const ul = document.createElement('ul');
          cellData.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
          });
          fieldDiv.appendChild(ul);
        } else {
          const valDiv = document.createElement('div');
          valDiv.className = 'card-value';
          valDiv.textContent = cellData;
          fieldDiv.appendChild(valDiv);
        }

        cardBody.appendChild(fieldDiv);
      });

      card.appendChild(cardHead);
      card.appendChild(cardBody);
      tableCards.appendChild(card);
    });

    container.appendChild(tableWide);
    container.appendChild(tableCards);
  } else if (sec.type === 'planilla') {
    const formCols = secData.cols || [];

    const form = document.createElement('div');
    form.className = 'form';
    form.setAttribute('role', 'table');

    const formHead = document.createElement('div');
    formHead.className = 'form-head';
    formHead.setAttribute('role', 'row');

    formCols.forEach((colName) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'form-colheader';
      colDiv.setAttribute('role', 'columnheader');
      colDiv.textContent = colName;
      formHead.appendChild(colDiv);
    });
    form.appendChild(formHead);

    for (let r = 0; r < 6; r++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'form-row';
      rowDiv.setAttribute('role', 'row');
      for (let c = 0; c < 4; c++) {
        const cell = document.createElement('div');
        cell.className = 'form-cell';
        cell.setAttribute('role', 'cell');
        rowDiv.appendChild(cell);
      }
      form.appendChild(rowDiv);
    }
    container.appendChild(form);

    const signRow = document.createElement('div');
    signRow.className = 'form-signatures';

    const respDiv = document.createElement('div');
    respDiv.className = 'form-sign-field';
    const respLabel = document.createElement('span');
    respLabel.className = 'form-sign-label';
    respLabel.textContent = (secData.resp || '') + ':';
    const respLine = document.createElement('span');
    respLine.className = 'form-sign-line';
    respDiv.appendChild(respLabel);
    respDiv.appendChild(respLine);

    const firmaDiv = document.createElement('div');
    firmaDiv.className = 'form-sign-field';
    const firmaLabel = document.createElement('span');
    firmaLabel.className = 'form-sign-label';
    firmaLabel.textContent = (secData.firma || '') + ':';
    const firmaLine = document.createElement('span');
    firmaLine.className = 'form-sign-line';
    firmaDiv.appendChild(firmaLabel);
    firmaDiv.appendChild(firmaLine);

    signRow.appendChild(respDiv);
    signRow.appendChild(firmaDiv);
    container.appendChild(signRow);

    const printActions = document.createElement('div');
    printActions.className = 'form-actions';
    const printBtn = document.createElement('button');
    printBtn.type = 'button';
    printBtn.className = 'print-btn';
    printBtn.setAttribute('data-noprint', '');
    printBtn.textContent = (data.ui && data.ui.print) || '';
    printBtn.addEventListener('click', () => {
      window.print();
    });
    printActions.appendChild(printBtn);
    container.appendChild(printActions);
  }
}

function renderSections(lang, state) {
  const data = getData(lang);
  const container = document.getElementById('sections');
  if (!container) return;
  container.innerHTML = '';

  const safetySvg = '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="sec-icon-safety" style="flex:0 0 24px"><path d="M12 2.5 L23 21 H1 Z" fill="#f2a93b"></path><rect x="11" y="9" width="2" height="6.5" fill="#18201c"></rect><circle cx="12" cy="18" r="1.3" fill="#18201c"></circle></svg>';
  const chevronSvg = '<svg class="sec-chevron" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:0 0 22px"><path d="M6 9l6 6 6-6"></path></svg>';

  CONFIG.SECTIONS.forEach((sec) => {
    const n = sec.id;
    const secData = data['s' + n] || {};
    const isOpen = state.open.includes(n);

    const sectionEl = document.createElement('section');
    sectionEl.id = 'sec-' + n;
    sectionEl.className = 'sec' + (sec.half ? ' sec--half' : '') + (n === 2 ? ' sec--safety' : '') + (isOpen ? ' is-open' : '');

    const h2 = document.createElement('h2');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sec-head';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-controls', 'body-' + n);

    const badge = document.createElement('span');
    badge.className = 'sec-badge';
    badge.textContent = n;

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sec-title';
    titleSpan.textContent = secData.t || '';
    if (secData.sub) {
      const subSpan = document.createElement('span');
      subSpan.className = 'sec-sub';
      subSpan.textContent = ' ' + secData.sub;
      titleSpan.appendChild(subSpan);
    }

    btn.appendChild(badge);
    btn.appendChild(titleSpan);

    if (n === 2) {
      const safetyWrapper = document.createElement('span');
      safetyWrapper.innerHTML = safetySvg;
      btn.appendChild(safetyWrapper.firstElementChild);
    }

    const chevronWrapper = document.createElement('span');
    chevronWrapper.innerHTML = chevronSvg;
    btn.appendChild(chevronWrapper.firstElementChild);

    h2.appendChild(btn);
    sectionEl.appendChild(h2);

    const bodyEl = document.createElement('div');
    bodyEl.id = 'body-' + n;
    bodyEl.className = 'sec-body';
    bodyEl.inert = !isOpen;

    const innerEl = document.createElement('div');
    innerEl.className = 'sec-inner';
    renderBody(sec, data, innerEl);
    bodyEl.appendChild(innerEl);

    sectionEl.appendChild(bodyEl);

    container.appendChild(sectionEl);
  });
}

function openLightbox(src, alt) {
  let modal = document.getElementById('ficha-lightbox');
  if (!modal) {
    modal = document.createElement('dialog');
    modal.id = 'ficha-lightbox';
    modal.className = 'ficha-lightbox';
    modal.innerHTML = `
      <div class="ficha-lightbox-box">
        <button type="button" class="ficha-lightbox-close" aria-label="Cerrar">&times;</button>
        <img class="ficha-lightbox-img" src="" alt="">
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.ficha-lightbox-close').addEventListener('click', () => {
      modal.close();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  }

  const imgEl = modal.querySelector('.ficha-lightbox-img');
  imgEl.src = src;
  imgEl.alt = alt || '';
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
}


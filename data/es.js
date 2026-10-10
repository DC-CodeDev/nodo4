const DATA_ES = {
  ui: {
    title1: 'Mantenimiento técnico',
    title2: 'Cámara frigorífica',
    lead: 'Mantener la cámara en buen estado garantiza la eficiencia, la seguridad y la vida útil del equipo.',
    index: 'Índice',
    openAll: 'Abrir todo',
    closeAll: 'Cerrar todo',
    tapHint: 'Tocá un número para ubicar el componente.',
    print: 'Imprimir',
    back: 'Volver arriba',
    section: 'Sección',
    pdfLabel: 'Descargar documentación completa',
    pdfType: 'PDF',
    r22Download: 'Descargar ficha técnica R22 (JPEG, 0,2 MB)'
  },
  s1: {
    t: 'Objetivo',
    p: 'Garantizar el correcto funcionamiento del sistema, prevenir fallas, prolongar la vida útil de los componentes y conservar adecuadamente los productos almacenados.'
  },
  s2: {
    t: 'Seguridad y EPP',
    checks: [
      'Desconectar la alimentación eléctrica.',
      'Usar elementos de protección personal (EPP).',
      'Trabajar en un área ventilada.',
      'No manipular el refrigerante.',
      'Mantener el área limpia y ordenada.'
    ],
    epp: [
      'Casco',
      'Lentes de seguridad',
      'Guantes',
      'Calzado de seguridad',
      'Ropa de trabajo (antidesgarro)'
    ]
  },
  s3: {
    t: 'Ficha técnica: Gas refrigerante R22',
    sub: '(Diclorodifluorometano)',
    intro: {
      title: '¿Qué es el R22?',
      text: 'El R22 es un gas refrigerante de la familia de los hidroclorofluorocarbonos (HCFC), ampliamente utilizado en sistemas de refrigeración y aire acondicionado. Actualmente está en proceso de eliminación debido a su impacto en la capa de ozono.',
      alertTitle: 'Importante',
      alertText: 'El R22 ya no se produce en muchos países y su uso está restringido por el Protocolo de Montreal.'
    },
    garrafaImg: 'assets/r22/garrafa.png',
    garrafaAlt: 'Garrafa de gas refrigerante R22 CHClF2',
    quimica: {
      title: 'Composición química',
      items: [
        ['Nombre químico', 'Diclorodifluorometano'],
        ['Fórmula molecular', 'CHClF₂']
      ],
      moleculaTitle: 'Estructura molecular:',
      moleculaImg: 'assets/r22/molecula.png',
      moleculaAlt: 'Estructura molecular del R22: C central enlazado con Cl, dos F y H'
    },
    caractTitle: 'Características principales',
    caractItems: [
      { icon: 'assets/r22/caract-enfriamiento.png?v=2', title: 'Poder de enfriamiento', desc: 'Alto, ideal para sistemas de mediana y baja temperatura.' },
      { icon: 'assets/r22/caract-ebullicion.png?v=2', title: 'Punto de ebullición', desc: '-40,8 °C (a 1 atm).' },
      { icon: 'assets/r22/caract-inflamabilidad.png?v=2', title: 'Inflamabilidad', desc: 'No inflamable (no es explosivo).' },
      { icon: 'assets/r22/caract-toxicidad.png?v=2', title: 'Toxicidad', desc: 'Baja toxicidad en condiciones normales de uso.' },
      { icon: 'assets/r22/caract-compatibilidad.png?v=2', title: 'Compatibilidad', desc: 'Compatible con aceites minerales, alquilbenceno y polioléster (POE).' }
    ],
    tecnicosTitle: 'Datos técnicos',
    tecnicosCols: ['Parámetro', 'Valor'],
    tecnicosRows: [
      ['Fórmula química', 'CHClF₂'],
      ['Peso molecular', '86,47 g/mol'],
      ['Punto de ebullición (1 atm)', '-40,8 °C'],
      ['Punto de congelación', '-157,5 °C'],
      ['Presión de vapor (25 °C)', '≈ 8,7 bar (≈ 126 psi)'],
      ['Densidad del líquido (25 °C)', '1,21 g/cm³'],
      ['Densidad del vapor (25 °C)', '≈ 5,4 kg/m³'],
      ['Olor', 'Inodoro'],
      ['Clasificación ASHRAE', 'A1 (no tóxico, no inflamable)'],
      ['ODP (Agotamiento de ozono)', '0,055'],
      ['GWP (Calentamiento global)', '1.810']
    ],
    cuidadosTitle: 'Medidas de cuidado',
    cuidadosItems: [
      { icon: 'assets/r22/cuidado-epp.png', text: 'Usar siempre guantes y gafas de seguridad.' },
      { icon: 'assets/r22/cuidado-ventilacion.png', text: 'Trabajar en áreas bien ventiladas.' },
      { icon: 'assets/r22/cuidado-fuego.png', text: 'Evitar el contacto con llamas o superficies calientes (puede descomponerse en gases tóxicos).' },
      { icon: 'assets/r22/cuidado-fuga.png', text: 'En caso de fuga, ventilar el área y evitar la acumulación del gas.' },
      { icon: 'assets/r22/cuidado-reciclaje.png', text: 'No liberar a la atmósfera. Recuperar y reciclar según normativa ambiental.' }
    ],
    appsTitle: 'Aplicaciones',
    appsItems: [
      { icon: 'assets/r22/app-aire.png', text: 'Aire acondicionado residencial y comercial' },
      { icon: 'assets/r22/app-comercial.png', text: 'Refrigeración comercial e industrial' },
      { icon: 'assets/r22/app-transporte.png', text: 'Sistemas de refrigeración en transporte (cámaras frigoríficas, camiones, etc.)' }
    ],
    ambienteTitle: 'Cuidemos el medio ambiente',
    ambienteText: 'Hoy existen alternativas más seguras y sostenibles.',
    ambienteIcon: 'assets/r22/ambiente-hoja.png'
  },
  s4: {
    t: 'Componentes principales',
    alt: 'Foto de la cámara frigorífica con los componentes numerados',
    items: [
      'Tablero de control',
      'Tablero eléctrico',
      'Panel de luces testigo',
      'Presostato',
      'Filtro deshidratador',
      'Condensador',
      'Moto compresor',
      'Grupo de válvulas (líquido y control de vacío)'
    ]
  },
  s5: {
    t: 'Plan de mantenimiento preventivo',
    cols: ['Frecuencia', 'Tareas principales'],
    rows: [
      ['Diario', ['Verificar temperatura.', 'Revisar ruidos y vibraciones.', 'Observar fugas.', 'Controlar el estado general del equipo.']],
      ['Semanal', ['Limpiar rejillas y filtros.', 'Revisar drenaje de condensados.', 'Comprobar funcionamiento de ventiladores.']],
      ['Mensual', ['Limpiar condensador y evaporador.', 'Revisar presión de trabajo.', 'Verificar estado de burletes y puertas.']],
      ['Semestral / Anual', ['Revisar conexiones eléctricas.', 'Controlar el estado de refrigerante.', 'Revisar presostatos, válvulas y termostato.', 'Limpiar el sistema.']]
    ]
  },
  s6: {
    t: 'Limpieza del evaporador y condensador',
    groups: [
      ['Evaporador', ['Desconectar la alimentación eléctrica.', 'Retirar el hielo o escarcha.', 'Limpiar con cepillo suave y agua tibia.', 'Verificar que los desagües estén libres.', 'Secar y volver a poner en funcionamiento.']],
      ['Condensador', ['Desconectar la alimentación eléctrica.', 'Retirar polvo y suciedad.', 'Limpiar con aire comprimido o cepillo suave.', 'Verificar que los ventiladores funcionen correctamente.', 'Comprobar que no haya obstrucciones en el flujo de aire.']]
    ]
  },
  s7: {
    t: 'Revisión eléctrica',
    checks: [
      'Verificar el estado de cables y conexiones.',
      'Comprobar el funcionamiento del tablero de control y contactores.',
      'Revisar el estado de los ventiladores.',
      'Confirmar el correcto funcionamiento del termostato.',
      'Revisar presostatos de alta y baja.',
      'Asegurar la correcta puesta a tierra.'
    ]
  },
  s8: {
    t: 'Control de presiones y temperaturas',
    cols: ['Parámetro', 'Rango típico', 'Observaciones'],
    rows: [
      ['Alta (condensación)', '150 - 250 psi', 'Varía según el refrigerante y la temperatura ambiente.'],
      ['Baja (evaporación)', '20 - 45 psi', 'Varía según la temperatura de la cámara y el refrigerante.'],
      ['Temperatura de cámara', '-18 °C a 0 °C', 'Según el tipo de producto.'],
      ['Temperatura de descarga', '70 - 90 °C', 'No debe superar los límites del fabricante.']
    ]
  },
  s9: {
    t: 'Detección de fugas de refrigerante',
    checks: [
      'Inspeccionar uniones, soldaduras y válvulas.',
      'Revisar presiones y temperaturas del sistema.',
      'Aplicar agua jabonosa en uniones (método complementario).',
      'Utilizar detector electrónico de fugas.'
    ]
  },
  s10: {
    t: 'Revisión de deshielo',
    checks: [
      'Verificar que el ciclo funcione correctamente.',
      'Comprobar el estado de resistencias.',
      'Asegurar que el agua de deshielo drene bien.',
      'Revisar el temporizador o control de deshielo.'
    ]
  },
  s11: {
    t: 'Puertas, burletes y aislamiento',
    checks: [
      'Verificar que los burletes cierren bien.',
      'Revisar bisagras y cerraduras.',
      'Comprobar que no haya filtraciones de aire.',
      'Inspeccionar el estado del aislamiento de paneles.'
    ]
  },
  s12: {
    t: 'Fallas frecuentes y posibles causas',
    cols: ['Problema', 'Posibles causas'],
    rows: [
      ['No enfría', 'Falta de refrigerante, compresor dañado, termostato.'],
      ['Temperatura inestable', 'Sensor o termostato defectuoso.'],
      ['Ruidos anormales', 'Ventiladores, compresor, soportes.'],
      ['Exceso de escarcha', 'Falla en deshielo, puerta mal cerrada.'],
      ['Alto consumo eléctrico', 'Condensador sucio, fuga de aire, mal aislamiento.'],
      ['Fuga de agua', 'Desagüe obstruido, deshielo.']
    ]
  },
  s13: {
    t: 'Planilla de mantenimiento',
    sub: '(registro)',
    cols: ['Fecha', 'Tarea', 'Realizado (✓)', 'Observaciones'],
    resp: 'Responsable',
    firma: 'Firma'
  },
  s14: {
    t: 'Procedimiento ante una falla',
    steps: [
      'Detener el equipo (si es necesario).',
      'Verificar temperatura y presiones.',
      'Revisar componentes básicos (tablero, ventiladores, compresor, válvulas).',
      'Buscar fugas o bloqueos.',
      'Registrar la falla y la acción realizada.'
    ]
  },
  s15: {
    t: 'Recomendaciones finales',
    checks: [
      'Realizar el mantenimiento en los tiempos indicados.',
      'Mantener un registro de todas las intervenciones.',
      'Usar repuestos originales o de calidad equivalente.',
      'No sobrecargar la cámara.',
      'Mantener el área limpia y ordenada.',
      'Cuidar el equipo para prolongar su vida útil.'
    ]
  }
};

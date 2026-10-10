const DATA_EN = {
  ui: {
    title1: 'Technical maintenance',
    title2: 'Cold room',
    lead: 'Keeping the cold room in good condition ensures the efficiency, safety and service life of the equipment.',
    index: 'Contents',
    openAll: 'Expand all',
    closeAll: 'Collapse all',
    tapHint: 'Tap a number to locate the component.',
    print: 'Print',
    back: 'Back to top',
    section: 'Section',
    pdfLabel: 'Download full documentation',
    pdfType: 'PDF',
    r22Download: 'Download R22 data sheet (JPEG, 0.2 MB)'
  },
  s1: {
    t: 'Objective',
    p: 'Ensure the correct operation of the system, prevent failures, extend the service life of the components and properly preserve the stored products.'
  },
  s2: {
    t: 'Safety and PPE',
    checks: [
      'Disconnect the power supply.',
      'Use personal protective equipment (PPE).',
      'Work in a ventilated area.',
      'Do not handle the refrigerant.',
      'Keep the area clean and tidy.'
    ],
    epp: [
      'Helmet',
      'Safety glasses',
      'Gloves',
      'Safety footwear',
      'Workwear (tear-resistant)'
    ]
  },
  s3: {
    t: 'Technical data sheet: R22 refrigerant gas',
    sub: '(Chlorodifluoromethane)',
    intro: {
      title: 'What is R22?',
      text: 'R22 is a refrigerant gas belonging to the hydrochlorofluorocarbon (HCFC) family, widely used in refrigeration and air conditioning systems. It is currently being phased out due to its impact on the ozone layer.',
      alertTitle: 'Important',
      alertText: 'R22 is no longer produced in many countries and its use is restricted under the Montreal Protocol.'
    },
    garrafaImg: 'assets/r22/garrafa.png',
    garrafaAlt: 'R22 CHClF2 refrigerant gas cylinder',
    quimica: {
      title: 'Chemical composition',
      items: [
        ['Chemical name', 'Chlorodifluoromethane'],
        ['Molecular formula', 'CHClF₂']
      ],
      moleculaTitle: 'Molecular structure:',
      moleculaImg: 'assets/r22/molecula.png',
      moleculaAlt: 'R22 molecular structure: central Carbon (C) bonded with Cl, two F atoms, and H'
    },
    caractTitle: 'Main characteristics',
    caractItems: [
      { icon: 'assets/r22/caract-enfriamiento.png?v=2', title: 'Cooling capacity', desc: 'High, ideal for medium and low temperature systems.' },
      { icon: 'assets/r22/caract-ebullicion.png?v=2', title: 'Boiling point', desc: '-40.8 °C (at 1 atm).' },
      { icon: 'assets/r22/caract-inflamabilidad.png?v=2', title: 'Flammability', desc: 'Non-flammable (non-explosive).' },
      { icon: 'assets/r22/caract-toxicidad.png?v=2', title: 'Toxicity', desc: 'Low toxicity under normal operating conditions.' },
      { icon: 'assets/r22/caract-compatibilidad.png?v=2', title: 'Compatibility', desc: 'Compatible with mineral oils, alkylbenzene, and polyolester (POE).' }
    ],
    tecnicosTitle: 'Technical data',
    tecnicosCols: ['Parameter', 'Value'],
    tecnicosRows: [
      ['Chemical formula', 'CHClF₂'],
      ['Molecular weight', '86.47 g/mol'],
      ['Boiling point (1 atm)', '-40.8 °C'],
      ['Freezing point', '-157.5 °C'],
      ['Vapor pressure (25 °C)', '≈ 8.7 bar (≈ 126 psi)'],
      ['Liquid density (25 °C)', '1.21 g/cm³'],
      ['Vapor density (25 °C)', '≈ 5.4 kg/m³'],
      ['Odor', 'Odorless'],
      ['ASHRAE classification', 'A1 (non-toxic, non-flammable)'],
      ['ODP (Ozone depletion potential)', '0.055'],
      ['GWP (Global warming potential)', '1,810']
    ],
    cuidadosTitle: 'Safety precautions',
    cuidadosItems: [
      { icon: 'assets/r22/cuidado-epp.png', text: 'Always wear gloves and safety glasses.' },
      { icon: 'assets/r22/cuidado-ventilacion.png', text: 'Work in well-ventilated areas.' },
      { icon: 'assets/r22/cuidado-fuego.png', text: 'Avoid contact with flames or hot surfaces (may decompose into toxic gases).' },
      { icon: 'assets/r22/cuidado-fuga.png', text: 'In case of a leak, ventilate the area and prevent gas accumulation.' },
      { icon: 'assets/r22/cuidado-reciclaje.png', text: 'Do not vent into the atmosphere. Recover and recycle per environmental regulations.' }
    ],
    appsTitle: 'Applications',
    appsItems: [
      { icon: 'assets/r22/app-aire.png', text: 'Residential and commercial air conditioning' },
      { icon: 'assets/r22/app-comercial.png', text: 'Commercial and industrial refrigeration' },
      { icon: 'assets/r22/app-transporte.png', text: 'Transport refrigeration systems (cold rooms, refrigerated trucks, etc.)' }
    ],
    ambienteTitle: 'Protecting the environment',
    ambienteText: 'Safer and more sustainable alternatives are available today.',
    ambienteIcon: 'assets/r22/ambiente-hoja.png'
  },
  s4: {
    t: 'Main components',
    alt: 'Photo of the cold room with numbered components',
    items: [
      'Control panel',
      'Electrical panel',
      'Indicator light panel',
      'Pressure switch',
      'Filter drier',
      'Condenser',
      'Motor compressor',
      'Valve group (liquid and vacuum control)'
    ]
  },
  s5: {
    t: 'Preventive maintenance plan',
    cols: ['Frequency', 'Main tasks'],
    rows: [
      ['Daily', ['Check temperature.', 'Check for noise and vibration.', 'Look for leaks.', 'Check the general condition of the equipment.']],
      ['Weekly', ['Clean grilles and filters.', 'Check condensate drainage.', 'Check fan operation.']],
      ['Monthly', ['Clean condenser and evaporator.', 'Check working pressure.', 'Check the condition of door gaskets and doors.']],
      ['Semi-annual / Annual', ['Check electrical connections.', 'Check the refrigerant condition.', 'Check pressure switches, valves and thermostat.', 'Clean the system.']]
    ]
  },
  s6: {
    t: 'Evaporator and condenser cleaning',
    groups: [
      ['Evaporator', ['Disconnect the power supply.', 'Remove ice or frost.', 'Clean with a soft brush and warm water.', 'Check that the drains are clear.', 'Dry and put back into operation.']],
      ['Condenser', ['Disconnect the power supply.', 'Remove dust and dirt.', 'Clean with compressed air or a soft brush.', 'Check that the fans work properly.', 'Check that there are no obstructions to the airflow.']]
    ]
  },
  s7: {
    t: 'Electrical inspection',
    checks: [
      'Check the condition of cables and connections.',
      'Check the operation of the control panel and contactors.',
      'Check the condition of the fans.',
      'Confirm the thermostat works correctly.',
      'Check the high and low pressure switches.',
      'Ensure proper grounding.'
    ]
  },
  s8: {
    t: 'Pressure and temperature control',
    cols: ['Parameter', 'Typical range', 'Notes'],
    rows: [
      ['High (condensing)', '150 - 250 psi', 'Varies with the refrigerant and ambient temperature.'],
      ['Low (evaporating)', '20 - 45 psi', 'Varies with the cold room temperature and the refrigerant.'],
      ['Cold room temperature', '-18 °C to 0 °C', 'Depends on the type of product.'],
      ['Discharge temperature', '70 - 90 °C', 'Must not exceed the manufacturer’s limits.']
    ]
  },
  s9: {
    t: 'Refrigerant leak detection',
    checks: [
      'Inspect joints, welds and valves.',
      'Check system pressures and temperatures.',
      'Apply soapy water to joints (complementary method).',
      'Use an electronic leak detector.'
    ]
  },
  s10: {
    t: 'Defrost inspection',
    checks: [
      'Check that the cycle works correctly.',
      'Check the condition of the heaters.',
      'Make sure the defrost water drains properly.',
      'Check the defrost timer or control.'
    ]
  },
  s11: {
    t: 'Doors, gaskets and insulation',
    checks: [
      'Check that the gaskets seal properly.',
      'Check hinges and locks.',
      'Check that there are no air leaks.',
      'Inspect the condition of the panel insulation.'
    ]
  },
  s12: {
    t: 'Common failures and possible causes',
    cols: ['Problem', 'Possible causes'],
    rows: [
      ['Not cooling', 'Lack of refrigerant, damaged compressor, thermostat.'],
      ['Unstable temperature', 'Faulty sensor or thermostat.'],
      ['Abnormal noise', 'Fans, compressor, mounts.'],
      ['Excess frost', 'Defrost failure, door not properly closed.'],
      ['High power consumption', 'Dirty condenser, air leak, poor insulation.'],
      ['Water leak', 'Clogged drain, defrost.']
    ]
  },
  s13: {
    t: 'Maintenance log',
    sub: '(record)',
    cols: ['Date', 'Task', 'Done (✓)', 'Notes'],
    resp: 'Responsible',
    firma: 'Signature'
  },
  s14: {
    t: 'Procedure in case of failure',
    steps: [
      'Stop the equipment (if necessary).',
      'Check temperature and pressures.',
      'Check basic components (panel, fans, compressor, valves).',
      'Look for leaks or blockages.',
      'Record the failure and the action taken.'
    ]
  },
  s15: {
    t: 'Final recommendations',
    checks: [
      'Carry out maintenance at the indicated intervals.',
      'Keep a record of all interventions.',
      'Use original or equivalent-quality spare parts.',
      'Do not overload the cold room.',
      'Keep the area clean and tidy.',
      'Take care of the equipment to extend its service life.'
    ]
  }
};

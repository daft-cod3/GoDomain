export const studyResearchSources = {
  trafficAct: {
    id: 'traffic-act',
    title: 'Kenya Traffic Act (Cap. 403, legislation as at 26 April 2024)',
    url: 'https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source'
  },
  trafficRules: {
    id: 'traffic-rules',
    title: 'Kenya Traffic Rules (Gazette Notice 1902 of 1953, revised 2022)',
    url: 'https://new.kenyalaw.org/akn/ke/act/gn/1953/1902/eng@2022-12-31'
  },
  trafficSignsRules: {
    id: 'traffic-signs-rules',
    title: 'Kenya Traffic Signs Rules (Legal Notice 310 of 1974, revised 2022)',
    url: 'https://new.kenyalaw.org/akn/ke/act/ln/1974/310/eng@2022-12-31'
  },
  roadsManual5a: {
    id: 'roads-manual-5a',
    title: 'Kenya Design Manual for Roads and Bridges Part 5a - Road Signs (2009)',
    url: 'https://transport.go.ke/sites/default/files/2023-07/Part%205a%20-%20Road%20Signs.pdf'
  },
  nrsap2024: {
    id: 'nrsap-2024-2028',
    title: 'National Road Safety Action Plan 2024-2028 (Kenya)',
    url: 'https://aakenya.co.ke/files/NationalRoadSafetyActionPlan2024-2028.pdf.pdf'
  },
  whoRoadSafety: {
    id: 'who-road-traffic',
    title: 'WHO Fact Sheet - Road traffic injuries (13 December 2023)',
    url: 'https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries/'
  }
};

export const theoryNotesResearch = {
  title: 'Research-backed Theory Notes',
  subtitle:
    'These notes align with Kenyan law and road-design guidance, with practical exam-focused interpretation.',
  modules: [
    {
      title: 'Core Legal Foundation',
      points: [
        'Traffic signs are legally enforceable: drivers must obey signals, signs, and lawful police directions (Traffic Act section 52).',
        'Kenya classifies signs into Regulatory, Warning, Traffic Light Signals, and Carriageway/Kerb markings (Traffic Signs Rules, rule 3).',
        'Regulatory signs create mandatory requirements that apply beyond the sign face under defined conditions (Traffic Signs Rules, rule 6).'
      ]
    },
    {
      title: 'Speed and Risk Control',
      points: [
        'General urban/trading-centre speed ceiling is 50 km/h unless lawfully varied and clearly signed (Traffic Act section 42).',
        'School and designated child-crossing zones are also restricted to 50 km/h, with required signs and traffic-calming features (Traffic Act section 42).',
        'Persistent high-excess speeding can lead to invalidation of a driving licence under prescribed conditions (Traffic Act section 70).'
      ]
    },
    {
      title: 'Roadworthy Vehicle Basics',
      points: [
        'Vehicles must have adequate tyres and wheel condition for safe loading (Traffic Rules rules 18-20).',
        'Vehicles must have efficient braking systems that satisfy legal stopping performance requirements (Traffic Rules rule 22).',
        'Mandatory safety equipment includes lights, mirrors and seat belts in prescribed conditions (Traffic Rules rules 22A, 23 and 29).'
      ]
    },
    {
      title: 'Safe System Study Lens',
      points: [
        'Kenya\'s National Road Safety Action Plan applies a Safe System approach and targets 50% reduction in fatalities by 2030.',
        'The plan uses eight strategic priorities, including infrastructure safety, vehicle standards, enforcement, post-crash care and data systems.',
        'For theory exam preparation, connect every driving decision to risk reduction: safer speeds, safer roads, safer users and safer vehicles.'
      ]
    }
  ],
  sources: [
    studyResearchSources.trafficAct,
    studyResearchSources.trafficRules,
    studyResearchSources.trafficSignsRules,
    studyResearchSources.nrsap2024
  ]
};

export const vehiclePartsResearch = {
  title: 'Research-backed Vehicle Parts Guide',
  subtitle:
    'These points connect dashboard symbols and component checks to legal roadworthiness duties in Kenya.',
  modules: [
    {
      title: 'Roadworthiness Checks Before Driving',
      points: [
        'Tyres: ensure adequate inflation and legal condition before travel (Traffic Rules rules 18-20).',
        'Brakes: ensure braking systems are fully functional and balanced (Traffic Rules rule 22).',
        'Lights: confirm front/rear lighting and night visibility requirements are met (Traffic Rules rule 23).',
        'Mirrors and view: driver must have clear visibility and a functioning rear-view mirror (Traffic Rules rules 29-30).'
      ]
    },
    {
      title: 'Dashboard Warning Priority Model',
      points: [
        'Red warning: stop safely and investigate immediately (high-risk safety or engine issue).',
        'Amber warning: proceed with caution, arrange diagnostics as soon as possible.',
        'Green/blue indicator: system state or active function, usually informational unless behavior is unsafe.'
      ]
    },
    {
      title: 'Critical Warning Behaviors',
      points: [
        'Brake-system warnings: do not ignore, because legal braking performance is mandatory.',
        'Oil-pressure or overheat warnings: stop quickly in a safe place to prevent major engine damage.',
        'Seat belt reminders: all occupied fitted seats require seat belt use under Kenyan rules (Traffic Rules rule 22A).',
        'Lamp-out or indicator faults: repair quickly to maintain legal signaling and visibility obligations.'
      ]
    },
    {
      title: 'Practical Exam and Daily Driving Link',
      points: [
        'Treat warning lights as early risk signals, not optional notifications.',
        'Perform short pre-trip checks (tyres, lights, brake feel, mirrors, warning lamps) before every journey.',
        'Use the owner manual symbol key, but always apply the legal minimum safety standard from Kenyan traffic law.'
      ]
    }
  ],
  sources: [studyResearchSources.trafficRules, studyResearchSources.trafficAct]
};

export const trafficLightsResearch = {
  title: 'Research-backed Traffic Lights Rules',
  subtitle:
    'Signal sequence and driver response are based on Kenya Traffic Signs Rules (Class C traffic light signals).',
  modules: [
    {
      title: 'Signal Unit and Sequence',
      points: [
        'Standard vehicle signal order is: red, red+amber, green, amber (Traffic Signs Rules rule 10).',
        'Lights are vertically arranged with red uppermost and green lowermost (Traffic Signs Rules rule 10).',
        'Traffic lights are mandatory controls, not advisory signs.'
      ]
    },
    {
      title: 'Meaning for Drivers',
      points: [
        'Red: stop before the stop line and remain stopped until lawful to proceed (rule 11).',
        'Red + Amber: prepare for move-off, but red prohibition still applies until green (rule 11).',
        'Green: proceed only if safe and without endangering other users (rule 11).',
        'Amber alone: stop unless too close to stop safely when amber first appears (rule 11).'
      ]
    },
    {
      title: 'Arrows, Pedestrians and Temporary Signals',
      points: [
        'Green arrow permits movement in the arrow direction with due care (rule 11).',
        'Pedestrian light states are separately regulated, including mandatory red for pedestrians (rule 12).',
        'Temporary traffic lights are lawful controls in road works and narrowed carriageways (rule 13).'
      ]
    },
    {
      title: 'Approach Discipline for Learners',
      points: [
        'Scan mirrors and crossing space before entering an intersection on green.',
        'Never accelerate to beat amber; anticipate phase changes.',
        'At complex intersections, follow lane arrows and road markings together with light phases.'
      ]
    }
  ],
  sources: [studyResearchSources.trafficSignsRules, studyResearchSources.trafficAct]
};

export const roadLawsResearch = {
  title: 'Research-backed Road Laws Summary',
  subtitle:
    'Key legal duties and offences most relevant to learner drivers, exam readiness and safe daily operation.',
  modules: [
    {
      title: 'Speed, Signs and Control',
      points: [
        'Speed limits are enforceable by class of vehicle and road context (Traffic Act section 42).',
        'Drivers must obey lawful police directions and traffic signs at all times (section 52).',
        'Traffic signs are placed by highway authorities under statutory control (section 70).'
      ]
    },
    {
      title: 'Impaired, Reckless and Careless Driving',
      points: [
        'Driving under influence beyond prescribed limits is a criminal offence with major penalties (section 44).',
        'Reckless/dangerous driving and driving without due care have distinct offences and sanctions (sections 47 and 49).',
        'Public service/commercial drivers face specific alcohol prohibitions while on duty (section 45).'
      ]
    },
    {
      title: 'After a Crash: Mandatory Actions',
      points: [
        'Driver must stop and provide identification details when injury or damage occurs (section 73).',
        'Where details are not exchanged or injury occurs, report to police as soon as reasonably possible and within 24 hours (section 73).',
        'Police may inspect vehicles involved in crashes as part of lawful investigation (section 74).'
      ]
    },
    {
      title: 'Demerit System and Licence Risk',
      points: [
        'Demerit points may be assigned on conviction or payment for specified offences (section 117A).',
        'Accumulated thresholds trigger temporary disqualification periods (section 117A).',
        'Serious repeated violations escalate from fines to licence cancellation/disqualification depending on offence class.'
      ]
    }
  ],
  sources: [studyResearchSources.trafficAct, studyResearchSources.trafficSignsRules]
};

export const safetyTrainingResearch = {
  title: 'Research-backed Safety Training',
  subtitle:
    'Combines evidence-based crash prevention with Kenya\'s current policy and legal post-crash duties.',
  modules: [
    {
      title: 'Why Safety Training Matters',
      points: [
        'WHO estimates about 1.19 million road deaths globally each year, with a major burden in low- and middle-income countries.',
        'Kenya\'s NRSAP highlights high socio-economic loss from crashes and targets major fatality reduction by 2030.',
        'Effective safety training lowers crash risk by improving hazard perception and disciplined driving choices.'
      ]
    },
    {
      title: 'High-impact Protective Behaviors',
      points: [
        'Seat belts reduce occupant fatality risk and should be universal for every trip.',
        'Safe speed selection is the strongest day-to-day control against severe injury outcomes.',
        'Zero tolerance for alcohol/drug-impaired driving is essential for reaction time and judgement.',
        'Defensive spacing and active scanning reduce multi-vehicle collision risk.'
      ]
    },
    {
      title: 'Post-crash Response Framework',
      points: [
        'Secure scene safety first (hazard awareness, safe stopping, warning to approaching traffic).',
        'Call emergency services quickly and communicate exact location and injury profile.',
        'Provide only safe first aid actions within your competence while waiting for responders.',
        'Comply with legal obligations to stop, identify and report within required time limits (Traffic Act section 73).'
      ]
    },
    {
      title: 'Kenya Action Plan Priorities',
      points: [
        'Infrastructure safety and safer speed environments.',
        'Vehicle safety standards and compliance checks.',
        'Targeted enforcement plus road-user education.',
        'Strengthened post-crash care and data-driven monitoring.'
      ]
    }
  ],
  sources: [
    studyResearchSources.whoRoadSafety,
    studyResearchSources.nrsap2024,
    studyResearchSources.trafficAct
  ]
};


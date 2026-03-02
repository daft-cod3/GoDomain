const RESEARCH_SOURCES = [
  {
    id: 'kenya-road-signs-manual',
    title: 'Kenya Design Manual for Roads and Bridges Part 5a - Road Signs (2009)',
    url: 'https://transport.go.ke/sites/default/files/2023-07/Part%205a%20-%20Road%20Signs.pdf'
  },
  {
    id: 'kenya-traffic-signs-rules',
    title: 'Kenya Traffic Signs Rules (Legal Notice 310 of 1974, revised 2022)',
    url: 'https://new.kenyalaw.org/akn/ke/act/ln/1974/310/eng@2022-12-31'
  }
];

const CATEGORY_GUIDANCE = {
  'Regulatory Signs': {
    className: 'Class A - Regulatory',
    legalEffect:
      'Regulatory signs impose mandatory requirements and restrictions that drivers must obey.',
    meaning:
      'These signs control right-of-way, prohibited movements, and mandatory traffic behavior.',
    placement:
      'They are positioned at or immediately before the point where the rule starts, with repeats where needed after major side junctions.',
    action:
      'Comply immediately with the rule shown on the sign before entering the affected section.'
  },
  'Warning Signs': {
    className: 'Class B - Warning',
    legalEffect:
      'Warning signs are hazard alerts; they do not usually create a direct prohibition by themselves.',
    meaning:
      'These signs warn of danger or potential danger ahead and call for extra caution.',
    placement:
      'They are sited in advance of hazards so drivers can see, understand, and react safely.',
    action:
      'Reduce speed, increase observation, and prepare for a defensive maneuver.'
  },
  'Informatory Signs': {
    className: 'Information and Facility Guidance',
    legalEffect:
      'These signs mainly guide and inform road users about services, direction, and road context.',
    meaning:
      'These signs provide route, facility, and area information to support safer decisions.',
    placement:
      'They are placed before decision points and near facilities to allow timely lane and route choices.',
    action:
      'Use the sign information to plan lane position, destination choices, and service stops.'
  }
};

const BASE_PLACEMENT_STANDARD =
  'General siting should account for approach speed and visibility so drivers have enough time to react.';
const CLEARANCE_STANDARD =
  'Typical lateral clearances: about 0.45m from carriageway edge in urban areas and 0.6m in rural areas (higher on high-speed dual carriageways).';
const WARNING_MOUNTING_STANDARD =
  'Typical warning-sign mounting height is 1000-1500mm in rural areas, with higher mounting where spray/footways require it.';

const SPECIFIC_GUIDANCE = {
  'stop-sign': {
    meaning:
      'A full stop is mandatory before proceeding, with right-of-way given to conflicting traffic and pedestrians.',
    placement:
      'Placed as close as practical to the STOP line, typically about 1.5m to 6m in advance; usually on the left and duplicated on the right where emphasis is needed.',
    action:
      'Stop completely, check both directions carefully, and proceed only when the intersection is clear.'
  },
  'give-way': {
    meaning:
      'Drivers on the minor approach must yield to traffic on the major road.',
    placement:
      'Positioned near the associated give-way road marking; left side by default, with right-side duplication on wider or more complex entries.',
    action:
      'Slow down early, yield to conflicting road users, and stop if needed before entering.'
  },
  'no-overtaking': {
    meaning:
      'Overtaking is prohibited across the signed section due to elevated conflict risk.',
    placement:
      'Installed at both ends of the restricted length, facing each approach direction, usually with a plate indicating distance and an END sign at restriction termination.',
    action:
      'Remain in lane, follow safely, and wait for the restriction to end before overtaking.'
  },
  'no-u-turn': {
    meaning:
      'Turning back across the carriageway at this location is prohibited.',
    placement:
      'Typically mounted on the central reservation near the junction where U-turns would otherwise be attempted.',
    action:
      'Continue to the next lawful turning opportunity and avoid median crossover maneuvers.'
  },
  'pedestrian-crossing': {
    meaning:
      'A pedestrian crossing is ahead, often with heightened conflict risk.',
    placement:
      'Used for uncontrolled zebra or other pedestrian crossings where crossing visibility is limited.',
    action:
      'Reduce speed, scan both sides, and be prepared to stop before the crossing.'
  },
  'hospital-ahead': {
    meaning:
      'A hospital facility is ahead or nearby.',
    placement:
      'Can be shown up to about 500m in advance, with another sign in the immediate vicinity facing oncoming traffic.',
    action:
      'Maintain controlled speed and watch for emergency vehicle and pedestrian movements.'
  },
  'slippery-road': {
    meaning:
      'Road skid risk is above normal due to surface or environmental conditions.',
    placement:
      'Placed before sections where loss of traction risk is known to be elevated.',
    action:
      'Reduce speed, avoid abrupt steering/braking, and increase headway.'
  },
  'road-works': {
    meaning:
      'Roadworks operations are ahead and temporary controls may apply.',
    placement:
      'Displayed in advance of all roadworks and intended to be the first warning sign encountered.',
    action:
      'Slow down early, follow temporary signs/workers, and expect lane shifts or stops.'
  },
  roundabout: {
    meaning:
      'A roundabout or mini-roundabout is ahead.',
    placement:
      'Placed in advance of roundabout entries; on dual carriageways, typically reinforced with signs on both the central reserve and verge.',
    action:
      'Approach at controlled speed, yield as required, and choose lane/exit early.'
  },
  'speed-limit-50': {
    meaning:
      'Maximum permitted speed is 50 km/h in this section.',
    placement:
      'Speed-limit signs are placed where limits apply/change, generally on both sides of the road; repeaters may be used on long stretches.',
    action:
      'Adjust speed immediately to at or below the posted maximum.'
  }
};

function getRegulatorySubcategory(imagePath = '') {
  if (imagePath.includes('/roadSign/regulatory/priority/')) return 'priority';
  if (imagePath.includes('/roadSign/regulatory/proh/')) return 'prohibitory';
  return '';
}

function inferSpecificGuidance(sign, slug) {
  const key = `${slug} ${sign?.title || ''}`.toLowerCase();

  if (key.includes('no-entry') || key.includes('no entry')) {
    return {
      meaning: 'Entry in the indicated direction or for the shown class of user is prohibited.',
      placement:
        'Commonly used at one-way entries and restricted access points, often reinforced where side-road entries can cause confusion.',
      action: 'Do not enter; choose a permitted route.'
    };
  }

  if (key.includes('speed') || key.includes('limit')) {
    return {
      meaning:
        'The sign sets a legal speed restriction (maximum or minimum depending on symbol).',
      placement:
        'Installed at the start of the regulated zone and repeated on longer sections where reminder signs are needed.',
      action: 'Match your speed to the displayed restriction and road conditions.'
    };
  }

  if (key.includes('turn') && key.includes('no')) {
    return {
      meaning: 'The indicated turning movement is prohibited at this location.',
      placement:
        'Mounted on approach to the affected junction or movement point, with duplication where visibility or complexity demands.',
      action:
        'Keep to permitted movements and continue to a legal turn point.'
    };
  }

  if (key.includes('weight') || key.includes('height') || key.includes('width') || key.includes('length') || key.includes('axle')) {
    return {
      meaning:
        'Vehicles above the posted dimensional or load threshold are not permitted.',
      placement:
        'Placed before constrained structures or restricted corridors, with enough distance to reroute oversized vehicles safely.',
      action: 'If your vehicle exceeds the limit, do not proceed.'
    };
  }

  if (key.includes('parking') || key.includes('no stopping') || key.includes('no parking')) {
    return {
      meaning:
        'The sign defines where parking/stopping is allowed, restricted, or prohibited.',
      placement:
        'Applied along kerbside sections where traffic flow, sight distance, or access control requires parking management.',
      action:
        'Park only where permitted and observe time/vehicle-class conditions on supplementary plates.'
    };
  }

  if (key.includes('rail') || key.includes('level-crossing') || key.includes('train')) {
    return {
      meaning: 'A railway level crossing is ahead.',
      placement:
        'Used in advance of at-grade rail intersections, with additional controls depending on crossing type (lights, bells, barriers).',
      action:
        'Reduce speed, follow crossing controls, and never enter unless fully clear.'
    };
  }

  if (key.includes('children') || key.includes('school')) {
    return {
      meaning:
        'Children are likely to cross or gather near the roadway ahead.',
      placement:
        'Placed near schools and child activity zones where unpredictable pedestrian movement is expected.',
      action: 'Reduce speed significantly and prepare to stop at short notice.'
    };
  }

  if (key.includes('pedestrian')) {
    return {
      meaning: 'Pedestrian activity or crossings are expected ahead.',
      placement:
        'Used where pedestrian crossing demand is high or visibility of crossing points is limited.',
      action: 'Approach cautiously and yield as required.'
    };
  }

  if (key.includes('cattle') || key.includes('animal') || key.includes('wild')) {
    return {
      meaning: 'Animal crossings are likely along this section.',
      placement:
        'Installed in known livestock/wildlife crossing corridors and open-range areas.',
      action:
        'Reduce speed, keep a long following gap, and expect sudden crossings.'
    };
  }

  if (key.includes('slippery')) {
    return {
      meaning: 'Higher-than-normal skid risk exists ahead.',
      placement:
        'Used at sections where surface or weather conditions increase loss-of-control risk.',
      action: 'Slow down, keep smooth inputs, and avoid harsh braking.'
    };
  }

  if (key.includes('roundabout')) {
    return SPECIFIC_GUIDANCE.roundabout;
  }

  if (key.includes('hospital')) {
    return SPECIFIC_GUIDANCE['hospital-ahead'];
  }

  if (key.includes('road work') || key.includes('roadwork') || key.includes('road-works')) {
    return SPECIFIC_GUIDANCE['road-works'];
  }

  if (key.includes('stop')) {
    return SPECIFIC_GUIDANCE['stop-sign'];
  }

  if (key.includes('give-way') || key.includes('yield')) {
    return SPECIFIC_GUIDANCE['give-way'];
  }

  return null;
}

export function buildResearchProfile(sign, slug) {
  const categoryProfile = CATEGORY_GUIDANCE[sign?.category] || CATEGORY_GUIDANCE['Informatory Signs'];
  const direct = SPECIFIC_GUIDANCE[slug] || inferSpecificGuidance(sign, slug);
  const subtype = getRegulatorySubcategory(sign?.image || '');

  let className = categoryProfile.className;
  if (sign?.category === 'Regulatory Signs' && subtype === 'priority') {
    className = `${className} (Priority)`;
  }
  if (sign?.category === 'Regulatory Signs' && subtype === 'prohibitory') {
    className = `${className} (Prohibitory)`;
  }

  const standards = [BASE_PLACEMENT_STANDARD, CLEARANCE_STANDARD];
  if (sign?.category === 'Warning Signs') {
    standards.push(WARNING_MOUNTING_STANDARD);
  }

  return {
    className,
    legalEffect: categoryProfile.legalEffect,
    officialMeaning: direct?.meaning || categoryProfile.meaning,
    typicalPlacement: direct?.placement || categoryProfile.placement,
    driverAction: direct?.action || categoryProfile.action,
    placementStandards: standards,
    sources: RESEARCH_SOURCES
  };
}


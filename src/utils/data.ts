
const robotsData = [
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Morpheus', desc: 'Ein Roboter ist eine technische Apparatur, die üblicherweise dazu dient, dem Menschen häufig wiederkehrende mechanische Arbeit abzunehmen. Roboter können sowohl ortsfeste als auch mobile Maschinen sein und werden von Computerprogrammen gesteuert. Die Wortbedeutung hat sich im Laufe der Zeit gewandelt.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 28, success: 227 }, name: 'Trinity', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'running', startDate: '08.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 1, success: 62 }, name: 'Neo', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Dozer', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'failed', endDate: '08.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Nebuchadnezzar', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 56, success: 457 }, name: 'Agent Smith 1', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'success', endDate: '08.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Cypher', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Tank', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'scheduled', startDate: '10.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Oracle', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Agent Jones', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Agent Brown', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Morpheus', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Trinity', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'running', startDate: '08.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Neo', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Dozer', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'failed', endDate: '08.09.2021 12:15', reported: true },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Nebuchadnezzar', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Agent Smith', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'success', endDate: '08.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Cypher', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Tank', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'scheduled', startDate: '10.09.2021 12:15' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Oracle', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Agent Jones', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' },
    { id: '', user: null, img: '', selected: false, stats: { failed: 12, success: 114 }, name: 'Agent Brown', desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.', status: 'idle' }
];

const employees = [
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Cody Fisher' },
    { id: '', img: '', selected: false, name: 'Marvin McKinney' },
    { id: '', img: '', selected: false, name: 'Devon Lane' },
    { id: '', img: '', selected: false, name: 'Courtney Henry' },
    { id: '', img: '', selected: false, name: 'Leslie Alexander' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' },
    { id: '', img: '', selected: false, name: 'Max Mustermann' }
];

export { robotsData, employees };
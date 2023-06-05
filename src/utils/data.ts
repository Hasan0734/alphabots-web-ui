
const robotsData = [
    {
        id: 1,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Morpheus',
        desc: 'Ein Roboter ist eine technische Apparatur, die üblicherweise dazu dient, dem Menschen häufig wiederkehrende mechanische Arbeit abzunehmen. Roboter können sowohl ortsfeste als auch mobile Maschinen sein und werden von Computerprogrammen gesteuert. Die Wortbedeutung hat sich im Laufe der Zeit gewandelt.',
        status: 'idle'
    },

    {
        id: 2,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 28, success: 227 },
        name: 'Trinity',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'running',
        startDate: '08.09.2021 12:15'
    },
    {
        id: 3,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 1, success: 62 },
        name: 'Neo',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 4,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Dozer',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'failed',
        endDate: '08.09.2021 12:15'
    },
    {
        id: 5,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Nebuchadnezzar',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },

    {
        id: 6,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 56, success: 457 },
        name: 'Agent Smith 1',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'success',
        endDate: '08.09.2021 12:15'
    },

    {
        id: 7,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Cypher',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 8,
        user: null,
        img: '',
        selected: false,
        tats: { failed: 12, success: 114 },
        name: 'Tank',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'scheduled',
        startDate: '10.09.2021 12:15'
    },
    {
        id: 9,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Oracle',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 10,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Agent Jones',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 11,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Agent Brown',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 12,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Morpheus',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 13,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Trinity',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'running',
        startDate: '08.09.2021 12:15'
    },
    {
        id: 14,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Neo',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 15,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Dozer',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'failed',
        endDate: '08.09.2021 12:15',
        reported: true
    },
    {
        id: 16,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Nebuchadnezzar',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 17,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Agent Smith',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'success',
        endDate: '08.09.2021 12:15'
    },
    {
        id: 18,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Cypher',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },

    {
        id: 19,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Tank',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'scheduled',
        startDate: '10.09.2021 12:15'
    },

    {
        id: 20,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Oracle',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 21,
        user: null,
        img: '',
        selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Agent Jones',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    },
    {
        id: 22,
        user: null,
        img: '', selected: false,
        stats: { failed: 12, success: 114 },
        name: 'Agent Brown',
        desc: 'Dieser Robot erstellt einen Eintrag X in der Mappe XY.',
        status: 'idle'
    }
];

const employees = [
    {
        id: 1,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 2,
        img: '',
        selected: false,
        name: 'Cody Fisher'
    },
    {
        id: 3,
        img: '',
        selected: false,
        name: 'Marvin McKinney'
    },
    {
        id: 4,
        img: '',
        selected: false,
        name: 'Devon Lane'
    },
    {
        id: 5,
        img: '',
        selected: false,
        name: 'Courtney Henry'
    },
    {
        id: 6,
        img: '',
        selected: false,
        name: 'Leslie Alexander'
    },
    {
        id: 7,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 8,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 9,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 10,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 11,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 12,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 13,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 14,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 15,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    },
    {
        id: 16,
        img: '',
        selected: false,
        name: 'Max Mustermann'
    }
];

export { robotsData, employees };
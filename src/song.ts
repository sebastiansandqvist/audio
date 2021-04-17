export interface Note {
  x: number;
  pitch: string;
  duration: number;
}

export interface Song {
  id: string;
  title: string;
  bpm: number;
  instrumentId: string;
  notes: Note[];
}

function fixOffset(notes: Note[]): Note[] {
  let offset = notes[0].x || 0;
  for (const note of notes) {
    offset = Math.min(offset, note.x);
  }
  return notes.map((note) => ({
    pitch: note.pitch,
    x: note.x - offset,
    duration: note.duration
  }));
}

export const songData: { [key: string]: Song } = {
  'New Song': {
    id: 'New Song',
    title: '',
    bpm: 120,
    instrumentId: 'Piano',
    notes: []
  },
  'Carol': {
    id: 'Carol',
    title: 'Carol of the Bells',
    bpm: 90,
    instrumentId: 'Piano',
    notes: [{'pitch':'Bb4','x':0,'duration':2},{'pitch':'A4','x':2,'duration':1},{'pitch':'Bb4','x':3,'duration':1},{'pitch':'G4','x':4,'duration':2},{'pitch':'Bb4','x':6,'duration':2},{'pitch':'F4','x':6,'duration':6},{'pitch':'A4','x':8,'duration':1},{'pitch':'Bb4','x':9,'duration':1},{'pitch':'G4','x':10,'duration':2},{'pitch':'Bb4','x':12,'duration':2},{'pitch':'D#4','x':12,'duration':6},{'pitch':'A4','x':14,'duration':1},{'pitch':'Bb4','x':15,'duration':1},{'pitch':'G4','x':16,'duration':2},{'pitch':'Bb4','x':18,'duration':2},{'pitch':'D4','x':18,'duration':6},{'pitch':'A4','x':20,'duration':1},{'pitch':'Bb4','x':21,'duration':1},{'pitch':'G4','x':22,'duration':2},{'pitch':'Bb4','x':24,'duration':2},{'pitch':'D#4','x':24,'duration':6},{'pitch':'A4','x':26,'duration':1},{'pitch':'Bb4','x':27,'duration':1},{'pitch':'G4','x':28,'duration':2},{'pitch':'Bb4','x':30,'duration':2},{'pitch':'D4','x':30,'duration':6},{'pitch':'F4','x':30,'duration':6},{'pitch':'A4','x':32,'duration':1},{'pitch':'Bb4','x':33,'duration':1},{'pitch':'G4','x':34,'duration':2},{'pitch':'Bb4','x':36,'duration':2},{'pitch':'C4','x':36,'duration':6},{'pitch':'D#4','x':36,'duration':6},{'pitch':'A4','x':38,'duration':1},{'pitch':'Bb4','x':39,'duration':1},{'pitch':'G4','x':40,'duration':2},{'pitch':'Bb4','x':42,'duration':2},{'pitch':'G3','x':42,'duration':6},{'pitch':'D4','x':42,'duration':6},{'pitch':'A4','x':44,'duration':1},{'pitch':'Bb4','x':45,'duration':1},{'pitch':'G4','x':46,'duration':2},{'pitch':'G4','x':48,'duration':2},{'pitch':'Bb4','x':48,'duration':2},{'pitch':'D#3','x':48,'duration':6},{'pitch':'C4','x':48,'duration':6},{'pitch':'A4','x':50,'duration':1},{'pitch':'Bb4','x':51,'duration':1},{'pitch':'G4','x':52,'duration':2},{'pitch':'G4','x':54,'duration':2},{'pitch':'Bb4','x':54,'duration':2},{'pitch':'G3','x':54,'duration':6},{'pitch':'D4','x':54,'duration':6},{'pitch':'A4','x':56,'duration':1},{'pitch':'Bb4','x':57,'duration':1},{'pitch':'G4','x':58,'duration':2},{'pitch':'G4','x':60,'duration':2},{'pitch':'Bb4','x':60,'duration':2},{'pitch':'D#3','x':60,'duration':6},{'pitch':'C4','x':60,'duration':6},{'pitch':'A4','x':62,'duration':1},{'pitch':'Bb4','x':63,'duration':1},{'pitch':'G4','x':64,'duration':2},{'pitch':'G4','x':66,'duration':2},{'pitch':'Bb4','x':66,'duration':2},{'pitch':'G3','x':66,'duration':6},{'pitch':'D4','x':66,'duration':6},{'pitch':'A4','x':68,'duration':1},{'pitch':'Bb4','x':69,'duration':1},{'pitch':'G4','x':70,'duration':2},{'pitch':'Bb4','x':72,'duration':2},{'pitch':'D5','x':72,'duration':2},{'pitch':'G3','x':72,'duration':6},{'pitch':'D4','x':72,'duration':6},{'pitch':'C5','x':74,'duration':1},{'pitch':'D5','x':75,'duration':1},{'pitch':'G4','x':76,'duration':2},{'pitch':'Bb4','x':76,'duration':2},{'pitch':'Bb4','x':78,'duration':2},{'pitch':'D5','x':78,'duration':2},{'pitch':'G3','x':78,'duration':6},{'pitch':'E4','x':78,'duration':6},{'pitch':'C5','x':80,'duration':1},{'pitch':'D5','x':81,'duration':1},{'pitch':'G4','x':82,'duration':2},{'pitch':'Bb4','x':82,'duration':2},{'pitch':'Bb4','x':84,'duration':2},{'pitch':'D5','x':84,'duration':2},{'pitch':'G3','x':84,'duration':6},{'pitch':'F4','x':84,'duration':6},{'pitch':'C5','x':86,'duration':1},{'pitch':'D5','x':87,'duration':1},{'pitch':'G4','x':88,'duration':2},{'pitch':'Bb4','x':88,'duration':2},{'pitch':'Bb4','x':90,'duration':2},{'pitch':'D5','x':90,'duration':2},{'pitch':'G3','x':90,'duration':2},{'pitch':'E4','x':90,'duration':2},{'pitch':'C5','x':92,'duration':1},{'pitch':'G3','x':92,'duration':2},{'pitch':'D#4','x':92,'duration':2},{'pitch':'D5','x':93,'duration':1},{'pitch':'G4','x':94,'duration':2},{'pitch':'Bb4','x':94,'duration':2},{'pitch':'G3','x':94,'duration':2},{'pitch':'D4','x':94,'duration':2},{'pitch':'G4','x':96,'duration':2},{'pitch':'Bb4','x':96,'duration':2},{'pitch':'D5','x':96,'duration':2},{'pitch':'G5','x':96,'duration':2},{'pitch':'Bb3','x':96,'duration':6},{'pitch':'D4','x':96,'duration':6},{'pitch':'G4','x':98,'duration':1},{'pitch':'G5','x':98,'duration':1},{'pitch':'G4','x':99,'duration':1},{'pitch':'G5','x':99,'duration':1},{'pitch':'F4','x':100,'duration':1},{'pitch':'F5','x':100,'duration':1},{'pitch':'D#4','x':101,'duration':1},{'pitch':'D#5','x':101,'duration':1},{'pitch':'D5','x':102,'duration':2},{'pitch':'D4','x':102,'duration':6},{'pitch':'G4','x':102,'duration':6},{'pitch':'Bb3','x':102,'duration':6},{'pitch':'D5','x':104,'duration':1},{'pitch':'D5','x':105,'duration':1},{'pitch':'C5','x':106,'duration':1},{'pitch':'Bb4','x':107,'duration':1},{'pitch':'C5','x':108,'duration':2},{'pitch':'D#4','x':108,'duration':6},{'pitch':'G4','x':108,'duration':6},{'pitch':'Bb3','x':108,'duration':6},{'pitch':'C5','x':110,'duration':1},{'pitch':'C5','x':111,'duration':1},{'pitch':'D5','x':112,'duration':1},{'pitch':'C5','x':113,'duration':1},{'pitch':'Bb4','x':114,'duration':2},{'pitch':'D4','x':114,'duration':6},{'pitch':'Bb3','x':114,'duration':6},{'pitch':'A4','x':116,'duration':1},{'pitch':'Bb4','x':117,'duration':1},{'pitch':'G4','x':118,'duration':2},{'pitch':'D4','x':120,'duration':1},{'pitch':'D3','x':120,'duration':6},{'pitch':'F#3','x':120,'duration':6},{'pitch':'E4','x':121,'duration':1},{'pitch':'F#4','x':122,'duration':1},{'pitch':'G4','x':123,'duration':1},{'pitch':'A4','x':124,'duration':1},{'pitch':'Bb4','x':125,'duration':1},{'pitch':'C5','x':126,'duration':1},{'pitch':'E4','x':126,'duration':2},{'pitch':'D3','x':126,'duration':4},{'pitch':'A3','x':126,'duration':4},{'pitch':'D5','x':127,'duration':1},{'pitch':'C5','x':128,'duration':2},{'pitch':'F#4','x':128,'duration':2},{'pitch':'Bb4','x':130,'duration':2},{'pitch':'G4','x':130,'duration':2},{'pitch':'D3','x':130,'duration':2},{'pitch':'G3','x':130,'duration':2},{'pitch':'D4','x':132,'duration':1},{'pitch':'D3','x':132,'duration':6},{'pitch':'F#3','x':132,'duration':6},{'pitch':'E4','x':133,'duration':1},{'pitch':'F#4','x':134,'duration':1},{'pitch':'G4','x':135,'duration':1},{'pitch':'A4','x':136,'duration':1},{'pitch':'Bb4','x':137,'duration':1},{'pitch':'C5','x':138,'duration':1},{'pitch':'E4','x':138,'duration':2},{'pitch':'D3','x':138,'duration':4},{'pitch':'A3','x':138,'duration':4},{'pitch':'D5','x':139,'duration':1},{'pitch':'C5','x':140,'duration':2},{'pitch':'F#4','x':140,'duration':2},{'pitch':'Bb4','x':142,'duration':2},{'pitch':'G4','x':142,'duration':2},{'pitch':'D3','x':142,'duration':2},{'pitch':'G3','x':142,'duration':2},{'pitch':'Bb4','x':144,'duration':2},{'pitch':'D4','x':144,'duration':6},{'pitch':'F3','x':144,'duration':6},{'pitch':'G3','x':144,'duration':6},{'pitch':'A4','x':146,'duration':1},{'pitch':'Bb4','x':147,'duration':1},{'pitch':'G4','x':148,'duration':2},{'pitch':'Bb4','x':150,'duration':2},{'pitch':'C4','x':150,'duration':6},{'pitch':'D#3','x':150,'duration':6},{'pitch':'G3','x':150,'duration':6},{'pitch':'A4','x':152,'duration':1},{'pitch':'Bb4','x':153,'duration':1},{'pitch':'G4','x':154,'duration':2},{'pitch':'Bb4','x':156,'duration':2},{'pitch':'F4','x':156,'duration':6},{'pitch':'D3','x':156,'duration':6},{'pitch':'G3','x':156,'duration':6},{'pitch':'A4','x':158,'duration':1},{'pitch':'Bb4','x':159,'duration':1},{'pitch':'G4','x':160,'duration':2},{'pitch':'Bb4','x':162,'duration':2},{'pitch':'D#4','x':162,'duration':6},{'pitch':'C3','x':162,'duration':6},{'pitch':'G3','x':162,'duration':6},{'pitch':'A4','x':164,'duration':1},{'pitch':'Bb4','x':165,'duration':1},{'pitch':'G4','x':166,'duration':2},{'pitch':'Bb4','x':168,'duration':2},{'pitch':'D4','x':168,'duration':6},{'pitch':'G2','x':168,'duration':30},{'pitch':'G3','x':168,'duration':30},{'pitch':'A4','x':170,'duration':1},{'pitch':'Bb4','x':171,'duration':1},{'pitch':'G4','x':172,'duration':2},{'pitch':'Bb4','x':174,'duration':2},{'pitch':'D4','x':174,'duration':6},{'pitch':'A4','x':176,'duration':1},{'pitch':'Bb4','x':177,'duration':1},{'pitch':'G4','x':178,'duration':2},{'pitch':'Bb4','x':180,'duration':2},{'pitch':'A4','x':182,'duration':1},{'pitch':'Bb4','x':183,'duration':1},{'pitch':'G4','x':184,'duration':2},{'pitch':'Bb4','x':186,'duration':2},{'pitch':'A4','x':188,'duration':1},{'pitch':'Bb4','x':189,'duration':1},{'pitch':'G4','x':190,'duration':8}]
  },
  'Pirate': {
    id: 'Pirate',
    title: 'He\'s a Pirate',
    bpm: 100,
    instrumentId: 'Piano',
    notes: [{'pitch':'A3','x':0,'duration':1},{'pitch':'C4','x':1,'duration':1},{'pitch':'D4','x':2,'duration':2},{'pitch':'D3','x':2,'duration':6},{'pitch':'D4','x':4,'duration':2},{'pitch':'D4','x':6,'duration':1},{'pitch':'E4','x':7,'duration':1},{'pitch':'F4','x':8,'duration':2},{'pitch':'Bb2','x':8,'duration':6},{'pitch':'F4','x':10,'duration':2},{'pitch':'F4','x':12,'duration':1},{'pitch':'G4','x':13,'duration':1},{'pitch':'E4','x':14,'duration':2},{'pitch':'A2','x':14,'duration':6},{'pitch':'E4','x':16,'duration':2},{'pitch':'D4','x':18,'duration':1},{'pitch':'C4','x':19,'duration':1},{'pitch':'C4','x':20,'duration':1},{'pitch':'C3','x':20,'duration':1},{'pitch':'D4','x':21,'duration':2},{'pitch':'D3','x':21,'duration':2},{'pitch':'A3','x':24,'duration':1},{'pitch':'C4','x':25,'duration':1},{'pitch':'D4','x':26,'duration':2},{'pitch':'Bb2','x':26,'duration':6},{'pitch':'D4','x':28,'duration':2},{'pitch':'D4','x':30,'duration':1},{'pitch':'E4','x':31,'duration':1},{'pitch':'F4','x':32,'duration':2},{'pitch':'F2','x':32,'duration':6},{'pitch':'F4','x':34,'duration':2},{'pitch':'F4','x':36,'duration':1},{'pitch':'G4','x':37,'duration':1},{'pitch':'E4','x':38,'duration':2},{'pitch':'C3','x':38,'duration':4},{'pitch':'E4','x':40,'duration':2},{'pitch':'D4','x':42,'duration':1},{'pitch':'A2','x':42,'duration':2},{'pitch':'C4','x':43,'duration':1},{'pitch':'D4','x':44,'duration':2},{'pitch':'D3','x':44,'duration':6},{'pitch':'A3','x':48,'duration':1},{'pitch':'C4','x':49,'duration':1},{'pitch':'D4','x':50,'duration':2},{'pitch':'D3','x':50,'duration':6},{'pitch':'D4','x':52,'duration':2},{'pitch':'D4','x':54,'duration':1},{'pitch':'F4','x':55,'duration':1},{'pitch':'G4','x':56,'duration':2},{'pitch':'Bb2','x':56,'duration':6},{'pitch':'G4','x':58,'duration':2},{'pitch':'G4','x':60,'duration':1},{'pitch':'A4','x':61,'duration':1},{'pitch':'Bb4','x':62,'duration':2},{'pitch':'G2','x':62,'duration':6},{'pitch':'Bb4','x':64,'duration':2},{'pitch':'A4','x':66,'duration':1},{'pitch':'G4','x':67,'duration':1},{'pitch':'A4','x':68,'duration':1},{'pitch':'D3','x':68,'duration':6},{'pitch':'D4','x':69,'duration':2},{'pitch':'D4','x':72,'duration':1},{'pitch':'E4','x':73,'duration':1},{'pitch':'F4','x':74,'duration':2},{'pitch':'Bb2','x':74,'duration':6},{'pitch':'F4','x':76,'duration':2},{'pitch':'G4','x':78,'duration':2},{'pitch':'A4','x':80,'duration':1},{'pitch':'D3','x':80,'duration':6},{'pitch':'D4','x':81,'duration':2},{'pitch':'D4','x':84,'duration':1},{'pitch':'F4','x':85,'duration':1},{'pitch':'E4','x':86,'duration':2},{'pitch':'A2','x':86,'duration':6},{'pitch':'E4','x':88,'duration':2},{'pitch':'F4','x':90,'duration':1},{'pitch':'D4','x':91,'duration':1},{'pitch':'E4','x':92,'duration':2},{'pitch':'A2','x':92,'duration':6}]
  },
  'Mario': {
    id: 'Mario',
    title: 'Theme from Super Mario',
    bpm: 120,
    instrumentId: 'Synth Lead',
    notes: fixOffset([{'pitch':'G5','x':9,'duration':1},{'pitch':'E5','x':1,'duration':1},{'pitch':'E5','x':2,'duration':1},{'pitch':'E5','x':4,'duration':1},{'pitch':'E5','x':7,'duration':1},{'pitch':'C5','x':6,'duration':1},{'pitch':'C5','x':17,'duration':1},{'pitch':'B4','x':9,'duration':1},{'pitch':'B4','x':28,'duration':1},{'pitch':'Bb4','x':30,'duration':1},{'pitch':'A4','x':26,'duration':1},{'pitch':'A4','x':31,'duration':1},{'pitch':'G4','x':9,'duration':1},{'pitch':'G4','x':13,'duration':1},{'pitch':'G4','x':20,'duration':1},{'pitch':'G4','x':33,'duration':2},{'pitch':'F#4','x':1,'duration':1},{'pitch':'F#4','x':2,'duration':1},{'pitch':'F#4','x':4,'duration':1},{'pitch':'F#4','x':6,'duration':1},{'pitch':'F#4','x':7,'duration':1},{'pitch':'E4','x':17,'duration':1},{'pitch':'E4','x':23,'duration':1},{'pitch':'D4','x':28,'duration':1},{'pitch':'C#4','x':30,'duration':1},{'pitch':'C4','x':20,'duration':1},{'pitch':'C4','x':26,'duration':1},{'pitch':'C4','x':31,'duration':1},{'pitch':'C4','x':33,'duration':2},{'pitch':'G3','x':13,'duration':1},{'pitch':'G3','x':17,'duration':1},{'pitch':'G3','x':23,'duration':1},{'pitch':'G3','x':28,'duration':1},{'pitch':'F#3','x':30,'duration':1},{'pitch':'F3','x':26,'duration':1},{'pitch':'F3','x':31,'duration':1},{'pitch':'E3','x':20,'duration':1},{'pitch':'E3','x':33,'duration':2},{'pitch':'D3','x':1,'duration':1},{'pitch':'D3','x':2,'duration':1},{'pitch':'D3','x':4,'duration':1},{'pitch':'D3','x':6,'duration':1},{'pitch':'D3','x':7,'duration':1},{'pitch':'C#3','x':23,'duration':1}])
  },
  'Twinkle': {
    id: 'Twinkle',
    title: 'Twinkle Twinkle Little Star',
    bpm: 80,
    instrumentId: 'Piano',
    notes: fixOffset([{'pitch':'A4','x':5,'duration':1},{'pitch':'A4','x':6,'duration':1},{'pitch':'A4','x':37,'duration':1},{'pitch':'A4','x':38,'duration':1},{'pitch':'G4','x':3,'duration':1},{'pitch':'G4','x':4,'duration':1},{'pitch':'G4','x':7,'duration':2},{'pitch':'G4','x':17,'duration':1},{'pitch':'G4','x':18,'duration':1},{'pitch':'G4','x':25,'duration':1},{'pitch':'G4','x':26,'duration':1},{'pitch':'G4','x':35,'duration':1},{'pitch':'G4','x':36,'duration':1},{'pitch':'G4','x':39,'duration':2},{'pitch':'F4','x':9,'duration':1},{'pitch':'F4','x':10,'duration':1},{'pitch':'F4','x':19,'duration':1},{'pitch':'F4','x':20,'duration':1},{'pitch':'F4','x':27,'duration':1},{'pitch':'F4','x':28,'duration':1},{'pitch':'F4','x':41,'duration':1},{'pitch':'F4','x':42,'duration':1},{'pitch':'E4','x':11,'duration':1},{'pitch':'E4','x':12,'duration':1},{'pitch':'E4','x':21,'duration':1},{'pitch':'E4','x':22,'duration':1},{'pitch':'E4','x':29,'duration':1},{'pitch':'E4','x':30,'duration':1},{'pitch':'E4','x':43,'duration':1},{'pitch':'E4','x':44,'duration':1},{'pitch':'D4','x':13,'duration':1},{'pitch':'D4','x':14,'duration':1},{'pitch':'D4','x':23,'duration':2},{'pitch':'D4','x':31,'duration':2},{'pitch':'D4','x':45,'duration':1},{'pitch':'D4','x':46,'duration':1},{'pitch':'C4','x':1,'duration':1},{'pitch':'C4','x':2,'duration':1},{'pitch':'C4','x':15,'duration':2},{'pitch':'C4','x':33,'duration':1},{'pitch':'C4','x':34,'duration':1},{'pitch':'C4','x':47,'duration':2}])
  }
};

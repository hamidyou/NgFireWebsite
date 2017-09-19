import {Lesson} from '../../lesson';

export const IntervalLessonOneInfo: Lesson[] = [
  {
    index: 0,
    image: '../../assets/img/Intervals/melodicharmonic.gif',
    text: [
      {
        line: 'An interval is the distance between two notes.'
      },
      {
        line: 'There are 2 types of intervals: melodic and harmonic.'
      },
      {
        line: 'As you can see in the image above, the difference is that melodic intervals occur when two notes are sounded\
            separately, whereas harmonic intervals sound at the same time.'
      },
      {
        line: 'Also, all intervals contain two components: quantity and quality.'
      }
    ],
    audio: ''
  },
  {
    index: 1,
    image: '../../assets/img/Intervals/GenericIntervals.gif',
    text: [
      {
        line: 'The quantity of an interval is found by counting the lines and spaces between the two notes (including)\
            the lines of spaces that the notes are on.'
      },
      {
        line: 'When an interval is identified only by a quantity, it is called a \'generic interval\'.'
      },
      {
        line: 'The image above shows examples of all the generic intervals less than or equal to an octave (8th).'
      }
    ],
    audio: ''
  },
  {
    index: 2,
    image: '../../assets/img/KeySignatures/KeySignatureReference.gif',
    text: [
      {
        line: 'Once you identify the quantity of an interval, you can then continue to figure out the quality.'
      },
      {
        line: 'First, if you have a melodic interval, stack the notes so that it becomes a harmonic interval.'
      },
      {
        line: 'Once you have a harmonic interval, determine whether the TOP note is in the key (part of the major scale) of the bottom note.'
      },
      {
        line: 'WARNING: BEFORE YOU CONTINUE, YOU MUST KNOW YOUR MAJOR KEY SIGNATURES!'
      }
    ],
    audio: ''
  },
  {
    index: 3,
    image: '../../assets/img/Intervals/PMIntervals.gif',
    text: [
      {
        line: 'If the TOP note is in the key of the bottom note, then the quality is either Perfect or Major.'
      },
      {
        line: 'If the quantity of the interval is a 1st (Unison), 4th, 5th or 8th (Octave) then the quality is Perfect (P).'
      },
      {
        line: 'If the quantity is a 2nd, 3rd, 6th or 7th then the quality is Major (M).'
      },
      {
        line: 'The image above can be used as a reference for all Perfect and Major intervals from a unison through an octave.'
      }
    ],
    audio: ''
  },
  {
    index: 4,
    image: '../../assets/img/Intervals/Ma6/bassDb3Ma6.gif',
    text: [
      {
        line: 'Let\'s look at the interval above as an example.'
      },
      {
        line: 'Step 1: Determine the generic interval (quantity): 6th'
      },
      {
        line: 'Step 2: Determine the major key signature of the BOTTOM note: Db. Bb-Eb-Ab-Db-Gb. That means that those notes plus F-natural and\
            C-natural are in the key of Db.'
      },
      {
        line: 'Step 3: Determine if the top note is one of the notes in the key of the bottom note: Yes. Therefore, the interval shown is a Major 6th.'
      }
    ],
    audio: ''
  },
  {
    index: 5,
    image: '../../assets/img/Intervals/Ma6/bassDsharp3Ma6.gif',
    text: [
      {
        line: 'Sometimes the bottom note of an interval is a note that is NOT the tonic of a major key. Let\'s look at the interval above as an example.'
      },
      {
        line: 'Step 1: Determine the generic interval (quantity): 6th'
      },
      {
        line: 'Step 2: Determine the key signature for D# Major. IT DOESN\'T EXIST.'
      },
      {
        line: 'When this happens, we have to change the notes so that the bottom note has a Major Key Signature.'
      },
      {
        line: 'Since intervals are distances, if I raise or lower both notes\
            by the same amount, the interval is still the same. So, let\'s look at this interval as though it were D3 up to B3.'
      },
      {
        line: 'Click Next to continue.'
      }
    ],
    audio: ''
  },
  {
    index: 6,
    image: '../../assets/img/Intervals/Ma6/bassD3Ma6.gif',
    text: [
      {
        line: 'Now that we have changed the notes, we can return to Step 2.'
      },
      {
        line: 'Step 2: Determine the key signature for D Major: F#-C#. That means that those notes plus G, D, A, E & B natural\
            are in the key of D.'
      },
      {
        line: 'Step 3: Determine if the top note is one of the notes in the key of the bottom note: Yes.'
      },
      {
        line: 'Therefore, the interval shown is a Major 6th. And if D up to B is a M6, then D# up to B# is also a M6.'
      }
    ],
    audio: ''
  },
  {
    index: 7,
    image: '../../assets/img/Intervals/Ma6/bassD3Ma6.gif',
    text: [
      {
        line: 'End of Interval Lesson #1.'
      },
      {
        line: 'Please take and master the Perfect & Major Interval Identification Quiz\
            prior to continuing on to Interval Lesson #2.'
      }
    ],
    audio: ''
  }
];

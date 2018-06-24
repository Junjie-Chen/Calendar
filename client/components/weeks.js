import React from 'react';
import {Dates} from '../components';

const weeks = [
  {
    id: 1,
    dates: [
      {
        id: 1,
        number: 27
      },
      {
        id: 2,
        number: 28
      },
      {
        id: 3,
        number: 29
      },
      {
        id: 4,
        number: 30
      },
      {
        id: 5,
        number: 31
      },
      {
        id: 6,
        number: 1
      },
      {
        id: 7,
        number: 2
      }
    ]
  },
  {
    id: 2,
    dates: [
      {
        id: 8,
        number: 3
      },
      {
        id: 9,
        number: 4
      },
      {
        id: 10,
        number: 5
      },
      {
        id: 11,
        number: 6
      },
      {
        id: 12,
        number: 7
      },
      {
        id: 13,
        number: 8
      },
      {
        id: 14,
        number: 9
      }
    ]
  },
  {
    id: 3,
    dates: [
      {
        id: 15,
        number: 10
      },
      {
        id: 16,
        number: 11
      },
      {
        id: 17,
        number: 12
      },
      {
        id: 18,
        number: 13
      },
      {
        id: 19,
        number: 14
      },
      {
        id: 20,
        number: 15
      },
      {
        id: 21,
        number: 16
      }
    ]
  },
  {
    id: 4,
    dates: [
      {
        id: 22,
        number: 17
      },
      {
        id: 23,
        number: 18
      },
      {
        id: 24,
        number: 19
      },
      {
        id: 25,
        number: 20
      },
      {
        id: 26,
        number: 21
      },
      {
        id: 27,
        number: 22
      },
      {
        id: 28,
        number: 23
      }
    ]
  },
  {
    id: 5,
    dates: [
      {
        id: 29,
        number: 24
      },
      {
        id: 30,
        number: 25
      },
      {
        id: 31,
        number: 26
      },
      {
        id: 32,
        number: 27
      },
      {
        id: 33,
        number: 28
      },
      {
        id: 34,
        number: 29
      },
      {
        id: 35,
        number: 30
      }
    ]
  }
];

const Weeks = () => (
  <tbody>
    {
      weeks.map(week => <Dates key={week.id} dates={week.dates} />)
    }
  </tbody>
);

export default Weeks;

const initialState = {
  review: [
    {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      name: 'John Smith',
      rate: '5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      name: 'Matthew McDonald',
      rate: '4',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Sara Jenkins',
      rate: '4.5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1551185887-26a932b61669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Lara Dunkirk',
      rate: '5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    }
  ],
  images: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1533775981670-bc3cc1f11868?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1458829267686-b15150d4a28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    }
  ],
  data: [
    {
      id: 1,
      verified: true,
      avatar:
        'https://images.unsplash.com/photo-1461938337379-4b537cd2db74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Uncle John',
      reviews: '72',
      distance: '149m',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    },
    {
      id: 2,
      verified: false,
      avatar:
        'https://images.unsplash.com/photo-1534691157507-c2cb7d55102a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'The Pumbler Dude',
      reviews: '205',
      distance: '60m',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    },
    {
      id: 3,
      verified: true,
      avatar:
        'https://images.unsplash.com/photo-1516962080544-eac695c93791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Fix & Paint',
      reviews: '5',
      distance: '1km',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    },
    {
      id: 4,
      verified: false,
      avatar:
        'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Home Decor Co.',
      reviews: '15',
      distance: '250m',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    },
    {
      id: 5,
      verified: false,
      avatar:
        'https://images.unsplash.com/photo-1554178286-db408c69256a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Bill the Blacksmith',
      reviews: '23',
      distance: '50m',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    },
    {
      id: 6,
      verified: true,
      avatar:
        'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Plug n Play Electronics',
      reviews: '1903',
      distance: '2km',
      info:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
    }
  ],
  appointments: [
    {
      avatar:
        'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Plug n Play Electronics',
      date: '26/02/2019',
      amount: '1005',
      text:
        'Keep close to Natures heart... and break clear away,once in awhile, and climb a mountain or spend...'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Home Decor Co.',
      date: '05/06/2019',
      amount: '650',
      text:
        'Keep close to Natures heart... and break clear away,once in awhile, and climb a mountain or spend...'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1516962080544-eac695c93791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Fix & Paint',
      date: '12/10/2019',
      amount: '251.25',
      text:
        'Keep close to Natures heart... and break clear away,once in awhile, and climb a mountain or spend...'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1461938337379-4b537cd2db74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Uncle John',
      date: '10/12/2019',
      amount: '132',
      text:
        'Keep close to Natures heart... and break clear away,once in awhile, and climb a mountain or spend...'
    }
  ],
  cardInf: [
    {
      id: 1,
      name: 'Moving',
      color: 'green'
    },
    {
      id: 2,
      name: 'Housing',
      color: 'red'
    },
    {
      id: 3,
      name: 'Electrical',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Pet care',
      color: 'yellow'
    },
    {
      id: 5,
      name: 'Barber',
      color: 'light-green'
    },
    {
      id: 6,
      name: 'Security',
      color: 'black'
    }
  ],
  showModal: false,
  showConfirmModal: false
}

export default function reviewReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'ShowModalTrue':
      return { ...state, showModal: true }
    case 'ShowModalFalse':
      return { ...state, showModal: false }
    case 'ShowConfirmModalTrue':
      return { ...state, showConfirmModal: true }
    case 'ShowConfirmModalFalse':
      return { ...state, showConfirmModal: false }
    default:
      return state;
  }
}
const contactList = [
    {
      id: 1,
      first_name: 'Vasya',
      last_name: 'Petrov',
      nick_name: '',
      phone: 093945394,
      group: [
        {
          name: 'friends',
          id: 2
        }
      ],
      actions: null
    },
    {
      id: 2,
      first_name: 'Petya',
      last_name: '',
      nick_name: 'Sizo',
      phone: 09722122,
      group: [
        {
          name: 'best_friends',
          id: 1
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 3,
          id: 1
        }
      ]
    },
    {
      id: 2,
      first_name: 'Rustem',
      last_name: '',
      nick_name: 'Box',
      phone: 09700000,
      group: [
        {
          name: 'other',
          id: 3
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 13,
          id: 1
        }
      ]
    }
];



contactList.map(user => {
    //let newAct = user.actions !== null ? user.actions.map(action => action.name) : '';

    if(newGroup) {
        user.group
    } else {''}
    
    let newGroup = user.group.map(group => group.name)

     console.log(
        `Name: ${user.first_name}, phone: ${user.phone}, group: ${newGroup}`)
    });

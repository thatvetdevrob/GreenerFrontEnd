const my_plants = [
  {
    id: 'plant 1',
    name: 'Plant 1',
    tags: ['plants', 'everything'],
    count: 147,
    stage: 1,
    type: 1,
    status: 'happy',
    image: require('../assets/icons/plants.png')
  },
  {
    id: 'plants 2',
    name: 'Plant 2',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 2,
    type: 1,
    status: 'happy',
    image: require('../assets/icons/plants.png')
  },
  {
    id: 'plants 3',
    name: 'Plant 3',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 3,
    type: 1,
    status: 'happy',
    image: require('../assets/icons/plants.png')
  } ,
  {
    id: 'plants 4',
    name: 'Plant 4',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 1,
    type: 1,
    status: 'sad',
    image: require('../assets/icons/plants.png')
  },
  {
    id: 'plants 5',
    name: 'Plant 5',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 2,
    type: 1,
    status: 'sad',
    image: require('../assets/icons/plants.png')
  } ,
  {
    id: 'plants 6',
    name: 'Plant 6',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 3,
    type: 1,
    status: 'sad',
    image: require('../assets/icons/plants.png')
  } ,
  {
    id: 'plants 7',
    name: 'Plant 7',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 1,
    type: 2,
    status: 'happy',
    image: require('../assets/icons/plants.png')
  } ,
  {
    id: 'plants 8',
    name: 'Plant 8',
    tags: ['plants' , 'everything'],
    count: 147,
    stage: 2,
    type: 2,
    status: 'happy',
    image: require('../assets/icons/plants.png')
  } 
  ];

  const categories = [
    {
      id: 'Terrarium_1',
      name: 'Happy Terrarium',
      tags: ['terrarium', 'everything'],
      size: 3,
      description: 'Starter Terrarium',
      type: 1,
      status: 3,
      image: require('../assets/images/terrarium_1.png')
    },
    {
      id: 'Terrarium_2',
      name: 'Lucky Terrarium',
      tags: ['terrarium', 'everything'],
      size: 5,
      description: 'Unlocked Terrarium',
      type: 1,
      status: 5,
      image: require('../assets/images/terrarium_2.png')
    },
    {
      id: 'seeds2',
      name: 'Seeds type 2',
      tags: ['shop' , 'everything'],
      description: 'Seeds for x plant',
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds3',
      name: 'Seeds type 3',
      tags: ['shop', 'everything'],
      description: 'Seeds for x plant',
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds4',
      name: 'Seeds type 4',
      tags: ['shop' , 'everything'],
      description: 'Seeds for x plant',
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds5',
      name: 'Seeds type 5',
      tags: ['shop' , 'everything'],
      description: 'Seeds for x plant',
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds6',
      name: 'Seeds type 6',
      tags: ['shop' , 'everything'],
      description: 'Seeds for x plant',
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds7',
      name: 'Seeds type 7',
      tags: ['shop' , 'everything'],
      count: 16,
      description: 'Seeds for x plant',
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds8',
      name: 'Seeds type 8',
      tags: ['shop' , 'everything'],
      count: 16,
      description: 'Seeds for x plant',
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'bumpers',
      name: 'Bumpers',
      description: 'X named minigame',
      tags: ['minigames', 'everything' ],
      count: 16,
      image: require('../assets/icons/seeds.png')
    }
  ];

  const categories2 = [
   
  ];
  
  const products = [
    {
      id: 1, 
      name: '16 Best Plants That Thrive In Your Bedroom',
      description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
      tags: ['Interior', '27 m²', 'Ideas'],
      images: [
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
        // showing only 3 images, show +6 for the rest
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
      ]
    }
  ];
  
  const explore = [
    // images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
  ];
  
  const profile = {
    username: 'Gen',
    location: 'Seattle',
    email: 'test@test.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 5000,
    funds: 5000,
    plants: 6,
    monthly_cap: 7000,
    notifications: true,
    newsletter: false,
  };
  
  export {
    categories,
    explore,
    products,
    profile,
    my_plants,
    categories2
  }
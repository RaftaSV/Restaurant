const SpecialPlatters =
  [{
    'name': 'Mar y tierra',
    'price': 35,
    'description': ' La mejor convinacion de la tierra y el mar',
    'number': 1,
    'image': require('components/Images/SpecialPlatters/MarYTierra.png')
  },
    {
      'name': 'Mar y tierra 1',
      'price': 35,
      'description': ' La mejor convinacion de la tierra y el mar',
      'number': 2,
      'image': require('components/Images/SpecialPlatters/MarYTierra.png')
    },
    {
      'name': 'Mar y tierra 1',
      'price': 35,
      'description': ' La mejor convinacion de la tierra y el mar',
      'number': 3,
      'image': require('components/Images/SpecialPlatters/MarYTierra.png')
    }
  ];

export const GetSpecialPlatters = () => {
  return(
    SpecialPlatters
  );

}

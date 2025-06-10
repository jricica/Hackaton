export interface Writer {
  name: string
  bio: string
}

const writers: Writer[] = [
  {
    name: 'Friedrich Hayek',
    bio: 'Economista y filósofo conocido por su defensa del liberalismo clásico y la economía de mercado.',
  },
  {
    name: 'Adam Smith',
    bio: 'Filósofo y economista escocés considerado el padre de la economía moderna.',
  },
  {
    name: 'Milton Friedman',
    bio: 'Economista estadounidense que impulsó el monetarismo y la libertad individual.',
  },
]

export default writers

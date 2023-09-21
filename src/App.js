import React from 'react';
import './App.css';
import MovieList from './components/movieList';

function App() {
  const movies = [
    {
      movie: 'SPIRIT AWAY',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_11_Spirited-692x1024.jpg',
      synopsis: 'Chihiro\'s family is moving to a new house, but when they stop on the way to explore an abandoned village, her parents undergo a mysterious transformation and Chihiro is whisked into a world of fantastic spirits ruled over by the sorceress Yubaba.',
    },
    {
      movie: 'HOWL\'S MOVING CASTLE',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_10_Howls.jpg',
      synopsis: 'Sophie, a quiet girl working in a hat shop, finds her life thrown into turmoil when she is literally swept off her feet by a handsome but mysterious wizard named Howl. The vain and vengeful Witch of the Waste, jealous of their friendship, puts a curse on Sophie and turns her into a 90-year-old woman.',
    },
    {
      movie: 'THE WIND RISES',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_9_The-Wind-Rises-692x1024.jpg',
      synopsis: 'Jiro dreams of flying and designing beautiful airplanes, inspired by the famous Italian aeronautical designer Caproni. Nearsighted and unable to be a pilot, he becomes one of the world’s most accomplished airplane designers, experiencing key historical events in an epic tale of love.',
    },
    {
      movie: 'PRINCESS MONONOKE',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_7_Mononoke-692x1024.jpg',
      synopsis: 'Inflicted with a deadly curse, the young warrior Ashitaka heads west in search of a cure. There, he stumbles into a bitter conflict between Lady Eboshi, the proud people of Iron Town, and the enigmatic Princess Mononoke, a young girl raised by wolves, who will stop at nothing to prevent the humans from destroying her home.' ,
    },
    {
      movie: 'PORCO ROSSO',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_8_PorcoRosso-692x1024.jpg',
      synopsis: '“Porco Rosso” is a world-weary flying ace-turned-bounty-hunter, whose face has been transformed into that of a pig by a mysterious spell. When he infuriates a band of sky pirates with his heroics, the pirates hire Curtis, a hotshot American rival, to get rid of him.',
    },
    {
      movie: 'GRAVE OF THE FIREFLIES',
      imageUrl: 'https://gkids.com/wp-content/uploads/2018/06/115929165_1300x1733-550x825.jpg',
      synopsis: 'As the Empire of the Sun crumbles upon itself and a rain of firebombs falls upon Japan, the final death march of a nation is echoed in millions of smaller tragedies. This is the story of Seita and his younger sister Setsuko, two children born at the wrong time, in the wrong place, and now cast adrift in a world that lacks not the care to shelter them, but simply the resources.',
    },
    {
      movie: 'KIKI\'S DELIVERY SERVICE',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_4_Kiki-692x1024.jpg',
      synopsis: 'It is a tradition for all young witches to leave their families on the night of a full moon and fly off into the wide world to learn their craft. When that night comes for Kiki, she embarks on her new journey with her sarcastic black cat, Jiji, landing the next morning in a seaside village, where her unique skills make her an instant sensation.',
    },
    {
      movie: 'MY NEIGHBOR TOTORO',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_1_Totoro-692x1024.jpg',
      synopsis: 'When Satsuki and her sister Mei move with their father to a new home in the countryside, they find country life is not as simple as it seems. They soon discover that the house and nearby woods are full of strange and delightful creatures, including a gigantic but gentle forest spirit called Totoro, who can only be seen by children.',
    },
    {
      movie: 'PONYO',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_3_Ponyo-692x1024.jpg',
      synopsis: 'Perfect for audiences of all ages, Ponyo centers on the friendship between five-year-old Sosuke and a magical goldfish named Ponyo, the young daughter of a sorcerer father and a sea-goddess mother. After a chance encounter, Ponyo yearns to become a human so she can be with Sosuke. ',
    },
    {
      movie: 'Nausicaä of the Valley of the Wind',
      imageUrl: 'https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_5_Nausicaa.jpg',
      synopsis:'A thousand years after the Seven Days of Fire destroyed civilization, warring human factions survive in a world devastated by atmospheric poisons and swarming with gigantic insects. The peaceful Valley of the Wind is nestled on the edge of the Toxic Forest and led by the courageous Princess Nausicaä, whose love of all living things leads her into terrible danger, as she fights to restore balance between humans and nature'
    }
  ];

  return (
    <div className="App" >
      <header className="App-header">
        <h1>My favorite Studio Ghibli Films</h1>
        <h4> What do you think about these films?</h4>
      </header>
      <main class = "container-cards">
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
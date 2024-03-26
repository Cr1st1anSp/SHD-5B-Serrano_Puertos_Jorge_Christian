import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  pokemones = [
    {
      nombre: 'Pikachu',
      tipos: ['Eléctrico'],
      favorito: false,
      vida: 0.3,
      ataque: 0.5,
      defensa: 0.4,
      descripcion: "Pikachu es un Pokémon eléctrico. Es bien conocido por su carácter y su capacidad para almacenar electricidad en sus mejillas."
    },
    {
      nombre: 'Charizard',
      tipos: ['Fuego', 'Volador'],
      favorito: false,
      vida: 0.8,
      ataque: 0.86,
      defensa: 0.78,
      descripcion: "Charizard es un Pokémon de tipo fuego/volador. Es conocido por su habilidad para volar y su aliento ardiente capaz de derretir rocas."
    },
    {
      nombre: 'Bulbasaur',
      tipos: ['Planta', 'Veneno'],
      favorito: false,
      vida: 0.45,
      ataque: 0.49,
      defensa: 0.49,
      descripcion: "Bulbasaur es un Pokémon de tipo planta/veneno. Tiene un bulbo en la espalda que contiene una planta que crece a medida que él lo hace."
    },
    {
      nombre: 'Squirtle',
      tipos: ['Agua'],
      favorito: false,
      vida: 0.44,
      ataque: 0.48,
      defensa: 0.65,
      descripcion: "Squirtle es un Pokémon de tipo agua. Es pequeño y se asemeja a una tortuga. Puede lanzar agua a alta presión desde su boca."
    },
    {
      nombre: 'Eevee',
      tipos: ['Normal'],
      favorito: false,
      vida: 0.35,
      ataque: 0.46,
      defensa: 0.35,
      descripcion: "Eevee es un Pokémon muy especial debido a su capacidad para evolucionar en múltiples formas dependiendo de varios factores."
    },
    {
      nombre: 'Mewtwo',
      tipos: ['Psíquico'],
      favorito: false,
      vida: 0.82,
      ataque: 0.96,
      defensa: 0.85,
      descripcion: "Mewtwo es un Pokémon legendario psíquico creado artificialmente a partir del ADN de Mew. Es extremadamente poderoso y tiene una personalidad distante y fría."
    },
    {
      nombre: 'Snorlax',
      tipos: ['Normal'],
      favorito: false,
      vida: 0.9,
      ataque: 0.75,
      defensa: 0.95,
      descripcion: "Snorlax es un Pokémon de tipo normal conocido por su gran tamaño y apetito voraz. Pasa la mayor parte del tiempo durmiendo y comiendo."
    },
    {
      nombre: 'Meowth',
      tipos: ['Normal'],
      favorito: false,
      vida: 0.4,
      ataque: 0.35,
      defensa: 0.3,
      descripcion: "Meowth es un Pokémon de tipo normal conocido por su moneda en forma de cabeza y sus habilidades de ladrón. A menudo trabaja para el Equipo Rocket."
    },
    {
      nombre: 'Jigglypuff',
      tipos: ['Normal', 'Hada'],
      favorito: false,
      vida: 0.5,
      ataque: 0.3,
      defensa: 0.25,
      descripcion: "Jigglypuff es un Pokémon de tipo normal/hada conocido por su canto que puede hacer que las personas y otros Pokémon se duerman."
    },
    {
      nombre: 'Charmander',
      tipos: ['Fuego'],
      favorito: false,
      vida: 0.39,
      ataque: 0.52,
      defensa: 0.36,
      descripcion: "Charmander es un Pokémon de tipo fuego. Tiene una llama en la punta de su cola que indica su estado de ánimo y salud."
    },
    {
      nombre: 'Psyduck',
      tipos: ['Agua'],
      favorito: false,
      vida: 0.4,
      ataque: 0.35,
      defensa: 0.4,
      descripcion: "Psyduck es un Pokémon de tipo agua/psíquico. Tiene dolores de cabeza intensos que desatan poderes psíquicos cuando se intensifican."
    },
    {
      nombre: 'Gengar',
      tipos: ['Fantasma', 'Veneno'],
      favorito: false,
      vida: 0.6,
      ataque: 0.75,
      defensa: 0.55,
      descripcion: "Gengar es un Pokémon de tipo fantasma/veneno. Es conocido por su capacidad para esconderse en las sombras y jugar malas pasadas a los desprevenidos."
    },
    {
      nombre: 'Gyarados',
      tipos: ['Agua', 'Volador'],
      favorito: false,
      vida: 0.95,
      ataque: 0.85,
      defensa: 0.79,
      descripcion: "Gyarados es un Pokémon de tipo agua/volador. Se cree que evoluciona de un Magikarp. Es conocido por su temperamento violento y su fuerza."
    },
    {
      nombre: 'Lucario',
      tipos: ['Lucha', 'Acero'],
      favorito: false,
      vida: 0.7,
      ataque: 0.8,
      defensa: 0.65,
      descripcion: "Lucario es un Pokémon de tipo lucha/acero. Tiene una conexión especial con la energía espiritual y es conocido por su lealtad y valentía."
    },
    {
      nombre: 'Magikarp',
      tipos: ['Agua'],
      favorito: false,
      vida: 0.2,
      ataque: 0.1,
      defensa: 0.15,
      descripcion: "Magikarp es un Pokémon de tipo agua. Es conocido por su debilidad extrema, pero eventualmente puede evolucionar en un Gyarados extremadamente poderoso."
    },
    {
      nombre: 'Lapras',
      tipos: ['Agua', 'Hielo'],
      favorito: false,
      vida: 0.85,
      ataque: 0.65,
      defensa: 0.75,
      descripcion: "Lapras es un Pokémon de tipo agua/hielo. Es conocido por ser amable y amigable con los humanos, a menudo usado como medio de transporte en el agua."
    },
    {
      nombre: 'Blastoise',
      tipos: ['Agua'],
      favorito: false,
      vida: 0.79,
      ataque: 0.83,
      defensa: 0.1,
      descripcion: "Blastoise es un Pokémon de tipo agua. Es la forma evolucionada de Wartortle y Squirtle. Tiene cañones de agua en su caparazón."
    },
    {
      nombre: 'Dragonite',
      tipos: ['Dragón', 'Volador'],
      favorito: false,
      vida: 0.91,
      ataque: 0.94,
      defensa: 0.78,
      descripcion: "Dragonite es un Pokémon de tipo dragón/volador. Es conocido por su inteligencia y por ser capaz de volar a velocidades increíbles."
    },
    {
      nombre: 'Mew',
      tipos: ['Psíquico'],
      favorito: false,
      vida: 0.6,
      ataque: 0.8,
      defensa: 0.6,
      descripcion: "Mew es un Pokémon legendario psíquico. Se dice que contiene el ADN de todos los Pokémon y es capaz de aprender cualquier movimiento."
    },
    {
      nombre: 'Ditto',
      tipos: ['Normal'],
      favorito: false,
      vida: 0.48,
      ataque: 0.48,
      defensa: 0.48,
      descripcion: "Ditto es un Pokémon de tipo normal. Tiene la habilidad única de transformarse en cualquier otro Pokémon que vea."
    }
  ];

  pokemonFiltrados = [...this.pokemones];

  obtenerUrlImagen(pokemonNombre: string): string {
    const urlImagen = `assets/img/${pokemonNombre.toLowerCase()}.png`;
    const img = new Image();
    img.src = urlImagen;
    if (img.width > 0) {
      return urlImagen;
    } else {
      return 'assets/img/new.png';
    }
  }

  onSearchChange(event: CustomEvent) {
    const searchTerm = event.detail.value.toLowerCase();

    this.pokemonFiltrados = this.pokemones.filter(pokemon =>
      pokemon.nombre.toLowerCase().includes(searchTerm)
    );
  }

}

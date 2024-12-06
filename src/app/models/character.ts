export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    transformations?: Transformation[];
    originPlanet: Planet;
  }

  export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string | number;
  }

  export interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
  }

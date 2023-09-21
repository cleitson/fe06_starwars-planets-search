export type FetchType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type InputFilterType = {
  select: 'rotation_period'
  | 'orbital_period' | 'diameter' | 'surface_water' | 'population';
  option: 'maior que' | 'menor que' | 'igual a';
  numberValue: number,
};

export type SelectValueType = {
  name: string[];
};

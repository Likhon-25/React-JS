export interface CountryType {
  name: {
    common: string;
    official: string;
  };
  ccn3: {
    ccn3: string;
  };
  flags: {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
  };
  capital: {
    capital: string;
  };
  population:{
    population: number;
  }
}

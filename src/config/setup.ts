//this is setup and models of our languages
export interface IInternationalization {
  language: string;
  flag: string;
}
interface IInternationalization_fa extends IInternationalization {
  language: "french";
  flag: "fr";
}
interface IInternationalization_en extends IInternationalization {
  language: "english";
  flag: "en";
}

export type TInternationalization =
  | IInternationalization_en
  | IInternationalization_fa;

interface ISetup {
  internationalization: TInternationalization;
}

export const Setup: ISetup = {
  internationalization: {
    language: "english",
    flag: "en",
  },
};

import { PersonalityTypes } from "./personality-types.enum";

export interface Option {
    optionValue: string;
    optionText: string;
    optionType: PersonalityTypes;
    selectedOption:boolean;
  }
  
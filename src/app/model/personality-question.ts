import { Option } from './option';

export interface PersonalityQuestion {
  questionId: number;
  questionText: string;
  options: Option[];
  selectedOption: Option | undefined;
}

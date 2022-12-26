export interface Character {
  id: number;
  name: string;
  nameHtml: string;
  gender: string;
  species: string;
  side: string;
  information?: string;
  tags?: string[];
  photo?: string;
  colorName: string;
  colorBackgroundParametrs: string;
  colorParametrs: string;
}

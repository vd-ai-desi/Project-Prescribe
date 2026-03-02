
export interface KidFriendlyDrugInfo {
  name: string;
  categoryName: string; // e.g., "Germ Fighter"
  superpower: string; // How it works (metaphor)
  originStory: string; // Brief history or science background
  rulebook: string[]; // Safety rules
  coolFact: string; // A fun fact for kids
  overdoseFacts: string; // Specific biological consequences of misuse/overdose
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

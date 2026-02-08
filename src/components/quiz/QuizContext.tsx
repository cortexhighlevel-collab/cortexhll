import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export type ServiceType = 'sites' | 'trafego' | null;

export interface QuizState {
  service: ServiceType;
  currentStep: number;
  direction: number;
  
  // Sites
  plan: string | null;
  addons: Record<string, boolean | number>;
  recurring: Record<string, boolean>;
  
  // Trafego
  platforms: string[];
  investment: string | null;
  objective: string | null;
  segment: string | null;
  
  // Form
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

type QuizAction =
  | { type: 'SET_SERVICE'; payload: ServiceType }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_DIRECTION'; payload: number }
  | { type: 'SET_PLAN'; payload: string }
  | { type: 'SET_ADDON'; payload: { id: string; value: boolean | number } }
  | { type: 'SET_RECURRING'; payload: { id: string; active: boolean } }
  | { type: 'SET_PLATFORMS'; payload: string[] }
  | { type: 'TOGGLE_PLATFORM'; payload: string }
  | { type: 'SET_INVESTMENT'; payload: string }
  | { type: 'SET_OBJECTIVE'; payload: string }
  | { type: 'SET_SEGMENT'; payload: string }
  | { type: 'SET_FORM_FIELD'; payload: { field: keyof Pick<QuizState, 'name' | 'email' | 'phone' | 'company' | 'message'>; value: string } }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET' };

const initialState: QuizState = {
  service: null,
  currentStep: 0,
  direction: 0,
  plan: null,
  addons: {},
  recurring: {},
  platforms: [],
  investment: null,
  objective: null,
  segment: null,
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_SERVICE':
      return { ...state, service: action.payload, currentStep: 1, direction: 1 };
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'SET_DIRECTION':
      return { ...state, direction: action.payload };
    case 'SET_PLAN':
      return { ...state, plan: action.payload };
    case 'SET_ADDON':
      return { 
        ...state, 
        addons: { ...state.addons, [action.payload.id]: action.payload.value } 
      };
    case 'SET_RECURRING':
      return { 
        ...state, 
        recurring: { ...state.recurring, [action.payload.id]: action.payload.active } 
      };
    case 'SET_PLATFORMS':
      return { ...state, platforms: action.payload };
    case 'TOGGLE_PLATFORM':
      const platforms = state.platforms.includes(action.payload)
        ? state.platforms.filter(p => p !== action.payload)
        : [...state.platforms, action.payload];
      return { ...state, platforms };
    case 'SET_INVESTMENT':
      return { ...state, investment: action.payload };
    case 'SET_OBJECTIVE':
      return { ...state, objective: action.payload };
    case 'SET_SEGMENT':
      return { ...state, segment: action.payload };
    case 'SET_FORM_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'NEXT_STEP':
      return { ...state, direction: 1, currentStep: state.currentStep + 1 };
    case 'PREV_STEP':
      return { ...state, direction: -1, currentStep: Math.max(0, state.currentStep - 1) };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface QuizContextValue {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  // Helper functions
  setService: (service: ServiceType) => void;
  setPlan: (plan: string) => void;
  setAddon: (id: string, value: boolean | number) => void;
  setRecurring: (id: string, active: boolean) => void;
  togglePlatform: (platform: string) => void;
  setInvestment: (investment: string) => void;
  setObjective: (objective: string) => void;
  setSegment: (segment: string) => void;
  setFormField: (field: 'name' | 'email' | 'phone' | 'company' | 'message', value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  reset: () => void;
  // Computed values
  totalSteps: number;
  canGoNext: boolean;
  canGoBack: boolean;
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Calculate total steps based on service
  const totalSteps = state.service === 'sites' ? 9 : state.service === 'trafego' ? 5 : 1;
  
  // Determine if can proceed based on current step
  const canGoNext = (() => {
    if (state.currentStep === 0) return state.service !== null;
    if (state.service === 'sites') {
      switch (state.currentStep) {
        case 1: return state.plan !== null;
        case 2: case 3: case 4: case 5: case 6: case 7: return true; // Addons/recurring are optional
        case 8: return state.name.trim().length >= 2 && state.email.includes('@');
        default: return true;
      }
    }
    if (state.service === 'trafego') {
      switch (state.currentStep) {
        case 1: return state.platforms.length > 0;
        case 2: return state.investment !== null;
        case 3: return state.objective !== null;
        case 4: return state.name.trim().length >= 2 && state.email.includes('@');
        default: return true;
      }
    }
    return false;
  })();

  const canGoBack = state.currentStep > 0;

  const value: QuizContextValue = {
    state,
    dispatch,
    setService: (service) => dispatch({ type: 'SET_SERVICE', payload: service }),
    setPlan: (plan) => dispatch({ type: 'SET_PLAN', payload: plan }),
    setAddon: (id, value) => dispatch({ type: 'SET_ADDON', payload: { id, value } }),
    setRecurring: (id, active) => dispatch({ type: 'SET_RECURRING', payload: { id, active } }),
    togglePlatform: (platform) => dispatch({ type: 'TOGGLE_PLATFORM', payload: platform }),
    setInvestment: (investment) => dispatch({ type: 'SET_INVESTMENT', payload: investment }),
    setObjective: (objective) => dispatch({ type: 'SET_OBJECTIVE', payload: objective }),
    setSegment: (segment) => dispatch({ type: 'SET_SEGMENT', payload: segment }),
    setFormField: (field, value) => dispatch({ type: 'SET_FORM_FIELD', payload: { field, value } }),
    nextStep: () => dispatch({ type: 'NEXT_STEP' }),
    prevStep: () => dispatch({ type: 'PREV_STEP' }),
    goToStep: (step) => {
      dispatch({ type: 'SET_DIRECTION', payload: step > state.currentStep ? 1 : -1 });
      dispatch({ type: 'SET_STEP', payload: step });
    },
    reset: () => dispatch({ type: 'RESET' }),
    totalSteps,
    canGoNext,
    canGoBack
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

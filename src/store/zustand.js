import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  setCount:(count)=> set((state)=>({count})),
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: set((state)=>({count: 0}))
}));
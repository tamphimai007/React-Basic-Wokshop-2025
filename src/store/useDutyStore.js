import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set) => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    // fn body
    try {
      const personnel = await api.get("/personnel");

      set({
        personnel: personnel,
      });

      
    } catch (error) {
      console.log(error);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;

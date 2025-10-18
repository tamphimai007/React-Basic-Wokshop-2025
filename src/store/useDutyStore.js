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
      const locations = await api.get('/locations')
      set({
        personnel: personnel,
        locations:locations
      });

      
    } catch (error) {
      console.log(error);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;

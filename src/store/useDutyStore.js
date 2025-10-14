import { create } from "zustand";

const dutyStore = () => ({
  personnel: [],
  locations:[],
  assignments:[],
  selectedLocationId:null,  
  
  kaika: "tam",
  jukkru: () => console.log("Jukkru!!!"),
});

const useDutyStore = create(dutyStore);

export default useDutyStore;

import { defineStore } from "pinia";
import { reactive } from "vue";

type CheckType = {
  title: string;
  price: number;
};

export const useCheckStore = defineStore("useCheckStore", () => {
  const AllCheck: Array<CheckType> = reactive([]);
  const newCheck = reactive<CheckType>({ title: "", price: 0 });

  const addCheck = () => {
    alert(`title is ${newCheck.title} and price is ${newCheck.price}`);
  };

  const deleteCheck = (index: number) => {
    console.log(`delete the check number of ${index}`);
  };

  return { AllCheck, newCheck, addCheck, deleteCheck };
});

import { defineStore } from "pinia";
import { reactive } from "vue";

type CheckType = {
  title: string;
  price: number;
};

const defaultData = [
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
];

export const useCheckStore = defineStore("useCheckStore", () => {
  const AllCheck: Array<CheckType> = reactive(defaultData);
  let newCheck = reactive<CheckType>({ title: "", price: 0 });

  const addCheck = () => {
    console.log("start insert new check");
    AllCheck.push({
      title: newCheck.title,
      price: newCheck.price,
    });

    newCheck = { title: "", price: 0 };
    console.log(AllCheck);
  };

  const deleteCheck = (index: number) => {
    console.log(`delete the check number of ${index}`);
  };

  return { AllCheck, newCheck, addCheck, deleteCheck };
});

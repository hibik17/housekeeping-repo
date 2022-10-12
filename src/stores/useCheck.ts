import { defineStore } from "pinia";
import { reactive } from "vue";

type CheckType = {
  title: string;
  price: number;
};

const useCheckStore = defineStore("useCheckStore", () => {
  const AllCheck: Array<CheckType> = reactive([]);
  const newCheck = reactive<CheckType>({ title: "", price: 0 });

  const addCheck = (data: CheckType) => {
    console.log(`購入品の項目は:${data.title}`);
    console.log(`購入品の金額は:${data.price}`);
  };

  const deleteCheck = (index: number) => {
    console.log(`delete the check number of ${index}`);
  };

  return { AllCheck, newCheck, addCheck, deleteCheck };
});

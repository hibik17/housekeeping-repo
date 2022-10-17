import { defineStore } from "pinia";
import { reactive, ref } from "vue";

type CheckType = {
  title: string;
  price: number;
};

const defaultData = [
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
  { title: "test", price: 2000 },
];

export const useCheckStore = defineStore("useCheckStore", () => {
  const AllCheck: Array<CheckType> = reactive(defaultData);
  const newCheck = reactive<CheckType>({ title: "", price: 0 });

  // check the value of sended data
  const checkTitle = ref<boolean>(false);
  const checkPrice = ref<boolean>(false);

  const addCheck = () => {
    // check the value of form data
    if (newCheck.title != "" && newCheck.price != 0) {
      const newData: CheckType = {
        title: newCheck.title,
        price: newCheck.price,
      };
      AllCheck.push(newData);
      console.log("insert action done....");

      // reset the form value
      newCheck.title = "";
      newCheck.price = 0;
    } else {
      if (newCheck.title == "" && newCheck.price == 0) {
        checkTitle.value = true;
        checkPrice.value = true;
      } else if (newCheck.title == "") {
        checkTitle.value = true;
      } else {
        checkPrice.value = true;
      }
    }

    console.log(checkTitle.value);
    console.log(checkPrice.value);
  };

  const deleteCheck = (index: number) => {
    console.log(`delete the check number of ${index}`);
  };

  return { AllCheck, newCheck, addCheck, deleteCheck, checkTitle, checkPrice };
});

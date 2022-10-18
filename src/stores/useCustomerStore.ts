import axios from "axios";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const useUserStore = defineStore("useUserStore", () => {
  const users: Array<userType> = reactive<Array<userType>>([]);

  computed(() => {
    axios
      .get<userType>("https://jsonplaceholder.typicode.com/users")
      .then((res) => users.push(res.data))
      .catch((error) => alert(error.message));
  });

  return { users };
});

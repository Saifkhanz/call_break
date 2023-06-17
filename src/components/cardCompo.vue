<script setup>
import { reactive, ref, onMounted, watch } from "vue";
const isActive = ref(false);
let cards = ref(["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2]);
let usedCard = ref();
// const Heart = reactive({
//   isActive: isActive,
//   cardData: data,
// });
// const Spade = reactive({
//   isActive: isActive,
//   cardData: data,
// });
// const Diamond = reactive({
//   isActive: isActive,
//   cardData: data,
// });
// const Club = reactive({
//   isActive: isActive,
//   cardData: data,
// });
// Initialize newCard array
const newCard = ref({ value: [] });
// Check if 'card' exists in localStorage and retrieve its value
var storedCard = localStorage.getItem("card");
if (storedCard) {
  newCard.value = JSON.parse(storedCard);
  // console.log('NEREWEWE',newCard.value.value)
}

let str = ref([]);
const localData = ref([]);
const parseData = ref([]);
function toggleActiveState(e) {
  // console.log("Hello", e.target);
  usedCard.value = e.target.innerText;
  newCard.value.value.push(usedCard.value);
  str = JSON.stringify(newCard.value);
  console.log("STR",str)
  localStorage.setItem("card", str);
  e.target.classList.toggle("icons");
  e.target.style.pointerEvents = "none";
}
// watch(newCard, (newValue, oldValue) => {});
onMounted(() => {
  localData.value = localStorage.getItem("card");
  parseData.value = JSON.parse(localData.value);
  console.log("checkOnMounted", parseData.value.value);
});

</script>
<template>
  <div class="parent">
    <!-- Display Used Card -->
    <div class="flex mt-2">
      <div
        v-for="(item, index) in parseData.value"
        :key="index"
        class="flex rounded w-24 items-center justify-center h-20 bg-red-500 mx-1 shadow-md"
      >
        <div class="text-white text-lg text-center">{{ item }}</div>
      </div>
    </div>
    
    <!-- display All Card -->
    <div class="container mx-auto px-4 w-2/4 pt-6">
      <table class="table-auto w-full border-collapse border">
        <thead>
          <tr class="border-b border-gray-400">
            <th class="p-2">
              <i
                class="fa-sharp fa-solid fa-heart fa-2xl"
                style="color: #dc0909"
              >
              </i>
            </th>
            <th class="p-2">
              <!-- <i
                class="fa-thin fa-spade fa-2xl"
                style="color: #090c10"
              ></i> -->
              <!-- <i class="fas fa-spade fa-spin fa-lg" style="color: #161a22"></i> -->
              <img src="../assets/ace-of-spades.png" alt="" class="h-10 mx-auto">
            </th>
            <th class="p-2">
              <i
                class="text-center fa-sharp fa-solid fa-diamond fa-2xl"
                style="color: #12161c"
              ></i>
            </th>
            <th class="p-2">
              <img src="../assets/realclub.png" alt="" class="h-12 mx-auto">
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- outer loop start -->
          <tr v-for="(item, index) in cards" :key="index">
            <!-- inner loop start -->
            <td v-for="n in 4" :key="n" class="p-2 text-center">
          
              <button
                @click="toggleActiveState($event)"
                :class="[
                  isActive ? 'icons bg-stone-200  pointer-events-none' : '',
                ]"
                class="bg-center bg-no-repeat shadow-lg rounded-lg drop-shadow-lg w-32 h-16 border-2 border-purple-100 hover:bg-slate-700 bg-cyan-900 font-sans hover:font-serif"
              >
                <span class="text-white text-lg">
                  {{ item }}
                </span>
              </button>
            </td>
            <!-- inner loop end -->
          </tr>
          <!-- outer loop end -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.icons {
  background-color: rgba(109, 21, 21, 0.719);
  background-image: url("../assets/cross1.png");
}

</style>
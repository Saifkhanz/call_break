<script setup>
import { reactive, ref, onMounted, watch } from "vue";
const isActive = ref(false);
let cards = ref(["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2]);
let buckets= ref([[], [], [], []]);
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
const newCard = ref([]);
// Check if 'card' exists in localStorage and retrieve its value
let storedCard = localStorage.getItem("card");
if (storedCard) {
  console.log("STOREDCARD", storedCard);
  newCard.value = JSON.parse(storedCard);
  // console.log('ch',newCard.value.value)
} else {
  alert("start your game");
}

let str = ref([]);
// const localData = ref([]);
// const parseData = ref([]);
function toggleActiveState(e) {
  // console.log("Hello", e.target);
  usedCard.value = e.target.innerText;
  console.log(usedCard.value);
  if (usedCard.value !== null) {
    if (newCard.value === null) {
      newCard.value = [];
    }
    // newCard.value.push(usedCard.value);
  }
  // newCard.value.push(usedCard.value);
  str = JSON.stringify(newCard.value);
  console.log("STR", str);
  localStorage.setItem("card", str);
  e.target.classList.toggle("icons");
  // e.target.style.pointerEvents = "none";
}
// watch(newCard, (newValue, oldValue) => {});
onMounted(() => {
  storedCard = localStorage.getItem("card");
  newCard.value = JSON.parse(storedCard);
  // console.log("checkOnMounted", parseData.value.value);
});
</script>
<template>
  <div class="parent container mx-auto ">
    <!-- Display Used Card -->
    <!-- <div class="flex flex-wrap mt-2 ">
      <div
        v-for="(item, index) in newCard"
        :key="index"
        class="flex rounded md:w-24 w-16  items-center justify-center h-16 bg-gray-400 mx-1 my-1 shadow-md"
      >
        <div class="text-white text-lg text-center">{{ item }}</div>
      </div>
    </div> -->

    <!-- display All Card -->
    <div class="flex justify-center">
      <table class="table-auto">
        <thead>
          <tr >
            <th class="p-2 xs:p-1">
              <i
                class="fa-sharp fa-solid fa-heart fa-2xl md:text-4xl xs:text-xl"
                style="color: #dc0909"
              >
              </i>
            </th>
            <th class="p-2 xs:p-1">
              <!-- <i
                class="fa-thin fa-spade fa-2xl"
                style="color: #090c10"
              ></i> -->
              <!-- <i class="fas fa-spade fa-spin fa-lg" style="color: #161a22"></i> -->
              <img
                src="../assets/ace-of-spades.png"
                alt=""
                class="md:h-10 mx-auto xs:h-5"
              />
            </th>
            <th class="p-2 xs:p-1">
              <i
                class="text-center fa-sharp fa-solid fa-diamond fa-2xl md:text-4xl  xs:text-xl"
                style="color: #12161c"
              ></i>
            </th>
            <th class="p-2 xs:p-1">
              <img src="../assets/realclub.png" alt="" class="md:h-12 xs:h-6 mx-auto" />
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- outer loop start -->
          <tr v-for="(item, index) in cards" :key="index">
            <!-- inner loop start -->
            <td v-for="n in 4" :key="n" class="p-2 xs:p-1 text-center">
              <!-- <draggable v-model="buckets[n - 1]" :options="{ group: 'cards' }">
                <div
                v-for="card in buckets[n - 1]"
                :key="card.id"
                class="bg-center bg-no-repeat shadow-lg rounded-lg drop-shadow-lg md:w-32 xs:w-10 h-10 border-2 border-purple-100 hover:bg-slate-700 bg-cyan-900 font-sans hover:font-serif"
              >
                <span class="text-white text-lg xs:text-xs">
                  {{ card.value }}
                </span>
              </div>
            </draggable> -->
              
            <button
                @click="toggleActiveState($event)"
                :class="[
                  isActive ? 'icons bg-stone-200' : '',
                ]"
                class="bg-center bg-no-repeat shadow-lg rounded-lg drop-shadow-lg md:w-24 md:h-14 xs:w-10 xs:h-10 border-2 border-purple-100 hover:bg-slate-700 bg-cyan-900 font-sans hover:font-serif"
              >
                <span class=" text-white md:text-xl xs:text-base">
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
  /* background-color: rgba(109, 21, 21, 0.719); */
  background-size: contain;
  background-image: url("../assets/cross1.png");
}

</style>
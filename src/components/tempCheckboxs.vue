<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['checkedItems']),
    items() {
      // Your items data
      return [
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
        { id: 3, label: 'Item 3' }
      ];
    }
  },
  methods: {
    ...mapActions(['updateCheckedItems']),
    openModal() {
      this.showModal = true;
    },
    isChecked(itemId) {
      return this.checkedItems.includes(itemId);
    },
    toggleChecked(itemId) {
      const updatedItems = this.isChecked(itemId)
        ? this.checkedItems.filter(id => id !== itemId)
        : [...this.checkedItems, itemId];
      this.updateCheckedItems(updatedItems);
    },
    submitForm() {
      // Handle form submission
      // You can access the checked items from this.checkedItems
      console.log('Checked items:', this.checkedItems);
      this.showModal = false; // Close the modal after submitting
    }
  }
};
</script>
<template>
    <div>
      <button @click="openModal">Open Modal</button>
      <modal v-if="true" @submit="submitForm">
        <div v-for="item in items" :key="item.id">
          <label>
            <input type="checkbox" :checked="isChecked(item.id)" @change="toggleChecked(item.id)" />
            {{ item.label }}
          </label>
        </div>
        <button type="submit">Submit</button>
      </modal>
    </div>
  </template>
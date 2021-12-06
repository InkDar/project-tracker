<template>
  <div class="container">
    <header>
      <div style="float: left">
        <span id="name1">Kanban Board:</span>
        <span id="name2">PROJECT TRACKER</span>
      </div>
      <div id="buttonsWrapper">
        <button class="buttons">Archived Lists(0)</button>
        <button class="buttons" @click="showForm = true">+ New List</button>
      </div>
    </header>
    <br />
    <div id="lists">
      <Table v-for="(table, index) in tables" :key="index" :tableName="table" />
    </div>
  </div>
  <transition name="modal">
    <Modal v-if="showForm" @close="closeForm" :myLabel="`List Name`"> </Modal>
  </transition>
</template>

<script lang="ts">
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: { Table, Modal },
  setup(): unknown {
    const store = useStore();
    const showForm = ref(false);
    const tables = computed(() => store.getters.getTableNames);

    const closeForm = (input: string) => {
      if (input !== "") {
        store.dispatch("addTable", input);
      }
      showForm.value = false;
    };

    return {
      tables,
      showForm,
      closeForm,
    };
  },
};
</script>

<style scoped>
.container {
  display: block;
  background-color: #ecf5f8;
}
header {
  align-items: center;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
#name1 {
  color: #a2b3ba;
  margin-left: 75px;
}
#name2 {
  color: #3a515c;
}
#buttonsWrapper {
  float: right;
  display: flex;
  justify-items: flex-end;
  margin-right: 75px;
}
.buttons {
  border-radius: 3px;
  background-color: #7f96a0;
  height: 30px;
  width: 150px;
  color: #f8f9fa;
  cursor: pointer;
}
#lists {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: space-between;
}
.miniLists {
  border: 1px solid #dedfdf;
  height: 50px;
  /* border-radius: 15px; */
  background-color: #fcfefe;
  display: flex;
  justify-content: center;
}
.heading {
  align-items: center;
  justify-items: center;
  background-color: #617d8a;
  color: #dfe5e8;
  font-weight: bold;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>
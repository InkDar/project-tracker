<template>
  <div class="lists">
    <div class="miniLists heading">
      {{ tableName }}
      <button class="dropdown">
        <span class="dropdown" @mouseover="showList = true">. . .</span>
        <ul
          v-show="showList"
          @mouseleave="showList = false"
          class="dropdown-context"
        >
          <li class="dropdown-item">Archive list</li>
          <li class="dropdown-item" @click="removeList()">Remove list</li>
          <li class="dropdown-item" @click="clearList()">Clear List</li>
        </ul>
      </button>
    </div>
    <div class="miniLists" v-for="(item, index) in itemList" :key="index">
      <span class="item">{{ item.name }}</span>
    </div>
    <div class="footer">
      <span @click="showForm = true">+ New item</span>
    </div>
  </div>
  <transition name="modal">
    <Modal v-if="showForm" @close="closeForm" :myLabel="`Item Name`"> </Modal>
  </transition>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },
  props: {
    tableName: {
      required: true,
      type: String,
    },
  },
  setup(props): unknown {
    const store = useStore();
    const showForm = ref(false);
    const showList = ref(false);
    const itemList = computed(() => store.getters.getByTableName(props.tableName));

    const removeList = () => {
      clearList();
      store.dispatch("removeList", props.tableName);
    };

    const clearList = () => {
      store.dispatch("clearList", props.tableName);
    };

    const closeForm = (item: string) => {
      if (item !== "") {
        store.dispatch("addItem", {
          name: item,
          table: props.tableName,
        });
      }
      showForm.value = false;
    };

    return {
      itemList,
      showForm,
      closeForm,
      showList,
      clearList,
      removeList,
    };
  },
};
</script>

<style scoped>
.item {
  padding: 0px 0px 0px 15px;
}
.lists {
  border: 1px solid #e0e4e5;
  border-radius: 15px;
  height: auto;
  max-width: 500px;
  margin: 20px;
}
.miniLists {
  justify-content: start;
  border: 1px solid #dedfdf;
  background-color: #fcfefe;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer {
  justify-content: center;
  border: 1px solid #dedfdf;
  background-color: #fcfefe;
  padding-top: 10px;
  height: 30px;
  display: flex;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
}
.heading {
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #617d8a;
  color: #dfe5e8;
  font-weight: bold;
  height: 50px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.dropdown {
  background-color: #617d8a;
  border: none;
  flex-direction: column;
  float: right;
  writing-mode: vertical-rl;
  position: relative;
  color: #dfe5e8;
  font-weight: 900;
  cursor: pointer;
}
.dropdown-item {
  border: 1px solid #a3b3bb;
}
.dropdown-context {
  width: 100px;
  height: 60px;
  list-style: none;
  background-color: #617d8a;
  position: absolute;
  color: #dfe5e8;
  text-align: initial;
  padding-inline-start: 0px;
}
</style>
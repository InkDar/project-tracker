import { createStore } from 'vuex'

export default createStore({
  state: {
    tableList: ['To Do', 'Doing', 'Done'],
    itemList: [
      {
        name: "Build the feature #1",
        table: "To Do",
      },
      {
        name: "Test the feature #1",
        table: "To Do",
      },
      {
        name: "Commit feature #1 to the repository",
        table: "To Do",
      },
      {
        name: "Deploy the feature #1",
        table: "To Do",
      },
      {
        name: "Esim incha, chi erevum",
        table: "Doing",
      },
      {
        name: "Urish bana, chi erevum",
        table: "Doing",
      },
      {
        name: "Test the app before launching",
        table: "Doing",
      },
      {
        name: "Set up landing page",
        table: "Done",
      },
      {
        name: "Send out email invitations to the subscribers",
        table: "Done",
      }
    ],
  },
  mutations: {
    addTable(state, newTable: string) {
      state.tableList.push(newTable);
    },
    addItem(state, newItem: { name: string, table: string }) {
      state.itemList.push(newItem);
    },
    removeItems(state, tableName: string){
      state.itemList = state.itemList.filter(item => item.table !== tableName);
    },
    removeTable(state, tableName: string){
      state.tableList = state.tableList.filter(table => table !== tableName);
    }
  },
  getters: {
    getByTableName: (state) => (tableName: string) => {
      return state.itemList.filter(item => item.table === tableName);
    },
    getTableNames(state) {
      return state.tableList;
    }
  },
  actions: {
    addTable(context, newTable: string) {
      context.commit('addTable', newTable);
    },
    addItem(context, newItem: { name: string, table: string }) {
      context.commit('addItem', newItem);
    },
    clearList(context, tableName: string){
      context.commit('removeItems', tableName);
    },
    removeList(context, tableName: string){
      context.commit('removeTable', tableName);
    }
  },
  modules: {
  }
})

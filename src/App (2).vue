<template>
  <div class="container">
    <header>
      <div>
        <span id="name1">Kanban Board:</span>
        <span id="name2">PROJECT TRACKER</span>
      </div>
      <div id="buttonsWrapper">
        <button class="buttons">Archived Lists(0)</button>
        <button class="buttons">+ New List</button>
      </div>
    </header>
    <div id="lists">

      <div class="lists">
        <div class="miniLists heading">TO DO
          <button class="dropdown">...
            <ul class="dropdown-context">
            <li>Archive list</li>
            <li>Remove list</li>
            <li>Clear</li>
          </ul>
          </button>
        </div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
      </div>

      <div class="lists">
        <div class="miniLists heading">DOING
          <button class="dropdown">...
            <ul class="dropdown-context">
            <li>Archive list</li>
            <li>Remove list</li>
            <li>Clear</li>
          </ul>
          </button>
        </div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
      </div>

      <div class="lists">
        <div class="miniLists heading">DONE
          <button class="dropdown">...
          <ul class="dropdown-context">
            <li>Archive list</li>
            <li>Remove list</li>
            <li>Clear</li>
          </ul>
          </button>
        </div>
        <div class="miniLists"></div>
        <div class="miniLists"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
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
  margin-left: 120px;
}
#name2 {
  color: #3a515c;
}
#buttonsWrapper {
  display: flex;
  justify-items: flex-end;
  margin-right: 120px;
}
.buttons {
  border-radius: 3px;
  background-color: #7f96a0;
  height: 30px;
  color: #f8f9fa;
  border: 1px solid;
}
#lists {
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.lists {
  border: 1px solid #e0e4e5;
  border-radius: 15px;
  height: 300px;
  width: 280px;
}
.miniLists {
  border: 1px solid #dedfdf;
  height: 50px;
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
  position: relative;
}

.dropdown {
  background-color: #617d8a;
  border: none;
  flex-direction: column;
  float: left;
  position: relative;
  color:  #dfe5e8;
  font-weight: 900;
}

.dropdown-context {
  list-style: none;
  background-color: #617d8a; 
  position: absolute;
  margin: 10px 0 0 0;
  z-index: -2;
  color:#dfe5e8;
  text-align:initial;
}
</style>

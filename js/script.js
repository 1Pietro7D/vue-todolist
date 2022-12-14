const app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        article: "pasta",
        done: true,
      },
      {
        article: "cheese",
        done: false,
      },
      {
        article: "bread",
        done: false,
      },
      {
        article: "meat",
        done: false,
      },
    ],
    something: "",

    archive: [],
  },
  methods: {
    addItem() {
      let newTodo = {
        article: "",
        done: false,
      };

      newTodo.article = this.something;
      this.todos.push(newTodo);
      this.something = "";
    },
    deleteItem(index) {
      console.log(this.todos);
      this.todos.splice(index, 1);
      // COSE STRANE DA QUI IN POI poichè splice in Vue effettua delle trasformazioni
      // this.archive.push(this.todos[index].article);
      // console.log(this.archive);
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    },
  },
});

const app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        article: "pasta",
        justDo: true,
      },
      {
        article: "cheese",
        justDo: false,
      },
      {
        article: "bread",
        justDo: false,
      },
      {
        article: "meat",
        justDo: false,
      },
    ],
    something: "",
    newTodo: {
      article: "",
      justDo: true,
    },
    archive: [],
  },
  methods: {
    addItem() {
      console.log("miao");
      this.newTodo.article = this.something;
      this.todos.push(this.newTodo);
    },
    deleteItem(index) {
      console.log(this.todos);
      this.todos.splice(index, 1);
      // COSE STRANE DA QUI IN POI
      this.archive.push(this.todos[index].article);
      console.log(this.archive);
    },
  },
});

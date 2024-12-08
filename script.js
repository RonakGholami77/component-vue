Vue.component("card", {
  props: ["title", "image"],
  data() {
    return {};
  },
  template: `<div class="card">
        <img :src="image" :alt="title" />
        <h1>{{title}}</h1>
      </div>`,
});

new Vue({
  el: "#app",
  data: {},
});

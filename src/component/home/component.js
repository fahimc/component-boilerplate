export default = new Component({
  name: 'home',
  data: {
   message: 'hello world'
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
      console.log('here');
    },
    unmounted(){
    },
    updated(){
     this.element.querySelector('h1').textContent = this.message;
    }
  }
});
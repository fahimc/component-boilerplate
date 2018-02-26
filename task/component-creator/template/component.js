module.exports = {
  html: '<div data-component="{componentName}"></div>',
  js: 'export default new Component({ name: \'{componentName}\', data: { }, methods: { mounted(){ }, unmounted(){ }, updated(){ } } });',
  style:'[data-component="{componentName}"]{\n}'
};

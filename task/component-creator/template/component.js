module.exports = {
  html: '<div data-component="{componentName}"></div>',
  js: 'export default new Component({\n  name: \'{componentName}\',\n  data: { },\n  methods: {\n    mounted(){ },\n    unmounted(){ },\n    updated(){ }\n  }\n});',
  style:'[data-component="{componentName}"]{\n}'
};

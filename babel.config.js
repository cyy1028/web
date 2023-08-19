module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],



  // 饿了么UI
  plugins: [
    [
      "component",
      // {
      //   "libraryName": "element-ui",
      //   "styleLibraryName": "theme-chalk",
      //   "styleLibraryName": "~./src/theme"
      // }
      {
        "libraryName": "element-ui",
        "styleLibraryName": "~./src/theme"
      }
    ]
  ]
}

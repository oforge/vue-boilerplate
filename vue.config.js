/*
  In this file you have the possibility to alter the webpack behaviour. In our case we want to create special sass files,
  like variables or mixins, that are used globally. Therefore we extended the project with the sass-loader npm module.
  This module lets us load scss files globally before all the other files.
  In this example we load the variables and mixins.
  It is important, that only files that don't generate css should be used here. Otherwise the generated css would be
  injected multiple times.
 */
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        /*
          Important: When we refactor the css files and change the folder structure, we have to keep in mind that we have to
          change the injection here as well.
         */
        prependData: `
          @import "~@/styles/abstracts/_variables.scss";
          @import "~@/styles/abstracts/_mixins.scss";
        `
      }
    }
  }
};

# test

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### Nh???ng l??u ??

- D??ng methods: Khi ch???y 1 h??m trong medthos ????, s??? d???ng nh?? 1 l???i g???i h??m c?? (), khi c?? b???t k??? s??? thay ?????i n??o, vuejs s??? render l???i to??n b??? template,
- compoted: ???????c l??u l???i v?? ch??? ???????c th???c thi khi c?? m???t d??? li???u trong ???? thay ?????i

- watch: {
  input(newValue, oldValue) {
  }
  }

=> Theo d??i s??? thay ?????i c???a 1 tr?????ng n??o ????, khi nh???n th???y c?? s??? thay ?????i s??? render l???i componet

### NH???NG TR?????NG H???P L??M VI???C V???I L???Y D??? LI???U B???NG APOLLO

C??CH 1:
import gql from "graphql-tag";

const queryMedia = gql` query { Page(page: 1) { pageInfo { total currentPage hasNextPage } media { id season type status episodes description genres } } }`;

data() {
return {
query: queryMedia,
};
},

D??ng k???t qu??? ??? tr??n:
<template>

 <div>
    <ApolloQuery :query="query">
      <template slot-scope="{ result: { data, loading, err } }">
        <div v-if="loading">Loading . . .</div>
        <div v-else-if="err">{{ err }}</div>
        <div v-else>
          <h1>{{ data.Page.media }}</h1>
        </div>
      </template>
    </ApolloQuery>
  </div>
 </template>

C??CH 2:

d??ng apollo: {}
apollo: {
Page: {
query: gql``
}
}

=> L??U ?? BI???N ????? H???NG ( PAGE ), c???n xem k???t qu??? ??? ph??a test n?? ph???i tr??? v??? ????ng bi???n

- N???u mu???n ?????i t??n bi???n h???ng D??NG:
  update: (data) => data.Page (B??n trong ?????t bi???n h???ng lu??n)

C??CH 3: T???o h???n file query b??n ngo??i (??u??i js), r???i import v??o ????? d??ng

- C?? th??? d??ng <nuxt-link to="{
    name:'ten_cua_1_file_route',
    params: {key: value},
    query: {key: value}
  }">

- Ki???n th???c v??? props down v?? Event Up, v???n ????ng cho thanh search

### H???c v??? VUEX trong nuxt js

t???o index.js trong store

- D??? li???u t???o trong store c?? th??? d??ng ???????c ??? nhi???u file, k c???n qua props, khi ph??t t??n hi???u thay ?????i t??? b???t k??? component n??o => t???t c??? gi?? tr??? trong c??c component kh??c nh???n d??? li???u t??? store c??ng s??? thay ?????i theo

* muatation: d??ng this.$store.commit('') ????? truy c???p
* actions: d??ng this.$store.dispatch('') ????? truy c???p

### CH?? ??

- file test ??ang b??? loading l???n ?????u ti??n,
- l???n ?????u ??i???n gi?? tr??? ch???y c??ng ch??a ????ng

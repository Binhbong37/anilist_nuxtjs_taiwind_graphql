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

### Những lưu ý

- Dùng methods: Khi chạy 1 hàm trong medthos đó, sử dụng như 1 lời gọi hàm có (), khi có bất kỳ sự thay đổi nào, vuejs sẽ render lại toàn bộ template,
- compoted: Được lưu lại và chỉ được thực thi khi có một dữ liệu trong đó thay đổi

- watch: {
  input(newValue, oldValue) {
  }
  }

=> Theo dõi sự thay đổi của 1 trường nào đó, khi nhận thấy có sự thay đổi sẽ render lại componet

### NHỮNG TRƯỜNG HỢP LÀM VIỆC VỚI LẤY DỮ LIỆU BẰNG APOLLO

CÁCH 1:
import gql from "graphql-tag";

const queryMedia = gql` query { Page(page: 1) { pageInfo { total currentPage hasNextPage } media { id season type status episodes description genres } } }`;

data() {
return {
query: queryMedia,
};
},

Dùng kết quả ở trên:
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

CÁCH 2:

dùng apollo: {}
apollo: {
Page: {
query: gql``
}
}

=> LƯU Ý BIẾN ĐỂ HỨNG ( PAGE ), cần xem kết quả ở phía test nó phải trả về đúng biến

- Nếu muốn đổi tên biến hứng DÙNG:
  update: (data) => data.Page (Bên trong đặt biến hứng luôn)

CÁCH 3: Tạo hẳn file query bên ngoài (đuôi js), rồi import vào để dùng

- Có thể dùng <nuxt-link to="{
    name:'ten_cua_1_file_route',
    params: {key: value},
    query: {key: value}
  }">

- Kiến thức về props down và Event Up, vẫn đúng cho thanh search

### Học về VUEX trong nuxt js

tạo index.js trong store

- Dữ liệu tạo trong store có thể dùng được ở nhiều file, k cần qua props, khi phát tín hiệu thay đổi từ bất kỳ component nào => tất cả giá trị trong các component khác nhận dữ liệu từ store cũng sẽ thay đổi theo

* muatation: dùng this.$store.commit('') để truy cập
* actions: dùng this.$store.dispatch('') để truy cập

### CHÚ Ý

- file test đang bị loading lần đầu tiên,
- lần đầu điền giá trị chạy cũng chưa đúng

# 專案使用 Vue 3 + Typescript + Vite + TailwindCss

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# 專案指令
### 運行專案
```
npm run dev
```
### 產出專案
```
npm run build
```
# 動態切換專案環境機制 
## 新增專案環境 :
目前環境資訊放置於.env檔案內(分為.env.development、.envproduction)
未來若需要添加新環境，請造如下步驟操作 : 
### 1.於.env檔案內添加server baseurl
```
<!-- 環境變量命名規則 -->
VITE_APP_API_BASE_URL_環境

<!-- 例如 : QA環境 -->
VITE_APP_API_BASE_URL_QA
```
### 2.新增環境Enum (src/types/env.ts)
### 3.axios請求攔截時動態切換網址 (src/http.ts)
在switch case 中添加 case即可，如下 : 
```Typescript
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let env = JSON.parse(sessionStorage.getItem('env') as string)
    switch(env){
      case Env.DEV:
        config.baseURL = import.meta.env.VITE_APP_API_BASE_URL_DEV?.toString()
        break;
      case Env.QA:
        config.baseURL = import.meta.env.VITE_APP_API_BASE_URL_QA?.toString()
        break
    }
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

```
## 修改環境
只需要更改.env檔內的網址即可。
# 專案 git flow
## 分支開發流程
### main - dev整合測試OK後merge上版
### dev - 所有功能分支都從dev開出
### feature - 新功能分支 例如 : feature/userLogin
### fix - bug修復分支 ， 例如 : fix/userLogin

# vue 風格指南
## 務必遵守 : 
### 1. v-for 要搭配 key值
```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
### 2. 元件命名-多單詞
```javascript
//錯誤示範
Vue.component('todo', {
  // ...
})

//正確示範
Vue.component('todo-item', {
  // ...
})

```
## 強烈推薦 : 
### 1. 盡可能的元件化 
例如，todoList就可以拆成，todoList.vue、todoItem.vue
### 2. 絕對不要使用縮寫命名
### 3. 元件命名規範 : 
#### (1)單詞的組合應以 較為高層次的抽象概念 作為開頭
```
//錯誤
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue

//正確
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```
#### (2)用The前綴表示 唯一 的元件
通常這種元件只會在某頁面出現一次，且應該不屬於"展示用元件"，所以不應使用prop傳值。
例如 : Header、SideBar、Nav等元件
```
components/
|- TheHeading.vue
|- TheSidebar.vue
```
#### (3)用父元件名稱作為子元件命名前綴
```
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```
### 4. 元件的attributem原則
#### 一行、且須帶引號 (安裝插件Prettire進行格式化即可)
```html
<!-- 錯誤示範 -->
<input type=text>
<MyComponent foo="a" bar="b" baz="c"/>

<!-- 正確示範 -->
<input type="text">
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```
### 5.盡量讓template只做渲染，不做複雜邏輯
```
//錯誤
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}

//正確
{{ normalizedFullName }}
//請寫在computed裡面
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```
### 6. 統一使用縮寫指令 : 
用 : 表示 v-bind:、 <br>用 @ 表示 v-on: <br>用 # 表示 v-slot: <br>
### 7. props的名稱使用
在js中使用 camelCase ； 在HTML中使用 kebab-case
```javascript
props: {
  greetingText: String
}
//在模板中使用
<WelcomeMessage greeting-text="hi"/>
```

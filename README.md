# Nuxt Axios Module

Version: `1.0.0`

This module provides a convenient and flexible interface for sending requests and handling responses, while ensuring a high degree of customization and integration.

## Installation

Connect the module in `nuxt.config.js`

```ts
export default {
  modules: [
    '~/modules/axios/module',
  ],
  
  axios: {
    /* options */
  }
}
```

Alternative option:

```ts
export default {
  modules: [
    [
      '~/modules/axios/module',
      {
          /* options */ 
      }
    ]
  ],
}
```
## Parameters

Parameters passed through `nuxt.config.js`:

```ts
export interface NuxtAxiosModuleOptions {
  enableLogger: boolean
  enableAutoImport: boolean
  configPath: string
}
```

Default parameter values:

```ts
const defaultOptions = {
  enableLogger: true,
  enableAutoImport: true,
  configPath: 'nuxt-axios.config.ts',
}
```

## Config

By default, the configuration file is named `nuxt-axios.config.js` and is located in the root directory of the project.

Passed rules:

```ts
export default useAxiosConfig({
  defaults: {
    /** */
  },
})

```

## Usage

To get an instance, use the `useAxios` function:

```typescript
const axios = useAxios();
```

There are also direct composable methods for requests:

```typescript
import {
  useAxiosGet,
  useAxiosPut,
  useAxiosPost,
  useAxiosHead,
  useAxiosPatch,
  useAxiosDelete,
  useAxiosOptions,
  useAxiosRequest,
  useAxiosPutForm,
  useAxiosPostForm,
  useAxiosPatchForm,
} from '@/modules/nuxt-axios/composables';
```
Example request:

```typescript
try {
  const { data } = await useAxiosGet('/api/example');
} catch (error) {
  console.error(error);
}
```

# AppForm

Generate Form for quasar

Install npm or yarn

```sh
npm i vue-app-form
yarn add vue-app-form
```

## Documentation

In your vue3 applications import component

```vue
<script setup lang="ts">
import { QInput } from 'quasar'
import { z } from 'zod'
import { AppForm, AppFormSchemaField } from 'vue-app-form'

const modelSchema = z.object({
  name: z.string().noempty(),
})

const schema: AppFormSchemaField[] = [
  {
    scope: 'name',
    component: QInput,
    defaultValue: '',
    componentProps: {
      label: 'Namn',
      // component props i.e from quasar
      square: true,
    },
  },
]
</script>

<template>
  <app-form :schema="schema" :model-schema="modelSchema" />
</template>
```

### AppForm

| Prop           |                                  | Default | Required |
| -------------- | -------------------------------- | ------- | -------- |
| `schema`       | See AppFormSchemaField interface |         | Yes      |
| `modelSchema`  | A ZodType Object                 |         | Yes      |
| `colGutter`    | Gutter of columns                | 'sm'    |          |
| `modelValue`   | Bind formData                    |         |          |
| `readonly`     | Make all fields readonly         | false   |          |
| `disable`      | Make all fields disabled         | false   |          |
| `loading`      | Bind loading prop buttons        | false   |          |
| `fieldWrapper` | Wrapper around all fields        | 'div'   |          |

| Event    |                                     |
| -------- | ----------------------------------- |
| `submit` | Returns validated formData if valid |
| `reset`  | Reset formData to defaultValues     |

| Slot      |                               |
| --------- | ----------------------------- |
| `top`     | Top slot for extra content    |
| `bottom`  | Bottom slot for extra content |
| `[scope]` | Overwrite schema component    |

### AppFormSchemaField interface

| Prop             |                                                                    | Default     | Required |
| ---------------- | ------------------------------------------------------------------ | ----------- | -------- |
| `scope`          | Object path i.e 'obj.value'                                        |             | Yes      |
| `cols`           | Span number of cols (max 12)                                       | 'cols-auto' |          |
| `component`      | Field component                                                    |             | Yes      |
| `column`         | Column position in row                                             | 1           |          |
| `transform`      | Transform value function before setting to modelValue              |             |          |
| `defaultValue`   | Default value of field if not specified in AppForm modelValue prop |             | Yes      |
| `componentProps` | Props to add to component                                          |             | Yes      |

### AppSelect

Easy to use quasar q-select with filtering, add new value, checkbox list.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AppSelect } from 'vue-app-form'

const model = ref([])
const options = [
   {
      value: 1,
      label: 'Test',
      // optional
      caption: 'Caption'
      disable: true
   },
   {
      value: 2,
      label: 'Test 2',
   }
]
</script>

<template>
  <app-select v-model="model" multiple :options="options" new-value />
</template>
```

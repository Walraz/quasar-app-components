# AppForm

Generate Form for quasar

Install npm or yarn

```sh
npm i quasar-app-components
yarn add quasar-app-components
```

## Documentation

In your vue3 applications import component

```vue
<script setup lang="ts">
import { QInput } from 'quasar'
import { z } from 'zod'
import { AppForm, AppFormSchemaField } from 'quasar-app-components'

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

| Props               |                                   |
| ------------------- | --------------------------------- |
| `exactFilterMatch`  | Filter exact                      |
| `transformNewValue` | Transform new-value label & value |

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AppSelect } from 'quasar-app-components'

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

### AppModal

Uses quasar dialog plugin.

Open Modal

```ts
import { Dialog } from 'quasar'
import { useAppModal } from 'quasar-app-components'

useAppModal(Dialog, {
  // Qdialog props
  persistent: true,
  // Modal title
  title: 'Edit example',
  // Fetch data when open modal, and are provided when injecting modal in slot component
  dependencies: fetchDataArray,
  // Modal slot component content
  slot: {
    component: ExampleContentComponent,
    componentProps: {
      // Slot component props
      exampleProp: true,
    },
  },
})
```

```ts
// slot component
import { appModalInjectionKey } from 'quasar-app-components'

const props = defineProps<{ exampleProp: boolean }>()

const modal = inject(appModalInjectionKey) as AppModalProvider

// injected props
modal.pending // is submit pending
// data fetched in array from dependencies
modal.dependencyData
// onSubmit promise fn callback (sets pending prop and closes modal by itself)
modal.onSubmit(() => {
  return new Promise()
})
// close dialog (optional payload)
modal.onDialogOK()
// close dialog
modal.onDialogCancel()
```

### AppList & AppListItem

Recursive list. Open nested items in new list menu

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { QMenu } from 'quasar'
import { AppList, AppListItemProps } from 'quasar-app-components'

const listProps: QListProps = {
  dense: false,
}

const items = ref<AppListItemProps[]>([
  {
    // AppListitem props
    label: 'Settings',
    icon: 'mdi-an-icon',
    color: 'primary',
    visible: true,
    componentProps: {
      // QItem props
      disable: false,
    },
    items: [
      {
        label: 'More settings',
        clickFn: () => {
          // example open useAppModal()
        },
      },
    ],
  },
])
</script>

<template>
  <q-btn icon="mdi-dots-vertical">
    <q-menu square>
      <AppList :component="QMenu" :items="items" :props="listProps" />
    </q-menu>
  </q-btn>
  <!-- or -->
  <q-btn-dropdown label="Åtgärder">
    <AppList :items="items" />
  </q-btn-dropdown>
</template>
```

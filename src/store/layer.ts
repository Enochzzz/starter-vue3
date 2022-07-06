import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { Common, Model } from '~/types'

export const useLayerStore = defineStore('layer', () => {
  /**
   * Current state of the Layer.
   */
  const modelLayer: LayerStore = ref({})
  const modelLayerLoaded = ref(false)
  const modelList: Ref<Model[]> = ref([])
  const modelLabelList: Ref<Common[]> = ref([])

  /**
   * Save Layer instance
   *
   * @param Layer - New layer instance to set
   */
  function setModelLayer(Layer: Layer) {
    modelLayer.value = Layer
    modelLayerLoaded.value = !!Layer
  }

  function setModelList(list: Model[], labelList: Common[]) {
    modelList.value = list
    modelLabelList.value = labelList
  }

  return {
    modelLayer,
    modelLayerLoaded,
    setModelLayer,
    setModelList,
    modelList,
    modelLabelList,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))

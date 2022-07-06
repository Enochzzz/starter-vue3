import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMapStore = defineStore('map', () => {
  /**
   * Current state of the map.
   */
  const map: MapStore = ref({})
  const mapLoaded = ref(false)

  /**
   * Save map instance and change map load status
   *
   * @param map - New map instance to set
   */
  function setMap(Map: MapLK) {
    map.value = Map
    mapLoaded.value = !!Map
  }

  return {
    map,
    mapLoaded,
    setMap,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))

export const state = () => ({
  theme: ['0, 0, 0', '255, 255, 255'],
  title: '/'
})

export const mutations = {
  setTheme: (state, value) => state.theme = value,
  setTitle: (state, value) => state.title = value
}

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

export const getPhoto = importAll(
  require.context('../static/photos', false, /\.(png|jpe?g|svg)$/)
)

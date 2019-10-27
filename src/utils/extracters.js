export const extractImages = (_embedded) => {
  const medias = _embedded['wp:featuredmedia']
  return medias.map((value) => {
    return {
      altText: value.alt_text,
      source: value.source_url
    }
  })
}

export const extractImage = (_embedded) => {
  const medias = extractImages(_embedded)
  if (medias.length > 0) return medias[0]
  return null
}

export const extractCategories = (_embedded) => {
  const medias = _embedded['wp:term'].flat(1)
  return medias.map((value) => {
    if (value.taxonomy === 'category') {
      return {
        id: value.id,
        name: value.name,
        slug: value.slug
      }
    }
    return null
  })
}

export const extractCategory = (_embedded) => {
  const medias = extractCategories(_embedded)
  if (medias.length > 0) return medias[0]
  return []
}

export const extractTags = (_embedded) => {
  const medias = _embedded['wp:term']
  return medias.map((value) => {
    if (value.taxonomy === 'post_tag') {
      return {
        id: value.id,
        name: value.name,
        slug: value.slug
      }
    }
    return null
  })
}

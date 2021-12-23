const urlHelper = (url) => {
  return url ? url.replaceAll(/[ &\/\\#,+()@%^!$~%.'":*?<>{}]/g, '-').toLowerCase() : ''
}

export {
  urlHelper
}

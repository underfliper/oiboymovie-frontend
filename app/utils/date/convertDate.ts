export const getShortDate = (date_string: string) => {
  const date = new Date(date_string)
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()

  return (
    year +
    '-' +
    (month.length != 2 ? '0' + month : month) +
    '-' +
    (day.length != 2 ? '0' + day : day)
  )
}

export const getFullDate = (date_string: string) => {
  const date = new Date(date_string)

  return `${getShortDate(date_string)}, ${date.toLocaleTimeString()}`
}

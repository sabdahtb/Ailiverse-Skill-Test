const getInitials = (fullName: string) => {
  const names = fullName.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[1].substring(0, 1).toUpperCase()
  } else {
    initials = names[0].substring(0, 2).toUpperCase()
  }

  return initials
}

export default getInitials

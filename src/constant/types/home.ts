export type IprofileCard = {
  fullName: string
  proMember: boolean
  totalProject: number
}

export type IRecentProjects = {
  isImageProject: boolean
  title: string
  description: string
}

export type IRandomUser = {
  name: string
  background: string
}

export type IStep = {
  idx: number
  title: string
  description: string
}

export type IDropdownList = {
  name: string
  placeholder: string
  lists: string[]
}

export type IProjects = {
  title: string
  type: string[]
  description: string
  isImageProject: boolean
  star: number
  percentage: number
  train: number
  participant: number
  updatedAt: string
  isDraft: boolean
  user: string
}

export type IRecentActivity = {
  updateAt: string
  description: string
}

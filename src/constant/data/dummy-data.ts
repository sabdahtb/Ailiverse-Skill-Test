import {
  IStep,
  IProjects,
  IRandomUser,
  IprofileCard,
  IDropdownList,
  IRecentActivity,
  IRecentProjects,
} from '../types'

export const profileUserCard: IprofileCard = {
  fullName: 'Burhan UI Tayyab',
  proMember: true,
  totalProject: 25,
}

export const recentProjects: IRecentProjects[] = [
  {
    isImageProject: true,
    title: 'Project Name 010',
    description: 'You added 5 images',
  },
  {
    isImageProject: false,
    title: 'Project Name 013',
    description: 'You retrained the models twice and gained 12% accuracy',
  },
  {
    isImageProject: false,
    title: 'Project Name 013',
    description: 'You retrained the models twice and gained 12% accuracy',
  },
  {
    isImageProject: false,
    title: 'Project Name 013',
    description: 'You retrained the models twice and gained 12% accuracy',
  },
]

export const randomUser: IRandomUser[] = [
  { name: 'fahwan lala', background: 'bg-yellow-700' },
  { name: 'ackerman bae', background: 'bg-red-700' },
  { name: 'coll deo', background: 'bg-blue-700' },
  { name: 'frank edward', background: 'bg-gray-500' },
  { name: 'gord halland', background: 'bg-gray-500' },
  { name: 'intan juli', background: 'bg-gray-500' },
  { name: 'kolan lori', background: 'bg-gray-500' },
]

export const developMentSteps: IStep[] = [
  { idx: 1, title: 'Describe', description: 'State your Use Case' },
  { idx: 2, title: 'Upload', description: 'Add and label your dataset' },
  { idx: 3, title: 'Train', description: 'Train your AI model' },
  { idx: 4, title: 'Infer', description: 'Test your AI model' },
]

export const dropdownLists: IDropdownList[] = [
  { name: 'type', placeholder: 'Type', lists: ['Type 1', 'Type 2', 'Type 3'] },
  { name: 'model', placeholder: 'Model', lists: ['Model 1', 'Model 2', 'Model 3'] },
  { name: 'sort', placeholder: 'Sort', lists: ['Type', 'Model'] },
]

export const allProjects: IProjects[] = [
  {
    title: 'Project 001',
    type: ['Object Detection'],
    description: 'I  want to detect workers wearing helmet, goggles and safety jacket',
    isImageProject: true,
    isDraft: false,
    participant: 13,
    percentage: 90,
    star: 1,
    train: 1,
    updatedAt: 'yesterday',
    user: 'Burhan UI Tayyab',
  },
  {
    title: 'Project 002',
    type: ['Model 1', 'Model 2'],
    description: 'I  want to detect workers wearing helmet, goggles and safety jacket',
    isImageProject: false,
    isDraft: true,
    participant: 13,
    percentage: 90,
    star: 1,
    train: 1,
    updatedAt: 'yesterday',
    user: 'Burhan UI Tayyab',
  },
  {
    title: 'Project 001',
    type: ['Object Detection'],
    description: 'I  want to detect workers wearing helmet, goggles and safety jacket',
    isImageProject: true,
    isDraft: false,
    participant: 13,
    percentage: 99,
    star: 1,
    train: 1,
    updatedAt: 'yesterday',
    user: 'Burhan UI Tayyab',
  },
]

export const recentActivities: IRecentActivity[] = [
  { updateAt: 'Yesterday', description: 'User A Added you to Project X' },
  { updateAt: '2 days ago', description: 'User B retrained project Y' },
  { updateAt: '3 days ago', description: 'User B retrained project Y' },
  { updateAt: '3 days ago', description: 'User B retrained project Y' },
  { updateAt: '3 days ago', description: 'User B retrained project Y' },
]

import { MenuListProps } from '@mui/material'
import React from 'react'
import StyledMenuList from './styles'

export interface IMenuList extends MenuListProps {}

const MenuList: React.FC<IMenuList> = (props) => {
  return <StyledMenuList {...(props ?? {})} />
}

export default MenuList

import styled from '@emotion/styled'
import { AppBar } from '@mui/material'

export const AppBarStyle = styled(AppBar)`
  height: 90px;
  margin-bottom: 16px;
`
export const MenuBar = styled.ul`
  display: flex;
  list-style: none;
  background: #fff;
  height: 50px;
  border-radius: 50px 50px 50px 50px;
  overflow: hidden;
`
export const MenuBarItem = styled.li`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-item: center;
`

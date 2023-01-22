import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import { Typography } from '@mui/material'

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

export const ProfileBox = styled.div`
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: rgba(235, 224, 213, 0.5);
  cursor: pointer;
`

export const LoginText = styled(Typography)`
  position: absolute;
  color: black;
  background: #fff;
  border-radius: 50px;
  padding: 0px 6px;
  line-height: 16px;
`

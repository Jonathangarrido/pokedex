import React from 'react'

import {
  Wrapper,
  Top,
  Bottom,
  Center,
  Button
} from './style'

export const Loading = () => {
  return (
    <Wrapper>
      <Top>
        <Center/>
        <Button/>
      </Top>
      <Bottom>
        <Center/>
        <Button/>
      </Bottom>
    </Wrapper>
  )
}
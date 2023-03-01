import styled from 'styled-components'

export const block = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const list = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const item = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const link = styled.a`
  width: 100%;
  height: 100%;
`

export const img = styled.img`
  width: 100%;
  height: auto;
`

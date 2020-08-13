import React from 'react'
import * as S from './styles'
import { ImageProps } from 'types/api'
import { getImageUrl } from '../../utils/getImageUrl'

const Logo = ({ alternativeText, url }: ImageProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo

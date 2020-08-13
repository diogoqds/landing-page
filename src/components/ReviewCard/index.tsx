import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import * as S from './styles'
import { ImageProps } from 'types/api'
import { getImageUrl } from '../../utils/getImageUrl'

type Props = {
  id: number
  name: string
  photo: ImageProps
  text: string
}

const ReviewCard: React.FC<Props> = ({ id, name, photo, text }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={photo?.url ? getImageUrl(photo.url) : '/img/user.jpeg'}
          loading="lazy"
          alt={photo?.alternativeText}
        />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard

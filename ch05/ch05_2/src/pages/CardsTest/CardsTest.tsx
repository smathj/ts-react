import {ICard} from '../../data'
import {FC} from 'react'
import {Icon} from '../../theme/daisyui'
import {Avatar, Div} from '../../components'

export type UserCardProps = {
  card: ICard
  onRemove?: () => void
}

const Card: FC<UserCardProps> = ({card, onRemove}) => {
  const {image, writer} = card
  const {avatar, name, jobTitle} = writer

  return (
    <Div className="m-2 overflow-hidden border shadow-lg rounded-xl" width="10rem">
      <Div src={image} className="relative h-20">
        <Icon
          name="-"
          className="absolute right-1 btn-primary btn-xs"
          onClick={onRemove}
        />
      </Div>
      <Div className="flex flex-col p-2">
        <Div minHeight="4rem" height="4rem" maxHeight="4rem">
          <Div className="flex flex-row items-center">
            <Avatar src={avatar} size="2rem" />
            <Div className="ml-2">
              <p className="text-xs font-bold">{name}</p>
              <p className="text-xs text-gray-500">{jobTitle}</p>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Card

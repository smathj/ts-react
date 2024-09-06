import * as D from '../../data'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/AppState'
import * as C from '../../store/cards'
import {Title} from '../../components'
import {useCallback, useMemo} from 'react'
import Card from './CardsTest'
import {Icon} from '../../theme/daisyui'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 100), '', '', '', '')

export default function CardTest() {
  const dispatch = useDispatch()

  // ({cards}) => cards 의 'cards' 가 C.State 타입이라는 뜻
  const cards = useSelector<AppState, C.State>(({cards}) => cards)

  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])

  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )

  const children = useMemo(
    () =>
      cards.map(card => (
        <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )

  return (
    <section className="mt-4">
      <Title>CardTest</Title>
      <div className="flex justify-center mt-4">
        <Icon name="+" className="btn=primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}

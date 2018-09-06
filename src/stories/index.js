import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from '../components/Button'
import EditCard from '../components/EditCard'
import GameScreen from '../components/GameScreen'
import StartScreen from '../components/StartScreen'
import PlayerInput from '../components/PlayerInput'
import PlayerHeader from '../components/PlayerHeader'
import RoundsBar from '../components/RoundsBar'
import SummaryCard from '../components/SummaryCard'
import SummaryScreen from '../components/SummaryScreen'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import PointButtonBar from '../components/PointButtonBar'
import App from '../components/App'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button
      disabled={boolean('Disabled', false)}
      text={text('Label', 'Hello Storybook')}
      onClick={action('clicked')}
    />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
storiesOf('EditCard', module)
  .addDecorator(withKnobs)
  .add('with no points', () => (
    <EditCard
      title={text('Title', 'Some text')}
      score={number('Score', 0, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with many points', () => (
    <EditCard
      title="Some title"
      score={99999999}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with extra long title', () => (
    <EditCard
      title="Some suuuuuuuuuuuuuuper looooooong title"
      score={21}
      onUpdate={action('onUpdate')}
    />
  ))
storiesOf('GameScreen', module)
  .add('single user', () => (
    <GameScreen
      players={[{ name: 'Player', score: 4 }]}
      key={1}
      title="This is a title, it is a great title, i love this title"
      onUpdate={action('onUpdate')}
      onClick={action('onClick')}
    />
  ))
  .add('multiple users', () => (
    <GameScreen
      players={[{ name: 'Player1', score: 4 }, { name: 'Player2', score: 8 }]}
      title="This is a title, it is a great title, i love this title"
      onUpdate={action('onUpdate')}
      onClick={action('onClick')}
    />
  ))
storiesOf('StartScreen', module)
  .add('no players added', () => (
    <StartScreen onSubmit={action('onSubmit')} players={[]} />
  ))
  .add('two players added', () => (
    <StartScreen
      onSubmit={action('onSubmit')}
      players={[{ name: 'Player1' }, { name: 'Player2' }]}
    />
  ))
storiesOf('PlayerInput', module).add('wow, an input for players', () => (
  <PlayerInput
    onChange={action('onChange')}
    onKeyUp={action('onKeyUp')}
    placeholder="Player Name"
    value="you are being valued"
  />
))
storiesOf('PointButtonBar', module).add(
  'make that high score even higher',
  () => <PointButtonBar onClick={action('onClick')} />
)
storiesOf('App', module).add('where it all comes together', () => <App />)
storiesOf('PlayerHeader', module).add('PlayerHeader', () => (
  <PlayerHeader title="Player 1" score={30} />
))
storiesOf('RoundsBar', module).add('RoundsBar', () => (
  <RoundsBar state={{ scores: [0, 30, 24] }} />
))

storiesOf('SummaryCard', module).add('SummaryCard', () => (
  <SummaryCard title="Player 1" score={3} players={[{ score: [0, 30, 24] }]} />
))
storiesOf('SummaryScreen', module).add('SummaryScreen', () => (
  <SummaryScreen
    players={[
      { title: 'Player 1', score: 43 },
      { title: 'Player 2', score: 6636 },
      { title: 'Player 3', score: 2 },
    ]}
    rounds={[0, 30, 24]}
  />
))

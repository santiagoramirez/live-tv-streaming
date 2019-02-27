export const WATCH = 'WATCH/WATCH'
export const PAUSE = 'WATCH/PAUSE'
export const PLAY = 'WATCH/PLAY'

export const watch = (data) => ({
  type: WATCH,
  data
})

export const pause = () => ({
  type: PAUSE
})

export const play = () => ({
  type: PLAY
})

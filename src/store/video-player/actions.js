export const GUIDE_SHOW = 'VIDEO_PLAYER/GUIDE_SHOW'
export const GUIDE_HIDE = 'VIDEO_PLAYER/GUIDE_HIDE'
export const PLAY = 'VIDEO_PLAYER/PLAY'
export const PAUSE = 'VIDEO_PLAYER/PAUSE'

export const showGuide = () => ({
  type: GUIDE_SHOW
})

export const hideGuide = () => ({
  type: GUIDE_HIDE
})

export const play = () => ({
  type: PLAY
})

export const pause = () => ({
  type: PAUSE
})

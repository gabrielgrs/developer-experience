const emojis = [
  '(*ゝω・)ﾉ',
  '(･ω<)☆',
  '(ﾉ･_-)☆',
  '(∩｀-´)⊃━炎炎炎',
  'y（^ヮ^）y',
  '（●＞ω＜●）',
  '(o^^o)',
]

export const getRandomEmoji = () => {
  const randomNumber = Math.floor(Math.random() * emojis.length - 1) + 1
  return emojis[randomNumber]
}

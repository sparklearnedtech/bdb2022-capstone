export default function handler (req, res) {
  const tokenId = req.query.tokenId
  const image_url =
    'https://raw.githubusercontent.com/Pseudoman21/bdb2023-capstone-app/main/public/assets/images/'

  res.status(200).json({
    name: 'Todo List Reward' + tokenId,
    description: 'TLR is an NFT reward for finishing your todo list',
    image: image_url + tokenId + '.png'
  })
}

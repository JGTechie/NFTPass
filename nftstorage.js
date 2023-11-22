import { NFTStorage, File } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUzNWQyZjY4Njg0OTVGYTA1YTNiN2JjNWNEY2NhRWJENTQ3OTU1NEUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMDY2OTIyNTU5NSwibmFtZSI6IkxvbmRvblR1YmUifQ.SsDDzH_KFyvLPTiO6Q9KDdAPGXt8YP4f2BKdiRwDRPo' })

async function main() {
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: new File(
      [
        /* data */
      ],
      'pinpie.jpg',
      { type: 'image/jpg' }
    ),
  })
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

main()


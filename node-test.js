const ipfsClient = require('ipfs-http-client');
const projectId = '2It3ivF0SkbP0hKovmJ8cAPxZVD';
const projectSecret = 'cdf09ed7c0e5c59c1cbff93d2db8d054';
async function main() {
//curl -X POST -F file=@test.png -u "2It3ivF0SkbP0hKovmJ8cAPxZVD:cdf09ed7c0e5c59c1cbff93d2db8d054" "https://ipfs.infura.io:5001/api/v0/add" --insecure -A "curl"
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

 const client = await ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth
    }
  })

try {
    const file = await client.add('test.png')
    console.log(file)

    } catch (error) {
      console.log(error)
    }

    // client.pin.add('QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn').then((res) => {
    //     console.log(res);
    // });
}
main();

const ipfsClient = require('ipfs-http-client');
const projectId = 'xxxxxxxxxx';
const projectSecret = 'xxxxxxxx';
async function main() {
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

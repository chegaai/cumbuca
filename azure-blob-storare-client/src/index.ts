import { ObjectId } from 'bson'

import {
  Aborter,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  SharedKeyCredential,
  StorageURL,
} from '@azure/storage-blob'

export abstract class AzureBlobStorageClient {
  private containerURL: ContainerURL
  private serviceURL: ServiceURL
  private  aborter: Aborter

  constructor (accountAccessKey:string, accountName: string, containerName:string, timeOut:number) {
    this.aborter = Aborter.timeout(timeOut);
    const credentials = new SharedKeyCredential(accountName, accountAccessKey);
    const pipeline = StorageURL.newPipeline(credentials);
    this.serviceURL = new ServiceURL(`https://${accountName}.blob.core.windows.net`, pipeline);
    this.containerURL = ContainerURL.fromServiceURL(this.serviceURL, containerName);
  }

  async uploadBase64(base64:string) {
    const fileName =`${new ObjectId().toHexString()}`
    const blockBlobURL = BlockBlobURL.fromContainerURL(this.containerURL, fileName);

    await blockBlobURL.upload(this.aborter, base64, base64.length);
    return blockBlobURL.url
  }
}

import { AxiosInstance } from 'axios'
import { MongoClient, Db } from 'mongodb'

export type GlobalContext = {
  http: AxiosInstance,
  token: string,
  url: string,
  mongodb: {
    uri: string,
    dbName: string,
    connection: MongoClient,
    db: Db
  },
  userId: string,
  rsvpEmail: string,
  groupId: string,
  eventId: string
}

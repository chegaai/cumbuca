import axios from 'axios'
import { URL } from 'url'
import Listr from 'listr'
import { MongoClient } from 'mongodb'
import { GlobalContext } from '../../types/GlobalContext'

const config = () => new Listr<GlobalContext>([
  {
    title: 'API URL',
    task: (ctx, task) => {
      const url = process.env.EXTERNAL_API_URL
      if (!url) throw new Error('No EXTERNAL_API_URL env')
      new URL(url)
      task.title = `API URL: ${url}`

      const http = axios.create({
        baseURL: process.env.EXTERNAL_API_URL
      })

      ctx.url = url
      ctx.http = http
    }
  },
  {
    title: 'MongoDB',
    task: () => new Listr<GlobalContext>([
      {
        title: 'Uri',
        task: (ctx, task) => {
          const uri = process.env.DATABASE_MONGODB_URI
          if (!uri) throw new Error('No DATABASE_MONGODB_URI env')
          task.title = `Uri: '${uri}'`
          ctx.mongodb.uri = uri
        }
      },
      {
        title: 'DB Name',
        task: (ctx, task) => {
          const dbName = process.env.DATABASE_MONGODB_DBNAME
          if (!dbName) throw new Error('No DATABASE_MONGODB_DBNAME env')
          task.title = `DB Name: '${dbName}'`
          ctx.mongodb.dbName = dbName
        }
      },
      {
        title: 'Connection',
        task: async (ctx) => {
          ctx.mongodb.connection = await MongoClient.connect(ctx.mongodb.uri, { useUnifiedTopology: true })
          ctx.mongodb.db = await ctx.mongodb.connection.db(ctx.mongodb.dbName)
        }
      }
    ])
  }
])

export default config

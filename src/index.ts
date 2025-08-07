import { Hono } from 'hono'
import {serve} from "@hono/node-server" 
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import {cors} from 'hono/cors'
import { logger } from 'hono/logger'

dotenv.config()

const app = new Hono()

app.use('*',cors())
app.use(logger())
app.use("*", async (c, next) => {
  cors({
    origin: '*',
    allowMethods : ["GET", "POST", "PUT", "DELETE"],
  })
})



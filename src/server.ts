import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import cors from 'cors';

import { DB_URL, PORT } from './config/config';
import connectDB from './config/connection';

class AppServer extends Server {
  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

connectDB(DB_URL);
const server = new AppServer();
server.start(PORT);

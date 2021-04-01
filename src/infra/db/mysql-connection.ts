import mysql from 'mysql'
import { DbConnection, FetchOptions } from '@/adapters/contracts'

export class MysqlConnection implements DbConnection {
  private readonly connection

  constructor(
    private readonly host: string,
    private readonly user: string,
    private readonly password: string,
    private readonly database: string
  ) {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
      timezone: 'America/Sao_Paulo'
    })
  }

  async connect(): Promise<boolean> {
    return this.connection.connect((err) => {
      if (err) {
        throw err
      }

      return true
    })
  }

  async fetchAll(tableName: string, options: FetchOptions | undefined): Promise<object[]> {
    return []
  }

  async fetchOne(tableName: string, options: FetchOptions | undefined): Promise<object> {
    return {}
  }

  async insert(tableName: string, values: object): Promise<number> {
    return 10000
  }

  async update(tableName: string, values: object, conditions: object | undefined): Promise<object> {
    return values
  }

  async delete(tableName: string, conditions: object | undefined): Promise<boolean> {
    return true
  }

  async disconnect(): Promise<boolean> {
    return this.connection.end((err) => {
      if (err) {
        throw err
      }

      return true
    })
  }
}

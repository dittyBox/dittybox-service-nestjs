import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string | undefined): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
      return{
        type: 'mssql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [
          join(__dirname, 'src/database/entities/**/*.entity.{js, ts}'),
          join(__dirname, 'dist/database/entities/**/*.entity.js'),
        ],
        options: {
          encrypt: false,
        },
        synchronize: true,
        logging: true,
      } as TypeOrmModuleOptions
  }
}
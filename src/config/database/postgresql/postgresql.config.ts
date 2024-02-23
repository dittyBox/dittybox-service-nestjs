import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string | undefined): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
      return{
        type: 'postgres',
        //url: '',  // TODO: ex) postgresql://username:password@hostname:port/database
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [
          join(__dirname, 'src/database/entities/**/*.entity.{js, ts}'),
          join(__dirname, 'dist/database/entities/**/*.entity.js'),
        ],
        extra: {
          max: 100
        },
        synchronize: true,
        dropSchema: false, // TODO: 애플리케이션 실행시 기존 스키마 삭제 여부
        logging: true, // TODO: 데이터베이스 쿼리 로깅 여부
        keepConnectionAlive: true, // TODO: 애플리케이션 재시작 시 연결 유지
      } as TypeOrmModuleOptions
  }
}
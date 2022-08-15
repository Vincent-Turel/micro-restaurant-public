import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Table, TableSchema } from './schemas/table.schema';

import { TablesController } from './controllers/tables.controller';
import { TablesService } from './services/tables.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }])],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}

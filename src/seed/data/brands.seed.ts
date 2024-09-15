import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
   {
       id: uuid(),
       name: 'Volvo',
       cretedAt: new Date().getTime(),
   },
   {
       id: uuid(),
       name: 'Toyota',
       cretedAt: new Date().getTime(),
   },
   {
       id: uuid(),
       name: 'Honda',
       cretedAt: new Date().getTime(),
   },
   {
       id: uuid(),
       name: 'Jeep',
       cretedAt: new Date().getTime(),
   },
   {
       id: uuid(),
       name: 'Tesla',
       cretedAt: new Date().getTime(),
   },
]
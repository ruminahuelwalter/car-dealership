import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    
    private cars: Car[]= [
        {
            id: uuid(),
            brand:'Toyota',
            model:'Corolla'
        },
        {
            id: uuid(),
            brand:'Nissan',
            model:'Frontier'
        },
        {
            id: uuid(),
            brand:'Mitsubishi',
            model:'Lancer'
        },
    ]

    findAll() {
        return this.cars
    }
    
    findOneById( id:string ) {
        
        const car = this.cars.find( car => car.id === id);
        if ( !car ){
            throw new NotFoundException(`Car with id ${ id } not found`);
        }

        return car;
    }

    create( createCarDto: CreateCarDto) {
        
        const car: Car = {
            id: uuid(),
            ...createCarDto // spread
            // brand: createCarDto.brand,
            // model: createCarDto.model,
        }
        this.cars.push( car );
       
        return car;
    }
}

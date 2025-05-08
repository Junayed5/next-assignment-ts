## What are some differences between interfaces and types in TypeScript?

There are some differences between the interface and types in TypeScript. Both interface and type can be used to define the shape of objects, but there are several key differences and use cases where one might be preferred over the other

# type 

1. It can support conditional and map types also.

2. It Ideal for use with implements in class declarations.

3. It define complex type composition.

4. multiple interfaces with the same name are merged.


# interface

1. It doesn't support conditional and map type.

2. interface also work and more idiomatic to implement.

3. It defining object shapes.

4. multiple types with the same name cause an error.

## Provide an example of using union and intersection types in TypeScript.

Here is an example of using union and intersection type in TypeScript:

#### Union Type

type Car = {
    brand : string;
    fourWheel: boolean;
}

type Bike = {
    brand: string;
    twoWheel : boolean;
}

type ChoiceType = Car | Bike;

it means choice is yours. You can Chose Car or Bike

#### Intersection Type

type CanFly = {
  fly: () => void;
};

type CanSwim = {
  swim: () => void;
};

type FlyingFish = CanFly & CanSwim;

it means two type are also use;
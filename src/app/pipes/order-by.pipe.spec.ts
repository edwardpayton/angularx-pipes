import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {

  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  const users: Array<any> = [
    {id:1, gender:'m', first:'John', last:'Smith', status:'active'},
    {id:2, gender:'f', first:'Kelly', last:'Ruth', status:'active'},
    {id:3, gender:'m', first:'Jeff', last:'Stevenson', status:'active'},
    {id:4, gender:'f', first:'Jennifer', last:'Smith', status:'inactive'}
  ];

  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return users in alphabetical order by first name', () => {
    console.log('al', pipe.transform(users,'+first'))
    expect(pipe.transform(users,'+first')).toEqual([ users[2],users[3],users[0],users[1]]);
  })

});

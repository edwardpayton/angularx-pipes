import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {

  let pipe: FilterByPipe;

  const users: Array<any> = [
    {id:1, gender:'m', first:'John', last:'Smith', status:'active'},
    {id:2, gender:'f', first:'Kelly', last:'Ruth', status:'active'},
    {id:3, gender:'m', first:'Jeff', last:'Stevenson', status:'active'},
    {id:4, gender:'f', first:'Jennifer', last:'Smith', status:'inactive'}
  ];

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return one user by name', () => {
    expect(pipe.transform(users, 'first', 'John')).toEqual([users[0]]);
  })

  it('should filter multiple users by last name', () => {
    expect(pipe.transform(users, 'last', 'Smith')).toEqual([users[0], users[3]]);
  })
});
